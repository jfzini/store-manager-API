module.exports = {
  development: {
    username: process.env.MYSQL_USER || 'root',
    password: process.env.MYSQL_PASSWORD || 'password',
    database: process.env.MYSQL_DATABASE || 'StoreManager',
    host: process.env.MYSQL_HOSTNAME || 'db',
    port: process.env.MYSQL_PORT || 3306,
    dialect: 'mysql',
  },
  test: {
    username: process.env.MYSQL_USER || 'root',
    password: process.env.MYSQL_PASSWORD || 'password',
    database: process.env.MYSQL_DATABASE || 'StoreManager',
    host: process.env.MYSQL_HOSTNAME || 'db',
    port: process.env.MYSQL_PORT || 3306,
    dialect: 'mysql',
  },
  production: {
    username: process.env.MYSQL_USER || 'root',
    password: process.env.MYSQL_PASSWORD || 'password',
    database: process.env.MYSQL_DATABASE || 'StoreManager',
    host: process.env.MYSQL_HOSTNAME || 'db',
    port: process.env.MYSQL_PORT || 3306,
    dialect: 'mysql',
  },
};
