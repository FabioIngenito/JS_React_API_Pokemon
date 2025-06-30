import useForm from "../Hooks/useForm";
import ApiGetPokeService from "../services/api/ApiGetPokeServices";

export default function useExternalSearch(setFilteredItems, items) {
  const username = useForm(false);

  function handleFind(event) {
    event.preventDefault();
    const term = username.value.toLowerCase().trim();
    if (term) {
      ApiGetPokeService(term)
        .then((data) => setFilteredItems([data]))
        .catch(() => setFilteredItems([]));
    } else {
      setFilteredItems(items);
    }
  }

  return { username, handleFind };
}
