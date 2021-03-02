const express = require('express');
const exphbs = require('express-handlebars');
const mysql = require('mysql');

const app = express();
app.use(express.static('js'));
app.use(express.static('img'));
// Set the port of our application
// process.env.PORT lets the port be set by Heroku
const PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'david0921',
  database: 'burger_db',
});

connection.connect((err) => {
  if (err) {
    console.error(`error connecting: ${err.stack}`);
    return;
  }

  console.log(`connected as id ${connection.threadId}`);
});

app.get('/', (req,res) =>{
  res.redirect('/index');
});

app.get('/index', (req, res) => {
  connection.query('SELECT * FROM burgers;', (err, data) => {
    if (err) {
      return res.status(500).end();
    }
    console.log(data)
    res.render('index', { burgers: data });
  });
});

// Create a new burger
app.post('/api/burgers', (req, res) => {
  connection.query(
    'INSERT INTO burgers (burger) VALUES (?)',
    [req.body.burger],
    (err, result) => {
      if (err) {
        return res.status(500).end();
      }

      
      res.json({ id: result.insertId });
      console.log({ id: result.insertId });
    }
  );
});

app.put('/api/burgers/:id', (req,res) => {
  const condition = [req.params.id]
  
  connection.query('UPDATE burgers SET devoured = true WHERE id =(?)', condition, (err, result) =>{
      if (err) throw err;

      res.status(200).end()
    });
})







































app.listen(PORT, () =>
  console.log(`Server listening on: http://localhost:${PORT}`)
);