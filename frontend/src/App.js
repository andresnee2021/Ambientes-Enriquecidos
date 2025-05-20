import React, { useState } from "react";
import "./App.css";

// Componentes
const Header = () => {
  return (
    <header className="bg-blue-100 py-6">
      <div className="container mx-auto px-4">
        <img 
          src="https://images.unsplash.com/photo-1533699224246-6dc3b3ed3304" 
          alt="Logo SEM Neiva" 
          className="h-16 ml-auto object-cover rounded"
        />
        <h1 className="text-4xl md:text-5xl font-bold text-blue-800 mt-8 text-center">
          Ambientes Enriquecidos
        </h1>
        <p className="text-xl text-center text-gray-600 mt-2">
          Secretaría de Educación Municipal - Neiva 2025
        </p>
      </div>
    </header>
  );
};

const IntroSection = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-800 text-center mb-10">
          ¿Qué son los Ambientes Enriquecidos?
        </h2>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="w-full lg:w-1/2">
            <div className="bg-blue-50 rounded-xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="bg-blue-600 rounded-full p-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-blue-800 ml-4">
                  Ambientes de aprendizaje
                </h3>
              </div>
              <p className="text-lg text-gray-700">
                <span className="font-bold">Diseñados para proporcionar experiencias educativas más profundas, complejas y desafiantes</span> que respondan a las necesidades de estudiantes con capacidades y talentos excepcionales.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-6">
              <div className="bg-red-50 rounded-xl p-6 border-l-4 border-red-500">
                <div className="flex items-center">
                  <div className="bg-red-500 rounded-full p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold text-red-800 ml-3">NO es simplemente "más trabajo"</h4>
                </div>
                <p className="text-gray-700 mt-3">
                  Asignar más ejercicios, tareas o lecturas del mismo nivel
                </p>
              </div>

              <div className="bg-green-50 rounded-xl p-6 border-l-4 border-green-500">
                <div className="flex items-center">
                  <div className="bg-green-500 rounded-full p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold text-green-800 ml-3">ES trabajo diferente y más profundo</h4>
                </div>
                <p className="text-gray-700 mt-3">
                  Experiencias desafiantes que estimulan habilidades de pensamiento superior
                </p>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1610500796385-3ffc1ae2f046" 
              alt="Estudiantes en ambiente enriquecido" 
              className="rounded-xl shadow-lg w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const KeyCharacteristics = () => {
  // Estado para los tooltips de características
  const [activeTooltip, setActiveTooltip] = useState(null);

  const characteristics = [
    {
      id: 1,
      icon: "search",
      title: "Profundidad y Complejidad",
      description: [
        "Abordar temas con mayor detalle",
        "Explorar conceptos abstractos",
        "Desarrollar pensamiento de orden superior (análisis, síntesis, evaluación)"
      ],
      color: "blue"
    },
    {
      id: 2,
      icon: "lightbulb",
      title: "Novedad y Creatividad",
      description: [
        "Introducir temas no convencionales",
        "Fomentar el pensamiento divergente (Guilford)",
        "Permitir la exploración de ideas originales"
      ],
      color: "orange"
    },
    {
      id: 3,
      icon: "clock",
      title: "Ritmo Ajustado",
      description: [
        "Avanzar más rápido en contenidos dominados",
        "Implementar compactación curricular",
        "Liberar tiempo para profundización en áreas de interés"
      ],
      color: "blue"
    },
    {
      id: 4,
      icon: "user-gear",
      title: "Autonomía y Elección",
      description: [
        "Dar opciones en temas y métodos de investigación",
        "Ofrecer diversas formas de presentar resultados",
        "Fomentar la autorregulación del aprendizaje"
      ],
      color: "orange"
    },
    {
      id: 5,
      icon: "heart",
      title: "Conexión con Intereses",
      description: [
        "Vincular con pasiones personales del estudiante",
        "Potenciar intereses profundos y específicos",
        "Clave para el estado de \"Flow\" (Csikszentmihályi)"
      ],
      color: "blue"
    },
    {
      id: 6,
      icon: "globe",
      title: "Autenticidad",
      description: [
        "Conectar con problemas reales y relevantes",
        "Presentar a audiencias auténticas",
        "Desarrollar proyectos con impacto significativo"
      ],
      color: "orange"
    }
  ];

  // Función para determinar el icono según el tipo
  const getIcon = (type) => {
    switch(type) {
      case 'search':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        );
      case 'lightbulb':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
        );
      case 'clock':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      case 'user-gear':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        );
      case 'heart':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        );
      case 'globe':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section className="py-12 bg-blue-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-800 text-center mb-2">
          Características Clave de los Ambientes Enriquecidos
        </h2>
        <div className="w-32 h-1 bg-orange-500 mx-auto mb-10"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {characteristics.map((item) => (
            <div 
              key={item.id}
              className={`bg-${item.color}-500 bg-opacity-10 rounded-lg p-6 shadow-lg relative overflow-hidden transition-all duration-300`}
            >
              <div className="absolute top-4 right-4">
                <button 
                  onClick={() => setActiveTooltip(activeTooltip === item.id ? null : item.id)}
                  className={`bg-${item.color}-500 rounded-full p-1 text-white hover:bg-${item.color}-600 transition`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </button>
              </div>

              <div className={`bg-${item.color}-500 rounded-full p-4 inline-block text-white mb-4`}>
                {getIcon(item.icon)}
              </div>
              
              <h3 className={`text-xl font-bold text-${item.color}-800 mb-3`}>{item.title}</h3>
              
              {activeTooltip === item.id ? (
                <div className="mt-4 bg-white rounded-lg p-4 shadow-inner">
                  <ul className="list-disc list-inside">
                    {item.description.map((point, idx) => (
                      <li key={idx} className="text-gray-700 mb-2">{point}</li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-gray-700 italic">
            Haz clic en los íconos de información <span className="bg-blue-500 text-white rounded-full px-1 py-0.5 text-xs">i</span> para ver más detalles de cada característica
          </p>
        </div>
      </div>
    </section>
  );
};

const DuaSection = () => {
  const [activeTab, setActiveTab] = useState('representacion');

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-800 text-center mb-2">
          Fundamento Inclusivo: Enriquecimiento y DUA
        </h2>
        <div className="w-32 h-1 bg-orange-500 mx-auto mb-10"></div>

        <div className="bg-blue-50 rounded-xl p-8 shadow-lg mb-10">
          <div className="flex items-center mb-6">
            <div className="bg-blue-600 rounded-full p-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <div className="ml-4">
              <h3 className="text-2xl font-semibold text-blue-800">
                Diseño Universal para el Aprendizaje (DUA)
              </h3>
              <p className="text-gray-700 mt-1">
                Marco educativo que proporciona <span className="font-bold">flexibilidad en la forma de presentar información</span>, responder o demostrar conocimientos, y comprometerse en el aprendizaje. Crea la <span className="font-bold">base ideal para integrar el enriquecimiento</span> de forma inclusiva.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl p-4">
            <div className="flex space-x-2 border-b">
              <button 
                className={`px-4 py-2 rounded-t-lg font-medium ${activeTab === 'representacion' ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                onClick={() => setActiveTab('representacion')}
              >
                Representación
              </button>
              <button 
                className={`px-4 py-2 rounded-t-lg font-medium ${activeTab === 'accion' ? 'bg-orange-500 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                onClick={() => setActiveTab('accion')}
              >
                Acción/Expresión
              </button>
              <button 
                className={`px-4 py-2 rounded-t-lg font-medium ${activeTab === 'implicacion' ? 'bg-green-500 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                onClick={() => setActiveTab('implicacion')}
              >
                Implicación
              </button>
            </div>

            <div className="p-4">
              {activeTab === 'representacion' && (
                <div className="space-y-4">
                  <h4 className="text-xl font-semibold text-blue-700">Múltiples formas de presentar la información</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 mr-2 mt-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Diferentes formatos (visual, auditivo, táctil)</span>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 mr-2 mt-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Niveles de complejidad ajustables</span>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 mr-2 mt-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Recursos avanzados para enriquecimiento</span>
                    </li>
                  </ul>
                </div>
              )}

              {activeTab === 'accion' && (
                <div className="space-y-4">
                  <h4 className="text-xl font-semibold text-orange-700">Múltiples formas de demostrar aprendizaje</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-500 mr-2 mt-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Diversidad de productos y respuestas</span>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-500 mr-2 mt-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Opciones de herramientas y apoyos</span>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-500 mr-2 mt-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Proyectos de mayor complejidad disponibles</span>
                    </li>
                  </ul>
                </div>
              )}

              {activeTab === 'implicacion' && (
                <div className="space-y-4">
                  <h4 className="text-xl font-semibold text-green-700">Múltiples formas de comprometerse</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 mt-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Opciones de interés y motivación</span>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 mt-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Diferentes niveles de desafío</span>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 mt-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Autonomía y elección según capacidades</span>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="mt-10">
          <h3 className="text-2xl font-semibold text-blue-800 text-center mb-6">
            Enriquecimiento dentro del DUA
          </h3>
          
          <div className="flex justify-center mb-6">
            <img 
              src="https://images.unsplash.com/photo-1577896851231-70ef18881754" 
              alt="Aprendizaje inclusivo" 
              className="rounded-xl shadow-lg w-full max-w-2xl h-auto"
            />
          </div>

          <div className="bg-blue-50 rounded-xl p-6 max-w-3xl mx-auto">
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              <p className="text-lg font-medium">
                No es separar, sino <span className="text-blue-600 font-bold">ofrecer opciones más avanzadas</span> dentro de un diseño flexible para todos
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const StrategiesSection = () => {
  const [activeCategory, setActiveCategory] = useState('contenido');

  return (
    <section className="py-12 bg-blue-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-800 text-center mb-2">
          Estrategias Prácticas de Enriquecimiento Curricular
        </h2>
        <p className="text-center text-gray-600 mb-6">(Dentro del Aula)</p>
        <div className="w-32 h-1 bg-orange-500 mx-auto mb-10"></div>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <button 
            className={`px-5 py-3 rounded-full font-medium ${activeCategory === 'contenido' ? 'bg-blue-600 text-white' : 'bg-white text-blue-600 hover:bg-blue-100'}`}
            onClick={() => setActiveCategory('contenido')}
          >
            Basadas en Contenido
          </button>
          <button 
            className={`px-5 py-3 rounded-full font-medium ${activeCategory === 'proceso' ? 'bg-orange-500 text-white' : 'bg-white text-orange-500 hover:bg-orange-100'}`}
            onClick={() => setActiveCategory('proceso')}
          >
            Basadas en Proceso
          </button>
          <button 
            className={`px-5 py-3 rounded-full font-medium ${activeCategory === 'producto' ? 'bg-green-500 text-white' : 'bg-white text-green-500 hover:bg-green-100'}`}
            onClick={() => setActiveCategory('producto')}
          >
            Basadas en Producto
          </button>
        </div>

        {activeCategory === 'contenido' && (
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <h3 className="text-2xl font-bold text-blue-700 mb-6 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
              </svg>
              Basadas en Contenido
            </h3>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="p-4 bg-blue-50 rounded-lg">
                <div className="flex items-center mb-3">
                  <div className="bg-blue-600 p-2 rounded-full text-white mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-semibold text-blue-800">Temas avanzados</h4>
                </div>
                <p className="text-gray-700">o especializados</p>
                <p className="text-gray-600 mt-2">Relacionados con el currículo pero más profundos</p>
              </div>

              <div className="p-4 bg-blue-50 rounded-lg">
                <div className="flex items-center mb-3">
                  <div className="bg-blue-600 p-2 rounded-full text-white mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-semibold text-blue-800">Lecturas complementarias</h4>
                </div>
                <p className="text-gray-700">de mayor complejidad</p>
                <p className="text-gray-600 mt-2">Textos de nivel superior o escritos por expertos</p>
              </div>

              <div className="p-4 bg-blue-50 rounded-lg">
                <div className="flex items-center mb-3">
                  <div className="bg-blue-600 p-2 rounded-full text-white mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-semibold text-blue-800">Perspectivas múltiples</h4>
                </div>
                <p className="text-gray-700">o interdisciplinarias</p>
                <p className="text-gray-600 mt-2">Conexiones entre diferentes áreas del conocimiento</p>
              </div>

              <div className="p-4 bg-blue-50 rounded-lg">
                <div className="flex items-center mb-3">
                  <div className="bg-blue-600 p-2 rounded-full text-white mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-semibold text-blue-800">Temas locales</h4>
                </div>
                <p className="text-gray-700">como base investigativa</p>
                <p className="text-gray-600 mt-2">Historia, cultura y biodiversidad de Neiva y el Huila</p>
              </div>
            </div>
          </div>
        )}

        {activeCategory === 'proceso' && (
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <h3 className="text-2xl font-bold text-orange-500 mb-6 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Basadas en Proceso
            </h3>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="p-4 bg-orange-50 rounded-lg">
                <div className="flex items-center mb-3">
                  <div className="bg-orange-500 p-2 rounded-full text-white mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-semibold text-orange-800">Preguntas de nivel superior</h4>
                </div>
                <p className="text-gray-600 mt-2">¿Qué pasaría si...? ¿Cómo mejorar...? ¿Implicaciones éticas?</p>
              </div>

              <div className="p-4 bg-orange-50 rounded-lg">
                <div className="flex items-center mb-3">
                  <div className="bg-orange-500 p-2 rounded-full text-white mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-semibold text-orange-800">Métodos de investigación</h4>
                </div>
                <p className="text-gray-700">autónomos</p>
                <p className="text-gray-600 mt-2">Diseñar experimentos, realizar entrevistas a expertos locales</p>
              </div>

              <div className="p-4 bg-orange-50 rounded-lg">
                <div className="flex items-center mb-3">
                  <div className="bg-orange-500 p-2 rounded-full text-white mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-semibold text-orange-800">Aprendizaje basado en problemas</h4>
                </div>
                <p className="text-gray-700">o proyectos</p>
                <p className="text-gray-600 mt-2">Retos complejos y auténticos que requieran investigación</p>
              </div>

              <div className="p-4 bg-orange-50 rounded-lg">
                <div className="flex items-center mb-3">
                  <div className="bg-orange-500 p-2 rounded-full text-white mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-semibold text-orange-800">Herramientas tecnológicas</h4>
                </div>
                <p className="text-gray-700">avanzadas</p>
                <p className="text-gray-600 mt-2">Software de simulación, análisis de datos, diseño 3D</p>
              </div>
            </div>
          </div>
        )}

        {activeCategory === 'producto' && (
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <h3 className="text-2xl font-bold text-green-500 mb-6 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
              Basadas en Producto
            </h3>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="p-4 bg-green-50 rounded-lg">
                <div className="flex items-center mb-3">
                  <div className="bg-green-500 p-2 rounded-full text-white mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-semibold text-green-800">Creación para audiencias reales</h4>
                </div>
                <p className="text-gray-600 mt-2">Presentación a otro curso, artículo para periódico escolar</p>
              </div>

              <div className="p-4 bg-green-50 rounded-lg">
                <div className="flex items-center mb-3">
                  <div className="bg-green-500 p-2 rounded-full text-white mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-semibold text-green-800">Formatos diversos</h4>
                </div>
                <p className="text-gray-700">y complejos</p>
                <p className="text-gray-600 mt-2">Documental, prototipo funcional, ensayo crítico, composición artística</p>
              </div>

              <div className="p-4 bg-green-50 rounded-lg">
                <div className="flex items-center mb-3">
                  <div className="bg-green-500 p-2 rounded-full text-white mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-semibold text-green-800">Criterios de evaluación</h4>
                </div>
                <p className="text-gray-700">especiales</p>
                <p className="text-gray-600 mt-2">Valorar profundidad, originalidad y calidad técnica</p>
              </div>

              <div className="p-4 bg-green-50 rounded-lg">
                <div className="flex items-center mb-3">
                  <div className="bg-green-500 p-2 rounded-full text-white mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-semibold text-green-800">Compactación curricular</h4>
                </div>
                <p className="text-gray-600 mt-2">Liberar tiempo para proyectos de enriquecimiento más extensos</p>
              </div>
            </div>
          </div>
        )}

        <div className="bg-yellow-50 rounded-xl p-4 mt-10 border-l-4 border-yellow-500">
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
            <p className="text-lg font-semibold">
              Contexto Neiva: Proyectos que busquen soluciones a desafíos locales (manejo del agua, turismo sostenible, promoción cultural)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const TeacherRoleSection = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-800 text-center mb-2">
          Rol del Docente y Cierre
        </h2>
        <div className="w-32 h-1 bg-orange-500 mx-auto mb-10"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
          <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center">
            <div className="bg-blue-600 rounded-full p-4 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-blue-800 mb-2">Facilitador</h3>
            <p className="text-gray-600">Guía el proceso de aprendizaje sin dominarlo</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center">
            <div className="bg-blue-600 rounded-full p-4 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-blue-800 mb-2">Diseñador</h3>
            <p className="text-gray-600">Crea experiencias desafiantes y significativas</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center">
            <div className="bg-blue-600 rounded-full p-4 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-blue-800 mb-2">"Talent Spotter"</h3>
            <p className="text-gray-600">Identifica potencialidades y talentos emergentes</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center">
            <div className="bg-blue-600 rounded-full p-4 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-blue-800 mb-2">Conector</h3>
            <p className="text-gray-600">Vincula al estudiante con recursos y oportunidades</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center">
            <div className="bg-blue-600 rounded-full p-4 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-blue-800 mb-2">Promotor</h3>
            <p className="text-gray-600">Fomenta mentalidad de crecimiento (Dweck)</p>
          </div>
        </div>

        <h3 className="text-2xl font-semibold text-center text-blue-800 mb-6">
          Importancia de la Colaboración
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-blue-50 rounded-xl p-6 flex flex-col items-center text-center">
            <div className="bg-blue-100 rounded-full p-4 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <h4 className="text-lg font-semibold text-blue-800 mb-2">Orientador Escolar (OE)</h4>
            <p className="text-gray-600">Apoyo socioemocional y vocacional</p>
          </div>

          <div className="bg-blue-50 rounded-xl p-6 flex flex-col items-center text-center">
            <div className="bg-blue-100 rounded-full p-4 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
              </svg>
            </div>
            <h4 className="text-lg font-semibold text-blue-800 mb-2">Profesional de Apoyo (PAP)</h4>
            <p className="text-gray-600">Asesoría especializada en C/TE</p>
          </div>

          <div className="bg-blue-50 rounded-xl p-6 flex flex-col items-center text-center">
            <div className="bg-blue-100 rounded-full p-4 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </div>
            <h4 className="text-lg font-semibold text-blue-800 mb-2">Familias</h4>
            <p className="text-gray-600">Continuidad y apoyo en el hogar</p>
          </div>

          <div className="bg-blue-50 rounded-xl p-6 flex flex-col items-center text-center">
            <div className="bg-blue-100 rounded-full p-4 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h4 className="text-lg font-semibold text-blue-800 mb-2">Directivas</h4>
            <p className="text-gray-600">Respaldo institucional</p>
          </div>
        </div>

        <div className="bg-blue-50 rounded-xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-blue-800 mb-4 text-center">Mensaje Final</h3>
          <div className="flex items-start">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-yellow-500 mr-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
            <p className="text-lg">
              El <span className="font-bold">enriquecimiento bien diseñado</span> beneficia a todos los estudiantes y es <span className="text-blue-600 font-bold">clave para no "perder"</span> el potencial de los estudiantes con capacidades y/o talentos excepcionales.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <img 
              src="https://images.unsplash.com/photo-1533699224246-6dc3b3ed3304" 
              alt="Logo Alcaldía de Neiva" 
              className="h-16 object-cover rounded"
            />
          </div>
          <div className="text-center md:text-right">
            <p className="text-sm">© SEM - Neiva 2025</p>
            <p className="text-sm">Hecho por Andrés Eduardo Garzón Polanía</p>
            <p className="text-sm">3153159379 - andresmusic1@gmail.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

function App() {
  return (
    <div className="App bg-blue-50">
      <Header />
      <IntroSection />
      <KeyCharacteristics />
      <DuaSection />
      <StrategiesSection />
      <TeacherRoleSection />
      <Footer />
    </div>
  );
}

export default App;
