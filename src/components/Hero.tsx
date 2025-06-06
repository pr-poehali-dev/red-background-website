import WelcomeMessage from "./WelcomeMessage";

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-red-400 rounded-full blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <WelcomeMessage />
      </div>
    </section>
  );
};

export default Hero;
