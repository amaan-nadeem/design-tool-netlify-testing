import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type SelectableCursors = "rectangle" | "text" | "pen" | "cursor";
interface SelectionState {
  cursor: SelectableCursors; // this stores the current tool selected for cursor
}

const initialState: SelectionState = {
  cursor: "cursor",
};

const selectionSlice = createSlice({
  name: "selection",
  initialState,
  reducers: {
    selectCursor: (state, action: PayloadAction<SelectableCursors>) => {
      state.cursor = action.payload;
    },
  },
});

export const { selectCursor } = selectionSlice.actions;
export default selectionSlice.reducer;
