const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-purple-500/20">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex justify-center space-x-8">
          <button className="px-6 py-2 bg-transparent border border-purple-500/50 text-purple-400 font-semibold rounded-lg hover:bg-purple-500/20 hover:border-purple-400 hover:text-purple-300 transition-all duration-300 hover:shadow-md hover:shadow-purple-500/30 hover:scale-105">
            Донат
          </button>
          <button className="px-6 py-2 bg-transparent border border-pink-500/50 text-pink-400 font-semibold rounded-lg hover:bg-pink-500/20 hover:border-pink-400 hover:text-pink-300 transition-all duration-300 hover:shadow-md hover:shadow-pink-500/30 hover:scale-105">
            Соц сети
          </button>
          <button className="px-6 py-2 bg-transparent border border-cyan-500/50 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500/20 hover:border-cyan-400 hover:text-cyan-300 transition-all duration-300 hover:shadow-md hover:shadow-cyan-500/30 hover:scale-105">
            Поддержка
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
