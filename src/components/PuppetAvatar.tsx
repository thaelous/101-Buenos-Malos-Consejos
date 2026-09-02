export function PuppetAvatar({ className = "w-full h-full", isPlaying = false }: { className?: string; isPlaying?: boolean }) {
  return (
    <div className={`relative flex items-center justify-center overflow-hidden select-none ${className}`}>
      {/* Dynamic studio background with soft bokeh circles and purple/sky tones */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#87B9E7] via-[#A8CEF2] to-[#6099D0]" />
      <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full bg-purple-400/25 blur-xl pointer-events-none" />
      <div className="absolute bottom-4 -left-8 w-44 h-44 rounded-full bg-pink-300/25 blur-lg pointer-events-none" />
      
      {/* Puppet Character SVG */}
      <svg
        viewBox="0 0 320 420"
        className={`w-full h-full object-contain relative z-10 filter drop-shadow-2xl transition-transform duration-700 ${isPlaying ? 'scale-[1.02]' : 'scale-100'}`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id="feltSkin" cx="50%" cy="40%" r="60%">
            <stop offset="0%" stopColor="#F5C7A9" />
            <stop offset="65%" stopColor="#E5A67F" />
            <stop offset="100%" stopColor="#CA8B64" />
          </radialGradient>
          <linearGradient id="beardGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#3F2A1D" />
            <stop offset="50%" stopColor="#251710" />
            <stop offset="100%" stopColor="#140B07" />
          </linearGradient>
          <linearGradient id="jacketGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1E293B" />
            <stop offset="100%" stopColor="#0F172A" />
          </linearGradient>
          <linearGradient id="shirtGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#8B5CF6" />
            <stop offset="100%" stopColor="#6D28D9" />
          </linearGradient>
        </defs>

        {/* Puppet Torso & Jacket */}
        <path d="M 60 420 C 70 330, 95 300, 160 300 C 225 300, 250 330, 260 420 Z" fill="url(#jacketGrad)" />
        {/* Inner Shirt Collar */}
        <polygon points="120,300 160,345 200,300 160,310" fill="url(#shirtGrad)" />
        <polygon points="140,300 160,330 180,300" fill="#EDE9FE" />

        {/* Puppet Neck */}
        <rect x="138" y="260" width="44" height="50" rx="8" fill="#D89972" />

        {/* Puppet Head (Felt puppet shape) */}
        <ellipse cx="160" cy="180" rx="72" ry="85" fill="url(#feltSkin)" stroke="#B87B56" strokeWidth="2.5" />

        {/* Ears */}
        <ellipse cx="86" cy="180" rx="14" ry="20" fill="#E5A67F" stroke="#B87B56" strokeWidth="2" />
        <ellipse cx="88" cy="180" rx="7" ry="11" fill="#CA8B64" />
        <ellipse cx="234" cy="180" rx="14" ry="20" fill="#E5A67F" stroke="#B87B56" strokeWidth="2" />
        <ellipse cx="232" cy="180" rx="7" ry="11" fill="#CA8B64" />

        {/* Puppet Styled Hair on Top */}
        <path
          d="M 98 140 C 95 90, 140 85, 160 85 C 180 85, 225 90, 222 140 C 210 115, 185 105, 160 106 C 135 105, 110 115, 98 140 Z"
          fill="url(#beardGrad)"
        />

        {/* Expressive Thick Puppet Eyebrows */}
        <g className={`transition-transform duration-500 ${isPlaying ? '-translate-y-1' : ''}`}>
          <path d="M 108 136 C 122 125, 142 128, 148 138" stroke="#1D120C" strokeWidth="7" strokeLinecap="round" fill="none" />
          <path d="M 212 136 C 198 125, 178 128, 172 138" stroke="#1D120C" strokeWidth="7" strokeLinecap="round" fill="none" />
        </g>

        {/* Puppet Eyes (Googly puppet style with realistic iris) */}
        <circle cx="130" cy="162" r="16" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1.5" />
        <circle cx="190" cy="162" r="16" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1.5" />
        {/* Pupils looking slightly engaged forward */}
        <circle cx="132" cy="161" r="7.5" fill="#1E293B" />
        <circle cx="134" cy="158" r="2.5" fill="#FFFFFF" />
        <circle cx="188" cy="161" r="7.5" fill="#1E293B" />
        <circle cx="190" cy="158" r="2.5" fill="#FFFFFF" />

        {/* Puppet Nose (Button felt style) */}
        <ellipse cx="160" cy="182" rx="14" ry="11" fill="#D97706" opacity="0.95" />

        {/* The Signature Dark Eyeglasses */}
        <g id="eyeglasses" stroke="#0F172A" strokeWidth="5.5" fill="none">
          {/* Left Frame */}
          <rect x="105" y="142" width="48" height="38" rx="10" fill="rgba(255,255,255,0.22)" />
          {/* Right Frame */}
          <rect x="167" y="142" width="48" height="38" rx="10" fill="rgba(255,255,255,0.22)" />
          {/* Bridge */}
          <path d="M 153 158 Q 160 152 167 158" strokeWidth="5.5" strokeLinecap="round" />
          {/* Temples extending */}
          <path d="M 105 156 L 86 162" strokeWidth="4.5" />
          <path d="M 215 156 L 234 162" strokeWidth="4.5" />
        </g>

        {/* Trimmed Beard & Mustache */}
        {/* Mustache */}
        <path
          d="M 124 200 C 142 192, 156 200, 160 205 C 164 200, 178 192, 196 200 C 190 216, 170 214, 160 210 C 150 214, 130 216, 124 200 Z"
          fill="url(#beardGrad)"
        />

        {/* Expressive Puppet Mouth with Hinged Jaw Line */}
        <g id="mouth">
          {/* Mouth Cavity */}
          <path
            d={isPlaying ? "M 132 210 Q 160 240 188 210 Z" : "M 134 212 Q 160 226 186 212 Z"}
            fill="#7F1D1D"
            className="transition-all duration-300"
          />
          {/* Tongue */}
          <ellipse cx="160" cy={isPlaying ? "224" : "218"} rx="12" ry="7" fill="#F43F5E" />
        </g>

        {/* Full Trimmed Beard along chin and jaw */}
        <path
          d="M 102 188 C 104 250, 130 282, 160 284 C 190 282, 216 250, 218 188 C 218 210, 206 248, 190 252 C 178 255, 168 248, 160 248 C 152 248, 142 255, 130 252 C 114 248, 102 210, 102 188 Z"
          fill="url(#beardGrad)"
        />

        {/* Small microphone clip on lapel */}
        <rect x="126" y="328" width="8" height="15" rx="3" fill="#111827" />
        <circle cx="130" cy="326" r="3" fill="#475569" />
        <circle cx="130" cy="333" r="1.5" fill="#EF4444" />
      </svg>
    </div>
  );
}
