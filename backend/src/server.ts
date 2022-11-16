import express, { Express } from 'express';
import cors from 'cors';
import { ENV } from '@common/enums';

const app: Express = express();

app
    .use(cors({ origin: "*" }))
    .use(express.json());

app.listen(ENV.PORT, () => {
  console.log(`⚡️[server]:  Server is running at http://localhost:${ENV.PORT}`);
});