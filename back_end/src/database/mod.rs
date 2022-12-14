pub mod models;

use rocket_db_pools::sqlx::Row;
use rocket_db_pools::Connection;
use rocket_db_pools::{sqlx, Database};

use rocket::serde::Serialize;

#[derive(Database)]
#[database("sqlite_userdata")]
pub struct UserDatabase(sqlx::SqlitePool);

#[derive(Serialize)]
#[serde(crate = "rocket::serde")]
pub struct UserNotFoundError(String);

impl models::User {
    pub async fn get_by_id(
        mut db: Connection<UserDatabase>,
        id: i32,
    ) -> Result<Self, UserNotFoundError> {
        let result = sqlx::query("SELECT * FROM users WHERE id = ?")
            .bind(id)
            .fetch_one(&mut *db)
            .await
            .and_then(|r| Ok(Self::new(r.try_get(0)?, r.try_get(1)?, r.try_get(2)?)))
            .ok();
        match result {
            Some(res) => return Ok(res),
            None => {
                return Err(UserNotFoundError(format!(
                    "user with id:{} could not be found",
                    id
                )))
            }
        };
    }
}
