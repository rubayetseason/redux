import { Middleware } from "@reduxjs/toolkit";

const logger: Middleware = (store) => (next) => (action) => {
  console.log("This is current state = ", store.getState());
  console.log("Action = ", action);
  next(action);
  console.log("This is updated state = ", store.getState());
};
export default logger;
