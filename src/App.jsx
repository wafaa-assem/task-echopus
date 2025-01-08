import Navbar from "./components/Navbar/Navbar";
import AppRoutes from "./routes";

const App = () => {
  return (
    <div className="bg-black min-h-screen text-white">
      <Navbar />
      <AppRoutes />
    </div>
  );
};

export default App;
