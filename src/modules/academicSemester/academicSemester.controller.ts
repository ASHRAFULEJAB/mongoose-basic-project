import { Schema } from "mongoose";
import { TAcademicSemester } from "./academicSemester.interface";

const academicSchema = new Schema<TAcademicSemester>({
  name: {
    type: String,
    enum: {
      values: ["Autam", "Summar", "Fall"],
      message: "{VALUES} are required",
    },
  },
  code: {
    type: String,
    enum: {
      values: ["01", "02", "03"],
      message: "{VALUES} are required",
    },
  },
  year: {
    type: Date,
  },
  startMonth: {
    type: String,
    enum: {
      values: [
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
      ],
    },
  },
  endMonth: {
    type: String,
    enum: {
      values: [
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
      ],
    },
  },
});

export default academicSchema;
