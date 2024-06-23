"use client"
import React, { useEffect, useState } from "react";
import truncate from "html-truncate";
interface SearchResult {
  id: number;
  is_available: boolean;
  title: string;
  images: Image[];
  product: number;
  attribute_value: number[];
  other_detail: string;
  price: string;
  price_with_discount: string | null;
  quantity: number;
}
interface Image {
  image: string;
  image_id: number;
}

export const SearchProduct = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  useEffect(() => {
    const fetchSearchResults = async () => {
      if (searchQuery) {
        try {
          const response = await fetch(
            `http://135.181.108.207/product_variant/?search=${searchQuery}`
          );
          const data = await response.json();
          setSearchResults(data.results);
        } catch (error) {
          console.error("Error fetching search results:", error);
        }
      }
    };

    fetchSearchResults();
  }, [searchQuery]);
  return (
    <div>
      {" "}
      <form className="xs:flex s:hidden flex justify-between w-full border-2 border-primary rounded-[30px] relative">
        <div className="py-[17px] flex-grow">
          <select
            name=""
            id=""
            className="pl-[22px] mr-[22px] border-r bg-transparent border-none outline-none"
          >
            <option value="">All categories</option>
            <option value="">eng</option>
          </select>
          <span className="text-silverSetting mr-4">|</span>
          <input
            type="search"
            placeholder="Search Products…"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="outline-none "
          />
        </div>
        <button
          type="button"
          className="text-bigStone px-9 py-3 bg-primary font-medium rounded-searchBtn text-sm"
        >
          Search
        </button>
      </form>
      {searchQuery.length > 0 && (
        <div className="search-results absolute top-full left-0 right-0 mt-2 bg-white border border-gray-300 rounded-lg shadow-lg z-10 max-h-[500px] overflow-y-auto">
          {searchResults.map((item: SearchResult) => (
            <div
              key={item.id}
              className="search-result-item p-4 border-b last:border-0"
            >
              <h2 className="font-bold text-lg">{item.title}</h2>
              <img
                src={item.images[0].image}
                alt={item.title}
                className="w-[200px] mt-2 mb-4"
              />
              <div
                className="text-sm mb-2"
                dangerouslySetInnerHTML={{
                  __html: truncate(item.other_detail, 200),
                }}
              ></div>
              <p className="text-sm font-medium">Price: ${item.price}</p>
              {item.price_with_discount && (
                <p className="text-sm text-red-600">
                  Discounted Price: ${item.price_with_discount}
                </p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
