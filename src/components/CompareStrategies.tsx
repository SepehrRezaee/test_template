import { Button } from "@/components/ui/button";
import { TrendingUp, TrendingDown, Activity } from "lucide-react";
import { useEffect, useState } from "react";

interface StrategyData {
  name: string;
  profitLoss: number;
  unitPrice: number;
  currentValue: number;
  change: number;
  positive: boolean;
  details: {
    capital: number;
    drawdown: number;
    pnl7d: number;
    units: number;
  };
}

const initialStrategies: StrategyData[] = [
  {
    name: "Momentum Trader",
    profitLoss: 33.5,
    unitPrice: 150,
    currentValue: 200.25,
    change: 14.2,
    positive: true,
    details: {
      capital: 2.1,
      drawdown: -8.2,
      pnl7d: 3.4,
      units: 14230,
    },
  },
  {
    name: "Grid Master Pro",
    profitLoss: 28.3,
    unitPrice: 220,
    currentValue: 282.14,
    change: 28.3,
    positive: true,
    details: {
      capital: 1.8,
      drawdown: -5.1,
      pnl7d: 2.8,
      units: 8180,
    },
  },
  {
    name: "Scalper Elite",
    profitLoss: -12.8,
    unitPrice: 185,
    currentValue: 161.32,
    change: -12.8,
    positive: false,
    details: {
      capital: 0.89,
      drawdown: -15.3,
      pnl7d: -4.2,
      units: 4810,
    },
  },
  {
    name: "Trend Follower",
    profitLoss: 45.7,
    unitPrice: 340,
    currentValue: 495.38,
    change: 45.7,
    positive: true,
    details: {
      capital: 3.2,
      drawdown: -6.8,
      pnl7d: 5.1,
      units: 9410,
    },
  },
];

const CompareStrategies = () => {
  const [strategies, setStrategies] = useState<StrategyData[]>(initialStrategies);

  useEffect(() => {
    const interval = setInterval(() => {
      setStrategies((prev) =>
        prev.map((strategy) => {
          const priceChange = (Math.random() - 0.5) * 2;
          const newCurrentValue = strategy.currentValue + priceChange;
          const newChange = ((newCurrentValue - strategy.unitPrice) / strategy.unitPrice) * 100;
          
          return {
            ...strategy,
            currentValue: parseFloat(newCurrentValue.toFixed(2)),
            change: parseFloat(newChange.toFixed(2)),
            positive: newChange > 0,
            details: {
              ...strategy.details,
              pnl7d: parseFloat((strategy.details.pnl7d + (Math.random() - 0.5) * 0.3).toFixed(2)),
            },
          };
        })
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);
  return (
    <section id="strategies" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="flex items-center justify-center gap-3 mb-4">
          <h2 className="text-4xl font-bold text-center">Compare Live Strategies</h2>
          <div className="flex items-center gap-2 px-3 py-1 bg-primary/20 rounded-full">
            <Activity className="w-4 h-4 text-primary animate-pulse" />
            <span className="text-sm text-primary font-semibold">LIVE</span>
          </div>
        </div>
        <p className="text-center text-muted-foreground mb-16">Real-time performance updates every 2 seconds</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {strategies.map((strategy, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl p-6 hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">{strategy.name}</h3>
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              </div>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">P/L</span>
                  <span className={`font-semibold transition-all duration-300 ${strategy.positive ? 'text-green-500' : 'text-red-500'}`}>
                    {strategy.profitLoss > 0 ? '+' : ''}{strategy.profitLoss.toFixed(1)}%
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Unit Price</span>
                  <span className="font-semibold">${strategy.unitPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Current</span>
                  <span className="font-semibold transition-all duration-300">
                    ${strategy.currentValue.toFixed(2)}
                  </span>
                </div>
              </div>

              <div className="mb-6">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-muted-foreground">Performance</span>
                  <span className={`transition-all duration-300 flex items-center gap-1 ${strategy.positive ? 'text-green-500' : 'text-red-500'}`}>
                    {strategy.positive ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                    {strategy.change > 0 ? '+' : ''}{strategy.change.toFixed(1)}%
                  </span>
                </div>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <div 
                    className={`h-full rounded-full transition-all duration-500 ${strategy.positive ? 'bg-gradient-to-r from-green-500 to-green-400' : 'bg-gradient-to-r from-red-500 to-red-400'}`}
                    style={{ width: `${Math.min(Math.abs(strategy.change), 100)}%` }}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 mb-6 text-xs">
                <div className="bg-secondary/50 rounded p-2">
                  <div className="text-muted-foreground">Capital</div>
                  <div className="font-semibold">${strategy.details.capital.toFixed(1)}M</div>
                </div>
                <div className="bg-secondary/50 rounded p-2">
                  <div className="text-muted-foreground">Drawdown</div>
                  <div className="font-semibold text-red-500">{strategy.details.drawdown.toFixed(1)}%</div>
                </div>
                <div className="bg-secondary/50 rounded p-2">
                  <div className="text-muted-foreground">7d PNL</div>
                  <div className={`font-semibold transition-all duration-300 ${strategy.details.pnl7d > 0 ? 'text-green-500' : 'text-red-500'}`}>
                    {strategy.details.pnl7d > 0 ? '+' : ''}{strategy.details.pnl7d.toFixed(1)}%
                  </div>
                </div>
                <div className="bg-secondary/50 rounded p-2">
                  <div className="text-muted-foreground">Units</div>
                  <div className="font-semibold">{strategy.details.units.toLocaleString()}</div>
                </div>
              </div>

              <Button className="w-full bg-primary hover:bg-primary/90 transition-all duration-300">
                Buy Units
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompareStrategies;
