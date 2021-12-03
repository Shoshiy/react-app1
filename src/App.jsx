import "./App.css";
import { Router } from "./Components/Router/Router.jsx";
import {Provider} from "react-redux"
import { store } from "./Store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router />
      </Provider>
    </div>
  );
}

export default App;
