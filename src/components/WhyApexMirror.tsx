import { Shield, TrendingUp, Activity, Database } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Transparency & Security",
    description: "Every trade is recorded on the blockchain. Track your investments with complete transparency and bank-grade security.",
  },
  {
    icon: TrendingUp,
    title: "Smart Strategy Selection",
    description: "Choose from top-performing strategies. Our AI analyzes thousands of data points to recommend the best options for your goals.",
  },
  {
    icon: Activity,
    title: "Risk Management",
    description: "Advanced risk controls protect your portfolio. Set limits, stop-losses, and automated safeguards for peace of mind.",
  },
  {
    icon: Database,
    title: "Data-Driven Insights",
    description: "Real-time analytics and comprehensive reporting. Make informed decisions based on live market data and performance metrics.",
  },
];

const WhyApexMirror = () => {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">Why ApexMirror</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className={`p-6 rounded-xl border border-border bg-card hover:border-primary transition-all duration-300 ${
                  index === 3 ? 'bg-primary/10 border-primary' : ''
                }`}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyApexMirror;
