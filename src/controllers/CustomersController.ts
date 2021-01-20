import { Request, Response } from "express";
import { getRepository } from "typeorm";
import Customers from "../models/Customer";

export default {
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
