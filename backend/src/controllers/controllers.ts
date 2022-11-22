import httpStatus from 'http-status-codes';
import { Request, Response, NextFunction } from 'express';
import { resizeService } from '@services/services'

import type { SizeType } from '@common/types';

const editImage = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { filepath } = req.files.image;
    const { width, height }: SizeType = JSON.parse(req.fields.size);

    const newImage = await resizeService({ width, height, filepath });

    res.send(newImage).sendStatus(httpStatus.OK);
  } catch(error) {
    next(error);
  }
}

export { editImage };
