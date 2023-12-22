import {Express, Request, Response} from "express";
import { createUserHandler } from "./controller/user.controller"
import { createUserSessionHandler, getUserSessionsHandler, deleteSessionHandler } from "./controller/session.controller";
import { createBookHandler, updateBookHandler, getBookHandler, deleteBookHandler } from "./controller/book.controller";
import validateRes from "./middleware/validateRes"
import { createUserSchema } from "./schema/user.schema";
import { createSessionSchema } from "./schema/session.schema";
import { createBookSchema, updateBookSchema, getBookSchema, deleteBookSchema } from "./schema/book.schema"
import requireUser from "./middleware/requireUser";

function routes(app: Express){

    app.post('/api/users', validateRes(createUserSchema), createUserHandler)
    app.post('/api/sessions', validateRes(createSessionSchema), createUserSessionHandler)
    app.get('/api/sessions', requireUser, getUserSessionsHandler)
    app.delete('/api/sessions', requireUser, deleteSessionHandler)
    app.post("/api/books", [requireUser, validateRes(createBookSchema)], createBookHandler);
    app.put("/api/books/:_id", [requireUser, validateRes(updateBookSchema)], updateBookHandler);
    app.get("/api/books/:_id", validateRes(getBookSchema), getBookHandler);
    app.delete("/api/books/:_id", [requireUser, validateRes(deleteBookSchema)], deleteBookHandler);

}

export default routes;