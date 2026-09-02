import { Video, Users, Sparkles, Clock, HeartHandshake, MessageCircle, ArrowRight, CheckCircle2 } from 'lucide-react';

export function PersonalizedVideosSection() {
  const whatsappUrl = "https://wa.me/524626216428?text=Hola%20Robert,%20me%20gustar%C3%ADa%20solicitar%20un%20Video%20Personalizado.";

  return (
    <section id="videos-personalizados" className="py-20 relative overflow-hidden scroll-mt-16">
      {/* Background with soft sky blue & subtle purple/fuchsia glows */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#BAE6FD]/40 via-[#E0F2FE]/60 to-[#BAE6FD]/30 -z-10" />
      <div className="absolute top-12 left-1/4 w-96 h-96 bg-purple-400/15 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-pink-400/15 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 border border-purple-200 text-purple-800 text-xs font-bold uppercase tracking-widest mb-4 shadow-sm backdrop-blur-sm">
            <Video className="w-4 h-4 text-purple-600" />
            <span>Un Mensaje Único y Directo al Corazón</span>
          </div>

          <h2 className="font-serif font-black text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight leading-tight">
            VIDEOS <span className="bg-gradient-to-r from-purple-700 via-pink-600 to-purple-900 bg-clip-text text-transparent">PERSONALIZADOS</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-700 leading-relaxed font-medium">
            Recibe un mensaje auténtico, grabado especialmente para ti o para esa persona especial, con el estilo directo, cercano y reflexivo de Robert Pacheco.
          </p>
        </div>

        {/* 4 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          
          {/* 1. ¿Para quién son? */}
          <div className="bg-white/85 backdrop-blur-md rounded-3xl p-6 border border-purple-100/80 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-purple-100 text-purple-700 flex items-center justify-center mb-5 group-hover:bg-purple-600 group-hover:text-white transition-colors shadow-sm">
                <Users className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-purple-700 block mb-1">
                Destinatarios
              </span>
              <h3 className="font-serif font-bold text-xl text-slate-900 mb-3">
                ¿Para quién son?
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Para <strong className="text-slate-800">cualquier persona</strong>: tus hijos, padres, pareja, amigos, hermanos, compañeros o quien necesite escuchar palabras sinceras.
              </p>
            </div>
            <div className="mt-4 pt-4 border-t border-purple-50 text-xs font-semibold text-purple-800 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-purple-600" />
              <span>100% Personalizado</span>
            </div>
          </div>

          {/* 2. ¿Para qué ocasión? */}
          <div className="bg-white/85 backdrop-blur-md rounded-3xl p-6 border border-pink-100/80 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-pink-100 text-pink-700 flex items-center justify-center mb-5 group-hover:bg-pink-600 group-hover:text-white transition-colors shadow-sm">
                <Sparkles className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-pink-700 block mb-1">
                Motivos & Ocasiones
              </span>
              <h3 className="font-serif font-bold text-xl text-slate-900 mb-3">
                ¿Para qué ocasión?
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Ideales para dar un <strong className="text-slate-800">buen consejo</strong>, una <strong className="text-slate-800">felicitación</strong> especial, una <strong className="text-slate-800">disculpa</strong> franca, un <strong className="text-slate-800">agradecimiento</strong> o cualquier mensaje que nazca de ti.
              </p>
            </div>
            <div className="mt-4 pt-4 border-t border-pink-50 text-xs font-semibold text-pink-800 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-pink-600" />
              <span>Tú eliges el enfoque</span>
            </div>
          </div>

          {/* 3. Duración */}
          <div className="bg-white/85 backdrop-blur-md rounded-3xl p-6 border border-purple-100/80 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-purple-100 text-purple-700 flex items-center justify-center mb-5 group-hover:bg-purple-600 group-hover:text-white transition-colors shadow-sm">
                <Clock className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-purple-700 block mb-1">
                Formato & Tiempo
              </span>
              <h3 className="font-serif font-bold text-xl text-slate-900 mb-3">
                Duración del Video
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Cada video tiene una duración dedicada de entre <strong className="text-slate-800">2.5 y 3.5 minutos</strong>. El tiempo perfecto para profundizar con calma y emotividad.
              </p>
            </div>
            <div className="mt-4 pt-4 border-t border-purple-50 text-xs font-semibold text-purple-800 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-purple-600" />
              <span>Entre 2.5 y 3.5 min</span>
            </div>
          </div>

          {/* 4. Costo por donativo */}
          <div className="bg-white/85 backdrop-blur-md rounded-3xl p-6 border border-emerald-100/80 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-5 group-hover:bg-emerald-600 group-hover:text-white transition-colors shadow-sm">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-emerald-700 block mb-1">
                Transparencia Total
              </span>
              <h3 className="font-serif font-bold text-xl text-slate-900 mb-3">
                Donativo Voluntario
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                <strong className="text-slate-800">No tienen un costo fijo</strong>. Funcionan a través de donativos a consideración del interesado, entregados <strong className="text-slate-800">después</strong> de recibir y ver el video.
              </p>
            </div>
            <div className="mt-4 pt-4 border-t border-emerald-50 text-xs font-semibold text-emerald-800 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Aporte posterior al video</span>
            </div>
          </div>

        </div>

        {/* WhatsApp Call to Action Card con Imagen Oficial */}
        <div className="bg-gradient-to-r from-purple-900 via-indigo-950 to-slate-900 rounded-3xl p-8 sm:p-10 lg:p-12 text-white shadow-2xl relative overflow-hidden border border-purple-500/20">
          
          {/* Subtle decorative circles */}
          <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-pink-500/20 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -left-10 -top-10 w-64 h-64 bg-purple-500/20 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            
            {/* Imagen Oficial VIDEOSROB.png de la carpeta public */}
            <div className="shrink-0 flex justify-center">
              <div className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-tr from-purple-500 via-pink-500 to-amber-400 rounded-3xl blur-xl opacity-50 group-hover:opacity-80 transition-opacity duration-300 pointer-events-none" />
                <img
                  src="/VIDEOSROB.png"
                  alt="Robert Pacheco - Videos Personalizados"
                  className="relative w-48 sm:w-56 md:w-64 lg:w-72 max-h-80 object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.6)] rounded-2xl transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold uppercase tracking-wider mb-3">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Contacto & Registro de Solicitudes
              </div>

              <h3 className="font-serif font-black text-2xl sm:text-3xl lg:text-4xl text-white mb-3">
                Pide tu video directamente por WhatsApp
              </h3>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-5">
                La información detallada, las fechas y el registro de tu dedicatoria se coordinan directamente en el número de WhatsApp oficial:
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                <div className="inline-flex items-center gap-3 px-4 py-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 text-white font-mono text-lg sm:text-xl font-bold tracking-wider">
                  <MessageCircle className="w-5 h-5 text-emerald-400" />
                  <span>+52 462 621 64 28</span>
                </div>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-7 py-3.5 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-base flex items-center justify-center gap-3 shadow-lg hover:shadow-emerald-500/30 hover:scale-105 transition-all duration-200"
                >
                  <MessageCircle className="w-5 h-5 fill-current" />
                  <span>Escribir por WhatsApp</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
