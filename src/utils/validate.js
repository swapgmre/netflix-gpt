export const checkValidData = (email, password, name = null) => {

  const isNameValid = /^[A-Za-z\s]{3,50}$/.test(name)

  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email)

  const isPassworValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if (!isEmailValid) return "Email ID is not valid";
  if (!isPassworValid) return "Password is not valid";
  if (name !== null && !isNameValid) {
    return "Name must be 3–50 letters long and contain only alphabets and spaces.";
  }

  return null;

}