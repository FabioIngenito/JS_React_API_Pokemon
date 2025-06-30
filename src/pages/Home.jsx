import Topo from "../components/Helper/Topo";
import Mensagem from "../components/Helper/Mensagem";
import CardList from "../components/CardList";
import SearchInput from "../components/Forms/SearchInput";
import ExternalSearchForm from "../components/Forms/ExternalSearchForm";
import useLocalItems from "../Hooks/useLocalItems.jsx";
import useExternalSearch from "../Hooks/useExternalSearch";

function Home() {
  const {
    items,
    filteredItems,
    searchTerm,
    setSearchTerm,
    setFilteredItems,
    loading,
  } = useLocalItems();

  const { username, handleFind } = useExternalSearch(setFilteredItems, items);

  if (loading)
    return <p className="text-center text-gray-400">Carregando itens...</p>;

  return (
    <div>
      <Topo title="Home" description="Página Principal" />
      <h2 className="text-3xl font-bold mb-6 text-center">Lista de Itens</h2>

      <div className="mb-6 flex justify-center">
        <SearchInput value={searchTerm} onChange={setSearchTerm} />
      </div>

      <ExternalSearchForm username={username} onSubmit={handleFind} />

      <div className="flex flex-wrap justify-center">
        {filteredItems.length > 0 ? (
          <CardList items={filteredItems} />
        ) : searchTerm || username.value ? (
          <Mensagem mensagem="Nenhum Pokémon encontrado com este termo." />
        ) : (
          <Mensagem mensagem="Carregando itens ou nenhum item para exibir." />
        )}
      </div>
    </div>
  );
}

export default Home;
