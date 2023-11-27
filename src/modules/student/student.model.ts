import { Schema, model } from "mongoose";
import {
  TAddress,
  TGurdian,
  TLocalGuardian,
  TStudent,
  UserName,
} from "./student.interface";

const userNameSchema = new Schema<UserName>({
  firstName: {
    type: String,
    required: [true, "First Name is required"],
    maxlength: [20, "Firstname cannot be more than 20 characters"],
  },
  middleName: {
    type: String,
    // trim: true,
  },
  lastName: {
    type: String,

    required: [true, "Last Name is required"],
  },
});

const guardianSchema = new Schema<TGurdian>({
  fatherName: {
    type: String,
    // trim: true,
    required: [true, "Father Name is required"],
  },
  fatherOccupation: {
    type: String,
    // trim: true,
    required: [true, "Father occupation is required"],
  },
  fatherNumber: {
    type: String,
    required: [true, "Father Contact No is required"],
  },
  motherName: {
    type: String,
    required: [true, "Mother Name is required"],
  },
  motherOccupation: {
    type: String,
    required: [true, "Mother occupation is required"],
  },
  motherNumber: {
    type: String,
    required: [true, "Mother Contact No is required"],
  },
});

const localGuradianSchema = new Schema<TLocalGuardian>({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  occupation: {
    type: String,
    required: [true, "Occupation is required"],
  },
  contactNo: {
    type: String,
    required: [true, "Contact number is required"],
  },
  address: {
    type: String,
    required: [true, "Address is required"],
  },
});

const addressSchema = new Schema<TAddress>({
  permanentAddress: {
    type: String,
    required: [true, "Permanent Address is required"],
  },
  presentAddress: {
    type: String,
    required: [true, "Present Address is required"],
  },
});

const studentSchema = new Schema<TStudent>({
  id: { type: String, required: [true, "ID is required"], unique: true },
  user: {
    type: Schema.Types.ObjectId,
    required: [true, "User id is required"],
    unique: true,
    ref: "User",
  },
  name: {
    type: userNameSchema,
    required: [true, "Name is required"],
  },
  gender: {
    type: String,
    enum: {
      values: ["male", "female", "other"],
      message: "{VALUE} is not a valid gender",
    },
    required: [true, "Gender is required"],
  },
  dateOfBirth: { type: String },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
  },
  contactNo: { type: String, required: [true, "Contact number is required"] },
  emergencyContactNo: {
    type: String,
    required: [true, "Emergency contact number is required"],
  },
  bloodGroup: {
    type: String,
    enum: {
      values: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
      message: "{VALUE} is not a valid blood group",
    },
  },
  address: {
    type: addressSchema,
    required: [true, " address is required"],
  },

  gurdian: {
    type: guardianSchema,
    required: [true, "Guardian information is required"],
  },
  localGuardian: {
    type: localGuradianSchema,
    required: [true, "Local guardian information is required"],
  },
  profileImg: { type: String },
});

export const StudentModel = model<TStudent>("Student", studentSchema);
