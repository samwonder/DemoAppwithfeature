
export function isValidEmail(email) {
  const emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailPattern.test(email);
}

export function isValidUsername(username) {
  const usernamePattern = /^[a-zA-Z0-9]{3,30}$/;
  return usernamePattern.test(username);
}

export function isValidPassword(password) {
  const passwordPattern = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,70}$/;
  return passwordPattern.test(password);
}

export function isEmailText(email) {
  if (email && (email.includes('@') || email.includes('.'))) {
    return true;
  }
  return false;
}
