const express = require('express');
const cors = require('cors');
const app = express();
const mysqlConnection = require('./db.js');

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

// app.get('/api', (req, res) => {
//   res.json({ message: 'Hello from the backend!' });
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

app.get('/api/user', (req, res) => {
  const sql = 'SELECT * FROM user'; // Modify this query as per your table structure
  mysqlConnection.query(sql, (err, results) => {
    if (err) {
      console.error('Error fetching data:', err);
      res.status(500).json({ error: 'Error fetching data' });
      return;
    }
    res.json(results);
  });
});
