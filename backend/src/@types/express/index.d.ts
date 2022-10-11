// Remember to activate "typeRoots" in "tsconfig.json" and reference this file path

declare namespace Express {
  export interface Request {
    user_id: string
  }
}