const express = require('express');
const app = express();

// Enable JSON parsing middleware
app.use(express.json());

// Initial student dataset
const students = [
  { id: 1, name: "student1", age: 19 }, 
  { id: 2, name: "student2", age: 20 }, 
  { id: 3, name: "student3", age: 19 } 
];

// GET: Fetch all students
app.get('/students', (req, res) => {
  return res.status(200).json({ count: students.length, data: students });
});

// POST: Add a new student
app.post('/students', (req, res) => {
  const { name, age } = req.body;
  if (!name || !age) {
    return res.status(400).json({ error: "Name and age are required" });
  }

  const newStudent = {
    id: students[students.length - 1]?.id + 1 || 1,
    name,
    age
  };

  students.push(newStudent);
  return res.status(201).json(newStudent);
});

// Server setup
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(Server is running at http://localhost:${PORT});
});