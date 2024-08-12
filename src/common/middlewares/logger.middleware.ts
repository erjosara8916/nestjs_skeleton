import { Request, Response, NextFunction } from 'express';

export function logger (req: Request, res: Response, next: NextFunction) {
  const {method, hostname, originalUrl, ip, body} = req;
  const bodyString = JSON.stringify(body ?? {});
  console.log(
    `[${method}] ${ip}  http://${hostname + originalUrl} ${bodyString}`
  );
  next();
}