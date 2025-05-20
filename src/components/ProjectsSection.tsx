import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { FileCode, FileType, FileText, FileSpreadsheet, FileSearch, FileCog, FileJson, FileTerminal } from "lucide-react";

type Project = {
  title: string;
  description: string;
  techStack: string[];
  imageUrl?: string;
  link?: string;
};

const projects: Project[] = [{
  title: "Fake Job Posting Prediction",
  description: "LSTM model with 98% accuracy, deployed using Flask and TensorFlow Lite.",
  techStack: ["natural language processing", "Jupyter Notebook", "flask", "tensorFlow Lite"],
  link: "https://jobverify.onrender.com" // Place link here
}, {
  title: "Student Performance Analysis",
  description: "ML pipeline analyzing student performance data from MySQL, with MLflow and DVC for tracking model experiments and versioning.",
  techStack: ["jupyter notebook", "python", "MySQL", "MLflow", "DVC"],
  link: "https://github.com/38832/Student-Performance-Analysis" // Place link here
}, {
  title: "Football Injury & Rehab (Physiotopia)",
  description: "Web app with injury prediction form, Gemini Chatbot for personalized rehab plans, and detailed articles.",
  techStack: ["random forest", "large language model","typeScript", "css"],
  link: "https://physiotopia.onrender.com/" // Link for Physiotopia project
}, {
  title: "Customer Segmentation",
  description: "Shopper behavior analysis using clustering for marketing.",
  techStack: ["python", "pandas", "scikit-learn", "seaborn", "matplotlib"],
  link: "https://github.com/38832/CustomerSegmentation" // Place link here
}, {
  title: "Potato Disease Classification",
  description: "CNN for plant disease detection with TensorFlow.",
  techStack: ["tensorFlow","deep learning"],
  link: "https://github.com/38832/potato_disease_classification" // Place link here
}, {
  title: "NLP Repository",
  description: "LSTM, Word2Vec, TF-IDF-based models.",
  techStack: ["TensorFlow", "Keras", "Scikit-Learn"],
  link: "https://github.com/38832/Natural-Language-Processing" // Place link here
}, {
  title: "Machine Learning Repository",
  description: "Custom-built ML models from scratch.",
  techStack: ["Python"],
  link: "https://github.com/38832/machine-learning" // Place link here
}, {
  title: "Deep Learning Repository",
  description: "Advanced DL implementations using TensorFlow and PyTorch.",
  techStack: ["TensorFlow", "PyTorch"],
  link: "https://github.com/38832/deep-learning" // Place link here 
}, {
  title: "Computational Statistics",
  description: "Collection of computational statistics, including data analysis, statistical modeling, hypothesis testing, and visualizations using Python.",
  techStack: ["Python", "NumPy", "Pandas", "SciPy", "Scikit-learn"],
  link: "https://github.com/38832/Computationl-Statistics" // Place link here
}];

export function ProjectsSection() {
  const getProjectIcon = (index: number) => {
    const icons = [FileCode, FileType, FileText, FileSpreadsheet, FileSearch, FileCog, FileJson, FileTerminal];
    return icons[index % icons.length];
  };

  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="container">
        <h2 className="section-title text-center md:text-left">Projects</h2>
        <p className="mt-4 mb-10 text-muted-foreground max-w-2xl md:text-left font-mono">
          A collection of statistics, deep learning implementations, and data science projects.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => {
            const Icon = getProjectIcon(index);
            return (
              <Card key={index} className="glass-card backdrop-blur-sm hover:shadow-xl transition-all duration-300 group flex flex-col">
                <div className="h-52 bg-gradient-to-br from-primary/5 to-primary/10 relative overflow-hidden flex items-center justify-center">
                  <Icon className="w-16 h-16 text-primary/40 group-hover:scale-110 transition-transform duration-300" />
                </div>

                <CardHeader>
                  <CardTitle className="font-mono text-xl">{project.title}</CardTitle>
                </CardHeader>

                <CardContent className="flex-grow">
                  <p className="text-muted-foreground font-mono text-sm">{project.description}</p>
                </CardContent>

                <CardFooter className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, i) => (
                    <span key={i} className="px-2 py-1 text-xs font-mono rounded-full bg-muted text-foreground dark:bg-white/10 dark:text-[rgb(122,143,184)]">
                      {tech}
                    </span>
                  ))}
                </CardFooter>

                {project.link && (
                  <CardFooter className="mt-auto">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary font-mono text-sm transition-all duration-300 group-hover:text-primary/80 hover:scale-105"
                    >
                      view project-&gt;
                    </a>
                  </CardFooter>
                )}
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

