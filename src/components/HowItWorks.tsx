import networkImage from "@/assets/network-3d.png";
import chartImage from "@/assets/chart-3d.png";
import timerImage from "@/assets/timer-3d.png";

const steps = [
  {
    title: "1. Analyze stats & Security",
    description: "Review comprehensive performance data. Examine win rates, drawdowns, and risk metrics across all available strategies.",
    image: networkImage,
  },
  {
    title: "2. Buy Units",
    description: "Purchase strategy units with your preferred allocation. Start small or go big—you control your investment level.",
    image: chartImage,
  },
  {
    title: "3. Buy Units",
    description: "Sit back and monitor. Our algorithms execute trades automatically while you track performance in real-time.",
    image: timerImage,
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 px-6 bg-card/30">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">How It Works</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative group"
            >
              <div className="bg-card border border-border rounded-xl p-6 hover:border-primary transition-all duration-300">
                <div className="aspect-video mb-6 rounded-lg overflow-hidden bg-background">
                  <img 
                    src={step.image} 
                    alt={step.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
