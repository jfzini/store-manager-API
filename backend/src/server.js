const { Sequelize } = require('sequelize');
const sequelize = new Sequelize({
  dialect: 'mysql',
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  host: process.env.MYSQL_HOSTNAME,
  port: process.env.MYSQL_PORT,
  database: process.env.MYSQL_DATABASE || 'StoreManager',
})

sequelize.authenticate()
  .then(() => console.log('Conectado ao banco de dados com sucesso!'))
  .catch((err) => {
    console.error('Não foi possível conectar ao banco de dados:', err);
    process.exit(1);
  });

const app = require('./app');

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Backend do Store Manager escutando na porta ${PORT}`);
});
