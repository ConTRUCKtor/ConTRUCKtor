#[macro_use]
extern crate rocket;

mod database;
use crate::database::models::*;
use crate::database::*;

use rocket::serde::json::Json;
use rocket_db_pools::Connection;
use rocket_db_pools::Database;

#[get("/get_user/<id>")]
async fn get_user(
    db: Connection<UserDatabase>,
    id: i32,
) -> Result<Json<User>, Json<UserNotFoundError>> {
    let user = User::get_by_id(db, id).await;
    match user {
        Ok(user) => Ok(Json(user)),
        Err(err) => Err(Json(err)),
    }
}

#[launch]
fn rocket() -> _ {
    rocket::build()
        .attach(UserDatabase::init())
        .mount("/", routes![get_user])
}
