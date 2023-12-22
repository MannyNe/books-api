import mongoose from "mongoose";
import { UserDocument } from "./user.model";

export interface BookInput {
    user: UserDocument["_id"];
    title: string;
    description: string;
    price: number;
    image: string;
}

export interface BookDocument extends BookInput, mongoose.Document {
    createdAt: Date;
    updatedAt: Date;
}

const BookSchema = new mongoose.Schema(
    {
        user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
        title: { type: String, required: true },
        description: { type: String, required: true },
        cover_image: { type: String, required: true },
        price: { type: Number, required: true },
    },
    {   timestamps: true,   }
);

const BookModel = mongoose.model<BookDocument>("Book", BookSchema);

export default BookModel;
