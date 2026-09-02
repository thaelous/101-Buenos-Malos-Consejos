import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { PersonalizedVideosSection } from './components/PersonalizedVideosSection';
import { AdquiereTuLibro } from './components/AdquiereTuLibro';
import { ComicSection } from './components/ComicSection';
import { DailyAdvice } from './components/DailyAdvice';
import { ConsejosList } from './components/ConsejosList';
import { SocialSection } from './components/SocialSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen relative text-slate-800 font-sans selection:bg-purple-600 selection:text-white antialiased overflow-x-hidden"
         style={{ background: 'linear-gradient(135deg, #BAE6FD 0%, #E9D5FF 50%, #FBCFE8 100%)' }}>
      
      {/* Natural Tones Ambient atmospheric glows */}
      <div className="fixed top-[-100px] left-[-100px] w-80 h-80 bg-white/30 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="fixed bottom-[-100px] right-[-100px] w-96 h-96 bg-purple-400/20 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="fixed top-1/2 left-1/3 w-96 h-96 bg-pink-300/15 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Fixed Header */}
      <Header />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero Section with 101 typography & TikTok puppet reel player */}
        <Hero />

        {/* 2. Sobre Robert Pacheco */}
        <AboutSection />

        {/* 3. Adquiere tu libro */}
        <AdquiereTuLibro />

        {/* 4. Comic Online (Buenos Malos Consejos. Cómics en línea) */}
        <ComicSection />

        {/* 5. El Consejo del Día (Viralizable con tipografía manuscrita) */}
        <DailyAdvice />

        {/* 6. Los 101 Consejos (El Libro Completo con buscador y filtros) */}
        <ConsejosList />

        {/* 7. Redes Sociales Oficiales */}
        <SocialSection />

        {/* 8. Videos Personalizados (Dedicatorias, consejos, felicitaciones por WhatsApp) */}
        <PersonalizedVideosSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
