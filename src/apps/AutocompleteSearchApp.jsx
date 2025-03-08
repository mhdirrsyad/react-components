import searchIcon from "../assets/icons/search_icon.svg";
import { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";

const AutocompleteSearchApp = () => {
  const [searchValue, setSearchValue] = useState("");
  const [searchResult, setSearchResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchValueDebounce] = useDebounce(searchValue, 500);

  const fetchProductsData = async (searchValueParam) => {
    setLoading(true);
    setError(null);
    const response = await fetch(
      `https://dummyjson.com/products/search?q=${searchValueParam}&limit=10`,
    );

    if (!response.ok) {
      throw new Error("Failed to fetch products.");
    }

    const productsData = await response.json();
    setSearchResult(productsData);
  };

  const handleSearch = (e) => {
    setSearchValue(e.target.value);
  };

  useEffect(() => {
    try {
      if (searchValueDebounce && searchValueDebounce.length !== 0) {
        fetchProductsData(searchValueDebounce);
      } else {
        setSearchResult(null);
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }, [searchValueDebounce]);

  return (
    <div className="flex justify-center pt-24 min-h-dvh">
      <div className="relative w-112 max-w-xl flex flex-col px-2 md:px-0">
        {/* Search Bar */}
        <div className="relative flex border-1 w-full border-gray-500 rounded-sm items-center px-3 py-2 overflow-hidden">
          <img src={searchIcon} alt="Search Icon" className="w-6" />
          <input
            type="text"
            placeholder="Search products"
            value={searchValue}
            className="absolute left-11 right-0 outline-none placeholder:text-gray-500 text-md focus:left-3 focus:bg-white flex transition-all duration-300"
            onChange={handleSearch}
          />
        </div>

        <div className="absolute top-12 left-0 right-0 z-10 shadow-md">
          {/* Loading handling */}
          {loading && <p className="text-xl p-3 text-center">Loading...</p>}

          {/* Search results */}
          {searchResult && searchResult.products.length > 0 && (
            <ul className="divide-y divide-gray-100 rounded-md max-h-60 overflow-auto">
              {searchResult.products.map((product) => (
                <li key={product.id}>
                  <a href="#" className="p-3 hover:bg-gray-100 block">
                    {product.title}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default AutocompleteSearchApp;
