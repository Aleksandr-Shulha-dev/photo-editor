import type { Request, Response, NextFunction } from 'express';
import httpStatus from 'http-status-codes';
import formidable, { File } from 'formidable';

import { FormidableFileType, FormidableFieldType } from '@common/types'

import { HttpError } from '@dto/error.dto';

const formidableMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const form = formidable({ multiples: false });

  form.parse( req, (err, fields, files) => {
    if (err) {
      next(err);
      return;
    }
    if(!Array.isArray(fields)) req.fields = fields as FormidableFieldType;
    if(!Array.isArray(files)) req.files = files as FormidableFileType;
   

    next();
  })

};

const errorsHandler = (
  error: Error | HttpError,
  req: Request,
  res: Response,
  next: NextFunction,
): void => {
  if (res.headersSent) {
    return next(error);
  }

  if (error instanceof HttpError) {
    res.status(error.code).json({ message: error.message });
    return;
  }

  res.status(httpStatus.BAD_REQUEST).json({
    error,
    message: error.message,
  });
  return;
};

export { formidableMiddleware, errorsHandler };