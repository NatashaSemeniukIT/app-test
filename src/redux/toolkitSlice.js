import { createSlice } from '@reduxjs/toolkit';

const toolkitSlice = createSlice( {
  name: "test-app",
  initialState: {
    users: [],
    selectedColumns: ['name', 'username', 'phone', 'company'],
    availableColumns: ['id', 'website', 'address', 'email']
  },
  reducers: {
    getUsers(state, { payload }) {
      state.users = [...payload];
    },
    getSelectedColumns(state, { payload }) {
      state.selectedColumns = [...payload];
    },
    getAvailableColumns(state, { payload }) {
      state.availableColumns = [...payload];
    }
  }
});

export default toolkitSlice.reducer;

export const { 
  getUsers, 
  getSelectedColumns, 
  getAvailableColumns
} = toolkitSlice.actions;
