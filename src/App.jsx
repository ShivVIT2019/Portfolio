import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, ChevronRight, Terminal, TrendingUp, BarChart3, Cpu } from 'lucide-react';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('hero');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: 'AI-Powered Campaign Targeting System',
      role: 'ML Engineer',
      company: 'Personal Project',
      period: 'Feb 2026',
      impact: 'Live ML + RAG targeting system',
      metrics: [        { label: 'ROC-AUC', value: '0.8932', icon: BarChart3 },
        { label: 'Sessions', value: '12.3K', icon: Cpu }
      ],
      tech: ['Python', 'Random Forest', 'FastAPI', 'React', 'ChromaDB', 'Docker'],
      description: 'Built end-to-end ML system on 12,330 user sessions with 17 behavioral features. Extended with a RAG-powered AI Assistant using Google Gemini, ChromaDB, and Sentence Transformers. FastAPI backend with 8 endpoints deployed on Google Cloud Run.',
      achievements: [
        'Trained a Random Forest classifier reaching 0.8932 ROC-AUC; handled the 15.47% class imbalance with precision-recall optimization',
        'Added a RAG-powered AI Assistant using Google Gemini, ChromaDB, and Sentence Transformers, enabling natural language Q&A over campaign analytics data',
        'Designed a FastAPI backend with 8 REST endpoints for real-time and batch inference, plus a React dashboard for KPI monitoring',
        'Built a simulated A/B test endpoint that exposes the spend-reduction vs buyer-coverage trade-off curve at different confidence thresholds, so an analyst picks the operating point'
      ],
      link: 'https://shivvit2019.github.io/Campaign_Targeting_System/'
    },
    {
      title: 'CreditAI Global - Multi-Country Credit Risk Platform',
      role: 'ML Engineer',
      company: 'Personal Project',
      period: 'Dec 2025',
      impact: 'Live dual-market credit scoring app',
      metrics: [
        { label: 'ROC-AUC', value: '0.7028', icon: BarChart3 },
        { label: 'Training Rows', value: '100K', icon: Cpu },
        { label: 'Markets', value: 'USA + India', icon: TrendingUp }
      ],
      tech: ['Python', 'scikit-learn', 'Gradio', 'Pydantic', 'Hugging Face Spaces', 'Git LFS'],
      description: 'Dual-market (USA/India) credit assessment app. Random Forest trained on 100K rows sampled from the Lending Club 2007-2018 dataset (~2.26M rows total on Kaggle), ROC-AUC 0.7028 on a 20K held-out test set. India path maps CIBIL + city tier into the USA feature schema and calls the same model.',
      achievements: [
        'Baseline Random Forest on 100K Lending Club rows, ROC-AUC 0.7028 (saved in ml/artifacts/model_info.joblib)',
        'Built a batch underwriting loop around the model: Pydantic validation, a priority-ordered policy engine, five fraud rules, and a JSON Lines audit log for every decision',
        'Serves USA and India applicants through a translation layer that maps CIBIL + city tier + PAN/Aadhaar flags into the USA feature schema',
        'Deployed on Hugging Face Spaces (migrated off Google Cloud Run after trial expiry); model artifacts shipped via Git LFS',
        'Added rule-based post-processing that converts the model probability into a decision, a credit limit capped at $30,000, and an APR band, plus a pricing agent that combines risk, market, and profit signals into per-applicant rate recommendations'
      ],
      link: 'https://huggingface.co/spaces/sivasaiatchyut/creditai-global'
    },
    {
      title: 'FinSight AI — Multi-Agent Financial Intelligence',
      role: 'ML Engineer',
      company: 'Personal Project',
      period: 'Mar 2026',
      impact: 'Multi-Agent LangGraph System',
      metrics: [
        { label: 'Agents', value: '2 LLM', icon: Cpu },
        { label: 'Stack', value: 'LangGraph', icon: Terminal },
        { label: 'Deploy', value: 'GCP', icon: TrendingUp }
      ],
      tech: ['Python', 'LangGraph', 'Gemini API', 'FastAPI', 'Streamlit', 'Docker', 'GCP'],
      description: 'Multi-agent financial intelligence system using LangGraph orchestration. A Research Agent and Risk Agent share TypedDict state to collaboratively analyze stocks, retrieve real-time market data, and generate investment insights — deployed on Google Cloud Run.',
      achievements: [
        'Architected two-agent LangGraph pipeline with shared TypedDict state — Research Agent fetches live market data via yfinance, Risk Agent evaluates portfolio exposure and flags anomalies',
        'Separated agent reasoning layer from tool execution layer, reducing redundant API calls and improving inference latency on Google Cloud Run',
        'Built FastAPI backend with Streamlit frontend for real-time financial Q&A and stock analysis with streaming LLM responses',
        'Containerized with Docker and ran on Google Cloud Run (service since taken down; code on GitHub)'
      ],
      link: 'https://github.com/ShivVIT2019/finsight-ai'
    },
    {
      title: 'Gauntlet — Multi-Agent Coding Referee',
      role: 'Team of 2',
      company: 'Flip the Switch Hackathon (WeMakeDevs), Track 01',
      period: 'Nov 2026',
      impact: 'Hackathon: agents race in team chat',
      metrics: [
        { label: 'Agent Vendors', value: '3', icon: Cpu },
        { label: 'Honest Agents', value: '5/5 tests', icon: BarChart3 },
        { label: 'Cheat Branch', value: '3/5 caught', icon: Terminal }
      ],
      tech: ['Python', 'Switch', 'Mattermost', 'Codex', 'Claude Code', 'OpenCode', 'Git'],
      description: 'A team-chat workflow on Switch where Codex, Claude Code, and OpenCode agents work on the same coding task in parallel, each in an isolated Git worktree, coordinated by an orchestrator agent in a Mattermost channel. A rule-based referee scores every branch and a human approves what ships.',
      achievements: [
        'Wrote a rule-based referee in Python that re-runs the merge-base test suite on every agent branch and disqualifies branches that change, delete, or skip tests; in live races all three agents passed 5/5 while a test-tampering branch was caught at 3/5',
        'Required an explicit human "ship it" before a pull request opens',
        'Added a replay mode that reproduces scored results from a fresh clone without agent logins'
      ],
      link: 'https://github.com/ShivVIT2019/gauntlet'
    },
    {
      title: 'Tessera — Plan a Week of Buffer Posts',
      role: 'Team of 2',
      company: 'Buffer Commit Build Contest',
      period: 'Nov 2026',
      impact: 'Hackathon: live app on the Buffer API',
      metrics: [
        { label: 'Tests', value: '24', icon: BarChart3 },
        { label: 'API', value: 'Buffer', icon: Terminal },
        { label: 'Deploy', value: 'Vercel', icon: TrendingUp }
      ],
      tech: ['TypeScript', 'Next.js', 'Buffer GraphQL API', 'OAuth 2.0 + PKCE', 'Vitest', 'Vercel'],
      description: 'Plans a whole batch of social media posts at once and schedules them through the Buffer API, following each channel\'s rules and explaining every placement.',
      achievements: [
        'Built a deterministic TypeScript planning engine that schedules batches of social posts across Buffer channels under hard constraints (quiet hours, daily caps, gaps, existing queue) and explains every placement',
        'Shipped a Next.js app on the Buffer GraphQL API (OAuth 2.0 + PKCE) with one-click Apply and Undo, verified on a live Buffer account; 24 tests, including property-based tests'
      ],
      link: 'https://tessera-adet.vercel.app'
    }
  ];

  const experience = [
    {
      title: 'AI Product Manager Intern & Team Lead',
      company: 'Uplifty',
      period: 'Aug 2025 - Feb 2026',
      highlights: [
        'Built and deployed an NLP text-moderation system (DistilBERT, RNN, and a rules engine) on Google Cloud Run, replacing paid third-party moderation APIs with a self-hosted pipeline',
        'Standardized ML deployment workflows across a 6-engineer team, cutting model configuration overhead and shortening the turnaround for product demos',
        'Analyzed model performance on live usage data, identifying error patterns and edge cases that continuously improved moderation accuracy across production environments'
      ]
    },
    {
      title: 'Research & Development Intern',
      company: 'Philips Innovation Campus',
      period: 'Feb 2023 - Aug 2023',
      highlights: [
        'Named inventor on international patent application PCT/EP2025/073715 ("Processing Ultrasound Image Data"), assigned to Koninklijke Philips N.V. and filed August 2025',
        'Architected a laterality detection pipeline for obstetric ultrasound that classifies apical, basal, and subcostal orientations using YOLOv5, OpenCV, and ONNX',
        'Productionized a GPU-accelerated pipeline with ONNX models on NVIDIA servers, enabling real-time inference on live cineloop feeds and removing the R&D team\'s dependency on third-party imaging tools'
      ]
    }
  ];

  const skills = {
    'Languages': ['Python', 'SQL', 'JavaScript'],
    'ML & Data': ['scikit-learn', 'PyTorch', 'pandas', 'NumPy', 'ONNX', 'OpenCV', 'YOLOv5'],
    'LLM & Agents': ['LangGraph', 'RAG pipelines', 'Gemini', 'Vertex AI', 'MCP', 'Switch', 'Codex', 'Claude Code'],
    'Web & APIs': ['FastAPI', 'REST APIs', 'React', 'Streamlit', 'Gradio'],
    'Cloud & DevOps': ['Google Cloud Run', 'Hugging Face Spaces', 'Docker', 'Git', 'GitHub Actions', 'CI/CD'],
    'Databases': ['PostgreSQL (via Supabase)', 'ChromaDB'],
    'Core Competencies': ['Machine Learning', 'Computer Vision', 'NLP', 'A/B Testing', 'Feature Engineering', 'Model Deployment']
  };

  return (
    <div className="relative min-h-screen bg-black text-gray-100 overflow-hidden">
      {/* Animated Grid Background */}
      <div className="fixed inset-0 pointer-events-none opacity-20">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(34, 197, 94, 0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(34, 197, 94, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
            transition: 'transform 0.3s ease-out'
          }}
        />
      </div>

      {/* Gradient Orbs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div 
          className="absolute w-96 h-96 bg-green-500/30 rounded-full blur-3xl"
          style={{
            top: '10%',
            left: '20%',
            transform: `translate(${mousePosition.x * 0.03}px, ${mousePosition.y * 0.03}px)`,
            transition: 'transform 0.5s ease-out'
          }}
        />
        <div 
          className="absolute w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl"
          style={{
            bottom: '20%',
            right: '15%',
            transform: `translate(${-mousePosition.x * 0.02}px, ${-mousePosition.y * 0.02}px)`,
            transition: 'transform 0.5s ease-out'
          }}
        />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/50 border-b border-green-500/20">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2 text-green-400 font-mono">
            <Terminal className="w-5 h-5" />
            <span className="text-lg font-semibold">atchyut.dev</span>
          </div>
          <div className="flex gap-6">
            {['Projects', 'Experience', 'Skills', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-mono hover:text-green-400 transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-400 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fadeIn">
          <div className="space-y-4">
            <div className="font-mono text-green-400 text-sm tracking-wider">ML ENGINEER</div>
            <h1 className="text-7xl md:text-8xl font-bold tracking-tight">
              <span className="inline-block animate-slideUp" style={{ animationDelay: '0.1s' }}>Sivasai Atchyut Akella</span>
            </h1>
            <div className="h-1 w-32 bg-gradient-to-r from-green-400 to-emerald-500 mx-auto animate-expandWidth" />
          </div>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed animate-slideUp" style={{ animationDelay: '0.3s' }}>
            Building production ML systems that drive{' '}
            <span className="text-green-400 font-semibold">live ML + RAG systems</span>.
            <br />
            MS Computer Science (AI) @ Binghamton University | Graduating December 2026
          </p>

          <div className="flex gap-4 justify-center items-center animate-slideUp" style={{ animationDelay: '0.5s' }}>
            <a href="https://github.com/ShivVIT2019" target="_blank" rel="noopener noreferrer" 
               className="p-3 bg-gray-900 hover:bg-green-500/20 border border-green-500/30 rounded-lg transition-all hover:scale-110">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/atchyut/" target="_blank" rel="noopener noreferrer"
               className="p-3 bg-gray-900 hover:bg-green-500/20 border border-green-500/30 rounded-lg transition-all hover:scale-110">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:sakella@binghamton.edu"
               className="p-3 bg-gray-900 hover:bg-green-500/20 border border-green-500/30 rounded-lg transition-all hover:scale-110">
              <Mail className="w-6 h-6" />
            </a>
          </div>

          <div className="pt-8 animate-bounce">
            <ChevronRight className="w-6 h-6 mx-auto rotate-90 text-green-400" />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h2 className="text-5xl font-bold mb-4">Featured Projects</h2>
            <div className="h-1 w-24 bg-gradient-to-r from-green-400 to-emerald-500" />
          </div>

          <div className="space-y-12">
            {projects.map((project, idx) => (
              <a
                key={idx}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gray-900/50 backdrop-blur border border-green-500/20 rounded-2xl p-8 hover:border-green-500/50 transition-all duration-500 hover:transform hover:scale-[1.02] block cursor-pointer"
                style={{
                  animation: 'slideUp 0.6s ease-out',
                  animationDelay: `${idx * 0.2}s`,
                  animationFillMode: 'both'
                }}
              >
                <div className="flex flex-col md:flex-row justify-between items-start mb-6">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-3xl font-bold">{project.title}</h3>
                      <ExternalLink className="w-5 h-5 text-green-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <div className="flex items-center gap-3 text-gray-400 font-mono text-sm">
                      <span>{project.role}</span>
                      <span className="text-green-400">@</span>
                      <span>{project.company}</span>
                      <span className="text-gray-600">|</span>
                      <span>{project.period}</span>
                    </div>
                  </div>
                  <div className="mt-4 md:mt-0">
                    <div className="px-4 py-2 bg-green-500/20 border border-green-500/50 rounded-full text-green-400 font-mono text-sm font-semibold">
                      {project.impact}
                    </div>
                  </div>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {project.metrics.map((metric, i) => {
                    const Icon = metric.icon;
                    return (
                      <div key={i} className="bg-black/50 border border-green-500/20 rounded-lg p-4 text-center">
                        <Icon className="w-6 h-6 text-green-400 mx-auto mb-2" />
                        <div className="text-2xl font-bold text-green-400">{metric.value}</div>
                        <div className="text-xs text-gray-500 font-mono mt-1">{metric.label}</div>
                      </div>
                    );
                  })}
                </div>

                <p className="text-gray-300 mb-6 text-lg">{project.description}</p>

                <div className="space-y-3 mb-6">
                  {project.achievements.map((achievement, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <ChevronRight className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{achievement}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-black/50 border border-gray-700 rounded-md text-sm font-mono text-gray-400 hover:border-green-500/50 hover:text-green-400 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="relative py-32 px-6 bg-gradient-to-b from-transparent via-green-950/5 to-transparent">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h2 className="text-5xl font-bold mb-4">Experience</h2>
            <div className="h-1 w-24 bg-gradient-to-r from-green-400 to-emerald-500" />
          </div>

          <div className="space-y-8">
            {experience.map((exp, idx) => (
              <div
                key={idx}
                className="bg-gray-900/30 backdrop-blur border-l-4 border-green-500 rounded-r-xl p-8 hover:bg-gray-900/50 transition-all"
              >
                <div className="flex flex-col md:flex-row justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-1">{exp.title}</h3>
                    <div className="text-green-400 font-semibold">{exp.company}</div>
                  </div>
                  <div className="text-gray-400 font-mono text-sm mt-2 md:mt-0">{exp.period}</div>
                </div>
                <ul className="space-y-2">
                  {exp.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <ChevronRight className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h2 className="text-5xl font-bold mb-4">Technical Skills</h2>
            <div className="h-1 w-24 bg-gradient-to-r from-green-400 to-emerald-500" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, items], idx) => (
              <div
                key={idx}
                className="bg-gray-900/50 backdrop-blur border border-green-500/20 rounded-xl p-6 hover:border-green-500/50 transition-all"
              >
                <h3 className="text-lg font-bold mb-3 text-green-400">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 bg-black/50 border border-gray-700 rounded-lg text-xs font-mono hover:border-green-500 hover:text-green-400 transition-all cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12">
            <h2 className="text-5xl font-bold mb-4">Let's Connect</h2>
            <div className="h-1 w-24 bg-gradient-to-r from-green-400 to-emerald-500 mx-auto" />
          </div>
<p className="text-xl text-gray-300 mb-6">
  Currently exploring opportunities in ML Engineering and AI Product roles.
</p>
<div className="flex flex-wrap gap-3 justify-center mb-8">
  <span className="px-4 py-2 bg-green-500/20 border border-green-500/40 rounded-full text-green-400 text-sm font-mono">
    🟢 Actively Interviewing
  </span>
  <span className="px-4 py-2 bg-green-500/20 border border-green-500/40 rounded-full text-green-400 text-sm font-mono">
    ⚡ Committing to GitHub Daily
  </span>
  <span className="px-4 py-2 bg-green-500/20 border border-green-500/40 rounded-full text-green-400 text-sm font-mono">
    📊 Learning Meta-Analysis (R)
  </span>
  <span className="px-4 py-2 bg-green-500/20 border border-green-500/40 rounded-full text-green-400 text-sm font-mono">
    🤖 Building AI Systems
  </span>
</div>
          <div className="flex gap-6 justify-center">
            <a
              href="mailto:sakella@binghamton.edu"
              className="px-8 py-4 bg-green-500 hover:bg-green-600 text-black font-semibold rounded-lg transition-all transform hover:scale-105 flex items-center gap-2"
            >
              <Mail className="w-5 h-5" />
              Get in Touch
            </a>
            <a
              href="https://github.com/ShivVIT2019"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gray-900 hover:bg-gray-800 border border-green-500/30 font-semibold rounded-lg transition-all transform hover:scale-105"
            >
              View GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-green-500/20 py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-gray-500 font-mono text-sm">
            © 2026 Sivasai Atchyut Akella. Built with React + Tailwind.
          </p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes expandWidth {
          from { width: 0; }
          to { width: 8rem; }
        }
        .animate-fadeIn {
          animation: fadeIn 1s ease-out;
        }
        .animate-slideUp {
          animation: slideUp 0.8s ease-out;
          animation-fill-mode: both;
        }
        .animate-expandWidth {
          animation: expandWidth 1s ease-out 0.5s;
          animation-fill-mode: both;
        }
      `}</style>
    </div>
  );
}