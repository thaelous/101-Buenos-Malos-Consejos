import { useState, FormEvent } from 'react';
import { MessageSquare, Star, Send, CheckCircle2, ThumbsUp } from 'lucide-react';
import { TESTIMONIOS_INICIALES } from '../data/consejos';

export function CommunitySection() {
  const [testimonios, setTestimonios] = useState(() => {
    try {
      const saved = localStorage.getItem('bmc_testimonios');
      if (saved) return JSON.parse(saved);
    } catch (e) {}
    return TESTIMONIOS_INICIALES;
  });

  const [name, setName] = useState('');
  const [handle, setHandle] = useState('');
  const [platform, setPlatform] = useState('TikTok');
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !comment.trim()) return;

    const newTestimonio = {
      id: Date.now(),
      author: name.trim(),
      role: 'Lector de la Comunidad',
      handle: handle.trim() ? (handle.startsWith('@') ? handle.trim() : `@${handle.trim()}`) : '@lector_real',
      platform,
      rating,
      text: comment.trim(),
      date: 'Recién publicado'
    };

    const updated = [newTestimonio, ...testimonios];
    setTestimonios(updated);
    try {
      localStorage.setItem('bmc_testimonios', JSON.stringify(updated));
    } catch (e) {}

    setSubmitted(true);
    setName('');
    setHandle('');
    setComment('');
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="comunidad" className="py-20 relative bg-white/20 backdrop-blur-sm border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/60 backdrop-blur-md text-purple-900 border border-white/40 font-bold text-xs uppercase tracking-wider mb-3 shadow-sm">
            <MessageSquare className="w-3.5 h-3.5 text-purple-700" />
            Voz de los Lectores
          </span>
          <h2 className="font-serif font-black text-3xl sm:text-4xl lg:text-5xl text-slate-950 uppercase tracking-tight mb-4"
              style={{ fontFamily: 'Georgia, serif' }}>
            Comunidad y <span className="text-purple-900">Comentarios</span>
          </h2>
          <p className="text-slate-700 text-base sm:text-lg">
            Miles de hijos y padres comparten el impacto de las reflexiones de Robert Pacheco. Deja tu opinión o envía tu propio consejo.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Testimonial Cards */}
          <div className="lg:col-span-7 space-y-5">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-serif font-bold text-xl text-slate-900">
                Experiencias Destacadas
              </h3>
              <span className="text-xs text-slate-600 font-mono">
                {testimonios.length} comentarios verificados
              </span>
            </div>

            <div className="space-y-4 max-h-[640px] overflow-y-auto pr-1 scrollbar-thin">
              {testimonios.map((item: any) => (
                <div
                  key={item.id}
                  className="p-6 rounded-3xl bg-white/60 backdrop-blur-md border border-white/50 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-purple-100 text-purple-900 font-bold flex items-center justify-center text-sm">
                        {item.author.charAt(0)}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="font-bold text-slate-900 text-sm">{item.author}</h4>
                          <span className="text-[10px] text-slate-500 font-mono">{item.handle}</span>
                        </div>
                        <span className="text-xs text-purple-700 font-medium">{item.role}</span>
                      </div>
                    </div>

                    <div className="flex flex-col items-end">
                      <div className="flex text-amber-400">
                        {Array.from({ length: item.rating || 5 }).map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                        ))}
                      </div>
                      <span className="text-[10px] text-slate-500 mt-0.5">{item.date}</span>
                    </div>
                  </div>

                  <p className="text-slate-700 text-sm leading-relaxed italic">
                    «{item.text}»
                  </p>

                  <div className="mt-3 pt-3 border-t border-slate-200/60 flex items-center justify-between text-xs text-slate-600">
                    <span className="bg-white/70 px-2 py-0.5 rounded text-[10px] font-semibold text-slate-700 border border-slate-200/50">
                      Vía {item.platform || 'Web'}
                    </span>
                    <button className="flex items-center gap-1 hover:text-purple-700 transition-colors">
                      <ThumbsUp className="w-3.5 h-3.5" />
                      <span>Útil</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Submit Form */}
          <div className="lg:col-span-5 bg-white/70 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-white/60 shadow-xl relative">
            <h3 className="font-serif font-black text-2xl text-slate-950 uppercase tracking-tight mb-2"
                style={{ fontFamily: 'Georgia, serif' }}>
              Deja tu Comentario
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm mb-6">
              ¿Cuál fue el consejo que más te marcó? ¿Tienes un "mal consejo" que te salvó la vida? Escríbelo aquí.
            </p>

            {submitted && (
              <div className="mb-6 p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs sm:text-sm flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="block font-bold">¡Comentario publicado con éxito!</strong>
                  <span>Tu opinión ya se muestra en la comunidad de Robert Pacheco.</span>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Tu Nombre Completo *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Ej. Juan Pérez"
                  className="w-full px-4 py-3 rounded-2xl border border-white/60 bg-white/70 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-purple-600 focus:bg-white shadow-sm"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Usuario / Red
                  </label>
                  <input
                    type="text"
                    value={handle}
                    onChange={(e) => setHandle(e.target.value)}
                    placeholder="@juanp_tiktok"
                    className="w-full px-4 py-3 rounded-2xl border border-white/60 bg-white/70 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-purple-600 focus:bg-white shadow-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Plataforma
                  </label>
                  <select
                    value={platform}
                    onChange={(e) => setPlatform(e.target.value)}
                    className="w-full px-4 py-3 rounded-2xl border border-white/60 bg-white/70 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-purple-600 focus:bg-white shadow-sm"
                  >
                    <option value="TikTok">TikTok</option>
                    <option value="Instagram">Instagram</option>
                    <option value="Facebook">Facebook</option>
                    <option value="Spotify">Spotify</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Calificación
                </label>
                <div className="flex items-center gap-2">
                  {[1, 2, 3, 4, 5].map((num) => (
                    <button
                      type="button"
                      key={num}
                      onClick={() => setRating(num)}
                      className="p-1 text-amber-400 hover:scale-110 transition-transform"
                    >
                      <Star
                        className={`w-6 h-6 ${num <= rating ? 'fill-amber-400 text-amber-400' : 'text-slate-300'}`}
                      />
                    </button>
                  ))}
                  <span className="text-xs font-bold text-slate-600 ml-2">
                    {rating} de 5 estrellas
                  </span>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Tu Mensaje o Consejo *
                </label>
                <textarea
                  required
                  rows={4}
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  placeholder="Escribe tu reflexión sincera sobre el libro o un consejo que te dio tu viejo..."
                  className="w-full px-4 py-3 rounded-2xl border border-white/60 bg-white/70 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-purple-600 focus:bg-white shadow-sm"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-2xl bg-purple-700 hover:bg-purple-800 text-white font-bold text-sm uppercase tracking-wide shadow-lg shadow-purple-900/20 hover:scale-105 transition-transform flex items-center justify-center gap-2 active:scale-95"
              >
                <Send className="w-4 h-4" />
                <span>Enviar mi Comentario</span>
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
