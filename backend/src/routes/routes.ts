import { Router } from 'express';
import { editImage } from '@controllers/controllers';
import { formidableMiddleware } from '@middlewares/middlewares'
import { Api } from '@common/enums'

const imageEditor = Router();

imageEditor.post( Api.IMAGE_EDITOR, formidableMiddleware, editImage);

export { imageEditor }
