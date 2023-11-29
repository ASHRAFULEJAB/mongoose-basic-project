import { Schema, model } from "mongoose";
import { TUser } from "./user.interface";
import config from "../../app/config";
import bcrypt from "bcrypt";

const userSchema = new Schema<TUser>(
  {
    id: { type: String, required: [true, "User id is required"] },
    password: {
      type: String,
      required: true,

      //   maxlength: [10, "Password should be at least 10 characters"],
    },
    needsPasswordChange: { type: Boolean, default: true },
    role: {
      type: String,
      enum: {
        values: ["student", "faculty", "admin"],
        message: "{VALUE} is required",
      },
    },
    status: {
      type: String,
      enum: {
        values: ["in-progress", "blocked"],
        message: "{VALUE} is required",
      },
      default: "in-progress",
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", async function (next) {
  // console.log(this, 'pre hook : we will save  data');
  // eslint-disable-next-line @typescript-eslint/no-this-alias
  const user = this; // doc
  // hashing password and save into DB
  if (config.bcrypt_salt_rounds) {
    user.password = await bcrypt.hash(
      user.password,
      Number(config.bcrypt_salt_rounds)
    );
  }
  next();
});

// post save middleware / hook
userSchema.post("save", function (doc, next) {
  doc.password = "";
  next();
});


export const User = model<TUser>("Users", userSchema);
