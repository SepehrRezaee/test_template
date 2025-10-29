import { useEffect, useState } from "react";

const CountdownSection = () => {
  const [time, setTime] = useState({ hours: 0, minutes: 0, seconds: 15 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { hours: prev.hours, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const userAvatars = [
    "https://api.dicebear.com/7.x/avataaars/svg?seed=Felix",
    "https://api.dicebear.com/7.x/avataaars/svg?seed=Aneka",
    "https://api.dicebear.com/7.x/avataaars/svg?seed=Sophie",
  ];

  return (
    <section className="py-20 px-6 bg-card/30">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">Cut-off & Fair Trading System</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="bg-primary/10 border border-primary rounded-2xl p-8">
            <h3 className="text-2xl font-semibold mb-6 text-center">Countdown Timer</h3>
            <p className="text-muted-foreground text-center mb-8">
              Units sold at current price until cutoff
            </p>
            
            <div className="relative w-64 h-64 mx-auto">
              <svg className="w-full h-full -rotate-90">
                <circle
                  cx="128"
                  cy="128"
                  r="112"
                  stroke="currentColor"
                  strokeWidth="8"
                  fill="none"
                  className="text-secondary"
                />
                <circle
                  cx="128"
                  cy="128"
                  r="112"
                  stroke="currentColor"
                  strokeWidth="8"
                  fill="none"
                  className="text-primary"
                  strokeDasharray={`${2 * Math.PI * 112}`}
                  strokeDashoffset={`${2 * Math.PI * 112 * 0.75}`}
                  strokeLinecap="round"
                />
              </svg>
              
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">
                    {String(time.hours).padStart(2, '0')}:
                    {String(time.minutes).padStart(2, '0')}:
                    {String(time.seconds).padStart(2, '0')}
                  </div>
                  <div className="text-sm text-muted-foreground">Time Remaining</div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-card border border-border rounded-2xl p-8">
              <h3 className="text-xl font-semibold mb-4">Users with Active Requests</h3>
              <p className="text-muted-foreground mb-6">
                24 users are trading this strategy
              </p>
              <div className="flex items-center gap-4">
                <div className="flex -space-x-4">
                  {userAvatars.map((avatar, i) => (
                    <img
                      key={i}
                      src={avatar}
                      alt={`User ${i + 1}`}
                      className="w-12 h-12 rounded-full border-2 border-background"
                    />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">+21 more</span>
              </div>
            </div>

            <div className="bg-card border border-border rounded-2xl p-8">
              <h3 className="text-xl font-semibold mb-4">Users with Active Requests</h3>
              <p className="text-muted-foreground mb-6">
                12 users pending execution
              </p>
              <div className="flex items-center gap-4">
                <div className="flex -space-x-4">
                  {userAvatars.reverse().map((avatar, i) => (
                    <img
                      key={i}
                      src={avatar}
                      alt={`User ${i + 1}`}
                      className="w-12 h-12 rounded-full border-2 border-background"
                    />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">+9 more</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountdownSection;
