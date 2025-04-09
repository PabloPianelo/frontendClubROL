
import React from "react";

/**
 * About section component with information about the role-playing club
 * Includes features and history of the club
 */
const SobreNosotros = () => {
  return (
    <section id="sobre-nosotros" className="py-20 md:py-32 bg-gradient-to-b from-white bg-purple-50">
      <div className="container mx-auto px-4">
        {/* Section title and introduction */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold  mb-4">Sobre Nuestro Club</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Somos una comunidad de jugadores apasionados por los juegos de rol y la narrativa compartida. Creamos historias juntos, forjamos aventuras y construimos recuerdos inolvidables.
          </p>
        </div>
        
        {/* Feature cards grid - changes from 1 to 4 columns depending on screen size */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard 
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-10 w-10 text-fantasy-purple">
                <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path>
              </svg>
            }
            title="Narrativas Épicas"
            description="Historias inmersivas en diversos géneros, desde fantasía medieval hasta ciencia ficción futurista y horror cósmico."
          />
          <FeatureCard 
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-10 w-10 text-fantasy-purple">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            }
            title="Comunidad Diversa"
            description="Un espacio acogedor para todos, veteranos y principiantes, donde compartir pasiones y crear juntos."
          />
          <FeatureCard 
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-10 w-10 text-fantasy-purple">
                <path d="M14.5 17.5L3 6V3h3l11.5 11.5"></path>
                <path d="M13 19l6-6"></path>
                <path d="M16 16l4 4"></path>
                <path d="M19 21l2-2"></path>
              </svg>
            }
            title="Variedad de Sistemas"
            description="Exploramos distintos sistemas de juego, desde los tradicionales dados y fichas hasta narraciones más libres e innovadoras."
          />
          <FeatureCard 
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-10 w-10 text-fantasy-purple">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
              </svg>
            }
            title="Eventos Regulares"
            description="Sesiones semanales, campañas mensuales, torneos y eventos especiales para mantener viva la magia."
          />
        </div>
        
        {/* Club history card */}
        <div className="mt-16 fantasy-card mx-auto max-w-4xl">
          <h3 className="text-2xl font-bold text-fantasy-purple mb-4">Nuestra Historia</h3>
          <p className="text-gray-700 mb-4">
            Fundado en 2018 por un pequeño grupo de amigos apasionados, Club de Rol Místico ha crecido hasta convertirse en un referente local para los amantes de los juegos de rol. Lo que comenzó como reuniones informales en una cafetería, ahora es una comunidad vibrante con decenas de miembros activos.
          </p>
          <p className="text-gray-700">
            Nuestro objetivo es simple: crear un espacio donde la imaginación pueda volar libre, donde cada jugador pueda experimentar aventuras que nunca olvidará, y donde las amistades forjadas sean tan reales como los personajes que interpretamos.
          </p>
        </div>
      </div>
    </section>
  );
};

/**
 * Reusable feature card component
 * Displays an icon, title, and description in a styled card
 */
const FeatureCard = ({ icon, title, description }) => (
<div className="h-full  flex flex-col border-2 border-yellow-600 items-center text-center transition-transform duration-300 hover:scale-105  rounded-lg p-8 bg-white shadow-md hover:shadow-xl">
<div className="mb-4 ">{icon}</div>
    <h3 className="text-xl font-bold  mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default SobreNosotros;