// 1. Create an interface representing a document in MongoDB.
export type Gurdian = {
  fatherName: string;
  fatherOccupation: string;
  fatherNumber: string;
  motherName: string;
  motherOccupation?: string;
  motherNumber: string;
};
export type LocalGuardian = {
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

export type Address = {
  permanentAddress: string;
  presentAddress: string;
};

export type Student = {
  id: string;
  name: UserName;
  address: Address;
  contactNo: string;
  emergencyContactNo: string;
  email: string;
  gender: "Male" | "Female";
  dateOfBirth: string;
  bloodGroup?: "A+" | "A-" | "B+" | "B-" | "O+" | "O-" | "AB+" | "AB-";
  gurdian: Gurdian;
  localGuardian: LocalGuardian;
  profileImg: string;
  isActive: "active" | "blocked";
};
