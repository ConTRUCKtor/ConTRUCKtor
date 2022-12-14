pub mod models;
use crate::database::models::*;

use rocket_db_pools::sqlx::Row;
use rocket_db_pools::Connection;
use rocket_db_pools::{sqlx, Database};

use rocket::serde::Serialize;

#[derive(Database)]
#[database("sqlite_userdata")]
pub struct UserDatabase(sqlx::SqlitePool);

#[derive(Serialize)]
#[serde(crate = "rocket::serde")]
pub struct UserNotFoundError {
    id: i32,
    error: String,
}

impl User {
    pub async fn get_by_id(
        mut db: Connection<UserDatabase>,
        id: i32,
    ) -> Result<Self, UserNotFoundError> {
        let result = sqlx::query("SELECT * FROM users WHERE id = ?")
            .bind(id)
            .fetch_one(&mut *db)
            .await
            .and_then(|r| {
                Ok(Self::new(
                    r.try_get(0)?,
                    r.try_get(1)?,
                    r.try_get(2)?,
                    r.try_get(3)?,
                ))
            })
            .ok();
        match result {
            Some(res) => return Ok(res),
            None => {
                return Err(UserNotFoundError {
                    id,
                    error: format!("user with id: {id} could not be found"),
                })
            }
        };
    }
}
