import { Router } from "express";
import CustomersController from "../controllers/CustomersController";

const routes = Router();

routes.get("/clientes", CustomersController.index);
routes.get("/clientes/cadastro/:id", CustomersController.show);
routes.post("/clientes/cadastro", CustomersController.create);
routes.delete("/clientes/cadastro/:id", CustomersController.delete);

export default routes;
