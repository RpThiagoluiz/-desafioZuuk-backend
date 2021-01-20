import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createCustomers1611169368089 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "customers",
        columns: [
          {
            name: "id",
            type: "integer",
            unsigned: true,
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
          },
          {
            name: "name",
            type: "varchar",
          },
          {
            name: "cep",
            type: "decimal",
            scale: 8,
          },
          //   {
          //     name: "latitude",
          //     type: "decimal",
          //     scale: 10,
          //     precision: 2,
          //   },
          //   {
          //     name: "longitude",
          //     type: "decimal",
          //     scale: 10,
          //     precision: 2,
          //   },
          {
            name: "address",
            type: "varchar",
          },
          {
            name: "district",
            type: "varchar",
          },
          {
            name: "city",
            type: "varchar",
          },
          {
            name: "state",
            type: "varchar",
          },
          {
            name: "phone",
            type: "varchar",
          },
          {
            name: "email",
            type: "varchar",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("customers");
  }
}
