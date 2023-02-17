import { defineStore } from 'pinia';
import { BuyGood, User } from '@/types/user';

interface UserState {
  currentUser: User;
  userList: User[];
  buyGoodList: BuyGood[];
}

export const useUserStore = defineStore('userStore', {
  state: (): UserState => {
    return {
      currentUser: {
        name: '测试',
        headimgurl: '',
        uid: '',
        openid: '',
        token: '',
      },
      userList: [],
      buyGoodList: []
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
    addBuyGood(buyGood: BuyGood) {
      this.buyGoodList.push(buyGood)
    },
    clearBuyGood(){
      this.buyGoodList = []
    }
  },
  persist: {
    enabled: true,
    strategies: [
      {
        storage: localStorage,
      },
    ],
  },
});
