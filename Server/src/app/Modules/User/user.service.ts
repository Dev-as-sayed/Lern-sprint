import Config from "../../Config";
import { Student } from "../Student/student.model";
import { TStudent } from "../Student/student.schem";
import { userModel } from "./user.model";
import { TUser } from "./user.schema";

const createStudentIntoDB = async (password: string, student: TStudent) => {
  const userData: Partial<TUser> = {};

  userData.password = password || Config.default_password;
  userData.role = "student";
  userData.id = "2024105001";

  const newUser = await userModel.create(userData);
  // return newUser;

  if (Object.keys(newUser).length) {
    student.id = newUser.id;
    student.user = newUser._id;

    const newStudent = await Student.create(student);

    return { newUser, newStudent };
  }
};

export const UserServices = {
  createStudentIntoDB,
};
