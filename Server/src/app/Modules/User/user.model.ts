import { Schema, model } from "mongoose";
import { TUser } from "./user.schema";
import { optional } from "zod";
import bcrypt from "bcrypt";
import Config from "../../Config";

const userSchema = new Schema<TUser>(
  {
    id: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    needsPasswordChange: {
      type: Boolean,
      required: false,
    },
    role: {
      type: String,
      enum: ["admin", "student", "faculty"],
    },
    status: {
      type: String,
      enum: ["in-progress", "blocked"],
      default: "in-progress",
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", async function (next) {
  const user = this;

  user.password = await bcrypt.hash(
    user.password,
    Number(Config.bicrypt_solt_round)
  );

  next();
});

userSchema.post("save", function (doc, next) {
  doc.password = "";
  next();
});

export const userModel = model<TUser>("users", userSchema);
