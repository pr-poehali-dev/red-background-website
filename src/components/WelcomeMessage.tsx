const WelcomeMessage = () => {
  return (
    <div className="text-center animate-fade-in relative">
      <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 font-montserrat tracking-tight relative">
        <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent drop-shadow-2xl">
          Добро пожаловать!
        </span>
        {/* Neon glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent blur-sm opacity-50 -z-10">
          Добро пожаловать!
        </div>
      </h1>
      <p className="text-xl md:text-2xl text-gray-300 font-light max-w-2xl mx-auto leading-relaxed mb-8">
        Здесь будет отображаться ваш проект
      </p>

      <div className="mt-8 w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full shadow-lg shadow-purple-500/50"></div>

      <div className="mt-8 w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full shadow-lg shadow-purple-500/50"></div>
    </div>
  );
};

export default WelcomeMessage;
