const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// قاعدة بيانات مؤقتة في الذاكرة
let tasks = [
  { id: 1, title: 'Learn Docker', completed: false },
  { id: 2, title: 'Learn AWS', completed: false }
];

// Health Check - للتأكد إن الـ API شغال
app.get('/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    message: 'API is running'
  });
});

// عرض كل المهام
app.get('/api/tasks', (req, res) => {
  res.json({ success: true, data: tasks });
});

// إضافة مهمة جديدة
app.post('/api/tasks', (req, res) => {
  const { title } = req.body;
  
  if (!title) {
    return res.status(400).json({ success: false, message: 'Title is required' });
  }
  
  const newTask = {
    id: tasks.length + 1,
    title,
    completed: false
  };
  
  tasks.push(newTask);
  res.status(201).json({ success: true, data: newTask });
});

// تشغيل السيرفر
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});