import Header from '../components/Header'
import Footer from '../components/Footer'
import Button from '../components/Button'
import HeroGuy from '../assets/heroGuy.png'
import Truck from '../assets/truckIcon.svg'
import Medal from '../assets/medalIcon.svg'
import ShieldCheck from '../assets/shieldCheck.svg'
import Circle from '../assets/heroCircle.svg'
import Glitter from '../assets/heroGlitter.svg'
import Blouse from '../assets/blouseCall.png'
import ListingItem from '../components/ListingItem'
import { Link } from 'react-router'
import { Product } from '../types/productType'
import { useEffect, useState } from 'react'






function HomeNoAuth() {
    const [products, setProducts] = useState<Product[]>([]);
    
    useEffect(() => {
        fetch("http://localhost:3000/products/")
            .then((response) => response.json())
            .then((data: Product[]) => {console.log(data); if(data) setProducts(data)});
    }, []);

  return (
    <div>

        <Header></Header>

        <div className='h-auto flex align-center flex-col'>

            <section className='md:pl-65 pl-34 grid lg:grid-cols-2 w-full bg-offwhite-200 pt-20 gap-40 grid-cols-1'>
                <div className='flex flex-col gap-10 justify-items-center justify-center'>
                    <div className='flex flex-col gap-5'>
                        <h1 className='text-neutral-800 text-4xl font-[600]'>Fresh Arrivals Online</h1>
                        <p className='text-neutral-600'>Discover Our newest Collection Today</p>
                    </div>
                    <Link to={"/shop"}><Button arrow={true} text='View Collection' width={51}></Button></Link>
                </div>
                <div className='flex align-bottom'>
                    <div className='relative'>
                        <img src={HeroGuy} className='h-100 overflow-hidden z-0'></img>
                        <img className='absolute top-20 z-[-1] scale-130 right-8' src={Circle}></img>
                        <img className='absolute top-10 right-70' src={Glitter}></img>
                    </div>
                </div>
            </section>

        <section className='flex flex-col md:flex-row align-middle justify-center gap-20 md:h-130 h-300 items-center flex-wrap'>

            <div className='max-w-80 flex flex-col gap-5'>
                <div>
                <img src={Truck}></img>
                </div>
                <div className='text-neutral-800 font-[800]'>Free Shipping</div>
                <div className='text-neutral-500'>Upgrade your style today and get FREE shipping on all orders! Don't miss out.</div>
            </div>
            
            <div className='max-w-80 flex flex-col gap-5'>
                <div>
                    <img src={Medal}></img>
                </div>
                <div>
                    <div className='text-neutral-800 font-[800]'>Satisfaction Guarantee</div>
                    <div className='text-neutral-500'>Shop confidently with our Satisfaction Guarantee: Love it or get a refund.</div>
                </div>
            </div>

            <div className='max-w-80 flex flex-col gap-5'>
                <div>
                    <img src={ShieldCheck}></img>
                </div>
                <div>
                    <div className='text-neutral-800 font-[800]'>Secure Payment</div>
                    <div className='text-neutral-500'>Your security is our priority. Your payments are secure with us.</div>
                </div>
            </div>

        </section>

        <section className='pb-60 flex flex-col items-center'>

            <div className='flex justify-center p-35'>
                <div className='flex flex-col gap-3 items-start justify-center'>
                    <p className='text-neutral-300 text-sm'>SHOP NOW</p>
                    <h1 className='font-[700] text-neutral-900 text-3xl'>Best Selling</h1>
                </div>
            </div>

            <div className='flex lg:flex-row flex-col gap-15 justify-center flex-wrap'>
            {products.slice(0, 4).map((product) => (
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

        <section className='bg-offWhite-200 md:h-90 h-full pb-30 flex flex-col lg:flex-row gap-20 px-10 lg:px-65 items-center justify-between'>

            <div className='flex flex-col gap-10 w-full lg:w-200 mt-25'>
                <div className='text-3xl font-[700] text-neutral-900'>Browse Our Fashion Paradise</div>
                <div className='text-neutral-500 md:max-w-160'>Step into a world of style and explore our diverse collection of clothing categories.</div>
                <Button arrow={true} text='Start Browsing'></Button>
            </div>

            <div className='w-full h-full flex align-baseline'>
                <img src={Blouse} className='relative scale-150 left-130 top-15 hidden 2xl:block'></img>
             </div>

        </section>


        <section className='py-40 items-center flex flex-col'>

            <div className='mx-auto max-w-25 text-center border border-offWhite-300 px-4 py-1 rounded-2xl'>On Offer</div>
            <div className='flex lg:flex-row flex-col gap-15 justify-center flex-wrap py-20'>
            {products.slice(4,8).map((product) => (
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


    </div>

    <Footer></Footer>
</div>
)
}

export default HomeNoAuth