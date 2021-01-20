import express from "express";
import { getRepository } from "typeorm";
import Customers from "./models/Customer";
import "./database/connections";

const app = express();
app.use(express.json());

app.post("/clientes/cadastro", async (request, response) => {
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

  const customer = customersRepository.create({
    name,
    cep,
    address,
    district,
    city,
    state,
    phone,
    email,
  });

  await customersRepository.save(customer);

  return response.json({ message: "Hello, world!" });
});

app.listen(3333, () => {
  console.log("SERVER on");
});
