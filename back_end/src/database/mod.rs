pub mod models;
use crate::database::models::*;

use rocket_db_pools::sqlx::Row;
use rocket_db_pools::Connection;
use rocket_db_pools::{sqlx, Database};

use rocket::http::Status;
use rocket::serde::json::Json;

#[derive(Database)]
#[database("sqlite_userdata")]
pub struct UserDatabase(sqlx::SqlitePool);

#[derive(Responder)]
#[response(status = 200, content_type = "json")]
pub struct ValidContract {
    contract: Json<Contract>,
}

#[derive(Responder)]
#[response(status = 200, content_type = "json")]
pub struct ValidContracts {
    contracts: Json<Vec<Contract>>,
}

#[derive(Responder)]
#[response(status = 404, content_type = "text")]
pub struct ContractNotFound {
    message: String,
}

impl Contract {
    pub async fn create(
        mut db: Connection<UserDatabase>,
        create_contract: CreateContract,
    ) -> Status {
        let result = sqlx::query("INSERT INTO contracts(fromlocation, tolocation, cargoinformation, fromuser) VALUES(?, ?, ?, ?)")
                        .bind(create_contract.from_location)
                        .bind(create_contract.to_location)
                        .bind(create_contract.cargo_information)
                        .bind(create_contract.from_user)
                        .execute(&mut *db).await;
        match result {
            Ok(_) => Status::Created,
            Err(_) => Status::BadRequest,
        }
    }

    pub async fn get_all(
        mut db: Connection<UserDatabase>,
    ) -> Result<ValidContracts, ContractNotFound> {
        let results = sqlx::query("SELECT * FROM contracts;")
            .fetch_all(&mut *db)
            .await;
        match results {
            Ok(rows) => {
                let contracts = rows
                    .into_iter()
                    .map(|row| {
                        Contract::new(
                            row.try_get(0).expect("Could not parse ID"),
                            row.try_get(1).expect("Could not parse from_location"),
                            row.try_get(2).expect("Could not parse to_location"),
                            row.try_get(3).expect("Could not parse cargo_information"),
                            row.try_get(4).expect("Could not parse from_user"),
                            row.try_get(5).expect("Could not parse for_user"),
                            row.try_get(6).expect("Could not parse done"),
                        )
                    })
                    .collect();
                Ok(ValidContracts {
                    contracts: Json(contracts),
                })
            }
            Err(_) => Err(ContractNotFound {
                message: "No Contracts could be found!".to_string(),
            }),
        }
    }

    pub async fn get_by_id(
        mut db: Connection<UserDatabase>,
        id: i32,
    ) -> Result<ValidContract, ContractNotFound> {
        let result = sqlx::query("SELECT * FROM contracts WHERE id=?")
            .bind(id)
            .fetch_one(&mut *db)
            .await;
        match result {
            Ok(row) => {
                let contract = Contract::new(
                    row.try_get(0).expect("Could not parse ID"),
                    row.try_get(1).expect("Could not parse from_location"),
                    row.try_get(2).expect("Could not parse to_location"),
                    row.try_get(3).expect("Could not parse cargo_information"),
                    row.try_get(4).expect("Could not parse from_user"),
                    row.try_get(5).expect("Could not parse for_user"),
                    row.try_get(6).expect("Could not parse done"),
                );
                Ok(ValidContract {
                    contract: Json(contract),
                })
            }
            Err(_) => Err(ContractNotFound {
                message: format!("Contract with ID: {} could not be found", id),
            }),
        }
    }

    pub async fn update_from_location(
        mut db: Connection<UserDatabase>,
        id: i32,
        new_from_location: String,
    ) -> Status {
        let result = sqlx::query("UPDATE contracts SET fromlocation=? WHERE id=?")
            .bind(new_from_location)
            .bind(id)
            .execute(&mut *db)
            .await;
        match result {
            Ok(_) => Status::NoContent,
            Err(_) => Status::NotFound,
        }
    }

    pub async fn update_to_location(
        mut db: Connection<UserDatabase>,
        id: i32,
        new_to_location: String,
    ) -> Status {
        let result = sqlx::query("UPDATE contracts SET tolocation=? WHERE id=?")
            .bind(new_to_location)
            .bind(id)
            .execute(&mut *db)
            .await;
        match result {
            Ok(_) => Status::NoContent,
            Err(_) => Status::NotFound,
        }
    }

    pub async fn update_cargo_information(
        mut db: Connection<UserDatabase>,
        id: i32,
        new_cargo_information: String,
    ) -> Status {
        let result = sqlx::query("UPDATE contracts SET cargoinformation=? WHERE id=?")
            .bind(new_cargo_information)
            .bind(id)
            .execute(&mut *db)
            .await;
        match result {
            Ok(_) => Status::NoContent,
            Err(_) => Status::NotFound,
        }
    }

    pub async fn update_from_user(
        mut db: Connection<UserDatabase>,
        id: i32,
        new_from_user: String,
    ) -> Status {
        let result = sqlx::query("UPDATE contracts SET fromuser=? WHERE id=?")
            .bind(new_from_user)
            .bind(id)
            .execute(&mut *db)
            .await;
        match result {
            Ok(_) => Status::NoContent,
            Err(_) => Status::NotFound,
        }
    }

    pub async fn assign_trucker(
        mut db: Connection<UserDatabase>,
        contract_id: i32,
        user_id: String,
    ) -> Status {
        let result = sqlx::query("UPDATE contracts SET touser=? WHERE id=?")
            .bind(user_id)
            .bind(contract_id)
            .execute(&mut *db)
            .await;
        match result {
            Ok(_) => Status::NoContent,
            Err(_) => Status::NotFound,
        }
    }

    pub async fn mark_done(mut db: Connection<UserDatabase>, id: i32) -> Status {
        let result = sqlx::query("UPDATE contracts SET done=true WHERE id=?")
            .bind(id)
            .execute(&mut *db)
            .await;
        match result {
            Ok(_) => Status::NoContent,
            Err(_) => Status::NotFound,
        }
    }

    pub async fn unmark_done(mut db: Connection<UserDatabase>, id: i32) -> Status {
        let result = sqlx::query("UPDATE contracts SET done=false WHERE id=?")
            .bind(id)
            .execute(&mut *db)
            .await;
        match result {
            Ok(_) => Status::NoContent,
            Err(_) => Status::NotFound,
        }
    }

    pub async fn delete_contract(mut db: Connection<UserDatabase>, id: i32) -> Status {
        let result = sqlx::query("DELETE FROM contracts WHERE id=?")
            .bind(id)
            .execute(&mut *db)
            .await;
        match result {
            Ok(_) => Status::NoContent,
            Err(_) => Status::NotFound,
        }
    }
}
