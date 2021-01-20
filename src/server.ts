import express from "express";
import cors from "cors";
import "express-async-errors"; //handle async erros in API.
import "./database/connections";
import routes from "./routes/routes";
import errorHandler from "./errors/handler";

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errorHandler);
app.listen(3333, () => {
  console.log("SERVER ON");
});
