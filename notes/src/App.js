import { Provider } from "react-redux";

import store from './store'
import Router from './Router';
import "./App.css";

function App() {
  return (
    <div className="App">
      <div>
        <Provider store={store}>
          <Router />
        </Provider>
      </div>
    </div>
  );
}

export default App;
