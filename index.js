const isValidEmail = (value) => {
  const regExp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; //Regular expression
  if (typeof value !== "string") return false; //checking for a string
  //Conditions
  if (value.match(regExp)) return true;
  else return false;
};

module.exports = isValidEmail;
