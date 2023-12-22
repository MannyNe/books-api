import { object, number, string, TypeOf } from "zod";

const payload = {
  body: object({
    title: string({
      required_error: "Title is required",
    }),
    description: string({
      required_error: "Description is required",
    }).min(100, "Description should be at least 100 characters long"),
    price: number({
      required_error: "Price is required",
    }),
    cover_image: string({
      required_error: "Image is required",
    }),
  }),
};

const params = {
  params: object({
    _id: string({
      required_error: "bookId is required",
    }),
  }),
};

export const createBookSchema = object({
  ...payload,
});

export const updateBookSchema = object({
  ...payload,
  ...params,
});

export const deleteBookSchema = object({
  ...params,
});

export const getBookSchema = object({
  ...params,
});

export type CreateBookInput = TypeOf<typeof createBookSchema>;
export type UpdateBookInput = TypeOf<typeof updateBookSchema>;
export type ReadBookInput = TypeOf<typeof getBookSchema>;
export type DeleteBookInput = TypeOf<typeof deleteBookSchema>;
