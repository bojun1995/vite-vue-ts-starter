import { defineStore } from 'pinia'

export const useIndexStore = defineStore({
  id: 'index',
  state: () => ({
    token: '123123123',
  }),
  getters: {
    getToken: (state) => state.token,
  },
  actions: {
    chgToken(newToken: string) {
      this.token = newToken
    },
  },
})
