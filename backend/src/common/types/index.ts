import { Fields, Files, File } from 'formidable';

interface FormidableFileType {
  [file: string]: File;
}

interface FormidableFieldType {
  [file: string]: string;
}

declare global {
  namespace Express {
    interface Request {
      fields: FormidableFieldType;
      files: FormidableFileType;
    }
  }
}

interface SizeType {
  width: number;
  height: number;
}

interface ResizeServiceArg extends SizeType{
  filepath: string;
}

export type {
  FormidableFileType,
  FormidableFieldType,
  SizeType,
  ResizeServiceArg
}
