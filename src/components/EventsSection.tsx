import { Code, Cpu, Gamepad2, Lightbulb, Mic, Wrench, Zap, Activity } from 'lucide-react';
import EventCard from './EventCard';
import circuitPattern from '@/assets/circuit-pattern.png';

const events = [
  {
    title: 'CodeStorm',
    description: 'A 6-hour competitive programming challenge. Solve complex algorithmic problems and compete for the top spot.',
    icon: Code,
    category: 'Coding',
    date: 'Day 1',
    prize: '50K',
  },
  {
    title: 'RoboWars',
    description: 'Build and battle robots in the ultimate arena. Engineering meets combat in this thrilling showdown.',
    icon: Cpu,
    category: 'Robotics',
    date: 'Day 2',
    prize: '75K',
  },
  {
    title: 'Power Grid Challenge',
    description: 'Design and optimize power distribution networks. Test your electrical engineering prowess.',
    icon: Zap,
    category: 'Electrical',
    date: 'All Days',
    prize: '1L',
  },
  {
    title: 'Circuit Maestro',
    description: 'Design, simulate, and build electronic circuits. From analog to digital, show your circuit skills.',
    icon: Activity,
    category: 'Electronics',
    date: 'Day 1',
    prize: '30K',
  },
  {
    title: 'TechQuiz',
    description: 'Test your technical knowledge across domains. From programming to power systems, prove you know it all.',
    icon: Lightbulb,
    category: 'Quiz',
    date: 'Day 2',
    prize: '20K',
  },
  {
    title: 'GameJam',
    description: 'Create a complete game in 24 hours. Theme revealed at start. Best game wins the crown.',
    icon: Gamepad2,
    category: 'Gaming',
    date: 'Day 3',
    prize: '40K',
  },
  {
    title: 'TechTalk',
    description: 'Present your innovative ideas to a panel of experts. Convince them your solution can change the world.',
    icon: Mic,
    category: 'Speaking',
    date: 'Day 2',
    prize: '25K',
  },
  {
    title: 'Debug Derby',
    description: 'Find and fix bugs faster than anyone else. Speed and precision are your weapons in this race.',
    icon: Wrench,
    category: 'Coding',
    date: 'Day 3',
    prize: '15K',
  },
];

const EventsSection = () => {
  return (
    <section id="events" className="relative py-24 md:py-32 overflow-hidden">
      {/* Decorative Circuit Pattern */}
      <div 
        className="absolute top-0 right-0 w-64 h-64 opacity-5"
        style={{
          backgroundImage: `url(${circuitPattern})`,
          backgroundSize: 'cover',
        }}
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="font-body text-primary text-sm tracking-widest uppercase">
            What Awaits You
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4">
            FLAGSHIP EVENTS
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mt-6" />
          <p className="font-body text-muted-foreground max-w-2xl mx-auto mt-6">
            Compete in over 50 events across multiple technical domains including 
            electrical engineering, power systems, and electronics.
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {events.map((event, index) => (
            <div
              key={event.title}
              style={{ animationDelay: `${index * 0.1}s` }}
              className="animate-slide-up"
            >
              <EventCard {...event} />
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-block px-8 py-4 border border-primary text-primary font-display text-sm tracking-widest uppercase hover:bg-primary hover:text-primary-foreground transition-all duration-300 rounded-sm"
          >
            View All Events
          </a>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
