import { Sequelize } from 'sequelize';

// Create a Sequelize instance for your application
const sequelize = new Sequelize('webtruyen', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  define: {
    timestamps: true,
  },
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connect database successful');
  })
  .catch((err) => {
    console.error('Connect database unsuccessful: ' + err.message);
    process.exit(1);
  });

export { sequelize };