import { useState } from 'react';
import { Menu, X, Video, BookOpen, Sparkles, User, Home, BookText, Share2, Layers, ArrowRight } from 'lucide-react';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    {
      name: 'Inicio',
      href: '#hero',
      icon: <Home className="w-3.5 h-3.5 text-white shrink-0" />,
      className: 'bg-gradient-to-r from-sky-500 to-blue-600 text-white hover:from-sky-400 hover:to-blue-500 border-sky-400/60 shadow-sm shadow-sky-500/25',
    },
    {
      name: 'Sobre Robert',
      href: '#sobre-robert',
      icon: <User className="w-3.5 h-3.5 text-white shrink-0" />,
      className: 'bg-gradient-to-r from-indigo-500 to-blue-700 text-white hover:from-indigo-400 hover:to-blue-600 border-indigo-400/60 shadow-sm shadow-indigo-500/25',
    },
    {
      name: 'Adquiere tu libro',
      href: '#adquiere-tu-libro',
      icon: <BookText className="w-3.5 h-3.5 text-white shrink-0" />,
      className: 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white hover:from-emerald-400 hover:to-teal-500 border-emerald-400/60 shadow-sm shadow-emerald-500/30',
    },
    {
      name: 'Comic Online',
      href: '#comics',
      icon: <BookOpen className="w-3.5 h-3.5 text-white shrink-0" />,
      className: 'bg-gradient-to-r from-pink-500 to-rose-600 text-white hover:from-pink-400 hover:to-rose-500 border-pink-400/60 shadow-sm shadow-pink-500/30',
    },
    {
      name: 'Para Cumpleaños',
      href: '#hero',
      icon: <span className="text-xs">🎂</span>,
      className: 'bg-gradient-to-r from-amber-500 to-rose-500 text-white hover:from-amber-400 hover:to-rose-400 border-amber-400/60 shadow-sm shadow-amber-500/30',
    },
    {
      name: 'Los 101 Consejos',
      href: '#los-101',
      icon: <Layers className="w-3.5 h-3.5 text-white shrink-0" />,
      className: 'bg-gradient-to-r from-violet-600 to-purple-700 text-white hover:from-violet-500 hover:to-purple-600 border-purple-400/60 shadow-sm shadow-purple-600/30',
    },
    {
      name: 'Redes Sociales',
      href: '#redes-sociales',
      icon: <Share2 className="w-3.5 h-3.5 text-white shrink-0" />,
      className: 'bg-gradient-to-r from-teal-500 to-cyan-600 text-white hover:from-teal-400 hover:to-cyan-500 border-teal-400/60 shadow-sm shadow-teal-500/25',
    },
    {
      name: 'Videos Personalizados',
      href: '#videos-personalizados',
      icon: <Video className="w-3.5 h-3.5 text-white shrink-0" />,
      className: 'bg-gradient-to-r from-purple-600 via-fuchsia-600 to-pink-600 text-white hover:from-purple-500 hover:via-fuchsia-500 hover:to-pink-500 border-fuchsia-300/80 shadow-md shadow-fuchsia-500/35 hover:scale-[1.04] font-black ring-1 ring-white/30',
    },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-b border-purple-200/80 shadow-[0_4px_25px_-5px_rgba(138,43,226,0.15)] transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Brand Logo & Author Name (Llamativo) */}
          <a href="#" className="flex items-center gap-3 group shrink-0">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#8A2BE2] to-pink-500 rounded-full blur-xs opacity-75 group-hover:opacity-100 transition-opacity duration-300" />
              <img
                src="/log.png"
                alt="Logo Robert Pacheco"
                className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover shadow-md border-2 border-white group-hover:scale-105 transition-transform duration-200"
              />
            </div>
            <div>
              <span className="font-serif font-black text-lg sm:text-2xl tracking-tight text-slate-950 block leading-none drop-shadow-xs">
                ROBERT PACHECO
              </span>
              <span className="text-[10px] sm:text-[11px] uppercase tracking-widest text-[#8A2BE2] font-black block mt-0.5">
                Buenos Malos Consejos
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links (Efecto de Botón en cada sección) */}
          <nav className="hidden xl:flex items-center gap-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide border transition-all duration-200 transform hover:-translate-y-0.5 active:scale-95 ${item.className}`}
              >
                {item.icon}
                <span>{item.name}</span>
              </a>
            ))}
          </nav>

          {/* Versión compacta para pantallas medianas (lg a xl) con colores llamativos */}
          <nav className="hidden lg:flex xl:hidden items-center gap-1.5">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wide border transition-all duration-200 transform hover:-translate-y-0.5 active:scale-95 ${item.className}`}
              >
                {item.icon}
                <span>
                  {item.name === 'Videos Personalizados'
                    ? 'Videos'
                    : item.name === 'Los 101 Consejos'
                    ? '101 Consejos'
                    : item.name === 'Adquiere tu libro'
                    ? 'Libro'
                    : item.name}
                </span>
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button - Llamativo y con flecha de invitación animada */}
          <div className="flex lg:hidden items-center">
            {!mobileMenuOpen && (
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="flex items-center gap-1 sm:gap-1.5 mr-2 group cursor-pointer active:scale-95 transition-all select-none"
                aria-label="Toca para desplegar el menú"
              >
                <span className="text-[10px] sm:text-xs font-black uppercase tracking-wider text-purple-950 bg-gradient-to-r from-amber-300 via-yellow-300 to-amber-400 px-2 sm:px-2.5 py-1 rounded-full shadow-sm border border-amber-400/90 whitespace-nowrap flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-ping shrink-0"></span>
                  <span>Menú</span>
                </span>
                <div className="animate-bounce-x flex items-center text-purple-800 shrink-0">
                  <ArrowRight className="w-5 h-5 drop-shadow-sm text-purple-800" strokeWidth={3} />
                </div>
              </button>
            )}

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="relative p-2.5 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-md shadow-purple-600/30 border border-white/40 hover:from-purple-500 hover:to-pink-500 transition-all active:scale-95"
              aria-label={mobileMenuOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
            >
              {!mobileMenuOpen && (
                <span className="absolute -top-1 -right-1 flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-400 border border-white"></span>
                </span>
              )}
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Dropdown con efecto de botón */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-2xl border-b border-purple-200 px-5 py-6 shadow-2xl animate-in slide-in-from-top-2 duration-200">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center justify-between px-4 py-2.5 rounded-2xl text-xs font-bold uppercase tracking-wide border transition-all duration-150 active:scale-98 ${item.className}`}
              >
                <div className="flex items-center gap-2">
                  {item.icon}
                  <span>{item.name}</span>
                </div>
                <span className="text-[10px] opacity-60">→</span>
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

