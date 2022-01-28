# APY_Calculator

## Technologies used

- Node js
- Express
- postgress
- sequelize
- testing(mocha and chai) I used those tools because are the testing tools which is suitable with Rest API in JavaScript

### database

- database name "apy_calculator"

- tables: 
    - users
        - table fields: id,
             firstName,
             lastName,
             createdAt,
             updatedAt
    - apy
        - table fields: id,
             customer_id,
             Interest_rate,
             yearly_compound_times,
           createdAt,
          updatedAt

## APIs

### Add user

<img width="650" alt="Screen Shot 2022-01-29 at 00 47 13" src="https://user-images.githubusercontent.com/47531860/151632181-3947d42a-f83d-4081-bdd2-8a05258fe754.png">

### Get Users
GET: http://localhost:4000/api/v1/apy/getUsers

### Add APY History
<img width="668" alt="Screen Shot 2022-01-29 at 00 50 07" src="https://user-images.githubusercontent.com/47531860/151632418-0e02ed81-24b5-4e54-b91d-de56ecaf0132.png">

### GET APY History

GET: http://localhost:4000/api/v1/apy/getApys/{userID}

<img width="672" alt="Screen Shot 2022-01-29 at 00 51 39" src="https://user-images.githubusercontent.com/47531860/151632528-60e5fe3c-d5b7-4e5b-b592-8a770a0ae932.png">

### DELETE APY related to a specific user

DELETE: http://localhost:4000/api/v1/apy/delete/{USER ID}

### DELETE one user or one APY 

DELETE: http://localhost:4000/api/v1/apy/delete/{tableName}/{ID to be deleted}
