import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "electronics",
    label: "Electronics",
    value: 1500,
    prevalue: 1500,
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
      const { parent, child, isChild, updateValue, isDirect } = action.payload;
      if (isChild) {
        const updateState = state.map((value) => {
          if (value.id === parent) {
            return {
              ...value,
              children: value.children.map((childValue) => {
                if (childValue.id === child) {
                  return {
                    ...childValue,
                    prevalue: +childValue.value,
                    value: isDirect
                      ? +updateValue
                      : +childValue.value + +updateValue,
                  };
                }
                return childValue;
              }),
            };
          }
          return value;
        });

        return updateState.map((values) => {
          return {
            ...values,
            prevalue: values.value,
            value: values.children.reduce(
              (init, childValue) => +init + +childValue.value,
              0
            ),
          };
        });
      }
      return state;
    },
    // UpdateValueByDirectly: (state, action) => {
    //   const { parent, child, isChild, value } = action.payload;
    //   return state;
    // },
    UpdateValueBySubTotal: (state, action) => {
      const { parent, child, isChild, value } = action.payload;
      return state;
    },
  },
});

export const StoreAction = HierarchicalTable.actions;

const Store = configureStore({
  reducer: { TableData: HierarchicalTable.reducer },
});

export default Store;
