import express, { Express } from 'express';
import cors from 'cors';
import { errorsHandler } from '@middlewares/middlewares'
import { ENV } from '@common/enums';

import { imageEditor } from '@routes/routes'

const app: Express = express();

app.use(cors({ origin: "*" }));

app.use(imageEditor);

app.use(errorsHandler);

app.listen(ENV.PORT, () => {
  console.log(`⚡️[server]:  Server is running at http://localhost:${ENV.PORT}`);
});