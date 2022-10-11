import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface Payload {
  sub: string
}

export function isAuthenticated(req: Request, res: Response, next: NextFunction) {
  // Receive and validate token
  const authToken = req.headers.authorization;

  if(!authToken) {
    return res.json(401).end();
  }

  const[, token] = authToken.split(" "); // Ignore the writting "Bearer"

  try {
    const { sub } = verify(token, "5471818f551c1dadda68a9f9909e788e") as Payload; // In production store your KEY in a ".env" file

    // Recover token ID and place user_id into request
    req.user_id = sub; // Need to create new TypeScript type in order to work, reference ../@types

    return next();
  } catch(err) {
    return res.status(401).end();
  }
}