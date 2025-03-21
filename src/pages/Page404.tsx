import { Link } from "react-router";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { ArrowRight, Ghost } from "lucide-react";

function Page404() {
  return (
    <>
        <Header></Header>
        <main className="flex gap-0 lg:h-[85vh] h-[150vh] lg:flex-row flex-col">
            <div className="lg:w-1/2 flex flex-col gap-12 lg:pl-65 px-20 lg:px-0 align-middle items-baseline pt-50 pb-50">
                <div>
                    <h1 className="font-[Manrope] font-[700] text-9xl mb-5 text-neutral-900">404</h1>
                    <p className="text-3xl">Pagina não encontrada, desculpe.</p>
                </div>
                    <Link to={"/"}>


                    <div>
                        <button className='cursor-pointer bg-neutral-900 text-white px-15 py-5 rounded-md flex items-center gap-2 justify-center h-15 w-auto'>
                        <span className="text-2xl font-[500]">Voltar ao Início</span>
                        <ArrowRight/>
                        </button>
                    </div>
                    
                    </Link>
            </div>
             <div className="lg:w-1/2 bg-neutral-900 flex items-center justify-center flex-1">
                <Ghost size={350}  height="500" color="white"/>
            </div>
        </main>
        <Footer></Footer>
    </>
  )
}

export default Page404;