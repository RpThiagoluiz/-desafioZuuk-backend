import { Router } from "express";
import CustomersController from "../controllers/customersController";

const routes = Router();

routes.get("/clientes/cadastro", CustomersController.index);
routes.get("/clientes/cadastro/:id", CustomersController.show);
routes.post("/clientes/cadastro", CustomersController.create);

export default routes;
