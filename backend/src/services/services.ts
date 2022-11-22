import sharp from 'sharp';

import type { ResizeServiceArg } from '@common/types'

const resizeService = async(
  { width, height, filepath }: ResizeServiceArg
): Promise<Buffer> => {
  return await sharp(filepath).resize({
    width,
    height,
    fit: 'fill'
  }).png().toBuffer();
};

export { resizeService }