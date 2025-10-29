import { Button } from "@/components/ui/button";
import { TrendingUp, TrendingDown } from "lucide-react";

const strategies = [
  {
    name: "Strategy Name",
    profitLoss: "+33.5%",
    unitPrice: "$150",
    currentValue: "$200.25",
    change: "+14.2%",
    positive: true,
    details: [
      { label: "Capital", value: "$2.1M" },
      { label: "Drawdown", value: "-8.2%" },
      { label: "7d PNL", value: "+3.4%" },
      { label: "Units", value: "14,230" },
    ],
  },
  {
    name: "Strategy Name",
    profitLoss: "+28.3%",
    unitPrice: "$220",
    currentValue: "$282.14",
    change: "+28.3%",
    positive: true,
    details: [
      { label: "Capital", value: "$1.8M" },
      { label: "Drawdown", value: "-5.1%" },
      { label: "7d PNL", value: "+2.8%" },
      { label: "Units", value: "8,180" },
    ],
  },
  {
    name: "Strategy Name",
    profitLoss: "-12.8%",
    unitPrice: "$185",
    currentValue: "$161.32",
    change: "-12.8%",
    positive: false,
    details: [
      { label: "Capital", value: "$890K" },
      { label: "Drawdown", value: "-15.3%" },
      { label: "7d PNL", value: "-4.2%" },
      { label: "Units", value: "4,810" },
    ],
  },
  {
    name: "Strategy Name",
    profitLoss: "+45.7%",
    unitPrice: "$340",
    currentValue: "$495.38",
    change: "+45.7%",
    positive: true,
    details: [
      { label: "Capital", value: "$3.2M" },
      { label: "Drawdown", value: "-6.8%" },
      { label: "7d PNL", value: "+5.1%" },
      { label: "Units", value: "9,410" },
    ],
  },
];

const CompareStrategies = () => {
  return (
    <section id="strategies" className="py-20 px-6">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">Compare the Two Strategies</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {strategies.map((strategy, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl p-6 hover:border-primary transition-all duration-300"
            >
              <h3 className="text-lg font-semibold mb-4">{strategy.name}</h3>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">P/L</span>
                  <span className={`font-semibold ${strategy.positive ? 'text-green-500' : 'text-red-500'}`}>
                    {strategy.profitLoss}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Unit Price</span>
                  <span className="font-semibold">{strategy.unitPrice}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Current</span>
                  <span className="font-semibold">{strategy.currentValue}</span>
                </div>
              </div>

              <div className="mb-6">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-muted-foreground">Performance</span>
                  <span className={strategy.positive ? 'text-green-500' : 'text-red-500'}>
                    {strategy.change}
                  </span>
                </div>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <div 
                    className={`h-full rounded-full ${strategy.positive ? 'bg-green-500' : 'bg-red-500'}`}
                    style={{ width: `${Math.abs(parseFloat(strategy.change))}%` }}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 mb-6 text-xs">
                {strategy.details.map((detail, i) => (
                  <div key={i} className="bg-secondary/50 rounded p-2">
                    <div className="text-muted-foreground">{detail.label}</div>
                    <div className="font-semibold">{detail.value}</div>
                  </div>
                ))}
              </div>

              <Button className="w-full bg-primary hover:bg-primary/90">
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
