import { Router } from "express";
import CustomersController from "../controllers/customersController";

const routes = Router();

routes.post("/clientes/cadastro", CustomersController.create);

export default routes;
