const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const cookieParser = require('cookie-parser');
const salt = 10;
const port = process.env.PORT || 8800;

const app = express();
app.use(express.json());
app.use(cors({
  origin: ['http://localhost:3000'],
  methods: ["POST", "GET", "DELETE"],
  credentials: true
}));
app.use(cookieParser());

// Create MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'fliplearn',
});

// Connect to the database
db.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the database');
});

// To verify if the User is loggedin and then perform "Log Out"
const verifyUser = (req, res, next) => {
  const token = req.cookies.token;
  if(!token) {
    return res.json({Error: "You are not authenticated!"});
  } else {
    jwt.verify(token, "jwt-secret-key", (err, decoded) => {
      if(err) {
        return res.json({Error: "Problem with the token"});
      } else {
        req.name = decoded.name;
        next();
      }
    })
  }
}

app.get('/', verifyUser, (req, res) => {
  return res.json({Status: "Success", name: req.name});
})

////////////////////////// REGISTRATION ///////////////////////////////

// Sign-up
app.post("/sign-up", (req, res) => {
  const sqlQuery = "INSERT INTO sign_up (`userName`, `email`, `password`) VALUES (?)";

  bcrypt.hash(req.body.password.toString(), salt, (err, hash) => {
    if(err) return res.json({Error: "Error for hashing password"});
    const contact = [
      req.body.userName,
      req.body.email,
      hash
    ]


    db.query(sqlQuery, [contact], (err, result) => {
      if(err) return res.json({Error: "Error in inserting data in the server"});
      return res.json({Status: "Success"});
    })
  })
})

// Log-in
app.post('/log-in', (req, res) => {
  const sqlQuery = "SELECT * FROM sign_up WHERE email = ?";

  db.query(sqlQuery, [req.body.email], (err, data) => {
    if(err) return res.json({Error: "Login error in the server"});
    if(data.length > 0 && data[0].email.length > 0) {
      bcrypt.compare(req.body.password.toString(), data[0].password, (err, result) => {
        if(err) return res.json({Error: "Password compare error"});
        if(result) {
          const userID = data[0].id;
          const name = data[0].userName;
          const token = jwt.sign({name}, "jwt-secret-key", {expiresIn: '1d'});
          res.cookie('token', token);
          return res.json({Status: "Success", Name: name, Id: userID});
        } else {
          return res.json({Error: "Password didn't match!"} );
        }
      })
    } else {
        return res.json({Error: "Incorrect data, please try again!"});
    }
  })
})


// Log-out
app.get('/log-out', (req, res) => {
  res.clearCookie('token');
  return res.json({Status: "Success"});
})


////////////////// Data --- SAVE --- RETRIEVE --- DELETE ////////////////////

// Save data to the database
app.post("/flip_cards", (req, res) => {
  const sqlQuery = "INSERT INTO flip_cards (`frontText`, `backText`, `userID`) VALUES (?)";
  const values = [
    req.body.frontText,
    req.body.backText,
    req.body.userID
  ];

  db.query(sqlQuery, [values], (err, data) => {
    if(err) return res.json(err)
    return res.json("Card has been created successfully!")
  });
})

// Retrieve data from the database
app.get("/flip_cards/:userID", (req, res) => {
  const userID = req.params.userID;
  const sqlQuery = `SELECT * FROM flip_cards WHERE userID = ?`; 

  db.query(sqlQuery, [userID], (err, data) => {
    if(err) {
      return res.json(err)
    } else {
      return res.json(data)
    }
    
  });
});

// Delete data from the database
app.delete("/flip_cards/:id", (req, res) => {
  const cardId = req.params.id;
  const sqlQuery = "DELETE FROM flip_cards WHERE id = ?";

  db.query(sqlQuery, [cardId], (err, data) => {
    if(err) return res.json(err);
    return res.json("Card has been deleted successfully!")
  })
})


// Start the server
app.listen(port, () => {
  console.log(`Connected to Backend and started listening on port ${port}`);
});