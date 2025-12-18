import { HashRouter, Routes, Route } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <h1 className="text-4xl font-bold text-white">
        Cinesend Beta UI
      </h1>
    </div>
  );
}

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
