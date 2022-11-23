import { defineStore } from "pinia";

export const useEmailsStore = defineStore({
  id: "emails",
  state: (): any => {
    const initialState: string[] = [];
    return {
      emails: initialState
    }
  },
  getters: {
    list: (state) =>
      state.emails.reduce((emails: string[], email: string) => {
        const emailExists = emails.find((item) => item === email);

        if (!emailExists) {
          emails.push(email);
        }

        return emails;
      }, [])
  },
  actions: {
    addItem(email: String) {
      if (email.length >= 1) { 
        this.emails.push(email);
      }
    },

    removeItem(email: String) {
      const i = this.emails.indexOf(email);
      if (i > -1) this.emails.splice(i, 1);
    }
  }
});
