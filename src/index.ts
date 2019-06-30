import { User } from './models/User';

const user = new User({ name: 'Todd', age: 41 });

user.on('change', () => {});
user.on('mouseup', () => {
  console.log('hi');
});
console.table(user);
