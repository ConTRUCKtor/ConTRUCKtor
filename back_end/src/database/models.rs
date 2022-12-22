use rocket::serde::{Deserialize, Serialize};

#[derive(Serialize, Deserialize)]
#[serde(crate = "rocket::serde")]
pub struct Contract {
    id: i32,
    from_location: String,
    to_location: String,
    cargo_information: String,
    from_user: String,
    for_user: String,
    done: bool,
}

impl Contract {
    pub fn new(
        id: i32,
        from_location: String,
        to_location: String,
        cargo_information: String,
        from_user: String,
        for_user: String,
        done: bool,
    ) -> Self {
        Self {
            id,
            from_location,
            to_location,
            cargo_information,
            from_user,
            for_user,
            done,
        }
    }
}

#[derive(Serialize, Deserialize)]
#[serde(crate = "rocket::serde")]
pub struct CreateContract {
    pub from_location: String,
    pub to_location: String,
    pub cargo_information: String,
    pub from_user: String,
}
