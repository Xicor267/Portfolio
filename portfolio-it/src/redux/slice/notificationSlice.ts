import { createSlice } from "@reduxjs/toolkit";
import { ReactNode } from "react";

export interface INotification {
  message: string | null;
  description: string | null;
  icon: ReactNode | null;
  visible: boolean;
}

const initialState: INotification = {
  message: null,
  description: null,
  icon: null,
  visible: false
}

const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    showNotification: (state, action) => {
      state.message = action.payload.message;
      state.description = action.payload.description;
      state.icon = action.payload.icon;
      state.visible = true;
    },
    hideNotification: (state) => {
      state.visible = false;
    },
  }
})

export const { showNotification, hideNotification } = notificationSlice.actions;
export default notificationSlice.reducer;