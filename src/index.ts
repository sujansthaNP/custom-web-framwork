// import { UserEdit } from './view/UserEdit';
// import { User } from './model/User';
// const user = User.buildUser({ name: 'Name', age: 20 });
// const root = document.getElementById('root');
// if (!root) {
//   throw new Error('Root element not found');
// }
// const userEdit = new UserEdit(root, user);
// userEdit.render();
// console.log(userEdit);

import { Collection } from './model/Collection';
import { User, UserProps } from './model/User';
import { UserList } from './model/UserList';

const users = new Collection(
  'http://localhost:3000/users',
  (json: UserProps) => {
    return User.buildUser(json);
  }
);

users.on('change', () => {
  const root = document.getElementById('root');
  if (!root) {
    throw new Error('Root element not found');
  }
  new UserList(root, users).render();
});

users.fetch();
