import { FaDragon, FaMapMarkedAlt, FaUsers, FaCrown, FaStar, FaFire } from 'react-icons/fa';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

function TOE() {
  return (
    <>
      <h2 className="text-center text-2xl font-bold mb-8">Línea de Tiempo - TOE de Águilas (Club Thorondor)</h2>

      <VerticalTimeline>

        <VerticalTimelineElement
          className="vertical-timeline-element--event"
          date="2015"
          contentStyle={{ background: '#4b0082', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid #4b0082' }}
          iconStyle={{ background: '#4b0082', color: '#fff' }}
          icon={<FaDragon />}
        >
          <h3 className="text-xl font-semibold">Primer TOE de Águilas</h3>
          <h4 className="text-sm italic">Descripción: Este fue uno de los primeros torneos organizados por el Club Thorondor en Águilas. Aunque aún no era oficialmente un TOE, marcó el inicio del recorrido competitivo del club.</h4>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          date="2019"
          contentStyle={{ background: '#228B22', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid #228B22' }}
          iconStyle={{ background: '#228B22', color: '#fff' }}
          icon={<FaMapMarkedAlt />}
        >
          <h3 className="text-xl font-semibold">Tercer Torneo Oficial por Equipos (TOE)</h3>
          <h4 className="text-sm italic">The 9th Age</h4>
          <p>Descripción: Reunió a 12 equipos de toda España. Fue uno de los primeros TOEs reconocidos oficialmente por el club, consolidando a Águilas como sede nacional del juego de estrategia.</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          date="2019"
          contentStyle={{ background: '#1E90FF', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid #1E90FF' }}
          iconStyle={{ background: '#1E90FF', color: '#fff' }}
          icon={<FaUsers />}
        >
          <h3 className="text-xl font-semibold">Tercer Torneo Oficial por Equipos (TOE)</h3>
          <h4 className="text-sm italic">The 9th Age</h4>
          <p>Descripción: Reunió a 12 equipos de toda España. Fue uno de los primeros TOEs reconocidos oficialmente por el club, consolidando a Águilas como sede nacional del juego de estrategia.</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          date="2023"
          contentStyle={{ background: '#FFD700', color: '#000' }}
          contentArrowStyle={{ borderRight: '7px solid #FFD700' }}
          iconStyle={{ background: '#FFD700', color: '#000' }}
          icon={<FaCrown />}
        >
          <h3 className="text-xl font-semibold">Quinto Torneo Oficial por Equipos (TOE)</h3>
          <h4 className="text-sm italic">The 9th Age</h4>
          <p>Descripción: Una nueva edición del TOE con gran participación y cobertura local. Los equipos compitieron en escenarios tácticos avanzados dentro del universo de "The 9th Age".</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          date="2025"
          contentStyle={{ background: '#DC143C', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid #DC143C' }}
          iconStyle={{ background: '#DC143C', color: '#fff' }}
          icon={<FaFire />}
        >
          <h3 className="text-xl font-semibold">Última edición del Torneo Oficial por Equipos (TOE)</h3>
          <h4 className="text-sm italic">The 9th Age</h4>
          <p>Descripción: Considerado uno de los TOEs más importantes hasta la fecha, con participación nacional e internacional. Fue clasificatorio para el campeonato mundial de "The 9th Age", demostrando el alto nivel organizativo y competitivo del club Thorondor.</p>
        </VerticalTimelineElement>

        
      </VerticalTimeline>
    </>
  );
}

export default TOE;