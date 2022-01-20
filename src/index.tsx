import ReactDOM from "react-dom";
import { Provider } from "react-redux";

// Components
import App from "./App";

//
import "./styles/global.css";
import store from "./store";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
