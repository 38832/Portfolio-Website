import { ArrowRight } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-card py-12">
      <div className="container font-mono">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="text-xl font-bold">
              Portfolio<span className="text-primary">.</span>
            </div>
            <div className="text-sm text-muted-foreground mt-1">
              Research & Innovation
            </div>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex gap-6 mb-4">
              <a href="#home" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Home
              </a>
              <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                About
              </a>
              <a href="#projects" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Projects
              </a>
              <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </a>
            </div>
            
            <div className="text-sm text-muted-foreground">
              &copy; {currentYear} Portfolio. All rights reserved.
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <a href="#home" className="inline-flex items-center hover:text-primary transition-colors">
            Back to top <ArrowRight className="ml-1 h-3 w-3" />
          </a>
        </div>
      </div>
    </footer>
  );
}
