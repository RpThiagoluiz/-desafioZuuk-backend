import { Request, Response } from "express";
import { getRepository } from "typeorm";
import Customers from "../models/Customer";

export default {
  async index(request: Request, response: Response) {
    const customersRepository = getRepository(Customers);

    const customers = await customersRepository.find();

    return response.json(customers);
  },

  async show(request: Request, response: Response) {
    const { id } = request.params;

    const customersRepository = getRepository(Customers);

    const customer = await customersRepository.findOneOrFail(id);

    return response.json(customer);
  },

  async create(request: Request, response: Response) {
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

    return response.status(201).json(customer);
  },
};
