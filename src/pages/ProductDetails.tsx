/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { Product } from "../types/productType";
import { Link, useParams } from 'react-router';
import Header from "../components/Header";
import Footer from "../components/Footer";
import Share from "../assets/share.svg";
import Star from "../assets/star.svg";
import { Minus, Plus } from "lucide-react";
import More from "../assets/More.svg";
import ListingItem from "../components/ListingItem";

const ProductDetails = () => {
    const id = useParams().productId;
    const [product, setProduct] = useState<Product | null>(null);
    const [similarProducts, setSimilarProducts] = useState<Product[] | null>(null);
    const [selectedColor, setSelectedColor] = useState<string | null>(null);
    const [selectedSize, setSelectedSize] = useState<string | null>(null);
    const [quantity, setQuantity] = useState<number>(1);

    useEffect(() => {
        fetch(`http://localhost:3000/products/${id}`)
            .then((response) => response.json())
            .then((data: Product) => {console.log(data); setProduct(data)});
        }, []);
        
        useEffect(() =>
            {
                if(product)
                    {
                        setSelectedColor(product.colors.length === 1? product.colors[0] : null);
                        setSelectedSize(product.sizes.length === 1? product.sizes[0] : null)
                        fetch(`http://localhost:3000/products?category=${product?.category}`)
                        .then((response) => response.json() as Promise<Product[]>) 
                        .then((data) => {  console.log(data); setSimilarProducts(data.slice(0, 4));});
                    
                        
                    }

    }, [product])

    if (!product) return (
        <>
            <Header></Header>
            <p>Loading...</p>;
            <Footer></Footer>
        </>
    )

    return (
        <div>
            <Header></Header>
            <nav className="mb-4 text-neutral-500 py-5 px-5 lg:px-65 flex gap-4">
                <Link to={'/'}>Ecommerce</Link> &gt; <span className="text-neutral-900">{product.name}</span>
            </nav>

            <main className="flex flex-col xl:flex-row xl:mx-65 md:mx-35 h-full">
                <div className="lg:w-1/2 bg-offWhite-200 h-full">
                    <div className="flex justify-center items-center h-5/6">
                        <img className="block min-w-100" src={product.image[0]}></img>
                    </div>
                </div>

                <div className="flex flex-col gap-5 lg:w-1/2 pl-7 lg:pl-30 py-3">
                    <div className="flex justify-between">
                        <h1 className="font-[700] text-neutral-900 text-3xl">{product.name}</h1>
                        <img src={Share}></img>
                    </div>
                    <div className="flex gap-2">
                        <div className="bg-offWhite-200 rounded-3xl flex gap-4 min-w-55 items-center font-[500] text-neutral-500 px-5">
                                <img src={Star} className="w-5"></img>
                                <p>{product.stars} - {product.reviewCount} Reviews</p>
                        </div>
                        <div className='border border-offWhite-300 px-4 py-1 rounded-2xl max-w-fit text-neutral-500'>
                            {product.stock > 0 ? "IN STOCK" : "NO STOCK"}
                        </div>
                    </div>
                    <p className="font-[600] text-neutral-900 text-2xl">${product.price}</p>
                    {product.stock > 0 && ( <>
                        <div>
                            <h3 className="text-neutral-500 font-[500] text-sm">AVAILABLE COLORS</h3>
                            <div className="flex gap-6 mt-3">
                            {product.colors.map((color) => (
                                <div key={color} className={`flex items-center justify-center cursor-pointer w-10 h-10 rounded-full saturate-60 ${
                                    selectedColor === color ? "border border-slate-900" : ""}`} onClick={() => setSelectedColor(color)}><div className="w-7 h-7 rounded-full" style={{backgroundColor: color.toLowerCase()}}>
                                    </div>
                                </div>
                            ))}
                            </div>
                        </div>
                        <div>
                            <h3 className="text-neutral-500 font-[500] text-sm mt-4">SELECT SIZE</h3>
                            <div className="flex gap-4">
                                {product.sizes.map((size) => (
                                <div
                                    className={`text-center p-2 w-12 h-11 border cursor-pointer rounded-md text-neutral-500 font-[500] mt-3 ${
                                    selectedSize === size ? "border-neutral-900" : "border-slate-200"
                                    }`}
                                    key={size}
                                    onClick={() => {
                                    setSelectedSize(size);
                                    }}
                                >
                                    {size}
                                </div>
                                ))}
                            </div>
                        </div>
                        <div>
                            <h3 className="text-neutral-500 font-[500] text-sm mt-4">QUANTITY</h3>
                            <div className="mt-4 flex gap-12 border rounded-md border-slate-200 h-10 w-50 justify-around items-center max-w-fit py-6 px-5">
                                <button onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}><Minus size={20} color="DarkSlateGray"></Minus></button>
                                <span>{quantity}</span>
                                <button onClick={() => setQuantity((prev) => prev + 1)}><Plus size={20} color="DarkSlateGray"></Plus></button>
                            </div>
                        </div>
                        <div>
                            <button className={`${selectedColor && selectedSize? " bg-neutral-900 cursor-pointer" : "bg-neutral-200 disabled"}  text-white px-8 py-3 rounded-md flex items-center gap-2 justify-center h-12 w-80 mt-5`}>
                                <span>Add to cart</span>
                            </button>
                        <div className="text-neutral-500 font-[400] mt-5 text-sm">— FREE SHIPPING ON ORDERS $100+</div>
                        </div>
                    </>
            )}
                </div>
            </main>

                <section className="flex items-center gap-11 xl:px-65 lg:mt-40   lg:mb-40">

                    <div className="flex items-center gap-3 px-10 w-full max-w-80 py-3 rounded-md bg-offWhite-200">
                        <img src={More}></img>
                        <div className="text-neutral-900 font-[500]">Details</div>
                    </div>

                    <div className="flex-col flex justify-center min-h-50 max-w-150">
                        <h2 className="font-neutral-900 font-[700] mb-5 text-lg">Detail</h2>
                        <p className="text-neutral-500 text-md">{product.details}</p>
                    </div>

                </section>


                <section className="lg:px-65 px-10 font-[700] text-2xl py-30">
                    <div>
                        <h1 className="mb-2">You might also like</h1>
                        <h3 className="text-neutral-500 font-[500] text-sm">SIMILAR PRODUCTS</h3>
                    </div>

                    <div className="flex flex-wrap md:justify-between justify-center py-10 items-center gap-2">
                        {similarProducts?.map((product) => (
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
                </section>

        <Footer></Footer>
        </div>
    );
};

export default ProductDetails;
