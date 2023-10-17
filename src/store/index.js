const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
  },
});

export default store;
