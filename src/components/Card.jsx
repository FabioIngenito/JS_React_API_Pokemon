import { Link } from 'react-router-dom';
import ApiAxiosPhoto from '../services/api/apiAxiosPhoto';

function Card({ item }) {
  return (
    <div className="border border-gray-700 rounded-lg shadow-md p-6 m-4 w-full md:w-1/3 bg-gray-800 hover:shadow-lg transition-shadow duration-300">
      {/* Título do item */}
      <h3 className="text-xl font-bold text-gray-100 mb-3">
        {item.name || 'Título Placeholder'}
      </h3>

      {/* Descrição do item */}
      {/* <img
        src={item.url}
        alt={item.title || 'Imagem do item'}
        className="mb-4 rounded-lg"
      /> */}

      {/* Imagem do item */}
      {/* {item.title && (
        // <img
        //   src={item.src}
        //   alt={item.title || 'Imagem do item'}
        //   className="mb-4 rounded-lg"
        // />
        <ApiAxiosPhoto />
        )} */}

      <ApiAxiosPhoto nomePoke={item.name} />

      {/* Link para detalhes */}
      <Link
        to={`/details/${item.name || 2}`}
        className="text-blue-400 font-medium hover:text-blue-600 hover:underline transition-colors duration-200"
      >
        Ver Detalhes
      </Link>
    </div>
  );
}

export default Card;
