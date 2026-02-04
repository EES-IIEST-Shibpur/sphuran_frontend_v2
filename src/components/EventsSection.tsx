import { Code, Cpu, Gamepad2, Lightbulb, Mic, Wrench, Zap, Activity, Rocket, Brain, Trophy, Target, Sparkles, Radio, GitBranch } from 'lucide-react';
import EventCard from './EventCard';
import EventDetailModal from './EventDetailModal';
import { useState } from 'react';

export interface Event {
  title: string;
  description: string;
  icon: any;
  category: string;
  date: string;
  prize: string;
  venue?: string;
  teamSize?: string;
  rules?: string[];
  eligibility?: string;
  contact?: string;
  rulebookLink?: string;
  registrationLink?: string;
}

const events: Event[] = [
  {
    title: 'CodeStorm',
    description: 'A 6-hour competitive programming challenge. Solve complex algorithmic problems and compete for the top spot.',
    icon: Code,
    category: 'Coding',
    date: 'Day 1',
    prize: '50K',
    venue: 'Computer Lab, Block A',
    teamSize: '1-2 members',
    rules: ['Participants can use any programming language', 'Internet access will be restricted to documentation only', 'No communication with external parties during the event', 'Problems will be released at the start of the competition', 'Submission deadline is strict - no extensions'],
    eligibility: 'Open to all undergraduate and postgraduate students',
    contact: 'sphuran@eesiiests.org',
    rulebookLink: 'https://drive.google.com/codestorm-rules',
    registrationLink: 'https://forms.google.com/codestorm-register',
  },
  {
    title: 'RoboWars',
    description: 'Build and battle robots in the ultimate arena. Engineering meets combat in this thrilling showdown.',
    icon: Cpu,
    category: 'Robotics',
    date: 'Day 2',
    prize: '75K',
    venue: 'Open Ground, Sports Complex',
    teamSize: '3-5 members',
    rules: ['Maximum robot weight: 60kg', 'No projectile weapons allowed', 'Robots must fit within 1m x 1m x 1m dimensions', 'Wireless control mandatory', 'Technical inspection required before battles'],
    eligibility: 'Open to all engineering students',
    contact: 'sphuran@eesiiests.org',
    rulebookLink: 'https://drive.google.com/robowars-rules',
    registrationLink: 'https://forms.google.com/robowars-register',
  },
  {
    title: 'Power Grid Challenge',
    description: 'Design and optimize power distribution networks. Test your electrical engineering prowess.',
    icon: Zap,
    category: 'Electrical',
    date: 'All Days',
    prize: '1L',
    venue: 'Electrical Lab, Main Building',
    teamSize: '2-4 members',
    rules: ['Design must comply with IEEE standards', 'Simulation required before hardware implementation', 'Efficiency and reliability will be key judging criteria', 'Presentation of design methodology required', 'Safety protocols must be strictly followed'],
    eligibility: 'Open to all electrical and electronics engineering students',
    contact: 'sphuran@eesiiests.org',
    rulebookLink: 'https://drive.google.com/powergrid-rules',
    registrationLink: 'https://forms.google.com/powergrid-register',
  },
  {
    title: 'Circuit Maestro',
    description: 'Design, simulate, and build electronic circuits. From analog to digital, show your circuit skills.',
    icon: Activity,
    category: 'Electronics',
    date: 'Day 1',
    prize: '30K',
    venue: 'Electronics Lab, Block B',
    teamSize: '1-3 members',
    rules: ['Both analog and digital circuit challenges will be included', 'Participants must bring their own simulation tools', 'Standard components will be provided for hardware implementation', 'PCB design skills will be an advantage', 'Time-bound rounds with increasing difficulty'],
    eligibility: 'Open to all ECE, EE, and CSE students',
    contact: 'sphuran@eesiiests.org',
    rulebookLink: 'https://drive.google.com/circuit-rules',
    registrationLink: 'https://forms.google.com/circuit-register',
  },
  {
    title: 'TechQuiz',
    description: 'Test your technical knowledge across domains. From programming to power systems, prove you know it all.',
    icon: Lightbulb,
    category: 'Quiz',
    date: 'Day 2',
    prize: '20K',
    venue: 'Seminar Hall 1',
    teamSize: '2-3 members',
    rules: ['Multiple rounds including buzzer, visual, and rapid fire', 'Questions span all engineering domains', 'No mobile phones or electronic devices allowed', 'Negative marking in finals', "Quiz master's decision is final"],
    eligibility: 'Open to all college students',
    contact: 'sphuran@eesiiests.org',
    rulebookLink: 'https://drive.google.com/techquiz-rules',
    registrationLink: 'https://forms.google.com/techquiz-register',
  },
  {
    title: 'GameJam',
    description: 'Create a complete game in 24 hours. Theme revealed at start. Best game wins the crown.',
    icon: Gamepad2,
    category: 'Gaming',
    date: 'Day 3',
    prize: '40K',
    venue: 'Computer Center, 24/7 Access',
    teamSize: '1-4 members',
    rules: ['Theme will be announced at the start', 'Any game engine or framework allowed', 'All assets must be created during the jam', 'Game must be playable and bug-free', 'Judging based on creativity, gameplay, and technical execution'],
    eligibility: 'Open to all students with programming knowledge',
    contact: 'sphuran@eesiiests.org',
    rulebookLink: 'https://drive.google.com/gamejam-rules',
    registrationLink: 'https://forms.google.com/gamejam-register',
  },
  {
    title: 'TechTalk',
    description: 'Present your innovative ideas to a panel of experts. Convince them your solution can change the world.',
    icon: Mic,
    category: 'Speaking',
    date: 'Day 2',
    prize: '25K',
    venue: 'Main Auditorium',
    teamSize: '1-2 presenters',
    rules: ['Presentation duration: 10 minutes + 5 minutes Q&A', 'Topic must be technology-related and innovative', 'Slides required, demos are encouraged', 'Judging based on idea, presentation, and feasibility', 'Prelims will be abstract-based shortlisting'],
    eligibility: 'Open to all students with innovative ideas',
    contact: 'sphuran@eesiiests.org',
    rulebookLink: 'https://drive.google.com/techtalk-rules',
    registrationLink: 'https://forms.google.com/techtalk-register',
  },
  {
    title: 'Debug Derby',
    description: 'Find and fix bugs faster than anyone else. Speed and precision are your weapons in this race.',
    icon: Wrench,
    category: 'Coding',
    date: 'Day 3',
    prize: '15K',
    venue: 'Computer Lab, Block C',
    teamSize: '1 member',
    rules: ['Multiple codebases with hidden bugs will be provided', 'Bugs range from syntax errors to logical flaws', 'Faster fixes earn more points', 'Code must pass all test cases after fixes', 'Programming language proficiency in C++, Java, or Python required'],
    eligibility: 'Open to all students with coding experience',
    contact: 'sphuran@eesiiests.org',
    rulebookLink: 'https://drive.google.com/debugderby-rules',
    registrationLink: 'https://forms.google.com/debugderby-register',
  },
  {
    title: 'LaunchPad',
    description: 'Pitch your startup idea to investors. Transform your vision into reality with mentorship and funding opportunities.',
    icon: Rocket,
    category: 'Startup',
    date: 'Day 1',
    prize: '60K',
    venue: 'Innovation Hub',
    teamSize: '2-5 members',
    rules: ['Pitch duration: 7 minutes + 8 minutes Q&A', 'Business model and market analysis required', 'Prototype or MVP preferred but not mandatory', 'Judging by industry experts and investors', 'Top ideas will receive mentorship opportunities'],
    eligibility: 'Open to all students with entrepreneurial mindset',
    contact: 'sphuran@eesiiests.org',
    rulebookLink: 'https://drive.google.com/launchpad-rules',
    registrationLink: 'https://forms.google.com/launchpad-register',
  },
  {
    title: 'AI Arena',
    description: 'Build intelligent systems that learn and adapt. Machine learning meets real-world problem solving.',
    icon: Brain,
    category: 'AI/ML',
    date: 'Day 2',
    prize: '55K',
    venue: 'AI Lab, Research Block',
    teamSize: '1-3 members',
    rules: ['Problem statement will involve classification or prediction', 'Any ML framework allowed (TensorFlow, PyTorch, etc.)', 'Model accuracy and efficiency both matter', 'Explainability of model required', 'Pre-trained models allowed with proper attribution'],
    eligibility: 'Open to students with ML/AI knowledge',
    contact: 'sphuran@eesiiests.org',
    rulebookLink: 'https://drive.google.com/aiarena-rules',
    registrationLink: 'https://forms.google.com/aiarena-register',
  },
  {
    title: 'Hack Championship',
    description: '36-hour hackathon to build solutions for real-world problems. Code, innovate, and create impact.',
    icon: Trophy,
    category: 'Hackathon',
    date: 'Day 1-2',
    prize: '90K',
    venue: 'Central Building, 24/7',
    teamSize: '2-4 members',
    rules: ['Problem statements released at inauguration', 'Any technology stack allowed', 'Must be a working prototype/product', 'Mentors available throughout', 'Final presentation to panel of judges'],
    eligibility: 'Open to all students',
    contact: 'sphuran@eesiiests.org',
    rulebookLink: 'https://drive.google.com/hackchamp-rules',
    registrationLink: 'https://forms.google.com/hackchamp-register',
  },
  {
    title: 'Precision Engineering',
    description: 'Design and manufacture precision components. CAD skills meet manufacturing excellence.',
    icon: Target,
    category: 'Mechanical',
    date: 'Day 3',
    prize: '35K',
    venue: 'Mechanical Workshop',
    teamSize: '2-4 members',
    rules: ['CAD design submission required', 'Manufacturing using provided machinery', 'Tolerances and precision will be measured', 'Safety gear mandatory', 'Time and material constraints apply'],
    eligibility: 'Open to all engineering students',
    contact: 'sphuran@eesiiests.org',
    rulebookLink: 'https://drive.google.com/precision-rules',
    registrationLink: 'https://forms.google.com/precision-register',
  },
  {
    title: 'IoT Hackfest',
    description: 'Create smart connected devices. Sensors, actuators, and cloud integration combined.',
    icon: Sparkles,
    category: 'IoT',
    date: 'Day 1',
    prize: '45K',
    venue: 'IoT Lab, Block D',
    teamSize: '2-4 members',
    rules: ['Must use at least 2 sensors', 'Cloud connectivity required', 'Arduino, Raspberry Pi, or ESP32 allowed', 'Mobile app or web dashboard preferred', 'Real-world application scenarios favored'],
    eligibility: 'Open to students with basic electronics and programming knowledge',
    contact: 'sphuran@eesiiests.org',
    rulebookLink: 'https://drive.google.com/iothack-rules',
    registrationLink: 'https://forms.google.com/iothack-register',
  },
  {
    title: 'Signal Symphony',
    description: 'Master signal processing and communication systems. From theory to implementation.',
    icon: Radio,
    category: 'Communication',
    date: 'Day 2',
    prize: '32K',
    venue: 'Communication Lab',
    teamSize: '2-3 members',
    rules: ['Theoretical and practical rounds', 'MATLAB/Python for simulations', 'Hardware implementation in finals', 'Focus on modulation, filtering, and transmission', 'Report submission required'],
    eligibility: 'Open to ECE, EE, and EI students',
    contact: 'sphuran@eesiiests.org',
    rulebookLink: 'https://drive.google.com/signalsymphony-rules',
    registrationLink: 'https://forms.google.com/signalsymphony-register',
  },
  {
    title: 'OpenSource Odyssey',
    description: 'Contribute to open source projects. Collaborate, code, and make a difference in the developer community.',
    icon: GitBranch,
    category: 'Open Source',
    date: 'Day 3',
    prize: '28K',
    venue: 'Online + Computer Lab',
    teamSize: '1-2 members',
    rules: ['Choose from pre-selected open source projects', 'Meaningful contributions required (not just typo fixes)', 'Pull requests must be accepted by maintainers', 'Documentation and code quality matter', 'Judging based on impact and complexity of contribution'],
    eligibility: 'Open to all students familiar with Git and GitHub',
    contact: 'sphuran@eesiiests.org',
    rulebookLink: 'https://drive.google.com/opensource-rules',
    registrationLink: 'https://forms.google.com/opensource-register',
  },
];

const categories = ['All', 'Coding', 'Robotics', 'Electrical', 'Electronics', 'AI/ML', 'Hackathon', 'IoT'];

const EventsSection = () => {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [activeCategory, setActiveCategory] = useState('All');
  const [showAllEvents, setShowAllEvents] = useState(false);
  
  const filteredEvents = activeCategory === 'All' 
    ? events 
    : events.filter(e => e.category === activeCategory);
  
  const displayedEvents = showAllEvents ? filteredEvents : filteredEvents.slice(0, 8);

  return (
    <section id="events" className="relative py-24 md:py-32 overflow-hidden bg-card/30">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header - Bold Editorial */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <div>
            <span className="font-body text-xs tracking-[0.4em] uppercase text-muted-foreground">
              What Awaits You
            </span>
            <h2 className="font-display text-5xl md:text-7xl lg:text-8xl font-black text-foreground mt-4 leading-none">
              EXPLORE
            </h2>
            <div className="flex items-center gap-4 mt-4">
              <div className="w-16 h-1 bg-primary" />
              <span className="font-display text-xl text-primary">15+ Events</span>
            </div>
          </div>
          
          {/* Category Filter - Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setShowAllEvents(false);
                }}
                className={`px-4 py-2 font-body text-xs tracking-wider uppercase transition-all duration-300 rounded-full border ${
                  activeCategory === cat
                    ? 'bg-primary text-primary-foreground border-primary'
                    : 'bg-transparent text-muted-foreground border-border hover:border-primary hover:text-primary'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Event Highlight */}
        {activeCategory === 'All' && (
          <div className="mb-12 p-8 md:p-12 border border-primary/30 bg-primary/5 rounded-lg relative overflow-hidden">
            <div className="absolute top-4 right-4 px-3 py-1 bg-primary text-primary-foreground text-xs font-display tracking-wider rounded-full">
              FLAGSHIP
            </div>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <span className="font-body text-xs tracking-widest text-primary uppercase">Grand Prize: 1 Lakh</span>
                <h3 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">
                  POWER GRID CHALLENGE
                </h3>
                <p className="font-body text-muted-foreground mt-4 leading-relaxed">
                  The ultimate test for electrical engineers. Design and optimize power distribution networks, 
                  solve real-world power grid problems, and compete for the grand prize.
                </p>
                <button 
                  onClick={() => setSelectedEvent(events.find(e => e.title === 'Power Grid Challenge') || null)}
                  className="mt-6 px-6 py-3 bg-primary text-primary-foreground font-display text-sm tracking-wider hover:bg-primary/90 transition-all"
                >
                  VIEW DETAILS
                </button>
              </div>
              <div className="flex justify-center">
                <Zap className="w-32 h-32 md:w-48 md:h-48 text-primary/20" strokeWidth={1} />
              </div>
            </div>
          </div>
        )}

        {/* Events Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {displayedEvents.map((event, index) => (
            <div
              key={event.title}
              style={{ animationDelay: `${index * 0.05}s` }}
              className="animate-slide-up"
            >
              <EventCard {...event} onClick={() => setSelectedEvent(event)} />
            </div>
          ))}
        </div>

        {/* View All CTA */}
        {filteredEvents.length > 8 && (
          <div className="text-center mt-12">
            <button
              onClick={() => setShowAllEvents(!showAllEvents)}
              className="group inline-flex items-center gap-2 px-8 py-4 border border-primary text-primary font-display text-sm tracking-widest uppercase hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              {showAllEvents ? 'Show Less' : `View All ${filteredEvents.length} Events`}
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </div>
        )}
      </div>

      {/* Event Detail Modal */}
      {selectedEvent && (
        <EventDetailModal
          isOpen={!!selectedEvent}
          onClose={() => setSelectedEvent(null)}
          {...selectedEvent}
        />
      )}

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </section>
  );
};

export default EventsSection;
