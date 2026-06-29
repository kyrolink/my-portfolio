

const Footer = () => {
  return (
    <div className="mt-20 py-4 md:flex-row flex-col gap-6 md:gap-0 justify-between items-center">
        <h1 className="text-2xl font-bold">Portfolio</h1>
        <div className="flex gap-7">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
        </div>
        <div className="flex items-center gap-3">
            <a href="https://www.linkedin.com/in/tracyaraunatriyanto"><i className="ri-linkedin-fill ri-2x"></i></a>
            <a href="mailto:tracyarauna29@gmail.com"><i className="ri-mail-fill ri-2x"></i></a>
            <a href="https://www.instagram.com/tracyarauna.t/"><i className="ri-instagram-fill ri-2x"></i></a>
            <a href="https://wa.me/6285183382719" target="_blank" rel="noopener noreferrer"> <i className="ri-whatsapp-fill ri-2x"></i></a>
        </div>
    </div>
  )
}

export default Footer