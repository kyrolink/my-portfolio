import { useParams, useNavigate  } from "react-router-dom";
import { useState } from "react";
import { listProyek } from "../data";

function ExperienceDetail() {
    const { slug } = useParams();
    const navigate = useNavigate();

    const project = listProyek.find(
       (item) => item.slug === slug
    );
    if (!project) {
        return (
            <h1 className="text-center mt-20">
                Experience not found
            </h1>
        );
    }

    const [selectedShowcase, setSelectedShowcase] = useState(null);

    return (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-md z-50 flex justify-center items-center">
            <div className="relative bg-zinc-900 rounded-3xl border border-zinc-700 shadow-2xl
                w-[95%]
                sm:w-[90%]
                md:w-[85%]
                lg:w-[75%]
                xl:w-[70%]

                h-[90vh]

                overflow-hidden">
                {/* ========== HEADER ========== */}
                <div className="flex justify-between items-center p-6 border-b border-zinc-700">
                    <h1 className="text-3xl font-bold">
                        {project.nama}
                    </h1>
                    <button
                        onClick={() => navigate(-1)}
                        className="text-3xl hover:text-orange-500 transition"
                    >
                        <i className="ri-close-line"></i>
                    </button>
                </div>
                {/* ========== CONTENT ========== */}
                <div className="overflow-y-auto h-[calc(90vh-88px)] p-8">
                    <img src={project.gambar} alt={project.nama} className="mx-auto w-72"/>
                    <h2 className="text-4xl font-bold mt-10 text-center"> {project.nama} </h2>
                    {/* <p className="mt-6 text-zinc-300 leading-8 text-justify"> {project.desk} </p> */}
                    <div className="flex flex-wrap gap-3 mt-8 justify-center">
                        {project.tools.map((tool,index)=>(
                            <span
                                key={index}
                                className="bg-orange-700 px-4 py-2 rounded-lg"
                            >
                                {tool}
                            </span>
                            ))}
                    </div>

                    <hr className="border-zinc-700 my-14"/>
                    <h2 className="flex items-center gap-3 text-3xl font-bold">
                        <i className="ri-task-line text-orange-500"></i>
                        Responsibilities
                    </h2>
                    <div className="grid md:grid-cols-2 gap-4 mt-8">
                        {project.responsibilities.map((item, index)=>(
                            <div key={index} className="bg-zinc-800 border border-zinc-700 rounded-xl p-5">
                                <i className="ri-checkbox-circle-fill text-orange-500 mr-2"></i>
                                {item}
                            </div>
                        ))}
                    </div>

                    <hr className="border-zinc-700 my-14"/>
                    <h2 className="flex items-center gap-3 text-3xl font-bold">
                        <i className="ri-gallery-line text-orange-500"></i>
                        Experience Showcase
                    </h2>
                    <div className="grid lg:grid-cols-2 gap-8 mt-8">
                        {project.showcase.map((item)=>(
                            <div key={item.id} className="bg-zinc-800 rounded-2xl border border-zinc-700 overflow-hidden">
                                {/* <img src={item.image} alt={item.title} className="w-full"/> */}
                                <div className="p-6">
                                    <h3 className="text-2xl font-bold"> {item.title} </h3>
                                    <p className="mt-4 text-zinc-400"> {item.description}</p>
                                    <button onClick={() => setSelectedShowcase(item)} className="mt-6 bg-orange-600 hover:bg-orange-500 px-5 py-2 rounded-lg transition">
                                        View Case Study
                                    </button>

                                </div>
                            </div>
                        ))}
                    </div>

                </div>
                
            </div>
            {selectedShowcase && (
                <div className="fixed inset-0 z-60 bg-black/80 backdrop-blur-sm flex justify-center items-center">
                    <div className="relative bg-zinc-900 rounded-3xl border border-zinc-700
                        w-[95%]
                        sm:w-[90%]
                        md:w-[85%]
                        lg:w-[75%]
                        xl:w-[65%]

                        max-h-[90vh]

                        overflow-y-auto

                        p-8">
                        
                        <button onClick={() => setSelectedShowcase(null)} className="absolute top-6 right-6 text-3xl hover:text-orange-500 transition">
                            <i className="ri-close-line"></i>
                        </button>
                        {/* <img
                            src={selectedShowcase.image}
                            alt={selectedShowcase.title}
                            className="w-full rounded-2xl"
                        /> */}
                        <h3 className="text-2xl font-bold mb-6"> Gallery </h3>
                        {selectedShowcase.images && selectedShowcase.images.length > 0 ? (
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                                {selectedShowcase.images.map((item, index) => (
                                    <div key={index} className="bg-zinc-800 rounded-xl overflow-hidden">
                                        <img src={item} alt="foto show case" />
                                    </div>
                                ))}
                            </div>
                        ) : (<div className="flex flex-col items-center justify-center py-20 text-center">
                                <i className="ri-image-line text-6xl text-zinc-600 mb-4"></i>

                                <h4 className="text-xl font-semibold">
                                    No Gallery Available
                                </h4>

                                <p className="text-zinc-400 mt-2">
                                    Images for this case study have not been added yet.
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}

export default ExperienceDetail;