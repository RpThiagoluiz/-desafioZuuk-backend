import express from "express";
import "./database/connections";
import routes from "./routes/routes";

const app = express();
app.use(express.json());

app.use(routes);

app.listen(3333, () => {
  console.log("SERVER ON");
});
