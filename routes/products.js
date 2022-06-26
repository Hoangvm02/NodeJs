import express from "express";
import { createProduct, deleteProduct, listProduct, listProductDetail, updateProduct } from "../controllers/products";
import { userById } from "../controllers/user";
const route = express.Router();

// danh sách
route.get("/products",listProduct);
// products detail
route.get("/products/:id",listProductDetail);
// Thêm sản phẩm
route.post("/products/",createProduct);
// xóa sp
route.delete("/products/:id",deleteProduct);
// sửa
route.put("/products/:id",updateProduct);

route.param("userId",userById)
export default route;
