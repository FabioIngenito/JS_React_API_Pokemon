import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Details from './pages/Details';
import Favorites from './pages/Favorites';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-900 text-gray-100">
        {/* Cabeçalho do app */}
        <Header />
        {/* Conteúdo principal */}
        <main className="flex-grow container mx-auto p-4">
          <Routes>
            {/* Rota para a página inicial */}
            <Route path="/" element={<Home />} />
            {/* Rota para a página de detalhes */}
            <Route path="/details/:id" element={<Details />} />
            {/* Rota para a página de favoritos */}
            <Route path="/favorites" element={<Favorites />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
