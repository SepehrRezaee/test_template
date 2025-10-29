import { Button } from "@/components/ui/button";
import cryptoCoin from "@/assets/crypto-coin-1.png";

const CTASection = () => {
  return (
    <section className="py-20 px-6 relative overflow-hidden">
      <div className="absolute left-10 bottom-10 w-32 h-32 opacity-50">
        <img src={cryptoCoin} alt="Crypto" className="w-full h-full object-contain animate-pulse" />
      </div>
      <div className="absolute right-10 top-10 w-24 h-24 opacity-50">
        <img src={cryptoCoin} alt="Crypto" className="w-full h-full object-contain animate-pulse" style={{ animationDelay: '0.5s' }} />
      </div>
      
      <div className="container mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Start Investing Smarter?</h2>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Join thousands of traders who trust our platform. Start mirroring successful strategies today.
        </p>
        <Button 
          size="lg"
          className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white text-lg px-12 py-6 rounded-full shadow-lg"
        >
          Get Started Now
        </Button>
      </div>
    </section>
  );
};

export default CTASection;
