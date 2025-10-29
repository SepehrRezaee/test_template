import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import blogMeme from "@/assets/blog-crypto-meme.png";
import blogStrategies from "@/assets/blog-strategies.png";
import blogCutoff from "@/assets/blog-cutoff.png";

const posts = [
  {
    title: "What is Meme Investing?",
    date: "3 days ago",
    views: "2.4k views",
    image: blogMeme,
  },
  {
    title: "How to Build Risk Strategies",
    date: "1 day ago",
    views: "5.8k views",
    image: blogStrategies,
  },
  {
    title: "How Cut-off Works",
    date: "6 hours ago",
    views: "1.2k views",
    image: blogCutoff,
  },
];

const BlogSection = () => {
  return (
    <section className="py-20 px-6 bg-card/30">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">ApexMirror Blog</h2>
        <div className="w-24 h-1 bg-primary mx-auto mb-16"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {posts.map((post, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl overflow-hidden hover:border-primary transition-all duration-300 group cursor-pointer"
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {post.date}
                  </span>
                  <span>{post.views}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Button className="bg-primary hover:bg-primary/90 px-8">
            Read More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
