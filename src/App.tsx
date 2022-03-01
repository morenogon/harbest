// styles
import './App.scss';

// components
import WebPages from './pages';

// hooks
import { useProductsHook } from './hooks/useProductsHook';

const App = () => {

  useProductsHook();

  return (
    <div className="app">
      <WebPages />
    </div>
  );
}

export default App;
