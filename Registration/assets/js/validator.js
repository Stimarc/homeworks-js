'use strict';




class FormValidator {
    constructor() {
      this._nameRegex = /^[a-zA-Zа-яА-ЯіїєІЇЄґҐ']+$/;
      this._emailRegex = /^\S+@\S+\.\S+$/;
      this._messageRegex = /^.{10,}$/;
    }
  
    validateForm(name, email, message) {
      if (!this.validateName(name) || !this.validateEmail(email) || !this.validateMessage(message)) {
        return false;
      }
      return true;
    }
  
    validateName(name) {
      return this._nameRegex.test(name);
    }
  
    validateEmail(email) {
      return this._emailRegex.test(email);
    }
  
    validateMessage(message) {
      return this._messageRegex.test(message);
    }
  }
  

  