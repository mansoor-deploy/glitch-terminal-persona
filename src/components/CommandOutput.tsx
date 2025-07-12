import React from 'react';
import { ExternalLink, Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';

interface CommandOutputProps {
  command: string;
  output: string;
  timestamp: string;
}

const CommandOutput: React.FC<CommandOutputProps> = ({ command, output, timestamp }) => {
  const renderOutput = () => {
    const lowerCommand = command.toLowerCase().trim();
    
    switch (lowerCommand) {
      case 'help':
        return (
          <div className="space-y-2">
            <div className="text-secondary">Available commands:</div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-1 text-sm">
              <div><span className="text-accent">help</span> - Show this help message</div>
              <div><span className="text-accent">clear</span> - Clear the terminal</div>
              <div><span className="text-accent">whoami</span> - Display user information</div>
              <div><span className="text-accent">ls</span> - List directory contents</div>
              <div><span className="text-accent">ls skills</span> - List technical skills</div>
              <div><span className="text-accent">ls projects</span> - List projects</div>
              <div><span className="text-accent">cat about</span> - Display about information</div>
              <div><span className="text-accent">cat contact</span> - Display contact information</div>
              <div><span className="text-accent">cd skills</span> - Navigate to skills section</div>
              <div><span className="text-accent">cd projects</span> - Navigate to projects section</div>
              <div><span className="text-accent">cd contact</span> - Navigate to contact section</div>
              <div><span className="text-accent">cd about</span> - Navigate to about section</div>
            </div>
          </div>
        );

      case 'whoami':
        return (
          <div className="space-y-2">
            <div className="text-primary neon-text">Mansoor Ahmed</div>
            <div className="text-secondary">Full Stack Developer & Cybersecurity Enthusiast</div>
            <div className="text-muted-foreground">Digital architect crafting secure, scalable solutions</div>
          </div>
        );

      case 'ls':
        return (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div className="text-accent cursor-pointer hover:text-primary">about/</div>
            <div className="text-accent cursor-pointer hover:text-primary">skills/</div>
            <div className="text-accent cursor-pointer hover:text-primary">projects/</div>
            <div className="text-accent cursor-pointer hover:text-primary">contact/</div>
            <div className="text-secondary">resume.pdf</div>
            <div className="text-secondary">readme.md</div>
          </div>
        );

      case 'cd contact':
        return (
          <div className="space-y-4">
            <div className="text-primary neon-text text-lg">📁 Navigated to: /contact</div>
            <div className="text-secondary">Contact Information:</div>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="text-accent" size={16} />
                <a href="mailto:mansoor@example.com" className="text-secondary hover:text-primary transition-colors">
                  mansoor@example.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="text-accent" size={16} />
                <span className="text-secondary">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="text-accent" size={16} />
                <span className="text-secondary">San Francisco, CA</span>
              </div>
              <div className="pt-2 space-y-2">
                <div className="text-muted-foreground text-sm">Social Links:</div>
                <div className="flex space-x-4">
                  <a href="#" className="flex items-center space-x-2 text-secondary hover:text-primary transition-colors">
                    <Github size={16} />
                    <span>GitHub</span>
                  </a>
                  <a href="#" className="flex items-center space-x-2 text-secondary hover:text-primary transition-colors">
                    <Linkedin size={16} />
                    <span>LinkedIn</span>
                  </a>
                  <a href="#" className="flex items-center space-x-2 text-secondary hover:text-primary transition-colors">
                    <Twitter size={16} />
                    <span>Twitter</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        );

      case 'cd about':
        return (
          <div className="space-y-4 max-w-3xl">
            <div className="text-primary neon-text text-lg">📁 Navigated to: /about</div>
            <div className="text-primary neon-text text-lg">About Mansoor Ahmed</div>
            <div className="space-y-3 text-sm md:text-base">
              <p>
                Passionate full-stack developer with a cybersecurity mindset. I architect digital solutions 
                that are not just functional, but fortress-like in their security and scalability.
              </p>
              <p>
                With expertise spanning modern web technologies and penetration testing, I bridge the gap 
                between innovative development and bulletproof security practices.
              </p>
              <p>
                When I'm not coding or hunting for vulnerabilities, you'll find me exploring the latest 
                in AI/ML, contributing to open source, or sharing knowledge with the developer community.
              </p>
            </div>
          </div>
        );

      case 'cd skills':
        return (
          <div className="space-y-4">
            <div className="text-primary neon-text text-lg">📁 Navigated to: /skills</div>
            <div>
              <div className="text-secondary mb-2">Frontend Technologies:</div>
              <div className="flex flex-wrap gap-2">
                {['React', 'TypeScript', 'Next.js', 'Vue.js', 'Tailwind CSS', 'SASS'].map(skill => (
                  <span key={skill} className="px-2 py-1 bg-primary/10 text-primary rounded text-sm border border-primary/20">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <div className="text-secondary mb-2">Backend & Databases:</div>
              <div className="flex flex-wrap gap-2">
                {['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'Redis', 'GraphQL'].map(skill => (
                  <span key={skill} className="px-2 py-1 bg-accent/10 text-accent rounded text-sm border border-accent/20">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <div className="text-secondary mb-2">Security & DevOps:</div>
              <div className="flex flex-wrap gap-2">
                {['Docker', 'Kubernetes', 'AWS', 'Penetration Testing', 'OWASP', 'CI/CD'].map(skill => (
                  <span key={skill} className="px-2 py-1 bg-destructive/10 text-destructive rounded text-sm border border-destructive/20">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        );

      case 'cd projects':
        return (
          <div className="space-y-4">
            <div className="text-primary neon-text text-lg">📁 Navigated to: /projects</div>
            <div className="text-secondary mb-4">Featured Projects:</div>
            <div className="grid gap-4">
              {[
                {
                  name: 'CyberGuard Dashboard',
                  description: 'Real-time security monitoring platform with ML-powered threat detection',
                  tech: ['React', 'Python', 'TensorFlow', 'PostgreSQL'],
                  status: 'Production'
                },
                {
                  name: 'SecureChat Protocol',
                  description: 'End-to-end encrypted messaging system with quantum-resistant cryptography',
                  tech: ['Node.js', 'WebRTC', 'Cryptography', 'Redis'],
                  status: 'Beta'
                },
                {
                  name: 'PenTest Automation Suite',
                  description: 'Automated penetration testing framework for web applications',
                  tech: ['Python', 'Docker', 'Selenium', 'OWASP'],
                  status: 'Open Source'
                }
              ].map((project, index) => (
                <div key={index} className="border border-primary/20 rounded bg-card/50 p-4">
                  <div className="flex justify-between items-start mb-2">
                    <div className="text-primary font-semibold">{project.name}</div>
                    <span className="text-xs px-2 py-1 bg-accent/20 text-accent rounded">{project.status}</span>
                  </div>
                  <div className="text-secondary text-sm mb-2">{project.description}</div>
                  <div className="flex flex-wrap gap-1">
                    {project.tech.map(tech => (
                      <span key={tech} className="text-xs px-2 py-1 bg-muted/30 text-muted-foreground rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'ls skills':
        return (
          <div className="space-y-4">
            <div>
              <div className="text-secondary mb-2">Frontend Technologies:</div>
              <div className="flex flex-wrap gap-2">
                {['React', 'TypeScript', 'Next.js', 'Vue.js', 'Tailwind CSS', 'SASS'].map(skill => (
                  <span key={skill} className="px-2 py-1 bg-primary/10 text-primary rounded text-sm border border-primary/20">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <div className="text-secondary mb-2">Backend & Databases:</div>
              <div className="flex flex-wrap gap-2">
                {['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'Redis', 'GraphQL'].map(skill => (
                  <span key={skill} className="px-2 py-1 bg-accent/10 text-accent rounded text-sm border border-accent/20">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <div className="text-secondary mb-2">Security & DevOps:</div>
              <div className="flex flex-wrap gap-2">
                {['Docker', 'Kubernetes', 'AWS', 'Penetration Testing', 'OWASP', 'CI/CD'].map(skill => (
                  <span key={skill} className="px-2 py-1 bg-destructive/10 text-destructive rounded text-sm border border-destructive/20">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        );

      case 'cat about':
        return (
          <div className="space-y-4 max-w-3xl">
            <div className="text-primary neon-text text-lg">About Mansoor Ahmed</div>
            <div className="space-y-3 text-sm md:text-base">
              <p>
                Passionate full-stack developer with a cybersecurity mindset. I architect digital solutions 
                that are not just functional, but fortress-like in their security and scalability.
              </p>
              <p>
                With expertise spanning modern web technologies and penetration testing, I bridge the gap 
                between innovative development and bulletproof security practices.
              </p>
              <p>
                When I'm not coding or hunting for vulnerabilities, you'll find me exploring the latest 
                in AI/ML, contributing to open source, or sharing knowledge with the developer community.
              </p>
            </div>
          </div>
        );

      case 'cat contact':
        return (
          <div className="space-y-4">
            <div className="text-primary neon-text text-lg">Contact Information</div>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="text-accent" size={16} />
                <a href="mailto:mansoor@example.com" className="text-secondary hover:text-primary transition-colors">
                  mansoor@example.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="text-accent" size={16} />
                <span className="text-secondary">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="text-accent" size={16} />
                <span className="text-secondary">San Francisco, CA</span>
              </div>
              <div className="pt-2 space-y-2">
                <div className="text-muted-foreground text-sm">Social Links:</div>
                <div className="flex space-x-4">
                  <a href="#" className="flex items-center space-x-2 text-secondary hover:text-primary transition-colors">
                    <Github size={16} />
                    <span>GitHub</span>
                  </a>
                  <a href="#" className="flex items-center space-x-2 text-secondary hover:text-primary transition-colors">
                    <Linkedin size={16} />
                    <span>LinkedIn</span>
                  </a>
                  <a href="#" className="flex items-center space-x-2 text-secondary hover:text-primary transition-colors">
                    <Twitter size={16} />
                    <span>Twitter</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        );

      case 'ls projects':
        return (
          <div className="space-y-4">
            <div className="text-secondary mb-4">Featured Projects:</div>
            <div className="grid gap-4">
              {[
                {
                  name: 'CyberGuard Dashboard',
                  description: 'Real-time security monitoring platform with ML-powered threat detection',
                  tech: ['React', 'Python', 'TensorFlow', 'PostgreSQL'],
                  status: 'Production'
                },
                {
                  name: 'SecureChat Protocol',
                  description: 'End-to-end encrypted messaging system with quantum-resistant cryptography',
                  tech: ['Node.js', 'WebRTC', 'Cryptography', 'Redis'],
                  status: 'Beta'
                },
                {
                  name: 'PenTest Automation Suite',
                  description: 'Automated penetration testing framework for web applications',
                  tech: ['Python', 'Docker', 'Selenium', 'OWASP'],
                  status: 'Open Source'
                }
              ].map((project, index) => (
                <div key={index} className="border border-primary/20 rounded bg-card/50 p-4">
                  <div className="flex justify-between items-start mb-2">
                    <div className="text-primary font-semibold">{project.name}</div>
                    <span className="text-xs px-2 py-1 bg-accent/20 text-accent rounded">{project.status}</span>
                  </div>
                  <div className="text-secondary text-sm mb-2">{project.description}</div>
                  <div className="flex flex-wrap gap-1">
                    {project.tech.map(tech => (
                      <span key={tech} className="text-xs px-2 py-1 bg-muted/30 text-muted-foreground rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      default:
        if (command.startsWith('echo ')) {
          return <div className="text-primary">{command.slice(5)}</div>;
        }
        return <div className="text-destructive">Command not found: {command}</div>;
    }
  };

  return (
    <div className="mb-6 fade-in-up">
      <div className="flex items-center space-x-2 mb-2 text-sm">
        <span className="text-muted-foreground">[{timestamp}]</span>
        <span className="text-secondary">mansoor@cyberpunk:~$</span>
        <span className="text-primary">{command}</span>
      </div>
      <div className="ml-4 pl-4 border-l border-primary/20">
        {renderOutput()}
      </div>
    </div>
  );
};

export default CommandOutput;
