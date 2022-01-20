import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SelectableCursors } from "../../types/store/selection";

interface SelectionState {
  cursor: SelectableCursors; // this stores the current tool selected for cursor
  layer: string | null;
}

const initialState: SelectionState = {
  cursor: "cursor",
  layer: null,
};

const selectionSlice = createSlice({
  name: "selection",
  initialState,
  reducers: {
    selectCursor: (state, action: PayloadAction<SelectableCursors>) => {
      state.cursor = action.payload;
    },
    selectLayer: (state, action: PayloadAction<string | null>) => {
      state.layer = action.payload;
    },
  },
});

export const { selectCursor, selectLayer } = selectionSlice.actions;
export default selectionSlice.reducer;
