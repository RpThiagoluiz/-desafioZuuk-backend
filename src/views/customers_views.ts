import Customer from "../models/Customer";

export default {
  render(customer: Customer) {
    return {
      id: customer.id,
      name: customer.name,
      cep: customer.cep,
      // latitude: customer.latitude,
      // longitude: customer.longitude,
      address: customer.address,
      district: customer.district,
      city: customer.city,
      state: customer.state,
      phone: customer.phone,
      email: customer.email,
    };
  },

  renderAll(customers: Customer[]) {
    return customers.map((client) => this.render(client));
  },
};
