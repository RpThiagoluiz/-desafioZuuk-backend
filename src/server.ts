import express from "express";
import { getRepository } from "typeorm";
import Customers from "./model/Customer";
import "./database/connections";

const app = express();
app.use(express.json());

app.post("/clientes/cadastro", (request, response) => {
  console.log(request.body);

  const {
    name,
    cep,
    address,
    district,
    city,
    state,
    phone,
    email,
  } = request.body;

  const customersRepository = getRepository(Customers);

  return response.json({ message: "Hello, world!" });
});

app.listen(3333, () => {
  console.log("SERVER on");
});
