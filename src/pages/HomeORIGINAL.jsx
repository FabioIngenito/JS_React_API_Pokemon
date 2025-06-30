import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import ApiAxios from "../../src/services/api/ApiAxios";
import ApiGetPokeService from "../services/api/ApiGetPokeServices";
import Button from "../components/Forms/Button";
import Input from "../components/Forms/Input";
import useForm from "../Hooks/useForm";
import Topo from "../components/Helper/Topo";
import Mensagem from "../components/Helper/Mensagem";

function Home() {
  const [items, setItems] = useState([]); // Todos os itens
  const [searchTerm, setSearchTerm] = useState(""); // Termo de pesquisa interna
  const [filteredItems, setFilteredItems] = useState([]); // Itens filtrados
  const username = useForm(false); // Hook para o input de pesquisa da API externa. Mudado para false.

  // Efeito para carregar os itens da API quando o componente é montado
  useEffect(() => {
    ApiAxios()
      .then((data) => {
        setItems(data); // Armazena todos os itens originais
        setFilteredItems(data); // Inicialmente, os itens filtrados são todos os itens
      })
      .catch((error) => {
        console.error("Error fetching pokemons: ", error);
      });
  }, []); // Executa apenas uma vez na montagem

  // Efeito para filtrar a lista localmente com base em searchTerm
  useEffect(() => {
    const lowerCaseSearchTerm = searchTerm.toLowerCase().trim();

    if (lowerCaseSearchTerm) {
      // Se houver um termo de pesquisa, filtre os itens
      const filtered = items.filter((item) =>
        item.name.toLowerCase().includes(lowerCaseSearchTerm)
      ); // Pesquisa parcial.
      setFilteredItems(filtered);
    } else {
      // Se o termo de pesquisa estiver vazio, mostre todos os itens originais
      setFilteredItems(items);
    }
  }, [searchTerm, items]); // Depende de searchTerm e items

  if (!items.length) {
    return <p className="text-center text-gray-400">Carregando itens...</p>;
  }

  // Função para buscar um Pokémon na API externa com base no input do formulário
  function handleFind(event) {
    event.preventDefault(); // Impede o recarregamento da página

    const lowerCaseSearchTerm2 = username.value.toLowerCase().trim();

    if (lowerCaseSearchTerm2) {
      ApiGetPokeService(lowerCaseSearchTerm2)
        .then((data) => {
          // Se a busca na API externa for bem-sucedida, mostra apenas esse item
          setFilteredItems([data]);
        })
        .catch((error) => {
          console.error("Erro ao buscar pokemon na API:", error);
          // Se houver erro (Pokémon não encontrado), limpa os resultados
          setFilteredItems([]);
        });
    } else {
      // Se o campo de busca da API externa estiver vazio, redefinir para todos os itens
      setFilteredItems(items);
    }
  }

  return (
    <div>
      <Topo title="Home" description="Página Principal" />
      {/* Título da página */}
      <h2 className="text-3xl font-bold mb-6 text-center">Lista de Itens</h2>

      {/* Campo de pesquisa */}
      <div className="mb-6 flex justify-center">
        <input
          type="text"
          placeholder="Pesquise na lista carregada"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} // Atualiza o termo de pesquisa
          className="w-full max-w-md px-4 py-2 border border-gray-700 rounded-lg bg-gray-800 text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <form className="mb-3 flex justify-center gap-8" onSubmit={handleFind}>
        <Input
          label="Pokemon que não está na lista"
          placeholder="Pesquise na API pelo nome ou ID"
          type="text"
          name="username"
          className="w-96 pr-2 py-2 border border-gray-700 rounded-lg bg-gray-800 text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          {...username}
        />

        <Button>Buscar</Button>
      </form>

      {/* Lista de cartões */}
      <div className="flex flex-wrap justify-center">
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => <Card key={item.name} item={item} />)
        ) : searchTerm || username.value ? ( // Se há termo de pesquisa na lista interna ou externa
          <Mensagem mensagem="Nenhum Pokémon encontrado com este termo." />
        ) : (
          <Mensagem mensagem="Carregando itens ou nenhum item para exibir." /> // Caso inicial ou lista vazia sem pesquisa
        )}
      </div>
    </div>
  );
}

export default Home;
