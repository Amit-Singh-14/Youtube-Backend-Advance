import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();

// direct we can use app.use(cors());
// inside cors we providing options
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

// to accept json from frontend we use ecpress.json()
app.use(express.json({ limit: "16kb" }));

// to accept data from url
app.use(express.urlencoded({ extended: true, limit: "16kb" }));

// to store files in server
app.use(express.static("public"));

// to enable reading and writing cookies
app.use(cookieParser());

export { app };
