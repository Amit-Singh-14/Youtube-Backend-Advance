import { config } from "dotenv";
config();
import connectDB from "./db/index.js";
import { app } from "./app.js";

// connectdb is async function i.e it return a promise that why we are using then and running server
connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, (req, res) => {
      console.log("server is running at PORT : ", process.env.PORT);
    });
  })
  .catch((err) => {
    console.log("MONGO db connection failed !!!", err);
  });
