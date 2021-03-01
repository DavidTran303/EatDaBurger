1.install express , mysql , express-handlebars

2. Create severs to run a localhost:3030 server

3. create an sql database, and connect it to vscode "createConnection"

4. Use Handlebars and mySql to grab data from sql to the main index.html file for the burgers

app.get('/', (req, res) => {
connection.query('SELECT \* FROM movies;', (err, data) => {
if (err) {
return res.status(500).end();
}

    res.render('index', { movies: data });

});
});

5.  create a burger method with a key [req.body.burger]
    app.post('/api/burgers', (req, res) => {
    connection.query(
    'INSERT INTO burgers (burger) VALUES (?)',
    [req.body.burger],
    (err, result) => {
    if (err) {
    return res.status(500).end();
    }

          // Send back the ID of the new movie
          res.json({ id: result.insertId });
          console.log({ id: result.insertId });
        }

    );
    });

6.Retrieve all the burger data "app.get()"
app.get('/api/movies', (req, res) => {
connection.query('SELECT \* FROM movies;', (err, data) => {
if (err) {
return res.status(500).end();
}

    res.json(data);

});
});

7. UPDATE the burgers as user type in new data in the text box with "app.put"
   app.put('/api/burgers/:id', (req, res) => {
   connection.query(
   'UPDATE burgers SET burger = ? WHERE id = ?',
   [req.body.burger, req.params.id],
   (err, result) => {
   if (err) {
   // If an error occurred, send a generic server failure
   return res.status(500).end();
   }
   if (result.changedRows === 0) {
   // If no rows were changed, then the ID must not exist, so 404
   return res.status(404).end();
   }
   res.status(200).end();
   }
   );
   });

8. Make Burger move to the left as user press the submit button
   html tells me "what" is on the page, css tells me how it looks and javascript allows that to be dynamic
   white_check_mark
   eyes
   raised_hands

5:49
haha no its okay
5:49
im the sort of learner who needs to re-explain back to understand it
5:49
so i understand
5:50
with all that in mind the database will never determine where or how something is displayed on the page
5:50
it can, however, store indicators that the front end uses to determine the location
New
5:51
so if you had one column on the left and one column on the right representing eaten or not eaten
5:51
then you can store in the database whether each burger is eaten or not
5:51
then when the front end gets that information it assigns css styling that moves everything left, or it uses javascript to add elements representing that data to the right column
5:52
but all of that happens on the front end
5:52
database can just have eaten: true/false
5:52
does that make sense?
