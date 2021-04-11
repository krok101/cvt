const localСache = {
  get userName(){
    return localStorage.getItem("userName");
  },
  set userName(value){
    localStorage.setItem("userName",value);
  }
}

export default localСache