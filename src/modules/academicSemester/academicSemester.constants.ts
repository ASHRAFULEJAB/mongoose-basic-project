import {
  TAcademicSemesterCode,
  TAcademicSemesterName,
  TMonths,
  TcademicSemesterCodeNameMapper,
} from "./academicSemester.interface";

export const AcademicSemesterName: TAcademicSemesterName[] = [
  "Autum",
  "Summar",
  "Fall",
];
export const AcademicSemesterCode: TAcademicSemesterCode[] = ["01", "02", "03"];

export const Months: TMonths[] = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];


 export const academicSemesterCodeNameMapper: TcademicSemesterCodeNameMapper = {
   Autum: "01",
   Summar: "02",
   Fall: "03",
 };