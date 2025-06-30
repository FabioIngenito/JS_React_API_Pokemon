import { useState, useEffect } from "react";
import ApiAxios from "../services/api/ApiAxios";

export default function useLocalItems() {
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    ApiAxios()
      .then((data) => {
        setItems(data);
        setFilteredItems(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  useEffect(() => {
    const term = searchTerm.toLowerCase().trim();
    setFilteredItems(
      term
        ? items.filter((item) => item.name.toLowerCase().includes(term))
        : items
    );
  }, [searchTerm, items]);

  return {
    items,
    filteredItems,
    searchTerm,
    setSearchTerm,
    setFilteredItems,
    loading,
  };
}
