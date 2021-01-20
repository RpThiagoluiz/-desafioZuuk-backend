import express from "express";
import "./database/connections";

const app = express();
app.use(express.json());

app.get("/", (request, response) => {
  return response.json({ message: "Hello, world!" });
});

app.listen(3333, () => {
  console.log("SERVER on");
});
