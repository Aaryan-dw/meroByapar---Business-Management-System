import AppRoutes from "./routes/approutes";
import Navbar from "./components/navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <AppRoutes />
    </div>
  );
}

export default App;