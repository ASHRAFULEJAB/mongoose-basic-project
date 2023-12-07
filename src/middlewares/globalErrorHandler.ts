/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { ErrorRequestHandler } from "express";
import { ZodError } from "zod";
import config from "../app/config";
import handleZodError from "../errors/handleZodError";
import { TErrorSources } from "../interface/error";
import handleValidationError from "../errors/handleValidationError";

const globalErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
  let statusCode = 500;
  let message = "Something went wrong!";
  let errorSources: TErrorSources = [
    {
      path: "",
      message: "Something went wrong",
    },
  ];

  if (err instanceof ZodError) {
    const simplyfiedError = handleZodError(err);
    statusCode = simplyfiedError?.statusCode;
    message = simplyfiedError?.message;
    errorSources = simplyfiedError?.errorSources;
  } else if (err?.name === "ValidationError") {
    const simplyfiedError = handleValidationError(err);
    statusCode = simplyfiedError?.statusCode;
    message = simplyfiedError?.message;
    errorSources = simplyfiedError?.errorSources;
  }

  return res.status(statusCode).json({
    success: false,
    message,
    errorSources,
    stack: config.NODE_ENV === "development" ? err?.stack : null,
    // error: err,
  });
};

export default globalErrorHandler;
