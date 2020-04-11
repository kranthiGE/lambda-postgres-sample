import {Sequelize} from 'sequelize-typescript';


// Instantiate new Sequelize instance!
export const sequelize = new Sequelize({
  "username": process.env.postgres_uname,
  "password": process.env.postgres_pwd,
  "database": process.env.postgres_db,
  "host":     process.env.postgres_host,

  dialect: 'postgres',
  storage: ':memory:',
});

