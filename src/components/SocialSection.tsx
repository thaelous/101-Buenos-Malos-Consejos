import { ExternalLink, Sparkles, Instagram, Youtube, Facebook, Share2, Mail } from 'lucide-react';

export function SocialSection() {
  const socialNetworks = [
    {
      name: 'TikTok',
      handle: '@consejosparamihijo',
      url: 'https://www.tiktok.com/@consejosparamihijo?_r=1&_t=ZS-99P9qIBErZv',
      badge: 'Canal Oficial',
      color: 'from-pink-500/10 via-purple-500/10 to-transparent',
      borderColor: 'border-pink-200/80 hover:border-pink-400',
      btnColor: 'bg-black hover:bg-slate-900 text-white',
      accentColor: 'text-pink-600',
      description: 'Videos cortos, reflexiones directas de la marioneta, dinámicas urbanas y los mejores consejos sin filtro.',
      icon: (
        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .58.04.86.12V9.42a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.68a6.34 6.34 0 0 0 10.82 4.47 6.3 6.3 0 0 0 1.9-4.47V8.6a8.28 8.28 0 0 0 4.87 1.57v-3.48z" />
        </svg>
      )
    },
    {
      name: 'Instagram',
      handle: '@buenos_malos_consejos',
      url: 'https://www.instagram.com/buenos_malos_consejos?igsi=MWtjc3NkbzBtbWM2Mg==',
      badge: 'Frases & Viñetas',
      color: 'from-amber-500/10 via-pink-500/10 to-purple-500/10',
      borderColor: 'border-purple-200/80 hover:border-purple-400',
      btnColor: 'bg-gradient-to-r from-pink-600 via-purple-600 to-amber-500 hover:opacity-90 text-white',
      accentColor: 'text-purple-600',
      description: 'Frases del día, fragmentos del libro, viñetas de los cómics y contenido visual oficial para compartir.',
      icon: <Instagram className="w-6 h-6" />
    },
    {
      name: 'YouTube',
      handle: '@buenosmalosconsejos',
      url: 'https://youtube.com/@buenosmalosconsejos?si=AejlXcKObZXpDJmm',
      badge: 'Episodios & Charlas',
      color: 'from-red-500/10 via-rose-500/10 to-transparent',
      borderColor: 'border-red-200/80 hover:border-red-400',
      btnColor: 'bg-red-600 hover:bg-red-700 text-white',
      accentColor: 'text-red-600',
      description: 'Reflexiones extensas, análisis crudos de la cotidianidad y entrevistas sobre el proceso creativo.',
      icon: <Youtube className="w-6 h-6" />
    },
    {
      name: 'Facebook',
      handle: 'Buenos Malos Consejos',
      url: 'https://www.facebook.com/share/1BmBHofMHy/',
      badge: 'Comunidad Oficial',
      color: 'from-blue-500/10 via-indigo-500/10 to-transparent',
      borderColor: 'border-blue-200/80 hover:border-blue-400',
      btnColor: 'bg-[#1877F2] hover:bg-blue-600 text-white',
      accentColor: 'text-blue-600',
      description: 'Debates con los lectores, dinámicas de preguntas y respuestas, y avisos de eventos oficiales.',
      icon: <Facebook className="w-6 h-6" />
    }
  ];

  return (
    <section id="redes-sociales" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      {/* Encabezado de Sección */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-100/90 border border-purple-200 text-purple-900 text-xs font-black uppercase tracking-widest mb-4 shadow-sm">
          <Share2 className="w-3.5 h-3.5 text-purple-600" />
          Conexión Directa
        </div>

        <h2 className="font-serif font-black text-3xl sm:text-4xl lg:text-5xl text-slate-950 uppercase tracking-tight flex items-center justify-center gap-3 flex-wrap">
          <span>Sigue a Robert en</span>
          <span className="relative inline-block px-3 py-0.5 rounded-2xl bg-[#8A2BE2] text-white shadow-lg shadow-purple-900/20 transform -rotate-1">
            <span className="relative z-10 text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]">
              Redes Sociales
            </span>
          </span>
        </h2>

        <div className="w-20 h-1.5 bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 mx-auto mt-4 rounded-full" />
        
        <p className="mt-4 text-slate-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          Encuentra contenido nuevo cada día: videos de la marioneta, viñetas inéditas de los cómics y los consejos directos sin censura.
        </p>
      </div>

      {/* Grid de 4 Redes Sociales Oficiales */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {socialNetworks.map((social) => (
          <div
            key={social.name}
            className={`relative bg-gradient-to-b ${social.color} bg-white/95 rounded-3xl p-6 border-2 ${social.borderColor} shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group`}
          >
            <div>
              {/* Header de la tarjeta */}
              <div className="flex items-start justify-between gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-white shadow-md border border-slate-100 flex items-center justify-center text-slate-900 group-hover:scale-110 transition-transform">
                  <div className={social.accentColor}>
                    {social.icon}
                  </div>
                </div>

                <span className="inline-block px-2.5 py-1 rounded-full bg-white/90 border border-slate-200/80 text-[10px] font-bold text-slate-700 shadow-sm">
                  {social.badge}
                </span>
              </div>

              {/* Nombre y Handle */}
              <h3 className="font-serif font-black text-lg text-slate-900 leading-tight">
                {social.name}
              </h3>
              <p className="font-mono text-xs font-bold text-purple-700 mt-0.5 mb-2.5 break-all">
                {social.handle}
              </p>

              {/* Descripción */}
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                {social.description}
              </p>
            </div>

            {/* Botón de Enlace */}
            <a
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-full py-2.5 px-3.5 rounded-2xl font-bold text-xs uppercase tracking-wider ${social.btnColor} shadow-md flex items-center justify-center gap-2 transition-all duration-200 group-hover:shadow-lg`}
            >
              <span>Seguir en {social.name}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        ))}
      </div>

      {/* Banner de contacto y colaboraciones */}
      <div className="mt-12 bg-gradient-to-r from-slate-900 via-purple-950 to-slate-900 rounded-3xl p-6 sm:p-8 text-white shadow-xl border border-purple-500/20 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <div className="inline-flex items-center gap-2 text-amber-300 text-xs font-bold uppercase tracking-wider mb-2">
            <Sparkles className="w-4 h-4" />
            Contacto Oficial & Colaboraciones
          </div>
          <h4 className="font-serif font-black text-xl sm:text-2xl text-white">
            Prensa, firmas de libros, entrevistas o eventos
          </h4>
          <p className="text-purple-200/80 text-sm mt-1 max-w-xl">
            Escríbenos directamente al correo electrónico oficial: <strong className="text-amber-300">thaelous@gmail.com</strong> o menciónanos con el hashtag <strong>#101BuenosMalosConsejos</strong>.
          </p>
        </div>

        <a
          href="mailto:thaelous@gmail.com"
          className="flex-shrink-0 px-6 py-3.5 bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 text-white font-black text-xs uppercase tracking-wider rounded-2xl shadow-lg hover:scale-105 active:scale-95 transition-all flex items-center gap-2 border border-white/20"
        >
          <Mail className="w-4 h-4" />
          <span>Escribir a thaelous@gmail.com</span>
        </a>
      </div>
    </section>
  );
}
