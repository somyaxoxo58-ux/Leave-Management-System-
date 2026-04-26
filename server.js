import express from 'express';

import mongoose from 'mongoose';

import dotenv from 'dotenv';

import cors from 'cors';

import session from 'express-session';

import { errorHandler } from './middleware/errorHandler.js';



// Routes

import authRoutes from './routes/auth.js';

import leaveRoutes from './routes/leaves.js';

import employeeRoutes from './routes/employees.js';

import holidayRoutes from './routes/holidays.js';



dotenv.config();



const app = express();



// Middleware

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));



// Session Configuration for 2FA

app.use(

&#x20; session({

&#x20;   secret: process.env.SESSION\_SECRET || 'your-secret-key',

&#x20;   resave: false,

&#x20;   saveUninitialized: true,

&#x20;   cookie: {

&#x20;     secure: process.env.NODE\_ENV === 'production',

&#x20;     httpOnly: true,

&#x20;     maxAge: 24 \* 60 \* 60 \* 1000, // 24 hours

&#x20;   },

&#x20; })

);



// Database Connection

mongoose

&#x20; .connect(process.env.MONGODB\_URI, {

&#x20;   useNewUrlParser: true,

&#x20;   useUnifiedTopology: true,

&#x20; })

&#x20; .then(() => console.log('MongoDB connected'))

&#x20; .catch((err) => console.error('MongoDB connection error:', err));



// API Routes

app.use('/api/auth', authRoutes);

app.use('/api/leaves', leaveRoutes);

app.use('/api/employees', employeeRoutes);

app.use('/api/holidays', holidayRoutes);



// Health Check

app.get('/api/health', (req, res) => {

&#x20; res.status(200).json({ success: true, message: 'Server is running' });

});



// Error Handling Middleware

app.use(errorHandler);



// 404 Handler

app.use((req, res) => {

&#x20; res.status(404).json({

&#x20;   success: false,

&#x20;   message: 'Route not found',

&#x20; });

});



const PORT = process.env.PORT || 5000;



app.listen(PORT, () => {

&#x20; console.log(`Server running on port ${PORT}`);

});



export default app;
