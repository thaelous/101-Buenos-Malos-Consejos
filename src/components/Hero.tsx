import { useState, useRef, useEffect, MouseEvent } from 'react';
import { Heart, MessageCircle, Share2, Music, Play, Pause, Sparkles, Volume2, VolumeX } from 'lucide-react';
import confetti from 'canvas-confetti';

export function Hero() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [likes, setLikes] = useState(248530);
  const [hasLiked, setHasLiked] = useState(false);
  const [copiedShare, setCopiedShare] = useState(false);
  const [copiedBirthdayLink, setCopiedBirthdayLink] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const [isBirthdayModalOpen, setIsBirthdayModalOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const birthdayVideoRef = useRef<HTMLVideoElement | null>(null);

  const getBirthdayShareUrl = () => {
    try {
      const url = new URL(window.location.href);
      url.searchParams.set('video', 'cumpleanos');
      url.hash = 'cumpleanos';
      return url.toString();
    } catch {
      return `${window.location.origin}${window.location.pathname}?video=cumpleanos#cumpleanos`;
    }
  };

  const triggerBirthdayConfetti = () => {
    try {
      // Ráfagas laterales ascendentes
      confetti({
        particleCount: 75,
        angle: 60,
        spread: 70,
        origin: { x: 0.15, y: 0.65 },
        zIndex: 99999,
        colors: ['#8A2BE2', '#F59E0B', '#EC4899', '#3B82F6', '#10B981', '#FFD700']
      });
      confetti({
        particleCount: 75,
        angle: 120,
        spread: 70,
        origin: { x: 0.85, y: 0.65 },
        zIndex: 99999,
        colors: ['#8A2BE2', '#F59E0B', '#EC4899', '#3B82F6', '#10B981', '#FFD700']
      });
      // Disparo central festivo de celebración
      setTimeout(() => {
        confetti({
          particleCount: 90,
          spread: 100,
          origin: { x: 0.5, y: 0.35 },
          zIndex: 99999,
          scalar: 1.25,
          colors: ['#FFD700', '#F43F5E', '#A855F7', '#38BDF8', '#F59E0B', '#34D399']
        });
      }, 250);
    } catch (err) {
      console.error("Confetti error:", err);
    }
  };

  const openBirthday = () => {
    setIsBirthdayModalOpen(true);
    try {
      window.history.replaceState(null, '', getBirthdayShareUrl());
    } catch (e) {}
    triggerBirthdayConfetti();
    if (birthdayVideoRef.current) {
      birthdayVideoRef.current.currentTime = 0;
      birthdayVideoRef.current.muted = false;
      birthdayVideoRef.current.volume = 1;
      const playPromise = birthdayVideoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch((err) => {
          console.warn("Autoplay con sonido prevenido por el navegador, aplicando fallback:", err);
          if (birthdayVideoRef.current) {
            birthdayVideoRef.current.muted = true;
            birthdayVideoRef.current.play().catch(() => {});
          }
        });
      }
    }
  };

  const closeBirthday = () => {
    if (birthdayVideoRef.current) {
      birthdayVideoRef.current.pause();
      birthdayVideoRef.current.currentTime = 0;
    }
    setIsBirthdayModalOpen(false);
    try {
      const url = new URL(window.location.href);
      if (url.searchParams.get('video') === 'cumpleanos' || url.searchParams.has('cumpleanos') || url.hash.includes('cumple')) {
        url.searchParams.delete('video');
        url.searchParams.delete('cumpleanos');
        url.hash = '';
        window.history.replaceState(null, '', url.pathname + (url.search ? url.search : ''));
      }
    } catch (e) {}
  };

  useEffect(() => {
    (window as any).openBirthdayModal = openBirthday;
    return () => {
      delete (window as any).openBirthdayModal;
    };
  }, []);

  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      const hash = window.location.hash.toLowerCase();
      if (
        params.get('video') === 'cumpleanos' ||
        params.has('cumpleanos') ||
        hash.includes('cumple') ||
        hash.includes('birthday')
      ) {
        const timer = setTimeout(() => {
          openBirthday();
        }, 150);
        return () => clearTimeout(timer);
      }
    } catch (e) {}
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.setAttribute('playsinline', 'true');
      videoRef.current.setAttribute('webkit-playsinline', 'true');
    }
  }, []);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.muted = isMuted;
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
          })
          .catch((err) => {
            console.warn("Error al intentar reproducir, reintentando con silencio:", err);
            if (videoRef.current) {
              videoRef.current.muted = true;
              setIsMuted(true);
              videoRef.current.play().then(() => {
                setIsPlaying(true);
              }).catch(console.error);
            }
          });
      }
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current && videoRef.current.duration) {
      setProgress((videoRef.current.currentTime / videoRef.current.duration) * 100);
    }
  };

  const toggleMute = (e: MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleLike = () => {
    if (!hasLiked) {
      setLikes((prev) => prev + 1);
      setHasLiked(true);
    } else {
      setLikes((prev) => prev - 1);
      setHasLiked(false);
    }
  };

  const handleShareReel = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopiedShare(true);
    setTimeout(() => setCopiedShare(false), 2000);
  };

  return (
    <section id="hero" className="relative pt-20 pb-16 lg:pt-28 lg:pb-24 overflow-hidden"
             style={{ background: 'linear-gradient(135deg, #BAE6FD 0%, #E9D5FF 50%, #FBCFE8 100%)' }}>
      {/* Translucent organic blur circles from Natural Tones theme */}
      <div className="absolute top-[-100px] left-[-100px] w-80 h-80 bg-white/20 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-[-100px] right-[-100px] w-96 h-96 bg-purple-400/20 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-10 left-1/3 w-72 h-72 rounded-full bg-violet-300/20 blur-2xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left / Top Column: High Impact Typography & Direct CTAs */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            
            {/* Social Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/70 backdrop-blur-sm border border-purple-200/80 shadow-sm mb-4">
              <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-bold tracking-wider uppercase text-purple-900">
                +10 Millones de visualizaciones en TikTok & Reels
              </span>
            </div>

            {/* THE ICONIC "101" - Natural Tones design: text-purple-700, italic serif, custom text-shadow */}
            <div className="relative mb-4 select-none inline-block">
              <h1 className="text-8xl sm:text-9xl md:text-[140px] leading-none font-black italic serif text-purple-700"
                  style={{
                    fontFamily: 'Georgia, serif',
                    textShadow: '2px 2px 0 #ffffff, 6px 6px 0 #581c87, 0 12px 28px rgba(88, 28, 135, 0.25)'
                  }}>
                101
              </h1>
              <p className="absolute -bottom-2 left-2 text-base sm:text-xl font-bold uppercase tracking-tighter bg-white text-purple-950 px-2 py-0.5 rounded shadow-sm border border-slate-100">
                Consejos
              </p>
            </div>

            {/* Subtitle / Book Title in classic bold rude serif */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight serif mb-4 text-slate-950 tracking-tight"
                style={{ fontFamily: 'Georgia, serif' }}>
              BUENOS MALOS CONSEJOS <br />
              <span className="text-purple-900">
                PARA MI HIJO
              </span>
            </h2>

            {/* Author Attribution */}
            <p className="font-sans font-bold text-lg sm:text-xl text-slate-800 tracking-wide mb-3">
              Por <span className="text-purple-900 uppercase font-black underline decoration-purple-400 underline-offset-4">Robert Pacheco</span>
            </p>

            {/* Hook text */}
            <p className="font-sans text-base sm:text-lg text-slate-700 max-w-xl leading-relaxed mb-8">
              Lecciones de vida sin filtros edulcorados, sin discursos de autoayuda barata ni fórmulas mágicas. 
              La sabiduría callejera, cruda y con humor que todo padre quisiera dejarle a su hijo para que aprenda a defenderse en el mundo real.
            </p>

            {/* Direct CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 justify-center lg:justify-start">
              <a
                href="#adquiere-tu-libro"
                className="bg-purple-700 hover:bg-purple-800 text-white px-7 py-4 rounded-2xl font-bold uppercase tracking-wider shadow-lg shadow-purple-900/25 flex items-center justify-center gap-2 transition-all hover:scale-105 active:scale-95 text-center text-sm"
              >
                Adquiere tu libro
              </a>
              <button
                type="button"
                onClick={openBirthday}
                className="bg-gradient-to-r from-amber-400 via-rose-500 to-purple-600 hover:from-amber-300 hover:via-rose-400 hover:to-purple-500 text-white border-2 border-white/40 px-7 py-4 rounded-2xl font-bold uppercase tracking-wider shadow-lg shadow-purple-900/30 flex items-center justify-center gap-2.5 transition-all hover:scale-105 active:scale-95 text-center text-sm cursor-pointer"
              >
                <span className="text-xl">🎂</span>
                <span className="font-black">Para Cumpleaños</span>
              </button>
            </div>

          </div>

          {/* Right Column: TikTok / Reel Mockup in Natural Tones phone frame */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[310px] aspect-[9/16] bg-slate-900 rounded-[40px] border-[8px] border-slate-800 shadow-2xl shadow-purple-950/25 overflow-hidden group">
              
              {/* Phone Speaker Notch */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-28 h-4 bg-black rounded-full z-40 flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-slate-800 mr-2" />
                <div className="w-10 h-1 bg-slate-800 rounded-full" />
              </div>

              {/* Inner Reel Screen */}
              <div className="relative w-full h-full rounded-[30px] overflow-hidden bg-slate-900 flex flex-col justify-between">
                
                {/* The Robert Pacheco Reel Video GIFROB.mp4 */}
                <div
                  className="absolute inset-0 z-0 bg-black cursor-pointer overflow-hidden"
                  onClick={togglePlay}
                >
                  <video
                    ref={videoRef}
                    src="/GIFROB.mp4"
                    poster="/gifrob_poster.jpg"
                    playsInline
                    loop
                    muted={isMuted}
                    preload="auto"
                    onTimeUpdate={handleTimeUpdate}
                    onPlay={() => setIsPlaying(true)}
                    onPause={() => setIsPlaying(false)}
                    className="w-full h-full object-cover object-center"
                  />
                </div>

                {/* Dark Vignette Overlay for TikTok readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/85 pointer-events-none z-10" />

                {/* Top Header of the Reel */}
                <div className="relative z-20 pt-7 px-4 flex items-center justify-between text-white text-xs font-semibold">
                  <div className="flex items-center gap-2 bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
                    <span>EN TENDENCIA</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={toggleMute}
                      className="p-1.5 rounded-full bg-black/40 hover:bg-black/70 backdrop-blur-md text-white border border-white/20 transition-all active:scale-95"
                      aria-label={isMuted ? "Activar sonido" : "Silenciar video"}
                    >
                      {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
                    </button>
                    <span className="text-white/80 text-[11px] font-mono">
                      #RobertPacheco
                    </span>
                  </div>
                </div>

                {/* Center Big Play/Pause Touch Target */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    togglePlay();
                  }}
                  className={`absolute inset-0 m-auto w-16 h-16 rounded-full bg-purple-900/80 hover:bg-purple-800 backdrop-blur-md text-white border-2 border-white/90 flex items-center justify-center z-20 shadow-2xl transform active:scale-95 transition-all duration-300 ${isPlaying ? 'opacity-0 hover:opacity-90' : 'opacity-100 scale-105 ring-4 ring-purple-500/50'}`}
                  aria-label={isPlaying ? "Pausar video" : "Reproducir video"}
                >
                  {isPlaying ? (
                    <Pause className="w-7 h-7 fill-white" />
                  ) : (
                    <Play className="w-7 h-7 fill-white translate-x-0.5" />
                  )}
                </button>

                {/* Right Side TikTok Action Bar (Heart, Comments, Share, Music Vinyl) */}
                <div className="absolute right-3 bottom-16 z-30 flex flex-col items-center gap-4 text-white">
                  
                  {/* Creator Avatar with Follow Plus Badge */}
                  <div className="relative mb-2">
                    <div className="w-11 h-11 rounded-full border-2 border-white overflow-hidden bg-purple-900 flex items-center justify-center shadow-lg">
                      <img src="/log.png" alt="Robert Pacheco" className="w-full h-full object-cover" />
                    </div>
                    <button className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-rose-500 text-white text-[10px] font-bold flex items-center justify-center shadow-md">
                      +
                    </button>
                  </div>

                  {/* Likes Button */}
                  <button onClick={handleLike} className="flex flex-col items-center group">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${hasLiked ? 'bg-rose-500/20 text-rose-500' : 'text-white'}`}>
                      <Heart className={`w-7 h-7 filter drop-shadow-md ${hasLiked ? 'fill-rose-500 text-rose-500' : 'fill-white/20'}`} />
                    </div>
                    <span className="text-[11px] font-bold mt-0.5 drop-shadow">
                      {(likes / 1000).toFixed(1)}k
                    </span>
                  </button>

                  {/* Comments */}
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 flex items-center justify-center text-white">
                      <MessageCircle className="w-7 h-7 fill-white/20 filter drop-shadow-md" />
                    </div>
                    <span className="text-[11px] font-bold mt-0.5 drop-shadow">1,842</span>
                  </div>

                  {/* Share Reel */}
                  <button onClick={handleShareReel} className="flex flex-col items-center relative">
                    <div className="w-10 h-10 flex items-center justify-center text-white">
                      <Share2 className="w-7 h-7 filter drop-shadow-md" />
                    </div>
                    <span className="text-[11px] font-bold mt-0.5 drop-shadow">
                      {copiedShare ? '¡Listo!' : '15.2k'}
                    </span>
                  </button>

                  {/* Rotating Vinyl Record */}
                  <div className={`w-9 h-9 rounded-full bg-slate-900 border-4 border-slate-800 flex items-center justify-center text-white shadow-xl ${isPlaying ? 'animate-spin' : ''}`}
                       style={{ animationDuration: '4s' }}>
                    <Music className="w-3.5 h-3.5 text-purple-400" />
                  </div>

                </div>

                {/* Bottom TikTok Captions & Sound Meta + Progress Bar (Pinned to the bottom) */}
                <div className="mt-auto relative z-20 w-full">
                  <div className="p-4 pr-16 pb-3 text-white text-left">
                    <div className="flex items-center gap-1.5 mb-1">
                      <span className="font-bold text-sm text-white drop-shadow">@consejosparamihijo</span>
                      <span className="bg-sky-400 text-black rounded-full p-0.5">
                        <svg className="w-2.5 h-2.5 fill-current" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                      </span>
                    </div>

                    <p className="text-xs text-slate-100 font-medium line-clamp-3 mb-2 drop-shadow leading-snug">
                      <span className="font-bold text-yellow-300">Consejo #101:</span> "Algún día moriré, algún día morirá mamá y los abuelos, y tus mascotas e incluso tú..."
                    </p>

                    <div className="flex items-center gap-2 text-[11px] text-slate-300 font-mono">
                      <Music className="w-3 h-3 text-yellow-400 shrink-0" />
                      <span className="truncate">Sonido Original - Robert Pacheco (101 Consejos)</span>
                    </div>
                  </div>

                  {/* Video Playback Progress Bar */}
                  <div className="w-full bg-white/20 h-1">
                    <div
                      className="bg-purple-500 h-full transition-all duration-300"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Birthday Framed Modal */}
      <div
        className={`fixed inset-0 z-50 items-center justify-center bg-slate-950/85 backdrop-blur-md p-3 sm:p-6 select-none ${isBirthdayModalOpen ? 'flex' : 'hidden'}`}
        role="dialog"
        aria-modal="true"
        onClick={(e) => {
          if (e.target === e.currentTarget) closeBirthday();
        }}
      >
        <div className="relative w-full max-w-[380px] sm:max-w-[430px] bg-gradient-to-b from-slate-900 via-purple-950 to-slate-950 rounded-[32px] sm:rounded-[40px] p-3.5 sm:p-5 border-4 sm:border-[6px] border-amber-400/90 shadow-2xl shadow-purple-950/80 ring-4 ring-amber-400/20 flex flex-col items-center">
            
            {/* Header del marco: Título, Compartir y Cerrar */}
            <div className="w-full flex items-center justify-between gap-2 px-1 pb-3 mb-3 border-b border-amber-400/30">
              <div className="flex items-center gap-2 min-w-0">
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-amber-400 to-rose-500 flex items-center justify-center text-white text-base shrink-0 shadow-sm">
                  🎂
                </div>
                <div className="min-w-0">
                  <h3 className="font-serif font-black text-amber-300 text-xs sm:text-sm tracking-wide uppercase truncate">
                    Para Cumpleaños
                  </h3>
                  <p className="text-[10px] text-purple-200/70 font-mono truncate">
                    Robert Pacheco
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
                <button
                  type="button"
                  onClick={() => {
                    const shareUrl = getBirthdayShareUrl();
                    if (navigator.share) {
                      navigator.share({
                        title: "¡Feliz Cumpleaños! - Buenos Malos Consejos para mi Hijo",
                        text: "¡Mira este mensaje especial de cumpleaños de Robert Pacheco!",
                        url: shareUrl
                      }).catch(() => {});
                    } else {
                      window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent('¡Feliz Cumpleaños! 🎉 Mira este mensaje especial de Robert Pacheco: ' + shareUrl)}`, "_blank");
                    }
                  }}
                  className="px-2.5 sm:px-3 py-1.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white text-[11px] sm:text-xs font-bold uppercase tracking-wider flex items-center gap-1 shadow-md hover:scale-105 active:scale-95 transition-all cursor-pointer"
                >
                  <Share2 className="w-3.5 h-3.5" />
                  <span>Compartir</span>
                </button>

                <button
                  type="button"
                  onClick={closeBirthday}
                  className="px-2.5 sm:px-3 py-1.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white text-[11px] sm:text-xs font-bold uppercase tracking-wider flex items-center gap-1 shadow-md hover:scale-105 active:scale-95 transition-all cursor-pointer"
                >
                  ✕ <span>Cerrar</span>
                </button>
              </div>
            </div>

            {/* Video enmarcado */}
            <div className="relative w-full max-h-[68vh] sm:max-h-[72vh] aspect-[478/850] bg-black rounded-2xl sm:rounded-[24px] overflow-hidden border-2 border-amber-400/40 shadow-inner flex items-center justify-center">
              <video
                ref={birthdayVideoRef}
                playsInline
                controls
                preload="auto"
                className="w-full h-full object-contain bg-black"
              >
                <source src="hbrob.mp4" type="video/mp4" />
                <source src="public/hbrob.mp4" type="video/mp4" />
                Tu navegador no soporta video.
              </video>
            </div>

            <div className="w-full flex items-center justify-between px-1 pt-3 text-[11px] text-amber-200/80 font-medium">
              <span className="flex items-center gap-1 font-serif italic">
                ✨ Buenos Malos Consejos para mi Hijo
              </span>
              <button
                type="button"
                onClick={() => {
                  const shareUrl = getBirthdayShareUrl();
                  const onCopied = () => {
                    setCopiedBirthdayLink(true);
                    setTimeout(() => setCopiedBirthdayLink(false), 2500);
                  };
                  if (navigator.clipboard?.writeText) {
                    navigator.clipboard.writeText(shareUrl).then(onCopied).catch(() => {
                      onCopied();
                    });
                  } else {
                    onCopied();
                  }
                }}
                className="text-purple-300 hover:text-white underline font-mono text-[10px] cursor-pointer"
              >
                {copiedBirthdayLink ? "¡Enlace copiado!" : "Copiar enlace"}
              </button>
            </div>

          </div>
        </div>
    </section>
  );
}
