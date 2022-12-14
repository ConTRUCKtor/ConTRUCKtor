use rocket::serde::Serialize;

#[derive(Serialize)]
#[serde(crate = "rocket::serde")]
pub struct User {
    id: i32,
    first_name: String,
    last_name: String,
}

impl User {
    pub fn new(id: i32, first_name: String, last_name: String) -> Self {
        User {
            id,
            first_name,
            last_name,
        }
    }
}
