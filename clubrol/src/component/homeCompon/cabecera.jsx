import React from "react";

/**
 * Hero section component - the first visual element users see
 * Contains a background image, headline, and call-to-action buttons
 */
const Cabecera = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center">
      {/* Background image with overlay gradient for text readability */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r"></div>
      </div>
      
      {/* Main content container */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          {/* Main headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            Aventuras <span className="text-fantasy-gold">Infinitas</span> Te Esperan
          </h1>
          
          {/* Subheadline */}
          <h2 className="text-2xl md:text-3xl font-script text-white/80 mb-8">
            Donde la imaginación cobra vida y las historias legendarias comienzan
          </h2>
          
          {/* Description text */}
          <p className="text-lg text-white/70 mb-8">
            Únete a nuestro club de rol y sumérgete en mundos fantásticos, vive aventuras épicas y forma parte de una comunidad apasionada por la narrativa y la creatividad.
          </p>
          
          {/* Call-to-action buttons */}
          <div className="flex flex-wrap gap-4">
            <button className="bg-yellow-400 border border-yellow-600 text-black px-6 py-2 rounded buttonHover flex items-center gap-2 text-lg">
              {/* Custom Sword icon */}
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                <path d="M14.5 17.5L3 6V3h3l11.5 11.5"></path>
                <path d="M13 19l6-6"></path>
                <path d="M16 16l4 4"></path>
                <path d="M19 21l2-2"></path>
              </svg>
              Únete a la Aventura
            </button>
            <button className="bg-transparent text-yellow-400 border-yellow-400  flex items-center buttonHover gap-2 text-lg px-6 py-2 rounded border">
              {/* Custom Shield icon */}
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
              Conoce Nuestros Juegos
            </button>
          </div>
        </div>
      </div>
      
      {/* Scroll down indicator animation */}
      <div className="absolute bottom-5 left-0 right-0 flex justify-center">
        <div className="animate-bounce text-white/50">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 5v14"></path>
            <path d="m19 12-7 7-7-7"></path>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Cabecera;
