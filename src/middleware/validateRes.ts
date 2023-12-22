/**
 *                  VALIDATION
 * - THIS FILE IS USED TO VALIDATE THE REQUEST BY 
 *   PROVIDING A SCHEMA AND VALIDATE THAT REQUEST 
 *   BY USING THAT SPECIFIC SCHEMA
 */

import { Request, Response, NextFunction } from "express";
import { AnyZodObject } from "zod";

const validate =
  (schema: AnyZodObject) =>
  (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse({
        body: req.body,
        query: req.query,
        params: req.params,
      });
      next();
    } catch (e: any) {
      return res.status(400).send(e.errors);
    }
  };

export default validate;
