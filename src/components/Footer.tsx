import { Youtube, Mail, ArrowUp, Instagram, Facebook } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    {
      name: 'TikTok',
      handle: '@consejosparamihijo',
      url: 'https://www.tiktok.com/@consejosparamihijo?_r=1&_t=ZS-99P9qIBErZv',
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .58.04.86.12V9.42a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.68a6.34 6.34 0 0 0 10.82 4.47 6.3 6.3 0 0 0 1.9-4.47V8.6a8.28 8.28 0 0 0 4.87 1.57v-3.48z"/>
        </svg>
      ),
      hoverBg: 'hover:bg-pink-600',
    },
    {
      name: 'Instagram',
      handle: '@buenos_malos_consejos',
      url: 'https://www.instagram.com/buenos_malos_consejos?igsi=MWtjc3NkbzBtbWM2Mg==',
      icon: <Instagram className="w-4 h-4" />,
      hoverBg: 'hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600',
    },
    {
      name: 'Facebook',
      handle: 'Buenos Malos Consejos',
      url: 'https://www.facebook.com/share/1BmBHofMHy/',
      icon: <Facebook className="w-4 h-4" />,
      hoverBg: 'hover:bg-blue-600',
    },
    {
      name: 'YouTube',
      handle: '@buenosmalosconsejos',
      url: 'https://youtube.com/@buenosmalosconsejos?si=AejlXcKObZXpDJmm',
      icon: <Youtube className="w-4 h-4" />,
      hoverBg: 'hover:bg-red-600',
    },
  ];

  return (
    <footer className="bg-slate-950 text-slate-300 pt-14 pb-10 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-slate-800">
          
          {/* Brand Col */}
          <div className="md:col-span-6 lg:col-span-5">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/log.png"
                alt="Logo Robert Pacheco"
                className="w-10 h-10 rounded-full object-cover border border-purple-400/50 shadow-md"
              />
              <div>
                <span className="font-serif font-black text-xl text-white tracking-wider block leading-tight">
                  ROBERT PACHECO
                </span>
                <span className="text-[10px] uppercase tracking-widest text-purple-400 font-bold block">
                  Buenos Malos Consejos para mi Hijo
                </span>
              </div>
            </div>
            
            <p className="text-slate-400 text-sm leading-relaxed mb-5 max-w-md">
              Sabiduría real, callejera y protectora para una nueva generación que necesita verdades directas sin censura.
            </p>

            <div className="flex items-center gap-2 text-xs text-purple-300">
              <Mail className="w-4 h-4 text-purple-400 flex-shrink-0" />
              <span>Contacto directo: </span>
              <a href="mailto:thaelous@gmail.com" className="hover:text-white font-mono underline decoration-purple-400 transition-colors">
                thaelous@gmail.com
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 lg:col-span-3">
            <h4 className="font-serif font-bold text-white text-xs uppercase tracking-widest mb-4 text-slate-200">
              Navegación
            </h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#hero" className="hover:text-purple-400 transition-colors">Inicio</a></li>
              <li><a href="#sobre-robert" className="hover:text-purple-400 transition-colors">Sobre Robert</a></li>
              <li><a href="#adquiere-tu-libro" className="hover:text-purple-400 transition-colors">Adquiere tu libro</a></li>
              <li><a href="#comics" className="hover:text-purple-400 transition-colors text-pink-400 font-medium">Comic Online</a></li>
              <li><a href="#consejo-dia" className="hover:text-purple-400 transition-colors">Consejo Viral</a></li>
              <li><a href="#los-101" className="hover:text-purple-400 transition-colors">Los 101 Consejos</a></li>
              <li><a href="#redes-sociales" className="hover:text-purple-400 transition-colors">Redes Sociales</a></li>
              <li><a href="#videos-personalizados" className="hover:text-purple-400 transition-colors text-purple-300 font-semibold">Videos Personalizados</a></li>
            </ul>
          </div>

          {/* Social Links Col */}
          <div className="md:col-span-3 lg:col-span-4">
            <h4 className="font-serif font-bold text-white text-xs uppercase tracking-widest mb-4 text-slate-200">
              Canales Oficiales
            </h4>
            <p className="text-xs text-slate-400 mb-4 leading-relaxed">
              Sigue las reflexiones diarias, viñetas de cómic y novedades en nuestras redes:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-2.5 px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white ${social.hoverBg} transition-all text-xs font-medium`}
                >
                  <span className="flex-shrink-0">{social.icon}</span>
                  <span className="truncate">{social.name}</span>
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom bar - Clean Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            Copyright © Robert Pacheco — <em>Buenos Malos Consejos para mi Hijo</em>. Todos los derechos reservados.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors bg-slate-900 hover:bg-slate-800 px-3.5 py-1.5 rounded-full border border-slate-800"
          >
            <span>Volver arriba</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
