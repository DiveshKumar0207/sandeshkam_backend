import express, { Request, Response } from "express";
import morgan from "morgan";
import hpp from "hpp";
import helmet from "helmet";
import compression from "compression";
import cookieParser from "cookie-parser";
import cors from "cors";
import { configDotenv } from "dotenv";
import { rateLimiterMiddleware } from "./Utils/ratelimitter";

configDotenv();

const app = express();

const PORT = process.env.PORT || 8000;

// Middleware that allows Express to parse through both JSON and x-www-form-urlencoded request bodies
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cookieParser());

// middleware that can be used to enable CORS with various options.
app.use(cors());

// Enable HPP middleware to prevent HTTP Parameter Pollution attacks
app.use(hpp());

// Helmet helps secure Express apps by setting HTTP response headers
app.use(helmet());

// Use rate limiter middleware
app.use(rateLimiterMiddleware);

// Morgan middleware for logging requests to the console
app.use(morgan("dev"));

// Use compression middleware // compress the response based on the client's capabilities
app.use(compression());

app.get("/", (req: Request, res: Response) => {
  res.send("hellpo");
});

app.listen(PORT, () => {
  console.log(
    `server running at http://127.0.0.1:${PORT} || http://localhost:${PORT}`
  );
});
