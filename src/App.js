import "./App.css";
import ParticleBackground from "./components/ParticleBackground/ParticleBackground";
import AppRouter from "./Router/AppRouter";

function App() {
  return (
    <div className="App">
      <AppRouter />
      <ParticleBackground className="particles" />
    </div>
  );
}

export default App;
