import { TAcademicSemester } from "../academicSemester/academicSemester.interface";
import { User } from "./user.model";

const findLastStudent = async () => {
  const lastStudent = await User.findOne(
    {
      role: "student",
    },
    {
      id: 1,
      _id: 0,
    }
  )
    .sort({
      createdAt: -1,
    })
    .lean();

  return lastStudent?.id ? lastStudent?.id.substring(6) : undefined;
};

export const generateStudentId = async (payload: TAcademicSemester) => {
  // first time 0000
  //0001  => 1
  let currentId = (0).toString();
  //2030010001

  const lastStudentId = await findLastStudent();
  const lastSemesterCode = lastStudentId?.substring(4, 6);
  const lastSemesterYear = lastStudentId?.substring(0, 4);
  const currentSemesterCode = payload.code;
  const currentYear = payload.year;

  if (
    lastStudentId &&
    lastSemesterCode === currentSemesterCode &&
    lastSemesterYear === currentYear
  ) {
    currentId = lastStudentId?.substring(6);
  }

  let incrementId = (Number(currentId) + 1).toString().padStart(4, "0");

  incrementId = `${payload.year}${payload.code}${incrementId}`;

  return incrementId;
};
