import express from 'express';
import bodyParser from 'body-parser';
import { userRoutes } from '../routes/userRoutes';
import { ApiError } from '../entities/ApiError';

const app = express();

app.use(bodyParser.json());
app.use('/api', userRoutes);

app.get('/', (req, res) => {
  res.send('Welcome to my Express API');
});

app.use((err: ApiError, req: express.Request, res: express.Response, next: express.NextFunction) => {
  res.status(err.status || 500).send({ error: err.message });
});

export default app;
