- `USER`
	- `/create_user`
	- `/get_user/<id>`
	- `/get_user_auth0/<id>`
	- `/update_user/<id>`
	- `/delete_user/<id>`
- `CONTRACT`
	- `/create_contract`
	- `/get_contract/<id>`
	- `/update_contract/<id>`
	- `/assign_trucker/<id_contract>/<id_user>`
	- `/mark_contract_done/<id>`
	- `/unmark_contract_done/<id>`
	- `/delete_contract/<id>`
<br>
# `USER`
```json
{
	id: number,
	first_name: string,
	last_name: string,
	auth0_id: string
}
```

## `/create_user`
#### `USAGE /create_user`
#### `WITH BODY CONTAINING NEW USER`
### `POST`
`Send User object as defined above in body to endpoint`
<font style="color:green">201 Created</font> => `User has been successfully added to database`
<font style="color:red">400 Bad Request</font> => `User could not be created either do to error in format or error in database`

## `/get_user/<id>`
#### `USAGE /get_user/1`
### `GET`
`Send id as paramater to API and get a User with the given id`
<font style="color:green">200 OK</font> => `User will be returned as defined above`
<font style="color:red">404 Not Found</font> => `The User could not be found in the database`

## `/get_user_auth0/<id>`
#### `USAGE /get_user_auth0/1`
### `GET`
`Send id of auth0 as paramater to API and get a User with the given id`
<font style="color:green">200 OK</font> => `User will be returned as defined above`
<font style="color:red">404 Not Found</font> => `The User could not be found in the database`

## `/update_user/<id>`
#### `USAGE /update_user/1`
#### `WITH BODY CONTAINING NEW USER`
### `PUT`
`Send id of auth0 as paramater to API and get a User with the given id`
<font style="color:green">200 OK</font> => `User will be returned as defined above`
<font style="color:red">404 Not Found</font> => `The User could not be found in the database`

## `/delete_user/<id>`
#### `USAGE /delete_user/1`
### `DELETE`
`Send id as paramater to API and user with the give id will be delted`
<font style="color:green">204 No Content</font> => `User has been delted successfully`
<font style="color:red">404 Not Found</font> => `The User could not be found in the database`

# `CONTRACT`
```json
{
	id: number,
	from_location: string,
	to_location: string,
	cargo_information: string,
	from_user: number,
	for_user: number,
	done: boolean
}
```
### `!!!IMPORTANT NOTE!!!`
#### `when creating a user do not send for_user assign`
#### `assign it afterwards with /assign_trucker`
<br>
## `/create_contract`
#### `USAGE /create_contract`
#### `WITH BODY CONTAINING NEW USER`
### `POST`
`Send Contract object as defined above in body to endpoint`
<font style="color:green">201 Created</font> => `Contract has been successfully added to database`
<font style="color:red">400 Bad Request</font> => `Contract could not be created either do to error in format or error in database`

## `/get_contract/<id>`
#### `USAGE /get_contract/1`
### `GET`
`Send id as paramater to API and get a Contract with the given id`
<font style="color:green">200 OK</font> => `Contract will be returned as defined above`
<font style="color:red">404 Not Found</font> => `The Contract could not be found in the database`

## `/update_contract/<id>`
#### `USAGE /update_contract/1`
#### `WITH BODY CONTAINING NEW USER`
### `PUT`
`Send id as paramater to API and get a Contract with the given id`
<font style="color:green">200 OK</font> => `Contract will be returned as defined above`
<font style="color:red">404 Not Found</font> => `The Contract could not be found in the database`

## `/assign_trucker/<id_contract>/<id_user>`
#### `USAGE /assign_trucker/1/1`
### `PUT`
`Send id of contract and user to assign trucker`
<font style="color:green">204 No Content</font> => `Trucker has been assigned`
<font style="color:red">400 Bad Request</font> => `The User could not be assigned to contract`

## `/mark_contract_done/<id>`
#### `USAGE /mark_contract_done/1`
### `PUT`
`Send id to API to mark contract done internally`
<font style="color:green">204 No Content</font> => `Contract has been marked as done`
<font style="color:red">404 Not Found</font> => `The Contract could not be found in the database`

## `/unmark_contract_done/<id>`
#### `USAGE /unmark_contract_done/1`
### `PUT`
`Send id to API to mark contract not done internally`
<font style="color:green">204 No Content</font> => `Contract has been marked as not done`
<font style="color:red">404 Not Found</font> => `The Contract could not be found in the database`

## `/delete_contract/<id>`
#### `USAGE /delete_contract/1`
### `DELETE`
`Send id as paramater to API and delte Contract with the given id`
<font style="color:green">204 No Content</font> => `Contract has been deleted`
<font style="color:red">404 Not Found</font> => `The Contract could not be found in the database`