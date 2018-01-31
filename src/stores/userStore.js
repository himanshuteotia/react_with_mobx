import { observable, action, computed } from 'mobx';


class UserStore {
  @observable users = [];

  @action addUser = (user) => {
      this.users.push(user);
  }

  @computed get userCount() {
    return this.users.length;
  }
}


const store = new UserStore();
export default store;