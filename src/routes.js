import config from './environment';
import user from './api/user';

module.exports = (app) => {
  app.use('/api/users', user);
}