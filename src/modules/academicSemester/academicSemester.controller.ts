/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from "express";
import sendResponse from "../../utils/sendRespomse";
import httpStatus from "http-status";
import { AcademicServices } from "./academicSemester.service";
import catchAsync from "../../utils/catchAsync";

const createAcademicSemester = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    // const { password, student: studentData } = req.body;
    const result = await AcademicServices.createAcademicSemesterIntoDB(
      req.body
    );

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Academic semester is created succesfully",
      data: result,
    });
  }
);

export const AcademicSemesterController = {
  createAcademicSemester,
};
