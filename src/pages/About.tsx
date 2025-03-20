import Footer from "../components/Footer";
import Header from "../components/Header";
import Github from "../assets/Github.svg"
import Linkedin from "../assets/linkedin.svg"

function About() {
  return (
    <div>
        <Header></Header>
        <main>
            <section className="h-80 bg-blue-900 flex justify-end align-bottom items-end bg-[url(https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/John_William_Waterhouse_-_The_Lady_of_Shalott_-_Google_Art_Project_edit.jpg/1280px-John_William_Waterhouse_-_The_Lady_of_Shalott_-_Google_Art_Project_edit.jpg)] bg-cover mb-30 lg:mb-15">
                <div className="border-4 rounded-full border-offWhite-100 h-60 w-60 overflow-hidden relative top-30 lg:right-50 right-30">
                    <img src="https://media.licdn.com/dms/image/v2/D4D03AQEZLNpwro8XJA/profile-displayphoto-shrink_800_800/B4DZVQp5qSGcAc-/0/1740814917091?e=1747872000&v=beta&t=iu6HxlpZS4YxHU72hgLSJXryksu8p47JOq9VlfLA5_w" className="h-fit"></img>
                </div>
            </section>

            <section className="lg:px-65 px-14 flex flex-col gap-10 justify-baseline pt-10 pb-20">
                <h2 className="font-[Manrope] font-[800] text-neutral-900 text-4xl">Daniel de Carvalho</h2>
                <p className="max-w-180 font-[Manrope] text-neutral-800 font-[500] text-lg">
                Passionate about technology with a strong foundation in several areas of IT.<br></br> I have experience in web development, automation, technical support and a deep interest in information security and low-level languages. Currently working with frontend development.
                </p>
                <p className="text-lg">For inquiries: <span className="underline"><a target="_blank" href="mailto://danieldevalho@gmail.com">danieldevalho@gmail.com</a></span></p>
            </section>

            <div className="flex justify-center gap-10 px-14 lg:px-65 py-10 border-t-1 border-slate-300">
                <div className="flex gap-2 items-center">
                    <img src={Github} className="w-8 h-8"></img>
                    <a href="https://github.com/Devalyo" target="_blank">
                        <div className="underline text-neutral-500">devalyo</div>
                    </a>

                </div>

                <div className="flex gap-2 items-center">
                    <img src={Linkedin} className="w-8 h-8"></img>
                    <a href="https://www.linkedin.com/in/danieldevalho/" target="_blank">
                        <div className="underline text-neutral-500">danieldevalho</div>
                    </a>

                </div>

            </div>

        </main>
        <Footer></Footer>
    </div>
  )
}

export default About