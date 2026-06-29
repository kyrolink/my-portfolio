import DataImage from "../data";
import {listTools, listProyek} from "../data";

import { Link } from "react-router-dom";

function Home(){

  return(
    <>
      {/* ================== SECTION HERO ================== */}
      <div className="hero grid md:grid-cols-2 items-center pt-10 xl:gap-0 gap-6 grid-cols-1">
        <div className="animate__animated animate__fadeInUp">
          <div className="flex items-center gap-3 mb-6 bg-[#efbe69] w-fit p-4 rounded-2xl">
            <img src={DataImage.HeroImage} alt="Hero Image" className="w-10 rounded-b-md" loading="lazy"/>
            <q> Creating meaningful communication through creativity, strategy, and collaboration </q>
          </div>
          <h1 className="text-5xl/tight font-bold mb-6">Hi, It's Me Tracy</h1>
          <p className="text-base/loose mb-6 opacity-50 text-justify">
            A versatile professional with 3+ years of experience spanning creative strategy, public relations, marketing, and large-scale television production. Proven track record in leading end-to-end projects, developing impactful campaigns, and collaborating with cross-functional stakeholders to transform ideas into engaging audience experiences and measurable business outcomes
          </p>
          <div className="flex items-center sm:gap-4 gap-2">
            <a href="/assets/Resume.pdf" download className="bg-[#f2a013]  hover:bg-[#de6f1b] p-4 rounded-2xl ">Download Resume <i className="ri-download-line ri-lg"></i></a>
            <a href="https://gchmcmhc.my.canva.site/tracyaraunaportfolio" className="bg-[#df5c0b]  hover:bg-[#e69238] p-4 rounded-2xl">My Portfolio <i className="ri-arrow-down-line ri-lg"></i></a>
          </div>
        </div>
        <img src={DataImage.HeroImage} alt="Hero Image" className="animate__animated animate__fadeInUp w-350px md:ml-auto" loading="lazy"/>
      </div>
      
      {/* ================== About ================== */}
      <div className="about mt-32 py-10" id="about">
        <div className="xl:w-2/3 lg:w-3/4 w-full mx-auto p-7 bg-[#efbe69] rounded-lg" data-aos="fade-up" data-aos-duration="1000" data-aos-once = "true">
          <img src={DataImage.HeroImage} alt="Image" className="w-12 rounded-md mb-10 sm:hidden" loading="lazy"/>
          <p className="text-base/loose mb-10 text-justify">Hi, <b>I'm Tracy Arauna Triyanto </b>, a communication professional specializing in Public Relations, Creative Planning, and Business Development. I hold a Bachelor's degree in Communication Studies from President University.
              <br />
              <br />
              With experience across strategic communication, digital branding, business development, and media production, I enjoy transforming ideas into impactful strategies. I am passionate about building strong relationships, driving creative initiatives, and delivering 
              meaningful results through collaboration, innovation, and effective communication.</p>
          <div className="flex items-center justify-between">
            <img src={DataImage.HeroImage} alt="Image" className="w-12 rounded-md sm:block hidden" loading="lazy"/>
            <div className="flex items-center gap-6">
              <div>
                <h1 className="text-4xl mb-1">50 <span className="text-orange-500">+</span></h1>
                <p>Project's</p>
              </div>
              <div>
                <h1 className="text-4xl mb-1">3 <span className="text-orange-500">+</span></h1>
                <p>Years of Experiences</p>
              </div>
            </div>
          </div>
        </div>

        {/* ================== Tools ================== */}
        {/* <div className="tools mt-32">
          <h1 className="text-4xl/snug font-bold mb-4" data-aos="fade-up" data-aos-duration="1000" data-aos-once = "true">Tools yang dipakai</h1>
          <p className="xl:w-2/5 lg:w-2/4 md:w-2/3 sm:w-3/4 w-full text-base/loose opacity-50%" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once = "true">Berikut ini beberapa tools yang biasa saya pakai untuk pembuatan website ataupun design</p>

          <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
            {listTools.map(tool => (
              <div className="group flex items-center gap-2 p-3 border-zinc-600 rounded-md hover:bg-zinc-800" key={tool.id} data-aos="fade-up" data-aos-duration="1000" data-aos-delay={tool.dad} data-aos-once = "true">
                <img src={tool.gambar} alt="Tools image" className="w-14 bg-zinc-800 p-1 group-hover:bg-zinc-900" loading="lazy"/>
                <div>
                  <h4 className="font-bold">{tool.nama}</h4>
                  <p className="opacity-50%">{tool.ket}</p>
                </div>
              </div>

            ))}
          </div>        
        </div> */}
      </div>


      {/* ================== Experience's ================== */}
        <div className="project mt-32 py-10" id="experience">
          <h1 className="text-center text-4xl font-bold md-2" data-aos="fade-up" data-aos-duration="1000" data-aos-once = "true">Experience</h1>
          <p className="text-base/loose text-center opacity-50%" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once = "true">Here are some of the key milestones that have shaped my professional journey</p>

          <div className="project-box mt-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 ">
            {listProyek.map(project =>(
              <div key={project.id} className="p-4 bg-[#efbe69] rounded-md flex flex-col" data-aos="fade-up" data-aos-duration="1000" data-aos-delay={project.dad} data-aos-once = "true">
                <img src={project.gambar} alt="Project image" loading="lazy"/>
                <div className="flex flex-col flex-1">
                  <h1 className="text-2xl font-bold my-4">{project.nama}</h1>
                  <p className="text-base/loose mb-4">{project.desk}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool, index) =>(
                      <p key={index} className="py-1 px-3 border-zinc-500 rounded-md font-semibold bg-[#f2a013]">
                        {tool}
                      </p>
                    ))}
                  </div>
                  <div className="mt-auto pt-8 text-center">
                    {/* <a href={project.link} className="bg-orange-700 p-3 rounded-lg block border-zinc-600 hover:bg-orange-600">Details</a> */}
                      <Link to={`/experience/${project.slug}`} className="bg-[#f2a013] p-3 rounded-lg block hover:bg-[#de6f1b]">
                          Details
                      </Link>
                  
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>



      {/* ================== Contact ================== */}
      {/* <div className="contact mt-32 sm:p-10 p-0" id="contact">
        <h1 className="text-4xl mb-2 font-bold text-center" data-aos="fade-up" data-aos-duration="1000" data-aos-once = "true">Contact</h1>
        <p className="text-base/loose text-center mb-10 opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once = "true">Let's Connect</p>

        <form action="https://formsubmit.co/arsip.work.timothy2@gmail.com" method="POST" className="bg-zinc-800 p-10 sm:w-fit w-full mx-auto rounded-md" autoComplete="off" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500" data-aos-once = "true">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Name</label>
              <input type="text" name="name" id="" placeholder="Input your name..." required className="border-zinc-500 border p-2 rounded-md"/>
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Email</label>
              <input type="email" name="email" id="" placeholder="Input your email..." required className="border-zinc-500 border p-2 rounded-md"/>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="description" className="font-semibold">Message</label>
              <textarea name="description" id="description" cols={45} rows={7} placeholder="Input your message..." className="border-zinc-500 border p-2 rounded-md"required></textarea>
            </div>
            <div className="text-center">
              <button type="submit" className="bg-orange-700 p-3 rounded-lg w-full cursor-pointer border-zinc-600 hover:bg-orange-600">Submit</button>
            </div>
          </div>
        </form>
      </div> */}

          

    </> 
  );
}

export default Home;
