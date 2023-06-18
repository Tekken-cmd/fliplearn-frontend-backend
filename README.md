# fliplearn-frontend-backend
In order for the project to work, Node has to be installed both for the front-end and the back-end individually.
- Steps:
1. Ater you download zip file, unzip it and open the project in Visual Studio Code.
2. Open its terminal(2 terminal windows) and navigate to the folders like --> "cd .\front-end\" and "cd .\back-end\"
3. Install node modules for both front-end and back-end by writing the command "npm i node"

4. In the meantime, install MySQL Workbench and create new database called "fliplearn".
Then, two tables: "flip_cards" and "sign_up". The types of properties(column names) are specified inside parentheses ()

"flip_cards" table's columns: 
- id - (INT) make it autoincrement and primary key not null
- frontText - (Varchar(255)) not null
- backText - (Varchar(255)) not null
- userID - (INT) make it foreign key and which is connected to the "id" in the "sign_up" table

"sign_up" table's columns:
- id - (INT) make it autoincrement and primary key not null
- userName - (Varchar(255)) not null
- email - (Varchar(255)) not null
- password - (Varchar(255)) not null


5. After installations are successfull, in VS Code open the project and 
    run the front-end by command "npm start"
    run the back-end by command "nodemon server.js"
----------------------------------------------------------------------------------------------------------------------
By Atakhanov Akbarjon
        - 06/18/2023
