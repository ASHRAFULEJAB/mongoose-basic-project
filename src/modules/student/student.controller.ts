/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, RequestHandler, Response } from "express";
import { StudentServices } from "./student.service";
import sendResponse from "../../utils/sendRespomse";
import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";

const getAllStudents = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const result = await StudentServices.getAllStudentsFromDB();

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Students are retrieved succesfully",
      data: result,
    });
  }
);

const getSingleStudent = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { studentId } = req.params;

    const result = await StudentServices.getSingleStudentFromDB(studentId);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Single Student is retrieved succesfully",
      data: result,
    });
  }
);

export const StudentControllers = {
  getAllStudents,
  getSingleStudent,
};
