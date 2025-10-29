const TransparencySection = () => {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">Transparency & Security</h2>
        <div className="w-24 h-1 bg-primary mx-auto mb-16"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {[1, 2].map((index) => (
            <div key={index} className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4">Strategy Name</h3>
              <p className="text-sm text-muted-foreground mb-6">
                Live performance chart - updated every minute
              </p>
              
              <div className="bg-background rounded-lg p-4 aspect-video">
                <svg className="w-full h-full" viewBox="0 0 400 200">
                  <defs>
                    <linearGradient id={`gradient-${index}`} x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="hsl(217 91% 60%)" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="hsl(217 91% 60%)" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  
                  {/* Grid lines */}
                  {[0, 1, 2, 3, 4].map((i) => (
                    <line
                      key={i}
                      x1="0"
                      y1={i * 50}
                      x2="400"
                      y2={i * 50}
                      stroke="hsl(217 50% 20%)"
                      strokeWidth="1"
                    />
                  ))}
                  
                  {/* Candlesticks */}
                  {Array.from({ length: 20 }).map((_, i) => {
                    const x = 20 + i * 20;
                    const isGreen = Math.random() > 0.5;
                    const high = 40 + Math.random() * 60;
                    const low = 100 + Math.random() * 60;
                    const open = high + Math.random() * (low - high);
                    const close = high + Math.random() * (low - high);
                    
                    return (
                      <g key={i}>
                        <line
                          x1={x}
                          y1={high}
                          x2={x}
                          y2={low}
                          stroke={isGreen ? "#10b981" : "#ef4444"}
                          strokeWidth="1"
                        />
                        <rect
                          x={x - 4}
                          y={Math.min(open, close)}
                          width="8"
                          height={Math.abs(open - close) || 2}
                          fill={isGreen ? "#10b981" : "#ef4444"}
                        />
                      </g>
                    );
                  })}
                </svg>
              </div>
              
              <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
                <span>Jan 2024</span>
                <span>Timeframe: 1M</span>
                <span>Feb 2024</span>
                <span>Market: BTC/USD</span>
                <span>Mar 2024</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TransparencySection;
