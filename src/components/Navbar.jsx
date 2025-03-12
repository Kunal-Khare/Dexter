import React, {useEffect} from "react";

function Navbar({menuOpen, setMenuOpen}) {
    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "auto";    
    },[menuOpen]);


  return (
    <nav className="fixed top-0 w-full z-40 bg[rgba(10,10,10,0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="font-mono text-xl font-bold text-white">
            Kunal<span className="text-blue-500">.dev</span>
          </a>

          <div className="w-7 h-5 relative cursor-pointer z-40 md:hidden" 
          onClick={() => setMenuOpen((prev) => !prev)}>
            &#9776;
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#home"> Home</a>
            <a href="#about"> About</a>
            <a href="#projects"> Projects</a>
            <a href="#contact"> Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
