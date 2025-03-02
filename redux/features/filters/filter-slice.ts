import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FiltersState {
  priceRange: [number, number];
  selectedSize: string;
  selectedColor: string;
  selectedStyle: string;
}

const initialState: FiltersState = {
  priceRange: [0, 1600], // Default range
  selectedSize: "",
  selectedColor: "",
  selectedStyle: "",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setPriceRange: (state, action: PayloadAction<[number, number]>) => {
      state.priceRange = action.payload;
    },
    setSelectedSize: (state, action: PayloadAction<string>) => {
      state.selectedSize = action.payload;
    },
    setSelectedColor: (state, action: PayloadAction<string>) => {
      state.selectedColor = action.payload;
    },
    setSelectedStyle: (state, action: PayloadAction<string>) => {
      state.selectedStyle = action.payload;
    },
    resetFilters: (state) => {
        state.selectedSize = "";
        state.selectedStyle = "";
        state.selectedColor = "";
        state.priceRange=[0,20000]
      },
  },
});

export const { setPriceRange, setSelectedSize, setSelectedColor, setSelectedStyle,resetFilters } = filtersSlice.actions;
export default filtersSlice.reducer;
