import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="bg-muted/50">
      <div className="container">
        <div className="grid md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-5 lg:col-span-4 order-2 md:order-1">
            <div className="relative w-full aspect-square max-w-md mx-auto md:mx-0">
              <div className="absolute inset-0 rounded-2xl overflow-hidden border border-border">
                {/* Add image here when available */}
                <div className="w-full h-full bg-gradient-to-br from-primary/10 to-primary/30 flex items-center justify-center text-primary font-bold text-4xl">
                  AS
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary rounded-xl flex items-center justify-center text-white">
                <span className="font-mono text-sm">B.Tech</span>
              </div>
            </div>
          </div>

          <div className="md:col-span-7 lg:col-span-8 order-1 md:order-2">
            <h2 className="section-title">About Me</h2>

            <div className="space-y-4 mt-6 text-muted-foreground text-[14px] leading-5 font-mono font-normal">
              <p>
                I'm Abutalha Shaikh, a final-year Computer Science undergraduate at JSPM’s RSCOE, Pune. I specialize in developing intelligent systems using machine learning, generative AI, and backend integration techniques.
              </p>

              <p>
                My projects include fraud detection with LSTM networks, student performance prediction through regression analysis, and responsive ML dashboards using Streamlit and Flask. I'm focused on practical, deployable AI solutions that work with real-world data.
              </p>

              <p>
                I work extensively with Scikit-learn, Pandas, DVC, MLFlow, and FastAPI. My interests lie in building end-to-end pipelines and exploring how generative models can be applied to real applications in education, healthcare, and intelligent automation.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button asChild>
                <a href="/resume.pdf" download>
                  Download Resume <Download className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

