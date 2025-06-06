interface GameCardProps {
  title: string;
  price: string;
  color: string;
  icon: string;
}

const GameCard = ({ title, price, color, icon }: GameCardProps) => {
  return (
    <div className="bg-gradient-to-r from-purple-900/50 to-pink-900/30 border border-purple-500/30 rounded-lg p-4 hover:border-purple-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className={`w-8 h-8 ${color} rounded`}>
            <span className="text-2xl">{icon}</span>
          </div>
          <span className="text-white font-medium">{title}</span>
        </div>
        <div className="text-pink-400 font-semibold">{price}</div>
      </div>
    </div>
  );
};

export default GameCard;
