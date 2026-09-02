import { useState } from 'react';
import { Sparkles, RefreshCw, Copy, Check, Share2, Quote } from 'lucide-react';
import { CONSEJOS_DATA, Consejo } from '../data/consejos';

export function DailyAdvice() {
  const virales = CONSEJOS_DATA.filter((c) => c.isViral || [1, 2, 6, 10, 21, 27, 40, 42, 52, 100, 101].includes(c.id));
  const [currentAdvice, setCurrentAdvice] = useState<Consejo>(() => {
    // Pick an impactful default advice
    return CONSEJOS_DATA.find((c) => c.id === 101) || CONSEJOS_DATA[0];
  });
  const [copied, setCopied] = useState(false);
  const [isRotating, setIsRotating] = useState(false);
  const [shareToast, setShareToast] = useState(false);

  const getRandomAdvice = () => {
    setIsRotating(true);
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * virales.length);
      setCurrentAdvice(virales[randomIndex]);
      setIsRotating(false);
    }, 200);
  };

  const copyToClipboard = () => {
    const textToCopy = `«Consejo #${currentAdvice.id}: ${currentAdvice.title}»\n\n"${currentAdvice.shortText}"\n\n— Robert Pacheco en '101 Buenos Malos Consejos para mi Hijo'`;
    navigator.clipboard?.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const shareOnSocial = (platform: 'whatsapp' | 'twitter' | 'native') => {
    const shareText = `Consejo #${currentAdvice.id}: ${currentAdvice.title} - "${currentAdvice.shortText}" — Robert Pacheco`;
    const shareUrl = window.location.href;

    if (platform === 'whatsapp') {
      window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(`${shareText}\n\n${shareUrl}`)}`, '_blank');
    } else if (platform === 'twitter') {
      window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}&hashtags=BuenosMalosConsejos,RobertPacheco`, '_blank');
    } else {
      if (navigator.share) {
        navigator.share({
          title: `Consejo #${currentAdvice.id} - Robert Pacheco`,
          text: shareText,
          url: shareUrl
        }).catch(() => {});
      } else {
        copyToClipboard();
        setShareToast(true);
        setTimeout(() => setShareToast(false), 3000);
      }
    }
  };

  return (
    <section id="consejo-dia" className="py-20 relative bg-white/20 backdrop-blur-sm border-b border-white/20 overflow-hidden">
      {/* Translucent ambient glows */}
      <div className="absolute -top-24 left-1/4 w-96 h-96 rounded-full bg-purple-500/15 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 right-1/4 w-96 h-96 rounded-full bg-pink-400/20 blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Section Pill Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md text-purple-900 border border-white/40 shadow-sm text-xs font-bold uppercase tracking-wider mb-4">
          <Sparkles className="w-4 h-4 text-purple-600" />
          <span>Para compartir y reflexionar</span>
        </div>

        <h2 className="font-serif font-black text-3xl sm:text-4xl lg:text-5xl text-slate-950 uppercase tracking-tight mb-4"
            style={{ fontFamily: 'Georgia, serif' }}>
          El Consejo <span className="text-purple-900">del Día</span>
        </h2>
        
        <p className="text-slate-700 text-base sm:text-lg max-w-xl mx-auto mb-10">
          Un dardo directo a la conciencia. Compártelo en tus historias, envíaselo a alguien que lo necesite o guárdalo para tu día.
        </p>

        {/* The Natural Tones Card Container (warm yellow-toned card with border) */}
        <div className="relative bg-yellow-100/90 backdrop-blur-md rounded-3xl p-8 sm:p-12 shadow-2xl border border-yellow-200/90 text-left transform transition-all duration-300 hover:shadow-purple-900/10 text-yellow-950">
          
          {/* Card Top Header */}
          <div className="flex items-center justify-between border-b border-yellow-200/80 pb-5 mb-6">
            <div className="flex items-center gap-3">
              <span className="w-10 h-10 rounded-full bg-yellow-800 text-white font-serif font-black flex items-center justify-center text-sm shadow-md">
                #{currentAdvice.id}
              </span>
              <div>
                <span className="text-xs font-black uppercase tracking-widest text-yellow-800 font-mono">
                  Consejo del Día • Robert Pacheco
                </span>
                <span className="text-[11px] text-yellow-900/70 block font-medium">
                  Categoría: {currentAdvice.category.toUpperCase()}
                </span>
              </div>
            </div>

            <Quote className="w-10 h-10 text-yellow-600/40" />
          </div>

          {/* Advice Title */}
          <h3 className="font-serif font-black text-2xl sm:text-3xl text-yellow-950 uppercase tracking-tight mb-6 leading-tight"
              style={{ fontFamily: 'Georgia, serif' }}>
            {currentAdvice.title}
          </h3>

          {/* Advice Text in Warm Serif / Handwriting */}
          <div className="p-6 rounded-2xl bg-white/60 backdrop-blur-sm border border-yellow-200 mb-8 shadow-inner">
            <p className="font-serif text-xl sm:text-2xl italic font-bold text-yellow-950 leading-relaxed"
               style={{ fontFamily: 'Georgia, serif' }}>
              «{currentAdvice.shortText}»
            </p>
          </div>

          {/* Signature & Author Stamp */}
          <div className="flex items-center justify-between pt-4 border-t border-yellow-200/80">
            <div className="flex items-center gap-2">
              <img
                src="/log.png"
                alt="Logo Robert Pacheco"
                className="w-8 h-8 rounded-full object-cover shadow-sm border border-yellow-900/20"
              />
              <span className="font-serif font-bold text-yellow-950 text-sm">
                Robert Pacheco
              </span>
            </div>
            <span className="text-xs text-yellow-900/80 italic font-mono font-medium">
              Buenos Malos Consejos para mi Hijo
            </span>
          </div>

        </div>

        {/* Action Controls Toolbar */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          
          {/* New Random Advice */}
          <button
            onClick={getRandomAdvice}
            className="inline-flex items-center gap-2 bg-yellow-800 hover:bg-yellow-900 text-white font-bold text-sm px-6 py-3.5 rounded-2xl shadow-lg hover:shadow-xl transition-all transform active:scale-95"
          >
            <RefreshCw className={`w-4 h-4 ${isRotating ? 'animate-spin' : ''}`} />
            <span>Ver Otro Consejo</span>
          </button>

          {/* Copy Advice */}
          <button
            onClick={copyToClipboard}
            className="inline-flex items-center gap-2 bg-white hover:bg-yellow-50 text-yellow-950 border border-yellow-300 font-bold text-sm px-6 py-3.5 rounded-2xl shadow-md hover:shadow-lg transition-all transform active:scale-95"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-600" />
                <span className="text-emerald-700">¡Copiado con Éxito!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-yellow-800" />
                <span>Copiar Consejo</span>
              </>
            )}
          </button>

          {/* Direct Share Options */}
          <button
            onClick={() => shareOnSocial('whatsapp')}
            className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm px-5 py-3.5 rounded-2xl shadow-md hover:shadow-lg transition-all transform active:scale-95"
            title="Compartir por WhatsApp"
          >
            <Share2 className="w-4 h-4" />
            <span>WhatsApp</span>
          </button>

          <button
            onClick={() => shareOnSocial('twitter')}
            className="inline-flex items-center gap-2 bg-slate-900 hover:bg-black text-white font-bold text-sm px-5 py-3.5 rounded-2xl shadow-md hover:shadow-lg transition-all transform active:scale-95"
            title="Compartir en X (Twitter)"
          >
            <span>Compartir en X</span>
          </button>

        </div>

        {/* Share Feedback Toast */}
        {shareToast && (
          <div className="mt-4 inline-block bg-slate-900 text-white text-xs px-4 py-2 rounded-full shadow-lg">
            ¡Texto copiado listo para compartir en tus historias o estados!
          </div>
        )}

      </div>
    </section>
  );
}
