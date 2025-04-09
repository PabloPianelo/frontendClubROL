import {  } from 'react'



function Info() {

  return (
    <section id="contacto" className="py-20 bg-gradient-to-b from-white bg-purple-50">
      <div className="container mx-auto px-4">
        {/* Section title and description */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-fantasy-purple mb-4">Contáctanos</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            ¿Preguntas? ¿Sugerencias? ¿Quieres unirte a nosotros? Estamos aquí para ayudarte. ¡No dudes en ponerte en contacto!
          </p>
        </div>
        
        {/* Two-column layout for contact form and location info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact form card */}
          <div className="border border-yellow-600 rounded-lg p-8 bg-white shadow-md ">
            <h3 className="text-2xl font-bold text-fantasy-purple mb-6 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 h-6 w-6 text-fantasy-gold">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
              </svg>
              Envíanos un Mensaje
            </h3>
            <form className="space-y-6">
              {/* Name and email fields in two columns on larger screens */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-2">Nombre</label>
                  <input 
                    id="name" 
                    placeholder="Tu nombre" 
                    className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-fantasy-purple focus:outline-none focus:ring-1 focus:ring-fantasy-purple"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                  <input 
                    id="email" 
                    type="email" 
                    placeholder="tu@email.com" 
                    className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-fantasy-purple focus:outline-none focus:ring-1 focus:ring-fantasy-purple"
                  />
                </div>
              </div>
              
              {/* Subject field */}
              <div>
                <label htmlFor="subject" className="block text-gray-700 mb-2">Asunto</label>
                <input 
                  id="subject" 
                  placeholder="¿En qué podemos ayudarte?" 
                  className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-fantasy-purple focus:outline-none focus:ring-1 focus:ring-fantasy-purple"
                />
              </div>
              
              {/* Message textarea */}
              <div>
                <label htmlFor="message" className="block text-gray-700 mb-2">Mensaje</label>
                <textarea 
                  id="message" 
                  placeholder="Tu mensaje..." 
                  rows={5} 
                  className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-fantasy-purple focus:outline-none focus:ring-1 focus:ring-fantasy-purple"
                ></textarea>
              </div>
              
              {/* Submit button */}
              <button class="bg-yellow-400 border border-yellow-600 text-black px-6 py-2 rounded buttonHover flex items-center gap-2  justify-center w-full">
              Enviar Mensaje
              </button>
            </form>
          </div>
          
          {/* Location information cards */}
          <div>
            {/* Physical location info card */}
            <div className="border border-yellow-600 rounded-lg p-8 bg-white shadow-md mb-8">
              <h3 className="text-2xl font-bold text-fantasy-purple mb-6 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 h-6 w-6 text-fantasy-gold">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                Nuestra Ubicación
              </h3>
              <div className="mb-4">
                <h4 className="font-bold text-fantasy-purple mb-2">Sede Principal</h4>
                <p className="text-gray-600">Calle Imaginación, 42</p>
                <p className="text-gray-600">Ciudad Fantástica, 28001</p>
              </div>
              <div className="mb-4">
                <h4 className="font-bold text-fantasy-purple mb-2">Punto de Encuentro Alternativo</h4>
                <p className="text-gray-600">Café Arcadia</p>
                <p className="text-gray-600">Avenida de los Dragones, 15</p>
              </div>
              
              {/* Map placeholder - would be replaced with an actual map in production */}
              <div className="aspect-video bg-gray-200 rounded-md mt-6">
                <div className="w-full h-full flex items-center justify-center text-gray-500">
                  Mapa interactivo aquí
                </div>
              </div>
            </div>
            
            {/* Hours and contact info card */}
            <div className="border border-yellow-600 rounded-lg p-8 bg-white shadow-md">
              <h3 className="text-2xl font-bold text-fantasy-purple mb-6 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 h-6 w-6 text-fantasy-gold">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
                Horarios
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-700">Lunes - Viernes:</span>
                  <span className="text-fantasy-purple font-medium">17:00 - 22:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Sábados:</span>
                  <span className="text-fantasy-purple font-medium">10:00 - 22:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Domingos:</span>
                  <span className="text-fantasy-purple font-medium">Cerrado</span>
                </div>
              </div>
              
              {/* Email contact */}
              <div className="mt-8">
                <h4 className="font-bold text-fantasy-purple mb-2 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 h-5 w-5 text-fantasy-gold">
                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </svg>
                  Email
                </h4>
                <p className="text-gray-600">info@clubderolmistico.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


export default Info
