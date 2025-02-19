const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const taskRoutes = require('./routes/taskRoutes');
const { errorHandler } = require('./middleware/errorMiddleware');

const app = express();

app.use(express.json());
app.use(cors({
    origin: '*'
}));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/tasks', taskRoutes);

// ✅ Add a default route for Vercel
app.get("/", (req, res) => {
   res.send("TaskFlow Backend is running!");
});

// Error Handling Middleware
app.use(errorHandler);

module.exports = app;
