import app from './app';
import sequelize from './config/database';

// Sync models with the database and start the server
sequelize.sync().then(() => {
  app.listen(3003, () => {
    console.log('Server is running on port 3003');
  });
}).catch((error: any) => {
  console.error('Unable to connect to the database:', error);
});
