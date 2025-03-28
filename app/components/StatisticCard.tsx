// components/StatisticCard.tsx
interface StatisticCardProps {
    title: string;
    value: string | number;
    percentageChange: string;
    isIncrease: boolean;
}

const StatisticCard: React.FC<StatisticCardProps> = ({ title, value, percentageChange, isIncrease }) => {
    return (
        <div className="bg-white rounded-xl shadow-md p-6 text-center">
            <h3 className="text-gray-700 font-semibold text-lg mb-2">{title}</h3>
            <div className="flex items-center justify-center">
                <p className="text-2xl font-bold text-gray-800">{value}</p>
                <p className={`text-sm ml-2 ${isIncrease ? 'text-green-500' : 'text-red-500'}`}>
                    {percentageChange}
                </p>
            </div>
        </div>
    );
};

export default StatisticCard;