import logo from './logo.svg';
import './App.css';
import MediaNotas from "./components/MediaNotas";
function App() {
  return (
    <div className="App">
      <MediaNotas nota1="6" nota2="8" nota="3"></MediaNotas>
    </div>
  );
}

export default App;
