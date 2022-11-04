import './App.css';
import Header from './components/Header';
import Welcome from './components/Welcome';

import Products from './components/Products';

function App() {
  return (
    <div className='App'>
      <Header />
      <Welcome />
      <Products />
    </div>
  );
}

export default App;
