use rocket::serde::{Deserialize, Serialize};

#[derive(Serialize, Deserialize)]
#[serde(crate = "rocket::serde")]
pub struct User {
    id: i32,
    first_name: String,
    last_name: String,
    auth0_id: String,
}

impl User {
    pub fn new(id: i32, first_name: String, last_name: String, auth0_id: String) -> Self {
        User {
            id,
            first_name,
            last_name,
            auth0_id,
        }
    }
}

#[derive(Serialize, Deserialize)]
#[serde(crate = "rocket::serde")]
pub struct Contract {
    id: i32,
    from_location: String,
    to_location: String,
    cargo_information: String,
    from_user: i32,
    for_user: i32,
}

impl Contract {
    pub fn new(
        id: i32,
        from_location: String,
        to_location: String,
        cargo_information: String,
        from_user: i32,
    ) -> Self {
        Contract {
            id,
            from_location,
            to_location,
            cargo_information,
            from_user,
            for_user: -1,
        }
    }
    pub fn add_for_user(mut self, for_user: i32) {
        self.for_user = for_user;
    }
}
