import express from "express"
import { createBook, deleteBook, listBook, listBookDetail, updateBook } from "../controllers/books";
const route = express.Router()


// danh sách
route.get("/books",listBook);
// products detail
route.get("/books/:id",listBookDetail);
// Thêm sản phẩm
route.post("/books/",createBook);
// xóa sp
route.delete("/books/:id",deleteBook);
// sửa
route.put("/books/:id",updateBook);

export default route