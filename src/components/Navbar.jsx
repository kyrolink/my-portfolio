import { useState, useEffect } from "react"

const NavBar = () => {
    const [active, setActive] = useState(false);

    const [contactOpen, setContactOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 150){
                setActive(true);
            }else{
                setActive(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className="navbar py-7 flex items-center justify-between">
            <div className="logo">
                <h1 className="text-5xl font-bold bg-[#edd2a3] text-zinc-900 p-1 md:bg-transparent md:text-zinc-900"></h1>
            </div>
            <ul className={`menu flex items-center sm:gap-10 gap-4 md:static fixed left-1/2 -translate-x-1/2 md:translate-x-0 md:opacity-100 bg-[#edd2a3]/30 backdrop-blur-md p-4 rounded-br-2xl rounded-bl-2xl md:bg-transparent transition-all md:transition-none${active ? "top-0 opacity-100" : "-top-10 opacity-0"} z-40`}>
                <li><a href="#home" className="sm:text-lg text-base font-medium">Home</a></li>
                <li><a href="#about" className="sm:text-lg text-base font-medium">About</a></li>
                <li><a href="#experience" className="sm:text-lg text-base font-medium">Experience</a></li>
                <li className="relative"> <button onClick={() => setContactOpen(!contactOpen)} className="sm:text-lg text-base font-medium flex items-center gap-1">
                    Contact
                    <i className={`ri-arrow-down-s-line transition-transform ${ contactOpen ? "rotate-180" : "" }`}></i>
                    </button>

                     {contactOpen && (
                        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-44 hover:bg-[#f5d08c] rounded-xl shadow-xl overflow-hidden z-50">
                        <a
                            href="https://wa.me/6285183382719"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 px-4 py-3 hover:bg-[#F2C572] text-black"
                        >
                            <i className="ri-whatsapp-fill text-green-500"></i>
                            WhatsApp
                        </a>

                        <a
                            href="mailto:tracyarauna29@gmail.com"
                            className="flex items-center gap-3 px-4 py-3 hover:bg-[#F2C572] text-black"
                        >
                            <i className="ri-mail-fill text-orange-500"></i>
                            Email
                        </a>
                        </div>
                    )}
                    </li>
            </ul>
        </div>
    )
}

export default NavBar