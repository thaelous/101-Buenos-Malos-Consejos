import { useState, useEffect, useCallback, useRef, type TouchEvent } from 'react';
import { BookOpen, ChevronLeft, ChevronRight, X, Sparkles, Maximize2, Minimize2, Grid, Rows } from 'lucide-react';

export const COMIC_PAGES = [
  { file: '7.jpg', title: 'La regla del 7' },
  { file: 'AMNESIA.jpg', title: 'Amnesia' },
  { file: 'arbol.jpg', title: 'El árbol' },
  { file: 'CABALLERO.jpg', title: 'El caballero' },
  { file: 'caliente.jpg', title: 'Comida caliente' },
  { file: 'DADPOOL.jpg', title: 'Dadpool' },
  { file: 'depre.jpg', title: 'Día gris' },
  { file: 'flash.jpg', title: 'Flash' },
  { file: 'indirectas.jpg', title: 'Las indirectas' },
  { file: 'lata.jpg', title: 'La lata' },
  { file: 'LLAMA.jpg', title: 'La llama' },
  { file: 'logica.jpg', title: 'Lógica cotidiana' },
  { file: 'maps.jpg', title: 'El mapa' },
  { file: 'modem.jpg', title: 'El módem' },
  { file: 'omepra.jpg', title: 'Omeprazol' },
  { file: 'paz.jpg', title: 'La paz mental' },
  { file: 'por.jpg', title: 'Prioridades' },
  { file: 'realismo.jpg', title: 'Dosis de realismo' },
  { file: 'RECALENTADO.jpg', title: 'El recalentado' },
  { file: 'rusa.jpg', title: 'Ruleta' },
  { file: 'shampoo.jpg', title: 'El champú' },
  { file: 'socrates.jpg', title: 'Sócrates y la vida' },
  { file: 'tablet.jpg', title: 'La tablet' },
  { file: 'UNICORNIO.jpg', title: 'El unicornio' },
  { file: 'utiles.jpg', title: 'Útiles necesarios' },
];

export function ComicSection() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [viewMode, setViewMode] = useState<'carousel' | 'vertical'>('carousel');
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const carouselContainerRef = useRef<HTMLDivElement>(null);

  const totalPages = COMIC_PAGES.length;

  const handlePrev = useCallback(() => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : totalPages - 1));
  }, [totalPages]);

  const handleNext = useCallback(() => {
    setCurrentPage((prev) => (prev < totalPages - 1 ? prev + 1 : 0));
  }, [totalPages]);

  const handleClose = () => {
    setIsOpen(false);
  };

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleClose();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, handlePrev, handleNext]);

  // Touch handlers for mobile swipe
  const minSwipeDistance = 50;

  const onTouchStart = (e: TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrev();
    }
  };

  return (
    <section id="comics" className="py-20 relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Fondo decorativo con estética cómic pop */}
      <div className="absolute inset-0 bg-gradient-to-b from-sky-50/60 via-purple-50/40 to-sky-50/60 rounded-3xl -z-10 pointer-events-none border border-sky-100/80 shadow-sm" />

      {/* Encabezado de la sección */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-100/90 border border-purple-200 text-purple-900 text-xs font-black uppercase tracking-widest mb-4 shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-purple-600 animate-pulse" />
          Nueva Sección Ilustrada
        </div>

        {/* Título con estilo de marca (101 con morado y contorno característico) */}
        <h2 className="font-serif font-black text-3xl sm:text-4xl lg:text-5xl text-slate-950 uppercase tracking-tight flex items-center justify-center gap-3 flex-wrap">
          <span>Buenos Malos Consejos.</span>
          <span className="relative inline-block px-3 py-0.5 rounded-2xl bg-[#8A2BE2] text-white shadow-lg shadow-purple-900/20 transform -rotate-1">
            <span className="relative z-10 text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]">
              Cómics en línea
            </span>
          </span>
        </h2>
        <div className="w-20 h-1.5 bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 mx-auto mt-4 rounded-full" />
        <p className="mt-4 text-slate-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          Las reflexiones callejeras de Robert Pacheco adaptadas en viñetas directas, crudas y cargadas de humor auténtico.
        </p>
      </div>

      {/* PORTADA DEL CÓMIC */}
      <div className="max-w-4xl mx-auto">
        <div className="relative bg-gradient-to-br from-slate-900 via-purple-950 to-slate-900 rounded-[32px] p-6 sm:p-12 shadow-2xl border-4 border-purple-400/30 overflow-hidden group">
          
          {/* Textura de puntos de cómic semitransparente */}
          <div 
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
              backgroundSize: '16px 16px'
            }}
          />

          {/* Destellos de iluminación de fondo */}
          <div className="absolute -top-24 -left-24 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-pink-500/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Vista previa de las tiras (apilamiento estilo cómic) */}
            <div className="md:col-span-5 flex justify-center">
              <div 
                onClick={() => { setCurrentPage(0); setIsOpen(true); }}
                className="relative cursor-pointer transition-transform duration-500 group-hover:scale-105"
                title="Haz clic para abrir el cómic"
              >
                {/* Página trasera decorativa 2 */}
                <div className="absolute -inset-2 bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl transform rotate-6 opacity-75 blur-[1px]" />
                {/* Página trasera decorativa 1 */}
                <div className="absolute -inset-1 bg-amber-400 rounded-2xl transform -rotate-3 opacity-90" />
                
                {/* Portada principal con la primera página */}
                <div className="relative w-56 sm:w-64 aspect-[3/4] bg-white rounded-2xl overflow-hidden shadow-2xl border-4 border-white flex flex-col justify-between">
                  <img
                    src="/comic/7.jpg"
                    alt="Portada del Cómic"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-4 text-white">
                    <span className="text-[11px] font-black uppercase tracking-widest bg-pink-600 text-white px-2.5 py-1 rounded-md w-fit mb-1 shadow">
                      Edición 101
                    </span>
                    <h4 className="font-serif font-black text-lg leading-tight drop-shadow">
                      Buenos Malos Consejos
                    </h4>
                    <p className="text-[11px] text-purple-200">{totalPages} tiras cómicas completas</p>
                  </div>
                </div>

                {/* Badge flotante "Hacer clic para leer" */}
                <div className="absolute -bottom-3 -right-3 bg-amber-400 text-slate-950 font-black text-xs px-3 py-1.5 rounded-full shadow-lg border-2 border-slate-900 transform group-hover:scale-110 transition-transform flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>¡{totalPages} Tiras!</span>
                </div>
              </div>
            </div>

            {/* Texto y Llamado a la acción */}
            <div className="md:col-span-7 text-center md:text-left flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 text-pink-400 font-mono text-xs font-bold uppercase tracking-wider mb-2">
                <span className="w-2 h-2 rounded-full bg-pink-400 animate-ping" />
                Disponible ahora en formato interactivo
              </div>

              <h3 className="font-serif font-black text-2xl sm:text-4xl text-white mb-4 leading-tight">
                Buenos Malos Consejos. <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-300 to-amber-300">
                  Cómics en línea
                </span>
              </h3>

              <p className="text-purple-100/90 text-sm sm:text-base leading-relaxed mb-8">
                Hojéalo de forma cómoda desde tu móvil o computadora. Disfruta de cada viñeta en alta resolución con controles intuitivos de cambio de página.
              </p>

              {/* Botón principal: Abrir Cómic / Comenzar a hojear */}
              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
                <button
                  id="btn-abrir-comic"
                  type="button"
                  onClick={() => { setCurrentPage(0); setIsOpen(true); }}
                  className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-pink-600 via-purple-600 to-pink-600 hover:from-pink-500 hover:to-purple-500 text-white font-black text-sm uppercase tracking-wider rounded-2xl shadow-xl shadow-pink-900/40 hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-3 border-2 border-white/20 cursor-pointer"
                >
                  <BookOpen className="w-5 h-5 text-amber-300" />
                  <span>Comenzar a hojear</span>
                </button>

                <button
                  type="button"
                  onClick={() => { setCurrentPage(0); setViewMode('vertical'); setIsOpen(true); }}
                  className="w-full sm:w-auto px-6 py-4 bg-white/10 hover:bg-white/20 text-purple-200 hover:text-white font-bold text-xs uppercase tracking-wider rounded-2xl backdrop-blur-sm border border-white/10 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Rows className="w-4 h-4" />
                  <span>Ver en tira vertical</span>
                </button>
              </div>

              {/* Mini indicador de páginas disponibles */}
              <div className="mt-6 flex items-center justify-center md:justify-start gap-2 text-xs text-purple-300 font-medium">
                <span>Colección completa:</span>
                <span className="bg-purple-800/80 px-2.5 py-0.5 rounded-full text-white font-bold text-[11px] border border-purple-500/30">
                  {totalPages} páginas ilustradas
                </span>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* VISOR INTERACTIVO (MODAL TIPO CARRUSEL Y LECTOR FLUIDO) */}
      {isOpen && (
        <div 
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex flex-col bg-slate-950/95 backdrop-blur-xl animate-fadeIn"
        >
          {/* Barra superior de controles del visor */}
          <header className="flex-shrink-0 flex items-center justify-between px-4 sm:px-8 py-4 bg-slate-900/90 border-b border-white/10 z-20">
            {/* Título e indicador de página */}
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-purple-600/30 border border-purple-500/40 flex items-center justify-center text-purple-300">
                <BookOpen className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif font-black text-white text-base sm:text-lg leading-none">
                  Buenos Malos Consejos. <span className="text-purple-400">Cómics en línea</span>
                </h3>
                <p className="text-xs text-purple-200/70 font-mono mt-1">
                  {viewMode === 'carousel' ? (
                    <>Página <span className="text-amber-400 font-bold">{currentPage + 1}</span> de {totalPages} • {COMIC_PAGES[currentPage].title}</>
                  ) : (
                    <>Modo Tira Continua ({totalPages} páginas)</>
                  )}
                </p>
              </div>
            </div>

            {/* Acciones: Alternar modo de vista y Cerrar */}
            <div className="flex items-center gap-2 sm:gap-3">
              <button
                type="button"
                onClick={() => setViewMode((m) => (m === 'carousel' ? 'vertical' : 'carousel'))}
                title={viewMode === 'carousel' ? 'Cambiar a tira vertical' : 'Cambiar a modo carrusel'}
                className="p-2 sm:px-3 sm:py-2 rounded-xl bg-white/10 hover:bg-white/20 text-purple-200 hover:text-white transition-colors text-xs font-bold flex items-center gap-1.5"
              >
                {viewMode === 'carousel' ? (
                  <>
                    <Rows className="w-4 h-4" />
                    <span className="hidden sm:inline">Tira vertical</span>
                  </>
                ) : (
                  <>
                    <Grid className="w-4 h-4" />
                    <span className="hidden sm:inline">Página a página</span>
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={handleClose}
                aria-label="Cerrar visor de cómic"
                className="p-2 sm:px-4 sm:py-2 rounded-xl bg-red-600/80 hover:bg-red-600 text-white transition-all text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-lg shadow-red-900/40"
              >
                <X className="w-5 h-5" />
                <span className="hidden sm:inline">Cerrar</span>
              </button>
            </div>
          </header>

          {/* CONTENIDO DEL VISOR */}
          <div className="flex-1 relative overflow-hidden flex flex-col">
            
            {viewMode === 'carousel' ? (
              /* MODO CARRUSEL (PÁGINA A PÁGINA) */
              <div 
                ref={carouselContainerRef}
                onTouchStart={onTouchStart}
                onTouchMove={onTouchMove}
                onTouchEnd={onTouchEnd}
                className="flex-1 flex items-center justify-center p-2 sm:p-6 relative select-none"
              >
                {/* Botón flotante Anterior (Izquierda) */}
                <button
                  type="button"
                  onClick={handlePrev}
                  aria-label="Página anterior"
                  className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-30 p-3 sm:p-4 rounded-full bg-slate-900/80 hover:bg-purple-600 text-white border border-white/20 shadow-2xl backdrop-blur-md transition-all hover:scale-110 active:scale-95 group cursor-pointer"
                >
                  <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8 group-hover:-translate-x-0.5 transition-transform" />
                </button>

                {/* Contenedor central de la imagen de cómic */}
                <div className="max-w-4xl max-h-[72vh] sm:max-h-[76vh] w-full flex items-center justify-center">
                  <div className="relative bg-white/5 p-2 sm:p-3 rounded-2xl sm:rounded-3xl border border-white/10 shadow-2xl max-h-full flex items-center justify-center">
                    <img
                      key={currentPage}
                      src={`/comic/${COMIC_PAGES[currentPage].file}`}
                      alt={`Página ${currentPage + 1}: ${COMIC_PAGES[currentPage].title}`}
                      className="max-h-[66vh] sm:max-h-[72vh] w-auto max-w-full object-contain rounded-xl shadow-2xl animate-scaleIn transition-all"
                    />
                  </div>
                </div>

                {/* Botón flotante Siguiente (Derecha) */}
                <button
                  type="button"
                  onClick={handleNext}
                  aria-label="Página siguiente"
                  className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-30 p-3 sm:p-4 rounded-full bg-slate-900/80 hover:bg-purple-600 text-white border border-white/20 shadow-2xl backdrop-blur-md transition-all hover:scale-110 active:scale-95 group cursor-pointer"
                >
                  <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            ) : (
              /* MODO TIRA CONTINUA (VERTICAL) */
              <div className="flex-1 overflow-y-auto p-4 sm:p-8 space-y-6 max-w-3xl mx-auto w-full">
                {COMIC_PAGES.map((page, idx) => (
                  <div key={idx} className="bg-slate-900/80 p-3 sm:p-4 rounded-2xl border border-white/10 shadow-xl text-center">
                    <div className="flex items-center justify-between text-xs text-purple-300 font-mono mb-2 px-2">
                      <span>Página {idx + 1} de {totalPages}</span>
                      <span className="font-bold text-white">{page.title}</span>
                    </div>
                    <img
                      src={`/comic/${page.file}`}
                      alt={`Página ${idx + 1}: ${page.title}`}
                      loading="lazy"
                      className="w-full max-h-[85vh] object-contain mx-auto rounded-xl shadow-md"
                    />
                  </div>
                ))}
              </div>
            )}

            {/* Barra inferior de navegación rápida con miniaturas / selector */}
            <footer className="flex-shrink-0 bg-slate-900/90 border-t border-white/10 px-4 py-3 z-20">
              <div className="max-w-5xl mx-auto flex items-center justify-between gap-4">
                
                {/* Botón Anterior */}
                <button
                  type="button"
                  onClick={handlePrev}
                  className="px-3 sm:px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold uppercase tracking-wider flex items-center gap-1 transition-all"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span className="hidden sm:inline">Anterior</span>
                </button>

                {/* Tira deslizable de miniaturas / números de página */}
                <div className="flex items-center gap-1.5 overflow-x-auto py-1 px-2 scrollbar-thin scrollbar-thumb-purple-600 max-w-[60vw]">
                  {COMIC_PAGES.map((page, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => {
                        setCurrentPage(idx);
                        if (viewMode === 'vertical') setViewMode('carousel');
                      }}
                      className={`flex-shrink-0 w-8 h-8 rounded-lg font-mono text-xs font-bold transition-all ${
                        currentPage === idx && viewMode === 'carousel'
                          ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white scale-110 shadow-lg shadow-purple-900/50 ring-2 ring-white'
                          : 'bg-white/10 hover:bg-white/20 text-purple-200'
                      }`}
                      title={`Ir a página ${idx + 1}: ${page.title}`}
                    >
                      {idx + 1}
                    </button>
                  ))}
                </div>

                {/* Botón Siguiente */}
                <button
                  type="button"
                  onClick={handleNext}
                  className="px-3 sm:px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold uppercase tracking-wider flex items-center gap-1 transition-all shadow-md"
                >
                  <span className="hidden sm:inline">Siguiente</span>
                  <ChevronRight className="w-4 h-4" />
                </button>

              </div>
            </footer>

          </div>

        </div>
      )}
    </section>
  );
}
