import { createSlice } from "@reduxjs/toolkit";

let data = [
  {
    id: "mj",
    title: "Mango juice",
    price: 65,
    description: " amazing!",
  },
  {
    id: "ap",
    title: "Apple",
    price: 16,
    description: "Supper price",
  },
];
let itemSlice = createSlice({
  name: "items",
  initialState: {
    data,
  },
  reducers: {},
});

export default itemSlice.reducer;
