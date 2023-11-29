import config from "../../app/config";
import { TStudent } from "../student/student.interface";
import { Student } from "../student/student.model";
import { TUser } from "./user.interface";

import { User } from "./user.model";

const createStudentIntoDB = async (password: string, studentData: TStudent) => {
  const userData: Partial<TUser> = {};
  userData.password = password || (config.default_password as string);

  userData.role = "student";
  userData.id = "202410001";

  const newUser = await User.create(userData);

  if (Object.keys(newUser).length) {
    studentData.id = newUser.id;
    studentData.user = newUser._id;
    const newStudient = await Student.create(studentData);
    return newStudient;
  }
  if (userData.id === userData.id && studentData.email === studentData.email) {
    throw new Error("user id and email should be unique");
  }
};

export const UserService = {
  createStudentIntoDB,
};
