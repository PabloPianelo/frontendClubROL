import {  } from 'react'



function Biblioteca() {

  const materias = [
    {
      nombre: "Juegos de Rol",
      descripcion: "Explora mundos imaginarios interpretando personajes.",
      icono: "🎲"
    },
    {
      nombre: "Juegos de Mesa",
      descripcion: "Desde clásicos como ajedrez hasta modernos como Catan.",
      icono: "♟️"
    },
    {
      nombre: "Miniaturas",
      descripcion: "Pintura, escenografía y batallas con figuras detalladas.",
      icono: "🛡️"
    },
    {
      nombre: "Cartas Coleccionables",
      descripcion: "Construye mazos y compite en juegos como Magic o Pokémon.",
      icono: "🃏"
    },
    {
      nombre: "Wargames",
      descripcion: "Estrategia militar con ejércitos en miniatura.",
      icono: "⚔️"
    }
  ];

  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {materias.map((materia, index) => (
        <div key={index} className="bg-white rounded-2xl shadow-md p-4 hover:shadow-lg transition">
          <div className="text-4xl mb-2">{materia.icono}</div>
          <h3 className="text-xl font-bold">{materia.nombre}</h3>
          <p className="text-gray-600">{materia.descripcion}</p>
        </div>
      ))}
    </div>
  );
};


export default Biblioteca
