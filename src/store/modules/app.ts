import { defineStore } from 'pinia';
import { Sidebar } from '@/types/app';

interface AppState {
  sidebar: Sidebar;
}

export const useAppStore = defineStore('appStore', {
  state: (): AppState => {
    return {
      sidebar: {
        opened: true,
      },
    };
  },
  getters: {
    getSidebarStatus(): boolean {
      return this.sidebar.opened;
    },
  },
  actions: {
    toggleSidebar() {
      this.sidebar.opened = !this.sidebar.opened;
    },
  },
  persist: {
    enabled: true,
  },
});
