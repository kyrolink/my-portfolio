const Footer = () => {
  return (
    <footer className="mt-20 py-8 ">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-6">

          {/* Logo */}
          <div className="text-center md:text-left">
            <h1 className="text-2xl font-bold">Portfolio</h1>
          </div>

          {/* Menu */}
          <div className="flex justify-center gap-8">
            <a href="#home" className="hover:text-[#de6f1b] transition">
              Home
            </a>
            <a href="#about" className="hover:text-[#de6f1b] transition">
              About
            </a>
            <a href="#experience" className="hover:text-[#de6f1b] transition">
              Experience
            </a>
          </div>

          {/* Social Icon */}
          <div className="flex justify-center md:justify-end gap-4">
            <a
              href="https://www.linkedin.com/in/tracyaraunatriyanto"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#0077B5] transition"
            >
              <i className="ri-linkedin-fill ri-xl"></i>
            </a>

            <a
              href="mailto:tracyarauna29@gmail.com"
              className="hover:text-[#de6f1b] transition"
            >
              <i className="ri-mail-fill ri-xl"></i>
            </a>

            <a
              href="https://www.instagram.com/tracyarauna.t/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500 transition"
            >
              <i className="ri-instagram-fill ri-xl"></i>
            </a>

            <a
              href="https://wa.me/6285183382719"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-500 transition"
            >
              <i className="ri-whatsapp-fill ri-xl"></i>
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;