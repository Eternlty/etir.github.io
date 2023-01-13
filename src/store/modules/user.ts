import { defineStore } from 'pinia';
import { User } from '@/types/user';

interface UserState {
  currentUser: User;
  userList: User[];
}

export const useUserStore = defineStore('userStore', {
  state: (): UserState => {
    return {
      currentUser: {
        name: '测试',
        uid: '',
        h5openid: '',
        h5token: '',
      },
      userList: [],
    };
  },
  getters: {
    getCurrentUser(): User {
      return this.currentUser;
    },
  },
  actions: {
    addUser(user: User) {
      this.userList.push(user);
    },
    setCurrentUser(user: User) {
      this.currentUser = user;
    },
  },
  persist: {
    enabled: true,
  },
});
