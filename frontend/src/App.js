import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
export const urlBackend = 'http://localhost:4000/api'
function App() {
  return (
    <div className="App">
      <Header />
      <Home />
    </div>
  );
}

export default App;
