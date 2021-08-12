import { Provider } from "react-redux";
import "./styles.css";
import Routes from './routes'
import store from "./store";

export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Routes />
      </div>
    </Provider>
  );
}
