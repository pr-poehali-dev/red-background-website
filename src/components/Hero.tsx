import WelcomeMessage from "./WelcomeMessage";

const Hero = () => {
  return (
    <section className="min-h-screen bg-black flex items-center justify-center relative overflow-hidden">
      {/* Neon background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-pink-500 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-cyan-400 rounded-full blur-3xl opacity-10"></div>
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "linear-gradient(rgba(147, 51, 234, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(147, 51, 234, 0.5) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10">
        <WelcomeMessage />
      </div>
    </section>
  );
};

export default Hero;
