import { createStore } from "redux";
import countUpdate from "./reducer";

const store = createStore(countUpdate);

export default store;