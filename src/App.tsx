import Main from "./components/Main/Main";
import { Provider } from 'react-redux'
import { persistor, store} from '@store/config'
import { PersistGate } from 'redux-persist/integration/react';
import "./assets/styles/index.scss"

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Main /> 
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
