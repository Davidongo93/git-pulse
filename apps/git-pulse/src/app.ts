import express, { Express, Request, Response, NextFunction } from "express";
import routes from "./routes/index";

const app: Express = express();

// Routing
app.use('/', routes);

// Error catching middleware.
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  const status: number = err.status || 500;
  const message: string = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

export default app;
