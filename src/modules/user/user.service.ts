import httpStatus from "http-status";
import config from "../../app/config";
import { AcademicSemester } from "../academicSemester/academicSemester.model";
import { TStudent } from "../student/student.interface";
import { Student } from "../student/student.model";
import { TUser } from "./user.interface";

import { User } from "./user.model";
import { generateStudentId } from "./user.utils";
import AppError from "../../errors/AppError";
import mongoose from "mongoose";

const createStudentIntoDB = async (password: string, payload: TStudent) => {
  const userData: Partial<TUser> = {};
  userData.password = password || (config.default_password as string);

  // generatinf id here
  const admissionSemester = await AcademicSemester.findById(
    payload.admissionSemester
  );

  // transaction here

  const session = await mongoose.startSession();
  try {
    session.startTransaction();
    //set  generated id
    userData.id = await generateStudentId(admissionSemester);
    userData.role = "student";

    const newUser = await User.create([userData], { session });

    if (!newUser.length) {
      throw new AppError(httpStatus.BAD_REQUEST, "Failed to create user");
    }

    if (newUser.length) {
      payload.id = newUser[0].id;
      payload.user = newUser[0]._id;
      const newStudent = await Student.create([payload], { session });

      if (!newStudent.length) {
        throw new AppError(httpStatus.BAD_REQUEST, "Failed to create Student!");
      }

      await session.commitTransaction();
      await session.endSession();
      return newStudent;
    }
  } catch (error) {
    await session.abortTransaction();
    await session.endSession();
  }

  if (userData.id === userData.id && payload.email === payload.email) {
    throw new AppError(
      httpStatus.NOT_FOUND,
      "user id and email should be unique"
    );
  }
};

export const UserService = {
  createStudentIntoDB,
};
