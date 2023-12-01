import { TAcademicSemester } from "./academicSemester.interface";
import { AcademicSemester } from "./academicSemester.model";

const createAcademicSemesterIntoDB = async (paylod: TAcademicSemester) => {
  const result = await AcademicSemester.create(paylod);
  return result;
};

export const AcademicServices = { createAcademicSemesterIntoDB };
