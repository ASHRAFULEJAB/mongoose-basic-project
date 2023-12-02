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

const getAllAcademicSemester = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const result = await AcademicServices.getAllAcademicSemesterFromDB();

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "All Semester are retrieved succesfully",
      data: result,
    });
  }
);

const getSingleAcademicSemester = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const semsterId = req.params._id;

    const result = await AcademicServices.getSingleAcademicSemesterFromDB(
      semsterId
    );

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Single semester is retrieved succesfully",
      data: result,
    });
  }
);
const updateAcademicSemester = catchAsync(async (req:Request, res:Response) => {
  const { semesterId } = req.params;
  const result = await AcademicServices.updateAcademicSemesterIntoDB(
    semesterId,
    req.body
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Single semester is update succesfully",
    data: result,
  });
});

export const AcademicSemesterController = {
  createAcademicSemester,
  getAllAcademicSemester,
  getSingleAcademicSemester,
  updateAcademicSemester,
};
