export const validateEmail = (email: string) => {
  const correoRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (!correoRegex.test(email)) {
    return false;
  }

  return true;
};
