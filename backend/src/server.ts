import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import { connectToDatabase } from './lib/mongodb';
import { doctorsRouter } from './routes/doctors';

const app = express();
const port = Number(process.env.PORT ?? 4000);
const corsOrigin = process.env.CORS_ORIGIN ?? '*';

app.use(
  cors({
    origin: corsOrigin === '*' ? '*' : corsOrigin.split(',').map((item) => item.trim()),
  })
);
app.use(express.json({ limit: '1mb' }));

app.get('/health', (_request, response) => {
  response.json({ ok: true });
});

app.use('/doctors', doctorsRouter);

async function start() {
  await connectToDatabase();

  app.listen(port, () => {
    console.log(`Backend listening on http://localhost:${port}`);
  });
}

start().catch((error) => {
  console.error('Failed to start backend', error);
  process.exit(1);
});
