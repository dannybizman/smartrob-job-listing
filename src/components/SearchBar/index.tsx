"use client";

import { Search } from "lucide-react";
import { useState } from "react";

type Props = {
  onSearch: (term: string) => void;
};

export default function SearchBar({ onSearch }: Props) {
  const [query, setQuery] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value); 
  };

  return (
    <div className="relative flex items-center border rounded-full overflow-hidden bg-white">
      <Search className="absolute left-3 text-gray-400" size={16} />
      <input
        type="text"
        placeholder="Search jobs..."
        value={query}
        onChange={handleChange}
        className="pl-9 pr-3 py-2 outline-none text-sm w-48 text-black bg-white"
      />
    </div>
  );
}
