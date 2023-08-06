import { createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../../types/book.type";

interface IProducts {
  products: IProduct[];
}

const initialState: IProducts = {
  products: [],
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
});

export default productSlice.reducer;
