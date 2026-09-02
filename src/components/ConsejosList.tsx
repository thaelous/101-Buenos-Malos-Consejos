import { useState, useMemo, useEffect, useRef, TouchEvent } from 'react';
import { 
  BookOpen, Copy, Check, Share2, ChevronLeft, ChevronRight, 
  Shuffle, Search, X, Sparkles, MessageCircle, Twitter, ArrowRight
} from 'lucide-react';
import { CONSEJOS_DATA, Consejo } from '../data/consejos';
import { Category } from '../types';

export function ConsejosList() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<Category>('todos');
  const [copied, setCopied] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);
  const [noteColor, setNoteColor] = useState<'yellow' | 'purple' | 'mint' | 'peach'>('yellow');
  const [isFlipping, setIsFlipping] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const categories: { id: Category; label: string }[] = [
    { id: 'todos', label: 'Todos (101)' },
    { id: 'virales', label: '🔥 Virales' },
    { id: 'caracter', label: 'Carácter & Honor' },
    { id: 'dinero', label: 'Dinero & Negocios' },
    { id: 'relaciones', label: 'Relaciones & Familia' },
    { id: 'mentalidad', label: 'Mentalidad Fuerte' },
    { id: 'vida', label: 'Vida & Calle' },
  ];

  // Filtrado de consejos según búsqueda y categoría
  const filteredConsejos = useMemo(() => {
    return CONSEJOS_DATA.filter((c) => {
      const matchesSearch =
        c.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        c.shortText.toLowerCase().includes(searchTerm.toLowerCase()) ||
        c.id.toString().includes(searchTerm);

      if (!matchesSearch) return false;
      if (selectedCategory === 'todos') return true;
      if (selectedCategory === 'virales') return !!c.isViral;
      return c.category === selectedCategory;
    });
  }, [searchTerm, selectedCategory]);

  // Asegurar que el índice actual es válido al filtrar
  useEffect(() => {
    if (currentIndex >= filteredConsejos.length) {
      setCurrentIndex(0);
    }
  }, [filteredConsejos.length, currentIndex]);

  const currentConsejo = filteredConsejos[currentIndex] || CONSEJOS_DATA[0];

  const handleNext = () => {
    if (filteredConsejos.length === 0) return;
    setIsFlipping(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev < filteredConsejos.length - 1 ? prev + 1 : 0));
      setIsFlipping(false);
    }, 150);
  };

  const handlePrev = () => {
    if (filteredConsejos.length === 0) return;
    setIsFlipping(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev > 0 ? prev - 1 : filteredConsejos.length - 1));
      setIsFlipping(false);
    }, 150);
  };

  const handleRandom = () => {
    if (filteredConsejos.length <= 1) return;
    setIsFlipping(true);
    setTimeout(() => {
      let rand = Math.floor(Math.random() * filteredConsejos.length);
      if (rand === currentIndex) {
        rand = (rand + 1) % filteredConsejos.length;
      }
      setCurrentIndex(rand);
      setIsFlipping(false);
    }, 150);
  };

  const handleJump = (index: number) => {
    setIsFlipping(true);
    setTimeout(() => {
      setCurrentIndex(index);
      setIsFlipping(false);
    }, 150);
  };

  const handleCopy = (consejo: Consejo) => {
    const textToCopy = `«Consejo #${consejo.id}: ${consejo.title}»\n\n"${consejo.shortText}"\n\n— Robert Pacheco en '101 Buenos Malos Consejos para mi Hijo'`;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(textToCopy);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const handleShare = (consejo: Consejo) => {
    const shareText = `Consejo #${consejo.id}: ${consejo.title}\n\n«${consejo.shortText}»\n\n— Robert Pacheco («101 Buenos Malos Consejos para mi Hijo»)`;
    if (navigator.share) {
      navigator.share({
        title: `Consejo #${consejo.id} - Robert Pacheco`,
        text: shareText,
        url: window.location.href,
      }).catch(() => {});
    } else {
      setShowShareModal(true);
    }
  };

  // Paletas de color Post-it
  const postItThemes = {
    yellow: {
      bg: 'bg-gradient-to-br from-amber-50 via-yellow-100 to-amber-100/90',
      border: 'border-amber-300/80',
      tape: 'bg-amber-300/50',
      pin: 'bg-amber-500',
      shadow: 'shadow-[0_22px_45px_-12px_rgba(180,120,20,0.28)]',
      badge: 'bg-amber-200/80 text-amber-900',
      accent: 'text-amber-950',
    },
    purple: {
      bg: 'bg-gradient-to-br from-purple-50 via-purple-100 to-indigo-100/90',
      border: 'border-purple-300/80',
      tape: 'bg-purple-300/50',
      pin: 'bg-purple-600',
      shadow: 'shadow-[0_22px_45px_-12px_rgba(138,43,226,0.28)]',
      badge: 'bg-purple-200/80 text-purple-900',
      accent: 'text-purple-950',
    },
    mint: {
      bg: 'bg-gradient-to-br from-emerald-50 via-teal-100 to-emerald-100/90',
      border: 'border-emerald-300/80',
      tape: 'bg-emerald-300/50',
      pin: 'bg-emerald-600',
      shadow: 'shadow-[0_22px_45px_-12px_rgba(16,185,129,0.25)]',
      badge: 'bg-emerald-200/80 text-emerald-900',
      accent: 'text-emerald-950',
    },
    peach: {
      bg: 'bg-gradient-to-br from-rose-50 via-orange-100 to-amber-100/90',
      border: 'border-rose-300/80',
      tape: 'bg-rose-300/50',
      pin: 'bg-rose-500',
      shadow: 'shadow-[0_22px_45px_-12px_rgba(244,63,94,0.25)]',
      badge: 'bg-rose-200/80 text-rose-900',
      accent: 'text-rose-950',
    },
  };

  const theme = postItThemes[noteColor];

  // Soporte de gestos táctiles Swipe
  const onTouchStart = (e: TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e: TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 50) handleNext();
    else if (diff < -50) handlePrev();
    touchStartX.current = null;
  };

  // Atajos de teclado
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignorar si el usuario está escribiendo en el buscador
      if (document.activeElement?.tagName === 'INPUT') return;
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        handlePrev();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [filteredConsejos.length]);

  return (
    <section id="los-101" className="py-20 relative bg-white/40 backdrop-blur-md border-b border-white/30 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/80 backdrop-blur-md text-purple-900 border border-purple-200 font-bold text-xs uppercase tracking-wider mb-3 shadow-sm">
            <BookOpen className="w-3.5 h-3.5 text-purple-700" />
            Notas & Consejos Ojeables
          </span>
          
          <h2 className="font-serif font-black text-3xl sm:text-4xl lg:text-5xl text-slate-950 uppercase tracking-tight mb-3"
              style={{ fontFamily: 'Georgia, serif' }}>
            Los 101 <span className="text-purple-900">Consejos</span>
          </h2>
          
          <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
            Hojéalos en formato de <strong>notas adhesivas interactivas</strong>. Pasa de uno en uno con fluidez, copia tus favoritos o compártelos directamente con tu gente.
          </p>

          <div className="mt-4 inline-block bg-purple-100/90 border border-purple-300 px-6 py-2 rounded-full shadow-sm">
            <p className="font-bold text-xs sm:text-sm tracking-wide text-purple-950 uppercase">
              ★ LEE LOS CONSEJOS COMPLETOS ADQUIRIENDO EL LIBRO ★
            </p>
          </div>
        </div>

        {/* Category Filter Chips & Search Bar */}
        <div className="max-w-3xl mx-auto mb-8 space-y-4">
          
          {/* Live Search Input */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentIndex(0);
              }}
              placeholder="Buscar consejo por número o palabra clave (ej. 'dinero', 'amigos', '101')..."
              className="w-full pl-11 pr-10 py-3 bg-white/80 backdrop-blur-md border border-purple-200 rounded-2xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:bg-white transition-all text-xs sm:text-sm shadow-sm"
            />
            {searchTerm && (
              <button
                onClick={() => {
                  setSearchTerm('');
                  setCurrentIndex(0);
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                aria-label="Limpiar búsqueda"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Category Filters */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none justify-start sm:justify-center">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setSelectedCategory(cat.id);
                  setCurrentIndex(0);
                }}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-purple-800 text-white shadow-md scale-105'
                    : 'bg-white/70 hover:bg-white text-slate-700 border border-slate-200/80'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Color selector & result counter */}
          <div className="flex items-center justify-between text-xs text-slate-600 pt-1 px-1">
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-semibold text-slate-500">Color del Post-it:</span>
              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={() => setNoteColor('yellow')}
                  title="Amarillo Clásico"
                  className={`w-5 h-5 rounded-full bg-amber-300 border transition-all ${noteColor === 'yellow' ? 'ring-2 ring-purple-600 scale-110' : 'opacity-70 hover:opacity-100'}`}
                />
                <button
                  type="button"
                  onClick={() => setNoteColor('purple')}
                  title="Morado Firma"
                  className={`w-5 h-5 rounded-full bg-purple-300 border transition-all ${noteColor === 'purple' ? 'ring-2 ring-purple-600 scale-110' : 'opacity-70 hover:opacity-100'}`}
                />
                <button
                  type="button"
                  onClick={() => setNoteColor('mint')}
                  title="Menta Fresca"
                  className={`w-5 h-5 rounded-full bg-emerald-300 border transition-all ${noteColor === 'mint' ? 'ring-2 ring-purple-600 scale-110' : 'opacity-70 hover:opacity-100'}`}
                />
                <button
                  type="button"
                  onClick={() => setNoteColor('peach')}
                  title="Melocotón Cálido"
                  className={`w-5 h-5 rounded-full bg-rose-300 border transition-all ${noteColor === 'peach' ? 'ring-2 ring-purple-600 scale-110' : 'opacity-70 hover:opacity-100'}`}
                />
              </div>
            </div>

            <div className="font-mono text-xs font-semibold">
              {filteredConsejos.length > 0 ? (
                <span>Consejo <strong>{currentIndex + 1}</strong> de {filteredConsejos.length}</span>
              ) : (
                <span className="text-rose-600">0 resultados</span>
              )}
            </div>
          </div>

        </div>

        {/* COMPONENTE INTERACTIVO DE POST-IT */}
        {filteredConsejos.length > 0 ? (
          <div className="max-w-2xl mx-auto relative select-none">
            
            {/* Sombras y hojas traseras apiladas simulando un bloc de notas */}
            <div className="absolute inset-0 translate-y-3 translate-x-2 bg-amber-100/60 rounded-3xl -rotate-1 border border-amber-200/40 pointer-events-none" />
            <div className="absolute inset-0 translate-y-1.5 -translate-x-1 bg-white/70 rounded-3xl rotate-1 border border-slate-200/60 pointer-events-none" />

            {/* TARJETA POST-IT PRINCIPAL */}
            <div
              onTouchStart={onTouchStart}
              onTouchEnd={onTouchEnd}
              className={`relative z-10 rounded-3xl p-6 sm:p-10 border-2 ${theme.bg} ${theme.border} ${theme.shadow} transition-all duration-300 flex flex-col justify-between min-h-[440px] sm:min-h-[480px] ${
                isFlipping ? 'scale-95 opacity-50 rotate-1' : 'scale-100 opacity-100 rotate-0'
              }`}
            >
              
              {/* Cinta Adhesiva (Washi Tape) realista arriba al centro */}
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-28 sm:w-36 h-7 bg-white/40 backdrop-blur-md border border-white/60 rounded-sm shadow-sm rotate-[-0.5deg] pointer-events-none" />

              {/* Cabecera del Post-it */}
              <div>
                <div className="flex items-center justify-between border-b border-black/10 pb-3 mb-5">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-purple-700 shadow-sm" />
                    <span className="font-mono text-xs sm:text-sm font-black tracking-wider uppercase text-purple-950">
                      Consejo #{currentConsejo.id} de 101
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    {currentConsejo.isViral && (
                      <span className="bg-amber-400/90 text-amber-950 font-bold text-[11px] px-2.5 py-0.5 rounded-full flex items-center gap-1 shadow-sm">
                        <Sparkles className="w-3 h-3 fill-current text-amber-900" />
                        Viral
                      </span>
                    )}
                    <span className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full ${theme.badge}`}>
                      {currentConsejo.category}
                    </span>
                  </div>
                </div>

                {/* Título del consejo */}
                <h3 
                  className={`font-sans font-extrabold text-xl sm:text-2xl lg:text-3xl ${theme.accent} uppercase tracking-tight mb-4 leading-snug`}
                >
                  {currentConsejo.id}.- {currentConsejo.title}
                </h3>

                {/* Texto del consejo con tipografía limpia, clara y de máxima legibilidad */}
                <div className="my-6">
                  <p className="font-sans font-medium sm:font-semibold text-slate-900 text-lg sm:text-xl lg:text-2xl leading-relaxed tracking-normal">
                    «{currentConsejo.shortText}»
                  </p>
                </div>
              </div>

              {/* Pie del Post-it con Autor y Botones de Copiar y Compartir */}
              <div className="pt-4 border-t border-black/10 mt-auto">
                <div className="flex items-center justify-between text-xs text-slate-700 mb-4 font-mono font-medium">
                  <span>— Robert Pacheco</span>
                  <span className="italic text-[11px] opacity-80">«101 Buenos Malos Consejos»</span>
                </div>

                {/* Botones de acción requeridos */}
                <div className="grid grid-cols-2 gap-3">
                  
                  {/* Botón de Copiar Consejo con Alerta Visual de Éxito */}
                  <button
                    type="button"
                    onClick={() => handleCopy(currentConsejo)}
                    className={`py-3 px-4 rounded-2xl font-bold text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md active:scale-95 cursor-pointer ${
                      copied
                        ? 'bg-emerald-600 text-white shadow-emerald-600/30'
                        : 'bg-white hover:bg-slate-50 text-purple-950 border border-purple-200 hover:border-purple-400'
                    }`}
                    title="Copiar texto al portapapeles"
                  >
                    {copied ? (
                      <>
                        <Check className="w-4 h-4 text-emerald-200 stroke-[3]" />
                        <span>¡Copiado con Éxito!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4 text-purple-700" />
                        <span>Copiar Consejo</span>
                      </>
                    )}
                  </button>

                  {/* Botón de Compartir Consejo */}
                  <button
                    type="button"
                    onClick={() => handleShare(currentConsejo)}
                    className="py-3 px-4 rounded-2xl bg-[#8A2BE2] hover:bg-purple-800 text-white font-bold text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md shadow-purple-900/20 active:scale-95 hover:scale-[1.02] cursor-pointer"
                    title="Compartir consejo en redes"
                  >
                    <Share2 className="w-4 h-4" />
                    <span>Compartir</span>
                  </button>

                </div>
              </div>

            </div>

            {/* BOTONES LATERALES DE NAVEGACIÓN ANTERIOR / SIGUIENTE */}
            <button
              type="button"
              onClick={handlePrev}
              className="absolute -left-3 sm:-left-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-white/95 hover:bg-purple-700 text-slate-800 hover:text-white border border-purple-200 shadow-xl flex items-center justify-center transition-all hover:scale-110 active:scale-95 cursor-pointer"
              title="Consejo Anterior (Tecla Flecha Izquierda)"
              aria-label="Consejo Anterior"
            >
              <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7" />
            </button>

            <button
              type="button"
              onClick={handleNext}
              className="absolute -right-3 sm:-right-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-white/95 hover:bg-purple-700 text-slate-800 hover:text-white border border-purple-200 shadow-xl flex items-center justify-center transition-all hover:scale-110 active:scale-95 cursor-pointer"
              title="Siguiente Consejo (Tecla Flecha Derecha)"
              aria-label="Siguiente Consejo"
            >
              <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7" />
            </button>

            {/* BARRA INFERIOR DE CONTROL INTERACTIVO */}
            <div className="mt-8 bg-white/80 backdrop-blur-md rounded-2xl p-4 border border-purple-200/80 shadow-md flex flex-wrap items-center justify-between gap-4">
              
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handlePrev}
                  className="px-4 py-2 rounded-xl bg-purple-50 hover:bg-purple-100 text-purple-900 font-bold text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Anterior</span>
                </button>

                <button
                  type="button"
                  onClick={handleNext}
                  className="px-4 py-2 rounded-xl bg-purple-50 hover:bg-purple-100 text-purple-900 font-bold text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <span>Siguiente</span>
                  <ChevronRight className="w-4 h-4" />
                </button>

                <button
                  type="button"
                  onClick={handleRandom}
                  className="px-3 py-2 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-900 font-bold text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
                  title="Elegir consejo al azar"
                >
                  <Shuffle className="w-3.5 h-3.5 text-amber-600" />
                  <span className="hidden sm:inline">Aleatorio</span>
                </button>
              </div>

              {/* Slider de salto rápido */}
              <div className="flex items-center gap-3 flex-1 max-w-xs justify-end">
                <span className="text-[11px] font-mono text-slate-500 hidden sm:inline">Saltar a:</span>
                <input
                  type="range"
                  min="0"
                  max={filteredConsejos.length - 1}
                  value={currentIndex}
                  onChange={(e) => handleJump(Number(e.target.value))}
                  className="w-full accent-purple-600 cursor-pointer h-2 bg-slate-200 rounded-lg"
                  aria-label="Selector de posición de consejo"
                />
                <span className="font-mono text-xs font-bold text-purple-900 min-w-[3rem] text-right">
                  #{currentConsejo.id}
                </span>
              </div>

            </div>

          </div>
        ) : (
          /* Empty Search Fallback */
          <div className="text-center py-16 bg-white/80 rounded-3xl border border-dashed border-slate-300 max-w-xl mx-auto shadow-sm">
            <BookOpen className="w-12 h-12 text-slate-400 mx-auto mb-3" />
            <h4 className="font-serif font-bold text-lg text-slate-800 mb-1">
              No encontramos ningún consejo con esa búsqueda
            </h4>
            <p className="text-xs text-slate-500 mb-4">
              Prueba buscando por otra palabra clave o restablece los filtros para hojear los 101.
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('todos');
                setCurrentIndex(0);
              }}
              className="bg-purple-700 hover:bg-purple-800 text-white text-xs font-bold px-5 py-2.5 rounded-xl transition-all"
            >
              Restablecer Filtros
            </button>
          </div>
        )}

      </div>

      {/* Modal de Compartir Alternativo si el navegador no tiene Web Share API nativo */}
      {showShareModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl border border-purple-200 text-left relative">
            <button
              onClick={() => setShowShareModal(false)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center font-bold"
            >
              ✕
            </button>

            <h3 className="font-serif font-black text-xl text-slate-900 mb-1">
              Compartir Consejo #{currentConsejo.id}
            </h3>
            <p className="text-xs text-slate-500 mb-4">
              {currentConsejo.title}
            </p>

            <div className="space-y-2.5">
              <a
                href={`https://api.whatsapp.com/send?text=${encodeURIComponent(
                  `«Consejo #${currentConsejo.id}: ${currentConsejo.title}»\n\n"${currentConsejo.shortText}"\n\n— Robert Pacheco en '101 Buenos Malos Consejos para mi Hijo'`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-sm"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Compartir en WhatsApp</span>
              </a>

              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                  `«Consejo #${currentConsejo.id}: ${currentConsejo.title}» - "${currentConsejo.shortText}" — Robert Pacheco`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-sm"
              >
                <Twitter className="w-4 h-4 fill-current" />
                <span>Compartir en X (Twitter)</span>
              </a>

              <button
                onClick={() => {
                  handleCopy(currentConsejo);
                  setShowShareModal(false);
                }}
                className="w-full py-3 px-4 rounded-xl bg-purple-50 hover:bg-purple-100 text-purple-900 font-bold text-xs flex items-center justify-center gap-2 transition-all border border-purple-200"
              >
                <Copy className="w-4 h-4 text-purple-700" />
                <span>Copiar texto del consejo</span>
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}

