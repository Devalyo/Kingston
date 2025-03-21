/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import ListingItem from "../components/ListingItem";
import { Product } from "../types/productType";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Link } from "react-router";
import X from "../assets/X.png";
import Previous from "../assets/previous.svg"
import next from "../assets/next.svg"

const ListingPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [maxPrice, setMaxPrice] = useState<number>(99.99);
  const [priceFilter, setPriceFilter] = useState<number>(99.99);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pages, setPages] = useState<number>(1);
  const [tempPriceFilter, setTempPriceFilter] = useState<number>(50);
  const [totalItems, setTotalItems] = useState<number>(20);
  const [isInitialLoad, setIsInitialLoad] = useState<boolean>(true);

  const extractCategories = (products: Product[]) => {
    const uniqueCategories = [...new Set(products.map((product) => product.category))];
    setCategories(uniqueCategories);
  };

  const handleSelectedCategories = (cat : string) => 
  {
    if(selectedCategory == cat)
      {
        setSelectedCategory("")
      }
      else
      {
        setSelectedCategory(cat);
      }
    }

  const fetchProducts = async () => {
    try {
      let url = `http://localhost:3000/products?_page=${currentPage}&_per_page=9`;
      if (selectedCategory) url += `&category=${selectedCategory}`;
      
      const response = await fetch(url);
      
      const responseText = await response.text();
      console.log("Response:", responseText);
      
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      
      const data = JSON.parse(responseText); 
      let filtered = data.data;
      setPages(data.pages)
      setTotalItems(data.items)
      
      if (searchQuery) {
        filtered = filtered.filter((product : Product) => product.name.toLowerCase().includes(searchQuery.toLowerCase()))
      }

      if(!isInitialLoad && priceFilter !== maxPrice) {
        filtered = filtered.filter((product : Product) => product.price <= priceFilter);
      }

      if(categories.length === 0) {
        extractCategories(filtered);
      }

      if(isInitialLoad) {
        const newMaxPrice = Math.ceil(Math.max(50, ...filtered.map((p: Product) => p.price)));
        setMaxPrice(newMaxPrice);
        setPriceFilter(newMaxPrice);
        setTempPriceFilter(newMaxPrice);
        setIsInitialLoad(false);
      }
      
      setProducts(filtered);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };
  
  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    if (!isInitialLoad) {
      fetchProducts();
    }
  }, [selectedCategory, searchQuery, priceFilter, currentPage]);
  
  useEffect(() => {
    if (!isInitialLoad) {
      setTempPriceFilter(maxPrice);
    }
  }, [maxPrice]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!isInitialLoad) {
        setPriceFilter(tempPriceFilter); 
      }
    }, 500); 
    
    return () => clearTimeout(timeout); 
  }, [tempPriceFilter]); 

  return (
    <>
      <Header />
      <nav className="mb-4 text-neutral-500 bg-offWhite-200 py-8 lg:px-65 px-14">
        <Link to={'/'}>Ecommerce</Link> &gt; <span className="text-neutral-900">Search</span>
      </nav>

      <div className="flex flex-col lg:flex-row gap-4 lg:pl-20 2xl:pl-65 px-14 lg:px-0">
        <aside className="lg:w-1/6 min-w-80 py-8 px-5 border-neutral-100 rounded-2xl border-1 min-h-100 h-fit">
          <div>
            <h3 className="text-md mb-8 text-neutral-900 font-[500]">Categories</h3>
            <ul className="flex flex-col gap-5 text-slate-400">
              { categories.length > 0? categories.map((cat) => (
                <li key={cat}>
                  <div className="flex items-center gap-2 border-b border-b-slate-200 pb-3">
                    <div
                      className={`flex items-center justify-center border-2 rounded-sm w-6 h-6 border-slate-200 cursor-pointer transition-all ${selectedCategory === cat
                        ? "border-2 border-neutral-500 bg-neutral-700"
                        : ""
                      }`}
                      onClick={() => handleSelectedCategories(cat)}>
                      {selectedCategory === cat? <span className="!text-white text-[12px] leading-none">&#10003;</span> : ""}
                    </div>
                    <span className="text-neutral-600">{cat}</span>
                  </div>
                </li>
              )): <div>Categories not Found</div>}
            </ul>
          </div>

          <div className="my-10">
            <h3 className="text-lg py-5">Price</h3>
            <input
              type="range"
              min="0"
              max={maxPrice}
              value={tempPriceFilter}
              onChange={(e) => setTempPriceFilter(Number(e.target.value))}
              className="accent-neutral-800"
            />
            <span>${tempPriceFilter}</span>
          </div>
        </aside>

        <main className="lg:w-5/6 min-h-200 lg:pr-20 2xl:pr-65">
          <div className="flex flex-col lg:flex-row justify-between lg:pl-10">
            <div className="">
              <h3 className="font-semibold mb-5">Applied Filters: </h3>

              <div className="flex gap-3 mb-5">
                {selectedCategory ? 
                  <div className="border rounded-4xl border-slate-300 px-4 w-fit flex items-center gap-3">
                    {selectedCategory}
                    <span onClick={() => setSelectedCategory("")}><img className="w-7" src={X} alt="Remove filter" /></span>
                  </div> : ""
                }
                {!isInitialLoad && priceFilter !== maxPrice ?
                  <div className="border rounded-4xl border-slate-300 px-4 w-fit flex items-center gap-3">
                    ${priceFilter}
                    <span onClick={() => setPriceFilter(maxPrice)}><img className="w-7" src={X} alt="Remove filter" /></span>
                  </div> : ""
                }
              </div>
            </div>
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-5 py-3 border-slate-300 border rounded-md mb-4 max-h-13 max-w-80"
            />
          </div>
      
          <div className="text-neutral-500 lg:pl-10 pb-4 pt-4">
            Showing {1 + "-" + totalItems / pages} of {totalItems} results
          </div>

          {isInitialLoad ? (
            <div className="flex items-center justify-center h-64">
              <p className="text-neutral-500">Loading products...</p>
            </div>
          ) : products.length > 0 ? (
            <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 py-5 xl:gap-25 md:gap-10 lg:pl-10">
              {products.map((product) => (
                <ListingItem
                  key={product.id}
                  imageSrc={product.image[0]}
                  title={product.name}
                  label={product.stock > 0 ? "In Stock" : "No Stock"}
                  price={`$${product.price}`}
                  url={product.id}
                />
              ))}
            </div>
          ) : (
            <p className="text-neutral-500 italic text-center mt-4">No products found</p>
          )}

          <div className="flex align-middle justify-center gap-2 px-2 py-10">
            <div className="flex gap-5 border rounded-md border-slate-200 h-10 w-50 justify-around align-middle items-center max-w-fit py-6 px-5">
              <button
                disabled={currentPage === 1}
                onClick={() => {
                  setCurrentPage((prev) => prev - 1); 
                  window.scrollTo(0,0);
                }}
                className="p-2 disabled:opacity-50 cursor-pointer disabled:cursor-default"
              >
                <img src={Previous} alt="Previous page" />
              </button>
              <div className="flex justify-center align-middle text-center rounded font-[700] bg-offWhite-200 w-10 h-8 items-center">{currentPage}</div>
              <button
                disabled={currentPage === pages}
                onClick={() => setCurrentPage((prev) => prev + 1)}
                className="p-2 disabled:opacity-50 cursor-pointer disabled:cursor-default"
              >
                <img src={next} alt="Next page" />
              </button>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default ListingPage;