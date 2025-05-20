import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Mail, Linkedin, Loader2 } from "lucide-react";

export function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'submitted' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage("");

    try {
      const response = await fetch("https://formspree.io/f/mqaqkazv", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      });

      if (response.ok) {
        setStatus('submitted');
        setFormState({ name: "", email: "", message: "" });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage("Failed to send message. Please try again later.");
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-muted/50">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-mono font-bold mb-8 relative inline-block">
            Get In Touch
            <div className="absolute -bottom-2 left-0 right-0 h-px bg-gradient-to-r from-primary via-primary/50 to-transparent"></div>
          </h2>
          
          <p className="mt-4 mb-10 text-muted-foreground text-center font-mono font-normal text-[14px] leading-5">
            Have a question or want to collaborate? Feel free to reach out!
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-1">
              <div className="space-y-6">
                <Card>
                  <CardContent className="p-4 flex items-center gap-4">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-[14px] font-mono font-medium leading-5">Email</h3>
                      <a
                        href="mailto:abutalha11503@gmail.com"
                        className="text-[14px] leading-5 font-mono text-muted-foreground hover:text-primary transition-colors"
                      >
                        abutalha11503@gmail
                      </a>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4 flex items-center gap-4">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <Github className="h-5 w-5 text-primary" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-[14px] font-mono font-medium leading-5">GitHub</h3>
                      <a
                        href="https://github.com/38832"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[14px] leading-5 font-mono text-muted-foreground hover:text-primary transition-colors block truncate"
                      >
                        github.com/38832
                      </a>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4 flex items-center gap-4">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <Linkedin className="h-5 w-5 text-primary" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-[14px] font-mono font-medium leading-5">LinkedIn</h3>
                      <a
                        href="https://www.linkedin.com/in/abutalha-shaikh"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[14px] leading-5 font-mono text-muted-foreground hover:text-primary transition-colors block truncate"
                      >
                        in/abutalha-shaikh
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="md:col-span-2">
              <Card className="overflow-hidden">
                <CardContent className="p-6">
                  {status === 'submitted' ? (
                    <div className="text-center py-8">
                      <div className="text-4xl mb-4">🎉</div>
                      <h3 className="text-xl font-bold mb-2 font-mono">Message Sent!</h3>
                      <p className="text-muted-foreground text-[14px] leading-5 font-mono">
                        Thank you for reaching out. I'll get back to you as soon as possible.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4 font-mono text-[14px] leading-5">
                      <div>
                        <label htmlFor="name" className="block text-[14px] font-medium mb-1 leading-5">
                          Name
                        </label>
                        <Input
                          id="name"
                          name="name"
                          placeholder="Your name"
                          value={formState.name}
                          onChange={handleChange}
                          required
                          disabled={status === 'submitting'}
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-[14px] font-medium mb-1 leading-5">
                          Email
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="Your email"
                          value={formState.email}
                          onChange={handleChange}
                          required
                          disabled={status === 'submitting'}
                        />
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-[14px] font-medium mb-1 leading-5">
                          Message
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          placeholder="Your message"
                          value={formState.message}
                          onChange={handleChange}
                          rows={5}
                          required
                          disabled={status === 'submitting'}
                        />
                      </div>

                      {status === 'error' && (
                        <div className="text-red-500 text-sm">{errorMessage}</div>
                      )}

                      <Button 
                        type="submit" 
                        className="w-full" 
                        disabled={status === 'submitting'}
                      >
                        {status === 'submitting' ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Sending...
                          </>
                        ) : (
                          'Send Message'
                        )}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
