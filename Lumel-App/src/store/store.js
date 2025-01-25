import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "electronics",
    label: "Electronics",
    value: 1400,
    prevalue: 1400,
    children: [
      {
        id: "phones",
        label: "Phones",
        value: 800,
        prevalue: 800,
      },
      {
        id: "laptops",
        label: "Laptops",
        value: 700,
        prevalue: 700,
      },
    ],
  },
  {
    id: "furniture",
    label: "Furniture",
    value: 1000,
    prevalue: 1000,
    children: [
      {
        id: "tables",
        label: "Tables",
        value: 300,
        prevalue: 300,
      },
      {
        id: "chairs",
        label: "Chairs",
        value: 700,
        prevalue: 700,
      },
    ],
  },
];

const HierarchicalTable = createSlice({
  name: "TableData",
  initialState,
  reducers: {
    UpdateValueByPercentage: (state, action) => {
      const { parent, child, isChild, value } = action.payload;
      return state;
    },
    UpdateValueByDirectly: (state, action) => {
      const { parent, child, isChild, value } = action.payload;
      return state;
    },
    UpdateValueBySubTotal: (state, action) => {
      const { parent, child, isChild, value } = action.payload;
      return state;
    },
  },
});

const Store = configureStore({
  reducer: { TableData: HierarchicalTable.reducer },
});

export default Store;
