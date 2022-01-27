import { createStore } from "redux";
import Cartreducer from "./CartReducer";

export const store = createStore(Cartreducer)