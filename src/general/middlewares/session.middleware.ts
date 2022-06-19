import { Request, Response, NextFunction } from 'express';

export function addSession(req: Request, res: Response, next: NextFunction) {
  res.locals.session = req.session;
  next();
}
