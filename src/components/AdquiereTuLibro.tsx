export function AdquiereTuLibro() {
  return (
    <section id="adquiere-tu-libro" className="py-20 relative bg-white/20 backdrop-blur-sm border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado de la sección */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 border border-purple-200 text-purple-900 text-xs font-bold uppercase tracking-wider mb-4">
            Formatos Oficiales
          </div>
          <h2 className="font-serif font-black text-3xl sm:text-4xl lg:text-5xl text-slate-950 uppercase tracking-tight">
            Adquiere tu libro
          </h2>
          <div className="w-16 h-1 bg-purple-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Las 3 Tarjetas Limpias, Modernas y Responsivas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          
          {/* Tarjeta 1: Libro Digital */}
          <div className="bg-white/85 backdrop-blur-md rounded-3xl p-8 border border-white/80 shadow-xl flex flex-col justify-between hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group">
            <div>
              {/* Imagen sin fondo de la carpeta public */}
              <div className="w-full h-52 flex items-center justify-center mb-6 overflow-hidden">
                <img
                  src="/librorobb.png"
                  alt="Libro Digital Completo"
                  className="max-h-52 w-auto max-w-full object-contain drop-shadow-xl group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="font-serif font-black text-2xl text-slate-950 mb-3">
                Libro Digital Completo
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                Los 101 capítulos con explicaciones profundas, anécdotas inéditas y reflexiones directas al grano.
              </p>
            </div>

            <a
              href="https://play.google.com/store/books/details?id=rD-yEQAAQBAJ"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 bg-purple-700 hover:bg-purple-800 text-white font-bold text-center rounded-2xl uppercase text-xs tracking-wider shadow-md hover:shadow-lg transition-all active:scale-95 flex items-center justify-center gap-2"
            >
              <span>Adquirir en Google Play</span>
            </a>
          </div>

          {/* Tarjeta 2: Audiolibro */}
          <div className="bg-gradient-to-b from-white to-purple-50/70 backdrop-blur-md rounded-3xl p-8 border-2 border-purple-600 shadow-2xl flex flex-col justify-between hover:shadow-purple-900/20 hover:-translate-y-1 transition-all duration-300 relative group">
            <div>
              {/* Imagen sin fondo de la carpeta public */}
              <div className="w-full h-52 flex items-center justify-center mb-6 overflow-hidden">
                <img
                  src="/audiorobb.png"
                  alt="Audiolibro Oficial"
                  className="max-h-52 w-auto max-w-full object-contain drop-shadow-xl group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="font-serif font-black text-2xl text-slate-950 mb-3">
                Audiolibro Oficial
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                Narrado en voz propia por Robert Pacheco. Escucha cada consejo con la entonación y humor auténtico.
              </p>
            </div>

            <a
              href="https://play.google.com/store/audiobooks/details?id=AQAAAEAaxl6GVM"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 bg-[#2E1065] hover:bg-purple-800 text-white font-bold text-center rounded-2xl uppercase text-xs tracking-wider shadow-lg transition-all active:scale-95 flex items-center justify-center gap-2"
            >
              <span>Escuchar Audiolibro</span>
            </a>
          </div>

          {/* Tarjeta 3: Las Preguntas de Aldebarán */}
          <div className="bg-white/85 backdrop-blur-md rounded-3xl p-8 border border-white shadow-xl flex flex-col justify-between hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group">
            <div>
              <div className="w-full h-52 flex items-center justify-center mb-6 overflow-hidden">
                <img
                  src="/portada.jpg"
                  alt="Las Preguntas de Aldebarán"
                  className="max-h-52 w-auto max-w-full object-contain rounded-lg drop-shadow-xl group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="font-serif font-black text-2xl text-slate-950 mb-2">
                Las Preguntas de Aldebarán
              </h3>
              <p className="text-slate-600 font-bold text-sm sm:text-base leading-relaxed mb-6">
                1050 preguntas de un niño.
              </p>
            </div>

            <a
              href="https://play.google.com/store/books/details?id=saIJEgAAQBAJ"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 bg-[#8A2BE2] hover:bg-[#2E1065] text-white font-bold text-center rounded-2xl uppercase text-xs tracking-wider shadow-md hover:shadow-lg transition-all active:scale-95 block"
            >
              Adquiérelo en Google Play
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
