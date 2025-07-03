import './App.css';
import Product from './components/product';
import list from "./list";

function App() {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {list.map((item) => (
          <Product key={item.id} product={item} />
        ))}
      </div>
  );
}

export default App;
