import dotenv from "dotenv";
import { string } from "zod";

dotenv.config();

export default {
  port: process.env.PORT,
  db_url: process.env.DB_URL,
  default_password: process.env.DEFAULT_PASSWORD,
  bicrypt_solt_round: process.env.BCRTPT_SOLRT_ROUND,
};
