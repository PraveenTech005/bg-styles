const Addons = `.main {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  width: 100%;
  height: 100%;
}

.main-cont {
  position: relative;
  z-index: 10;
  color: white;
}`;

const Texture = [
  {
    title: "Subtle Noise Texture",
    html: (
      <div className="subtle-noise h-full w-full main">
        <div className="main-cont">Your UI here</div>
      </div>
    ),
    css: `.subtle-noise {
  background-color: #000;
  background-image: radial-gradient(
    rgba(255, 255, 255, 0.08) 1px,
    transparent 0
  );
  background-size: 15px 15px;
}`,
  },
  {
    title: "Square Grid Pattern",
    html: (
      <div className="grid-bg main">
        <div className="main-cont">Your UI here</div>
      </div>
    ),
    css: `.grid-bg {
  background-color: #0d0d0d;
  background-image: linear-gradient(
      to right,
      rgba(255, 255, 255, 0.05) 1px,
      transparent 1px
    ),
    linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
  background-size: 40px 40px;
}`,
  },
  {
    title: "Dusty Paper / Grunge Texture",
    html: (
      <div className="grunge-bg main">
        <div className="main-cont">Your UI here</div>
      </div>
    ),
    css: `.grunge-bg {
  background-color: #1a1a1a;
  background-image: radial-gradient(
      rgba(255, 255, 255, 0.015) 1px,
      transparent 0
    ),
    radial-gradient(rgba(255, 255, 255, 0.01) 1px, transparent 0);
  background-size: 3px 3px, 6px 6px;
}`,
  },
  {
    title: "Static Noise / TV Grain",
    html: (
      <div className="main static-noise ">
        <div className="main-cont">Your UI here</div>
      </div>
    ),
    css: `.static-noise {
    position: relative;
    background-color: #000;
  }
    
.static-noise::before {
  content: "";
  position: absolute;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch' /%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23noise)' /%3E%3C/svg%3E");
  opacity: 0.05;
  z-index: 0;
  pointer-events: none;
}`,
  },
];

const Gradient = [
  {
    title: "Linear Gradient",
    html: (
      <div className="linear-gradient main">
        <div className="main-cont">Your UI here</div>
      </div>
    ),
    css: `.linear-gradient {
 background: linear-gradient(to right, #ec4899, #8b5cf6, #6366f1);
}`,
  },
  {
    title: "Radial Gradient",
    html: (
      <div className="radial-gradient main">
        <div className="main-cont">Your UI here</div>
      </div>
    ),
    css: `.radial-gradient {
  background: radial-gradient(circle at center, #ec4899, #8b5cf6, #6366f1);
}`,
  },
  {
    title: "Conic Gradient",
    html: (
      <div className="conic-gradient main">
        <div className="main-cont">Your UI here</div>
      </div>
    ),
    css: `.conic-gradient {
background: conic-gradient(
  from 180deg at 50% 50%,
  #ec4899,
  #8b5cf6,
  #6366f1,
  #ec4899
  );
}`,
  },
  {
    title: "Gradient + Grain Overlay",
    html: (
      <div className="gradient-grain main">
        <div className="grain-overlay" />
        <div className="main-cont">Your UI here</div>
      </div>
    ),
    css: `.gradient-grain {
  background: linear-gradient(to bottom right, #5b21b6, #db2777);
  position: relative;
  overflow: hidden;
}

.grain-overlay {
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23n)'/%3E%3C/svg%3E");
  opacity: 0.2;
  position: absolute;
  inset: 0;
  pointer-events: none;
}`,
  },
  {
    title: "Multi-stop / Layered Gradient",
    html: (
      <div className="multi-gradient main">
        <div className="main-cont">Your UI here</div>
      </div>
    ),
    css: `.multi-gradient {
  background: linear-gradient(to right, #ec4899 0%, #8b5cf6 50%, #6366f1 100%);
}`,
  },
  {
    title: "Neon Gradient Mesh (Blurred Blobs)",
    html: (
      <div className="neon-mesh main">
        <div className="blob pink" />
        <div className="blob blue" />
        <div className="main-cont p-10">Your UI here</div>
      </div>
    ),
    css: `.neon-mesh {
  position: relative;
  overflow: hidden;
  background-color: black;
}

.blob {
  position: absolute;
  width: 24rem;
  height: 24rem;
  border-radius: 9999px;
  filter: blur(60px);
  opacity: 0.3;
  animation: pulse 3s infinite;
}

.pink {
  background: #ec4899;
  top: 2.5rem;
  left: 2.5rem;
}

.blue {
  background: #3b82f6;
  bottom: 2.5rem;
  right: 2.5rem;
  animation-delay: 0.5s;
}`,
  },
];

const Glass = [
  {
    title: "Glassmorphism (Frosty Glass Look)",
    html: (
      <div className="glassmorphism main">
        <div className="main-cont content">Your UI here</div>
      </div>
    ),
    css: `.glassmorphism {
  background: linear-gradient(to bottom right, #1e1e1e, #3a3a3a);
  display: flex;
  justify-content: center;
  align-items: center;
}

.glassmorphism .content {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 1rem;
  padding: 2rem;
}`,
  },
  {
    title: "Frosted Gradient Backgrounds",
    html: (
      <div className="frosted-gradient main">
        <div className="frosted-card main-cont">Your UI here</div>
      </div>
    ),
    css: `.frosted-gradient {
  background: linear-gradient(to bottom right, #2563eb, #9333ea, #ec4899);
  display: flex;
  align-items: center;
  justify-content: center;
}

.frosted-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 1.5rem;
  padding: 2rem;
}`,
  },
  {
    title: "Blurry Blobs with Transparency",
    html: (
      <div className="blurry-blobs main">
        <div className="blob pink" />
        <div className="blob purple" />
        <div className="main-cont">Your UI here</div>
      </div>
    ),
    tail: (
      <div className="relative w-full h-full bg-black overflow-hidden flex justify-center items-center rounded-2xl">
        <div className="absolute w-96 h-96 bg-pink-400 opacity-30 blur-3xl rounded-full top-10 left-10 animate-pulse" />
        <div className="absolute w-96 h-96 bg-purple-400 opacity-30 blur-3xl rounded-full bottom-10 right-10 animate-pulse delay-500" />
        <div className="main-cont">Your UI here</div>
      </div>
    ),
    css: `.blurry-blobs {
  background: black;
  position: relative;
  overflow: hidden;
}

.blurry-blobs .main-cont {
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(16px);
  padding: 32px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 16px;
}

.blob {
  position: absolute;
  width: 24rem;
  height: 24rem;
  border-radius: 9999px;
  filter: blur(60px);
  opacity: 0.3;
  animation: pulse 3s infinite;
}

.pink {
  background: #ec4899;
  top: 2.5rem;
  left: 2.5rem;
}

.purple {
  background: #a855f7;
  bottom: 2.5rem;
  right: 2.5rem;
  animation-delay: 0.5s;
}`,
  },
  {
    title: "Glass Panels + Bold Text",
    html: (
      <div class="brutalist-glass main">
        <div class="glass-card main-cont">Your UI here</div>
      </div>
    ),
    css: `.brutalist-glass {
  background: linear-gradient(135deg, #000 25%, #222 100%);
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.glass-card {
  background: rgba(255, 255, 255, 0.05);
  border: 2px solid #fff3;
  border-radius: 1pc;
  padding: 3rem;
  font-size: 3rem;
  font-weight: 900;
  color: white;
  text-transform: uppercase;
  backdrop-filter: blur(8px);
  box-shadow: 0 0 30px rgba(255,255,255,0.1);
}`,
  },
];

const Dynamic = [
  {
    title: "Aurora Borealis Effect",
    html: (
      <div className="aurora-bg main">
        <div className="content main-cont">Your UI here</div>
      </div>
    ),
    css: `.aurora-bg {
  position: relative;
  background: black;
  overflow: hidden;
}

.aurora-bg::before,
.aurora-bg::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(to top right, #34d399, #a78bfa, #6366f1);
  filter: blur(120px);
  opacity: 0.2;
  animation: pulse 4s ease-in-out infinite alternate;
}

.aurora-bg::after {
  background: linear-gradient(to bottom left, #ec4899, #3b82f6, #10b981);
  animation-delay: 2s;
}`,
  },
  {
    title: "Blob Morphing Background",
    html: (
      <div className="blob-morph main">
        <div className="blob-shape" />
        <div className="main-cont">Your UI here</div>
      </div>
    ),
    css: `.blob-morph {
  position: relative;
  overflow: hidden;
}

.blob-morph .main-cont {
  color: #000;
}
  
.blob-shape {
  position: absolute;
  width: 10rem;
  height: 10rem;
  background: #8b5cf6;
  border-radius: 9999px;
  filter: blur(40px);
  opacity: 0.7;
  animation: blob 6s infinite ease-in-out alternate;
}

@keyframes blob {
  0% {
    transform: translate(0%, 0%) scale(1);
  }
  50% {
    transform: translate(100%, -50%) scale(1.1);
  }
  100% {
    transform: translate(-100%, 50%) scale(0.9);
  }
}`,
  },
  {
    title: "Animated Gradient Waves",
    html: (
      <div className="gradient-waves main">
        <div className="content main-cont">Your UI here</div>
      </div>
    ),
    css: `.gradient-waves {
  background: linear-gradient(45deg, #9333ea, #ec4899, #3b82f6);
  background-size: 300% 300%;
  animation: gradient-wave 6s ease infinite;
}

@keyframes gradient-wave {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}`,
  },
  {
    title: "Image Background",
    html: (
      <div className="lava-lamp w-full h-full overflow-hidden flex justify-center items-center rounded-2xl">
        <div className="main-cont p-10">Your UI here</div>
      </div>
    ),
    css: `.lava-lamp {
  position: relative;
  background: url("https://media.istockphoto.com/id/1282505760/vector/gradient-blob-abstract-background.jpg?s=612x612&w=0&k=20&c=zJw3D_eZrWH6fotiiWWWfe93UNiYIOMA1ZALEkgfKeg=")
    center no-repeat;
  background-size: cover;
  overflow: hidden;
}`,
  },
  {
    title: "Layered Background",
    html: (
      <div className="parallax-bg main">
        <div className="parallax-layer" />
        <div className="parallax-layer" />
        <div className="parallax-layer" />
        <div className="main-cont">Your UI here</div>
      </div>
    ),
    css: `.parallax-bg {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.parallax-layer {
  position: absolute;
  inset: 0;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom;
  animation: parallax 3s linear infinite;
}
.parallax-layer:nth-child(3) {
  animation-delay: 0s;
}

.parallax-layer:nth-child(2) {
  animation-delay: 1s;
}
.parallax-layer:nth-child(1) {
  animation-delay: 2s;
}
@keyframes parallax {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
}
  `,
  },
];

const Patterns = [
  {
    title: "Polka Dots",
    html: (
      <div className="polka-dots main">
        <div className="main-cont">Your UI here</div>
      </div>
    ),
    css: `.polka-dots {
  background-color: #0f0f0f;
  background-image: radial-gradient(white 5%, transparent 6%);
  background-size: 40px 40px;
}`,
  },
  {
    title: "Hexagon Pattern",
    html: (
      <div className="hexagon-pattern main">
        <div className="main-cont">Your UI here</div>
      </div>
    ),
    css: `.hexagon-pattern {
  background-color: #111;
  background-image: url("https://www.transparenttextures.com/patterns/hexellence.png");
  background-size: auto;
}`,
    addons: "Uses texture from Transparent Textures (hexellence.png)",
  },
  {
    title: "Triangle Grid Pattern",
    html: (
      <div className="triangle-pattern main">
        <div className="main-cont">Your UI here</div>
      </div>
    ),
    css: `.triangle-pattern {
  background-color: #1a1a1a;
  background-image: linear-gradient(30deg, #444 12%, transparent 12.5%, transparent 87%, #444 87.5%, #444),
                    linear-gradient(150deg, #444 12%, transparent 12.5%, transparent 87%, #444 87.5%, #444),
                    linear-gradient(90deg, #444 12%, transparent 12.5%, transparent 87%, #444 87.5%, #444);
  background-size: 60px 60px;
}`,
  },
  {
    title: "Checkerboard",
    html: (
      <div className="checkerboard main">
        <div className="main-cont text-black">Your UI here</div>
      </div>
    ),
    css: `.checkerboard {
  background-color: #000;
  background-image: linear-gradient(45deg, #fff 25%, transparent 25%),
                    linear-gradient(-45deg, #fff 25%, transparent 25%),
                    linear-gradient(45deg, transparent 75%, #fff 75%),
                    linear-gradient(-45deg, transparent 75%, #fff 75%);
  background-size: 40px 40px;
  background-position: 0 0, 0 20px, 20px -20px, -20px 0px;
}
.checkerboard .main-cont {
  background-color: white;
  padding: 32px;
  color: #000;
  border-radius: 16px;
}`,
  },
  {
    title: "Retro Pixel Grid",
    html: (
      <div className="pixel-grid main">
        <div className="main-cont">Your UI here</div>
      </div>
    ),
    css: `.pixel-grid {
  background-color: #000;
  background-image: repeating-linear-gradient(0deg, #333 0px, #333 1px, transparent 1px, transparent 10px),
    repeating-linear-gradient(90deg, #333 0px, #333 1px, transparent 1px, transparent 10px);
}`,
  },
];

export default {
  Addons,
  Texture,
  Gradient,
  Glass,
  Dynamic,
  Patterns,
};
