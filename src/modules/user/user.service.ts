import config from "../../app/config";
import { AcademicSemester } from "../academicSemester/academicSemester.model";
import { TStudent } from "../student/student.interface";
import { Student } from "../student/student.model";
import { TUser } from "./user.interface";

import { User } from "./user.model";
import { generateStudentId } from "./user.utils";

const createStudentIntoDB = async (password: string, payload: TStudent) => {
  const userData: Partial<TUser> = {};
  userData.password = password || (config.default_password as string);

  // generatinf id here
  const admissionSemester = await AcademicSemester.findById(
    payload.admissionSemester
  );

  //set  generated id
  userData.id = await generateStudentId(admissionSemester);
  userData.role = "student";

  const newUser = await User.create(userData);

  if (Object.keys(newUser).length) {
    payload.id = newUser.id;
    payload.user = newUser._id;
    const newStudient = await Student.create(payload);
    return newStudient;
  }
  if (userData.id === userData.id && payload.email === payload.email) {
    throw new Error("user id and email should be unique");
  }
};

export const UserService = {
  createStudentIntoDB,
};
