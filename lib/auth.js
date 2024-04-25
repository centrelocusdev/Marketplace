import { hash, compare } from "bcryptjs";

export async function hashPassword(password) {
  const hashedPassword = await hash(password, 12);
  return hashedPassword;
}

export async function isPasswordValid(password, hashedPassword) {
  let isValid = compare(password, hashedPassword);
  return isValid;
}
