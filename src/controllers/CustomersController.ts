import { Request, Response } from "express";
import { DeleteResult, getRepository } from "typeorm";
import Customers from "../models/Customer";
//Yup for validate data
import * as Yup from "yup";
//View for frontend
import customerView from "../views/customers_views";

export default {
  async index(request: Request, response: Response) {
    const customersRepository = getRepository(Customers);

    const customers = await customersRepository.find();

    return response.json(customerView.renderAll(customers));
  },

  async show(request: Request, response: Response) {
    const { id } = request.params;

    const customersRepository = getRepository(Customers);

    const customer = await customersRepository.findOneOrFail(id);

    return response.json(customerView.render(customer));
  },

  async create(request: Request, response: Response) {
    const {
      name,
      cep,
      //latitude,
      //longitude,
      address,
      district,
      city,
      state,
      phone,
      email,
    } = request.body;

    const customersRepository = getRepository(Customers);

    const data = {
      name,
      cep,
      //latitude,
      //longitude,
      address,
      district,
      city,
      state,
      phone,
      email,
    };

    const schema = Yup.object().shape({
      name: Yup.string().required("Name is required"), //Make your error message!
      cep: Yup.number().positive().integer().required(), //length dont work
      //latitude: Yup.number().required(),
      //longitude: Yup.number().required()
      address: Yup.string().required(),
      district: Yup.string().required(),
      city: Yup.string().required(),
      state: Yup.string().required(),
      phone: Yup.string().required(),
      email: Yup.string().email().required().max(30),
    });

    await schema.validate(data, {
      abortEarly: false,
    });

    const customer = customersRepository.create(data);

    await customersRepository.save(customer);

    return response.status(201).json(customer);
  },

  async delete(request: Request, response: Response) {
    const { id } = request.params;
    const customersRepository = getRepository(Customers);
    const customer = await customersRepository.delete(id);

    return response.status(200).json(customer);
  },

  //test
  // async update(request: Request, response: Response) {
  //   const { id } = request.params;

  //   const customersRepository = getRepository(Customers);

  //   const customer = await customersRepository.findOneOrFail(id);

  //   return response.status(200).json(customerView.render(customer));
  // },
};
