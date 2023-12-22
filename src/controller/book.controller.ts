import { Request, Response } from "express";
import {
    CreateBookInput,
    UpdateBookInput,
} from "../schema/book.schema";
import {
    createBook,
    deleteBook,
    findAndUpdateBook,
    findBook,
} from "../service/book.service";

export async function createBookHandler(
    req: Request<{}, {}, CreateBookInput["body"]>,
    res: Response
) {
    const userId = res.locals.user._id;

    const body = req.body;

    const product = await createBook({ ...body, user: userId });

    return res.send(product);
}

export async function updateBookHandler(
    req: Request<UpdateBookInput["params"]>,
    res: Response
) {
    const userId = res.locals.user._id;

    const _id = req.params._id;
    const update = req.body;

    const book = await findBook({ _id });

    if (!book) {
        return res.sendStatus(404);
    }

    if (String(book.user) !== userId) {
        return res.sendStatus(403);
    }

    const updatedBook = await findAndUpdateBook({ _id }, update, {
        new: true,
    });

    return res.send(updatedBook);
}

export async function getBookHandler(
    req: Request<UpdateBookInput["params"]>,
    res: Response
) {
    const _id = req.params._id;
    const product = await findBook({ _id });

    if (!product) {
        return res.sendStatus(404);
    }

    return res.send(product);
}

export async function deleteBookHandler(
    req: Request<UpdateBookInput["params"]>,
    res: Response
) {
    const userId = res.locals.user._id;
    const _id = req.params._id;

    const book = await findBook({ _id });

    if (!book) {
        return res.sendStatus(404);
    }

    if (String(book.user) !== userId) {
        return res.sendStatus(403);
    }

    await deleteBook({ book });

    return res.sendStatus(200);
}
