import './App.css';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import RootRoute from './routes/RootRoute';

function App() {
  return (
   <Provider store={store} >
    <RootRoute />
   </Provider>
  );
}

export default App;
