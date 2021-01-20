import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("customers")
export default class Customers {
  @PrimaryGeneratedColumn("increment")
  id: number;
  @Column()
  name: string;
  @Column()
  cep: number;
  // @Column()
  // latitude: number;
  // @Column()
  // longitude: number;
  @Column()
  address: string;
  @Column()
  district: string;
  @Column()
  city: string;
  @Column()
  state: string;
  @Column()
  phone: string;
  @Column()
  email: string;
}
