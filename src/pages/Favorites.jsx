import React from 'react';
import Card from '../components/Card';
import { FavoritesContext } from '../contexts/FavoritesContext';
import Topo from '../components/Helper/Topo';

function Favorites() {
  //Context -> gerenciador de esttado global.
  const { favorites } = React.useContext(FavoritesContext); // Acessa os favoritos do contexto

  return (
    <div>
      <Topo title="Favoritos" description="Lista de Favoritos" />
      <h2 className="text-2xl font-bold mb-4">Seus Favoritos</h2>
      {favorites.length === 0 ? (
        // Mensagem caso não haja favoritos
        <p>Você ainda não adicionou nenhum favorito.</p>
      ) : (
        // Exibe os favoritos em forma de cartões
        <div className="flex flex-wrap">
          {/* {favorites.map((item) => (
            <Card key={item.id} item={item} />
          ))} */}

          {favorites.map((item) => {
            // Fiz alguma "confusão" neste ponto:
            item.name = item.id;
            return (
              <React.Fragment key={item.id}>
                <Card key={item.id} item={item} />
                {/* <div>{console.log(`ITEM.ID: ${item.id}`)}</div> */}
                {/* <div>{console.log(`ITEM.NAME: ${item.name}`)}</div> */}
              </React.Fragment>
            );
          })}

          {/* {console.log(`Favorites[0]: ${favorites[0].id}`)} */}
        </div>
      )}
    </div>
  );
}

export default Favorites;
