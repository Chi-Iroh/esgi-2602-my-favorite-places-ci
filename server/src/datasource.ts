import { DataSource } from "typeorm";

const datasource = new DataSource({
  type: "postgres",
  host: "db",
  port: 5432,
  username: "postgres",
  password: "1234",
  entities: [__dirname + "/entities/**/*.{js,ts}"],
  logging: true,
  synchronize: true,
});

export default datasource;
