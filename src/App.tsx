import Main from "./components/Main/Main";
import { Provider } from 'react-redux'
import store from '@store/config'
import "./assets/styles/index.scss"

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Main /> 
      </Provider>
    </div>
  );
}

export default App;
