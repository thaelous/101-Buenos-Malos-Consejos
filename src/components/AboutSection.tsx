import { Sparkles } from 'lucide-react';

export function AboutSection() {
  return (
    <section id="sobre-robert" className="py-20 bg-white/30 backdrop-blur-md relative border-y border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Authentic Bio */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/60 backdrop-blur-md text-purple-900 text-xs font-bold uppercase tracking-wider mb-4 border border-white/40 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-purple-700" />
              La Historia Detrás de la Obra
            </div>

            <h2 className="font-serif font-black text-3xl sm:text-4xl lg:text-5xl text-slate-950 uppercase tracking-tight mb-6">
              Sobre <span className="text-purple-800">Robert Pacheco</span>
            </h2>

            <div className="space-y-4 text-slate-800 text-base sm:text-lg leading-relaxed font-serif" style={{ fontFamily: 'Georgia, serif' }}>
              <p>Robert Pacheco nació un día par, mes non, año bisiesto.</p>
              <p>Nieto de Robert Pacheco.</p>
              <p>Hijo de Robert Pacheco.</p>
              <p>Padre de Aldebarán y esposo de Paulina.</p>
              <p>Director de teatro.</p>
              <p>
                Instructor de temas en Desarrollo Humano y Sensibilización en la Seguridad industrial a través de personajes y espectáculos y un largo etcétera de trabajos y oficios que ha tenido a lo largo de su vida.
              </p>
              <p className="pt-3">
                Mas, citando a su esposa Paulina:
              </p>
              <p className="text-xl sm:text-2xl font-bold italic text-slate-950 py-1">
                “Robert, tu mejor rol, la mejor parte de ti, es ser padre”
              </p>
              <p className="pt-2 text-slate-950 font-semibold">
                Así que, simplemente, Robert Pacheco es solo un padre que ama a su hijo.
              </p>
            </div>

          </div>

          {/* Right Column: Family Portrait using uploaded familia.jpeg */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="w-full max-w-md rounded-3xl overflow-hidden border-4 border-white/80">
              <img
                src="/familia.jpeg"
                alt="Familia de Robert Pacheco"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="text-center mt-3">
              <span className="font-serif font-bold text-base text-slate-900">
                Robert, Paulina y Aldebarán
              </span>
              <span className="block text-xs text-purple-800 font-mono uppercase tracking-wider">
                Familia Pacheco
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
