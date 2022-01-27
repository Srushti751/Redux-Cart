import './App.css';
import { Provider } from 'react-redux';
import ProductList from './Productredux/ProductList';
import { store } from './Productredux/store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
            <ProductList/>
        </Provider>
     {/* <ProductList/> */}
    </div>
  );
}

export default App;
