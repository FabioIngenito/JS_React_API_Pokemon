export default function SearchInput({ value, onChange }) {
  return (
    <input
      type="text"
      placeholder="Pesquise na lista carregada"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full max-w-md px-4 py-2 border border-gray-700 rounded-lg bg-gray-800 text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  );
}
