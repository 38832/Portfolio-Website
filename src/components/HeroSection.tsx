import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section id="home" className="pt-32 pb-16 md:pt-40 md:pb-24 relative overflow-hidden">
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-6 md:space-y-8">
          <div className="font-mono text-sm text-primary animate-fade-in mb-4">
            Final-year CS student 
          </div>

          <h1 className="animate-fade-in text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight font-mono">
            <span className="text-gradient-primary">Abutalha Shaikh</span>
          </h1>

          <p className="animate-fade-in animation-delay-100 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-mono">
          Somehow building smart systems that don’t need sleep — but I definitely do !?.
          </p>

          <div className="animate-fade-in animation-delay-200 pt-4 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="rounded-full font-mono">
              <a href="#projects">
                View Research & Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scientific background decoration */}
      <div className="absolute top-0 left-0 right-0 h-screen overflow-hidden -z-10 opacity-20 dark:opacity-10">
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full"
          style={{
            background: 'radial-gradient(circle at center, rgba(25,118,210,0.1) 0%, transparent 70%)',
          }}
        ></div>
        <div
          className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full"
          style={{
            background: 'radial-gradient(circle at center, rgba(63,81,181,0.1) 0%, transparent 70%)',
          }}
        ></div>
        <div
          className="absolute bottom-1/4 right-1/3 w-80 h-80 rounded-full"
          style={{
            background: 'radial-gradient(circle at center, rgba(0,150,136,0.1) 0%, transparent 70%)',
          }}
        ></div>

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#20202008_1px,transparent_1px),linear-gradient(to_bottom,#20202008_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>
    </section>
  );
}

