import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import logger from './logger'; // Import the logger
import session from 'express-session';
import csrf from 'csurf';
import cookieParser from 'cookie-parser';
import crypto from 'crypto';

dotenv.config();

// Generate a secret key for session management
const csrfToken = crypto.randomBytes(64).toString('hex');
console.log("CSRF Token:", csrfToken);

const app: Express = express();
const port = process.env.PORT || 5000;

// Use cookie-parser middleware
app.use(cookieParser());

// Configure session middleware
app.use(session({
  secret: csrfToken, // Use the generated secret key
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } // Set to true if using HTTPS
}));

// Configure csurf middleware
app.use(csrf({ cookie: true }));

app.get("/", (req: Request, res: Response) => {
  // Log specific properties of the req object
  logger.info(`IP Address: ${req.ip}`);
  logger.info(`Method: ${req.method}`);
  logger.info(`URL: ${req.url}`);

  // Optionally, log specific headers if needed
  // logger.info(`Headers: ${JSON.stringify(req.headers)}`);

  res.send(`This endpoint is working CSRF Token: ${csrfToken}`);
});

app.listen(port, () => {
  logger.info(`🚀🍺 Server started on port ${port}`); // Log server start
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
