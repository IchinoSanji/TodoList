const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const User = require('./models/User');
const Task = require('./models/Task');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb+srv://meuUsuario:v5fbOsZXZ0vxmAQs@meucluster.jstjj.mongodb.net/?retryWrites=true&w=majority&appName=meuCluster', {
}).then(() => {
  console.log('Connected to MongoDB Atlas');
}).catch(err => console.error('MongoDB connection error:', err));

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

// Rotas CRUD para usuários e tarefas
app.post('/users', async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).send(user);
  } catch (error) {
    res.status(400).send(error);
  }
});

app.get('/users', async (req, res) => {
  const users = await User.find();
  res.send(users);
});

app.post('/tasks', async (req, res) => {
  try {
    const task = new Task(req.body);
    await task.save();
    res.status(201).send(task);
  } catch (error) {
    res.status(400).send(error);
  }
});

app.get('/tasks', async (req, res) => {
  const tasks = await Task.find();
  res.send(tasks);
});
