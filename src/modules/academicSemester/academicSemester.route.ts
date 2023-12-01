import express from "express";
import { AcademicSemesterController } from "./academicSemester.controller";
import validateRequest from "../../utils/validateRequest";
import { AcademicValidation } from "./academicSemester.validation";

const router = express.Router();

router.post(
  "/create-academic-semester",
  validateRequest(AcademicValidation.createAcademicSemesterValidation),
  AcademicSemesterController.createAcademicSemester
);

export const AcademicSemesterRoutes = router;
