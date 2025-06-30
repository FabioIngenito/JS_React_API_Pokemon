import { Link } from 'react-router-dom';
import { HomeIcon, HeartIcon } from '@heroicons/react/outline'; // Ícones do Heroicons

function Header() {
  return (
    <header className="bg-gray-800 shadow-md p-6">
      {/* Título do projeto */}
      <h1 className="text-2xl font-extrabold text-white text-center">
        TS_React_API_Pokemon
      </h1>
      {/* Navegação */}
      <nav className="mt-4 flex justify-center space-x-6">
        {/* Link para a página inicial */}
        <Link
          to="/"
          className="text-gray-300 hover:text-white flex items-center space-x-2 transition-colors duration-200"
        >
          <HomeIcon className="h-5 w-5" />
          <span>Home</span>
        </Link>
        {/* Link para a página de favoritos */}
        <Link
          to="/favorites"
          className="text-gray-300 hover:text-white flex items-center space-x-2 transition-colors duration-200"
        >
          <HeartIcon className="h-5 w-5" />
          <span>Favoritos</span>
        </Link>
      </nav>
    </header>
  );
}

export default Header;
