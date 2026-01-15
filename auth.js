
import { username,password } from "./info.js";
class Authentication{
  constructor(username, password){
   this.username = username;
   this.password = password;
  }
  #checkuser(){
    if(this.username===username && this.password === password){
    return true;
   }
   else{
        return false;
   }
  }

  login(){
    if (this.#checkuser) {
        return true;
    } else {
        return false;
    }
  }
};

export default Authentication;