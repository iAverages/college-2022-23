import bcrypt from "bcrypt";
import { env } from "../env/server.mjs";

export const hashPassword = (password: string) => {
    const salt = bcrypt.genSalt();
};
