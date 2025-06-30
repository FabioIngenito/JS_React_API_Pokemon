import Input from "./Input";
import Button from "./Button";

export default function ExternalSearchForm({ username, onSubmit }) {
  return (
    <form className="mb-3 flex justify-center gap-8" onSubmit={onSubmit}>
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
  );
}
