import { Types } from "mongoose";

// 1. Create an interface representing a document in MongoDB.
export type TGurdian = {
  fatherName: string;
  fatherOccupation: string;
  fatherNumber: string;
  motherName: string;
  motherOccupation?: string;
  motherNumber: string;
};
export type TLocalGuardian = {
  name: string;
  address: string;
  occupation: string;
  contactNo: string;
};
export type UserName = {
  firstName: string;
  middleName: string;
  lastName: string;
};

export type TAddress = {
  permanentAddress: string;
  presentAddress: string;
};

export type TStudent = {
  id: string;
  user: Types.ObjectId;
  name: UserName;
  password: string;
  address: TAddress;
  contactNo: string;
  emergencyContactNo: string;
  email: string;
  gender: "Male" | "Female";
  dateOfBirth: string;
  bloodGroup?: "A+" | "A-" | "B+" | "B-" | "O+" | "O-" | "AB+" | "AB-";
  gurdian: TGurdian;
  localGuardian: TLocalGuardian;
  profileImg: string;
};
