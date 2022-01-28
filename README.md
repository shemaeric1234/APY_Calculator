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
