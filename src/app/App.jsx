import Header from '../components/UI/Header';
import './App.css';
import { Provider } from "react-redux";
import { Router } from "./Router";
import { store } from "../store";

function App() {
  return (
    <Provider store={store}>
      <div className='container'>
        <Header />
        <Router />
      </div>
    </Provider>
  );
}

export default App;
