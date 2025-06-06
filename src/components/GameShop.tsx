import GameCard from "./GameCard";

const GameShop = () => {
  const gameItems = [
    {
      title: "Барон",
      price: "от 15 РУБ",
      color: "bg-gradient-to-br from-cyan-400 to-blue-500",
      icon: "🏰",
    },
    {
      title: "Страж",
      price: "от 27 РУБ",
      color: "bg-gradient-to-br from-green-400 to-emerald-500",
      icon: "🛡️",
    },
    {
      title: "Герой",
      price: "от 39 РУБ",
      color: "bg-gradient-to-br from-teal-400 to-cyan-500",
      icon: "⚔️",
    },
    {
      title: "Аслид",
      price: "от 79 РУБ",
      color: "bg-gradient-to-br from-blue-400 to-indigo-500",
      icon: "❄️",
    },
    {
      title: "Сквид",
      price: "от 129 РУБ",
      color: "bg-gradient-to-br from-cyan-400 to-teal-500",
      icon: "🐙",
    },
    {
      title: "Глава",
      price: "от 249 РУБ",
      color: "bg-gradient-to-br from-orange-400 to-red-500",
      icon: "👑",
    },
    {
      title: "Элита",
      price: "от 349 РУБ",
      color: "bg-gradient-to-br from-purple-400 to-pink-500",
      icon: "💎",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white pt-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
            FUNTIME.SU
          </h1>
          <div className="flex justify-center space-x-8 mb-8">
            <button className="px-4 py-2 text-pink-400 border-b-2 border-pink-400 font-semibold">
              Главная
            </button>
            <button className="px-4 py-2 text-gray-400 hover:text-white transition-colors">
              Акции
            </button>
            <button className="px-4 py-2 text-gray-400 hover:text-white transition-colors">
              Правила
            </button>
            <button className="px-4 py-2 text-gray-400 hover:text-white transition-colors">
              Контакты
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Левая колонка - Товары */}
          <div className="bg-gradient-to-b from-purple-900/20 to-pink-900/20 border border-purple-500/30 rounded-lg p-6">
            <h2 className="text-xl font-bold text-white mb-6 border-b-2 border-pink-500 pb-2">
              Выберите товар:
            </h2>
            <div className="space-y-3">
              {gameItems.map((item, index) => (
                <GameCard
                  key={index}
                  title={item.title}
                  price={item.price}
                  color={item.color}
                  icon={item.icon}
                />
              ))}
            </div>
          </div>

          {/* Правая колонка - Настройки */}
          <div className="bg-gradient-to-b from-purple-900/20 to-pink-900/20 border border-purple-500/30 rounded-lg p-6">
            <h2 className="text-xl font-bold text-white mb-6 border-b-2 border-pink-500 pb-2">
              Выберите срок:
            </h2>

            <div className="flex space-x-2 mb-6">
              <button className="px-4 py-2 bg-transparent border border-gray-500 text-gray-400 rounded hover:border-purple-400 hover:text-purple-400 transition-all">
                30 дней
              </button>
              <button className="px-4 py-2 bg-pink-600 text-white rounded font-semibold">
                90 дней
              </button>
              <button className="px-4 py-2 bg-transparent border border-gray-500 text-gray-400 rounded hover:border-purple-400 hover:text-purple-400 transition-all">
                Навсегда
              </button>
            </div>

            <div className="mb-6">
              <h3 className="text-pink-400 font-semibold mb-3">
                Возможности привилегии:
              </h3>
              <div className="space-y-2 text-sm">
                <div className="text-gray-300">
                  › Префикс в чате и табе:{" "}
                  <span className="text-cyan-400">[Барон]</span> ВашНик
                </div>
                <div className="text-gray-300">
                  › <span className="text-pink-400">/kit Барон</span> ⇒ Получить
                  набор Барона
                </div>
                <div className="text-gray-300">
                  › <span className="text-pink-400">/salary</span> ⇒ Получить
                  зарплату
                </div>
                <div className="text-gray-300">
                  › <span className="text-pink-400">/crawl</span> ⇒ Сменить
                  позу: красться
                </div>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-pink-400 font-semibold mb-3">Прочее:</h3>
              <div className="space-y-1 text-sm text-gray-300">
                <div>
                  Доступно Точек домов: <span className="text-pink-400">2</span>
                </div>
                <div>
                  Регионов (Гриф):{" "}
                  <span className="text-pink-400">* по 40.000 блоков</span>
                </div>
                <div>
                  Регионов (Анка):{" "}
                  <span className="text-pink-400">3 блоков</span>
                </div>
                <div>
                  Слотов на Аукционе: <span className="text-pink-400">6</span>
                </div>
                <div>
                  Задержка телепорта:{" "}
                  <span className="text-pink-400">7 сек</span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <span className="text-pink-400 font-semibold">Стоимость: </span>
                <span className="text-2xl font-bold text-white">27 руб</span>
              </div>
              <button className="px-6 py-3 bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 text-white font-semibold rounded-lg border border-pink-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/30">
                ПРИОБРЕСТИ
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center text-gray-500 text-sm border-t border-gray-800 pt-8">
          <div className="mb-2">
            Сервер FunTime никак не относится к Mojang AB.
            <br />
            ИП Литвинчук Николай Николаевич
            <br />
            ИНН 644949089449, ОГРНИП 322649700002254
          </div>
          <div className="flex justify-between items-center">
            <div>Копирование контента с сайта, серверов проекта запрещено.</div>
            <div>
              © 2025 FunTime.su
              <br />
              Все Права Защищены
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameShop;
