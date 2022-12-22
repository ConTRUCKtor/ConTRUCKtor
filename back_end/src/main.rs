#[macro_use]
extern crate rocket;

mod database;

use crate::database::models::*;
use crate::database::*;

use rocket::http::ContentType;
use rocket::http::Method;
use rocket_db_pools::Connection;
use rocket_db_pools::Database;

use rocket::http::Status;
use rocket::serde::json::Json;

use rocket::fairing::{Fairing, Info, Kind};
use rocket::http::Header;
use rocket::{Request, Response};

pub struct CORS;

#[rocket::async_trait]
impl Fairing for CORS {
    fn info(&self) -> Info {
        Info {
            name: "Add CORS headers to reponses",
            kind: Kind::Response,
        }
    }

    async fn on_response<'r>(&self, request: &'r Request<'_>, response: &mut Response<'r>) {
        response.set_header(Header::new("Access-Control-Allow-Origin", "*"));
        response.set_header(Header::new(
            "Access-Control-Allow-Methods",
            "POST, GET, PATCH, OPTIONS",
        ));
        response.set_header(Header::new("Access-Control-Allow-Headers", "*"));
        response.set_header(Header::new("Access-Control-Allow-Credentials", "true"));

        if request.method() == Method::Options {
            let body = "";
            response.set_header(ContentType::Plain);
            response.set_sized_body(body.len(), std::io::Cursor::new(body));
            response.set_status(Status::Ok);
        }
    }
}

#[post("/create_contract", data = "<create_contract>")]
async fn create_contract(
    db: Connection<UserDatabase>,
    create_contract: Json<CreateContract>,
) -> Status {
    Contract::create(db, create_contract.0).await
}

#[get("/get_contracts")]
async fn get_contracts(db: Connection<UserDatabase>) -> Result<ValidContracts, ContractNotFound> {
    Contract::get_all(db).await
}

#[get("/get_contract/<id>")]
async fn get_contract(
    db: Connection<UserDatabase>,
    id: i32,
) -> Result<ValidContract, ContractNotFound> {
    Contract::get_by_id(db, id).await
}

#[put("/update_from_location/<id>", data = "<new_from_location>")]
async fn update_from_location(
    db: Connection<UserDatabase>,
    id: i32,
    new_from_location: String,
) -> Status {
    Contract::update_from_location(db, id, new_from_location).await
}

#[put("/update_to_location/<id>", data = "<new_to_location>")]
async fn update_to_location(
    db: Connection<UserDatabase>,
    id: i32,
    new_to_location: String,
) -> Status {
    Contract::update_to_location(db, id, new_to_location).await
}

#[put("/update_cargo_information/<id>", data = "<new_cargo_information>")]
async fn update_cargo_information(
    db: Connection<UserDatabase>,
    id: i32,
    new_cargo_information: String,
) -> Status {
    Contract::update_cargo_information(db, id, new_cargo_information).await
}

#[put("/update_from_user/<id>", data = "<new_from_user>")]
async fn update_from_user(db: Connection<UserDatabase>, id: i32, new_from_user: String) -> Status {
    Contract::update_from_user(db, id, new_from_user).await
}

#[put("/assign_trucker/<contract_id>/<user_id>")]
async fn assign_trucker(db: Connection<UserDatabase>, contract_id: i32, user_id: String) -> Status {
    Contract::assign_trucker(db, contract_id, user_id).await
}

#[put("/mark_contract_done/<id>")]
async fn mark_contract_done(db: Connection<UserDatabase>, id: i32) -> Status {
    Contract::mark_done(db, id).await
}

#[put("/unmark_contract_done/<id>")]
async fn unmark_contract_done(db: Connection<UserDatabase>, id: i32) -> Status {
    Contract::unmark_done(db, id).await
}

#[delete("/delete_contract/<id>")]
async fn delete_contract(db: Connection<UserDatabase>, id: i32) -> Status {
    Contract::delete_contract(db, id).await
}

#[launch]
fn rocket() -> _ {
    rocket::build()
        .attach(CORS)
        .attach(UserDatabase::init())
        .mount(
            "/",
            routes![
                create_contract,
                get_contracts,
                get_contract,
                update_from_location,
                update_to_location,
                update_cargo_information,
                update_from_user,
                assign_trucker,
                mark_contract_done,
                unmark_contract_done,
                delete_contract
            ],
        )
}
