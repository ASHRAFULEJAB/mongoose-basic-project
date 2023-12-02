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
router.get("/", AcademicSemesterController.getAllAcademicSemester);
router.get(
  "/:semesterId",
  AcademicSemesterController.getSingleAcademicSemester
);
router.patch(
  "/:semesterId",
  validateRequest(AcademicValidation.updateAcademicSemesterValidationSchema),
  AcademicSemesterController.updateAcademicSemester
);

export const AcademicSemesterRoutes = router;
