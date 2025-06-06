const WelcomeMessage = () => {
  return (
    <div className="text-center animate-fade-in">
      <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 font-montserrat tracking-tight">
        Добро пожаловать!
      </h1>
      <p className="text-xl md:text-2xl text-red-100 font-light max-w-2xl mx-auto leading-relaxed">
        Здесь будет отображаться ваш проект
      </p>
      <div className="mt-8 w-24 h-1 bg-white mx-auto rounded-full opacity-80"></div>
    </div>
  );
};

export default WelcomeMessage;
