import bcrypt from "bcrypt";

export const hashPassword = async (password: string) => {
    return bcrypt.hash(password, 10);
};

export const checkPassword = (password: string, newPassword: string) => {
    return bcrypt.compare(newPassword, password);
};
