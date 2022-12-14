- `CONTRACT`
	- `/create_contract`
	- `/get_contracts`
	- `/get_contract/<id>`
	- `/update_contract/<id>`
	- `/assign_trucker/<id_contract>/<id_user>`
	- `/mark_contract_done/<id>`
	- `/unmark_contract_done/<id>`
	- `/delete_contract/<id>`
<br>
# `CONTRACT`
```json
{
	id: number,
	from_location: string,
	to_location: string,
	cargo_information: string,
	from_user: string,
	for_user: string,
	done: boolean
}
```
### `!!!IMPORTANT NOTE!!!`
#### `when creating a user do not send for_user assign`
#### `assign it afterwards with /assign_trucker`
#### `and do not send done`
#### `assign it afterwards with /mark_contract_done/<id>`
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

## `/get_contracts`
#### `USAGE /get_contracts`
### `GET`
`Send request to API Endpoint and get all contracts`
<font style="color:green">200 OK</font> => `Array of Contracts will be returned as defined above`
<font style="color:red">404 Not Found</font> => `No Contracts could be found`

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