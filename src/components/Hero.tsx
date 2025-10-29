import { Button } from "@/components/ui/button";
import { TrendingUp } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="pt-32 pb-20 px-6">
      <div className="container mx-auto text-center max-w-4xl">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          Choose Your Strategy Let Algorithms Trade for You
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Mirror other traders' strategies with AI-powered algorithms. Copy proven trading patterns and let automation grow your portfolio.
        </p>
        <Button 
          size="lg"
          className="bg-primary hover:bg-primary/90 text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-primary/50 transition-all"
        >
          Get Started
        </Button>
        
        <div className="mt-16 flex items-center justify-center gap-2 text-primary">
          <TrendingUp className="w-6 h-6 animate-pulse" />
          <span className="text-sm">Live Trading Active</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
