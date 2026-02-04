import { Brain, Gamepad2, Lightbulb, Code, BookOpen, Users, Heart, Music, Zap } from 'lucide-react';
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
    title: 'Electroquip',
    description: 'An industry-collaborated quiz that tests core Electrical Engineering concepts like machines, power systems, and control systems, offering prizes and recognition to top performers.',
    icon: Lightbulb,
    category: 'Quiz',
    date: 'Day 1',
    prize: 'TBA',
    venue: 'Seminar Hall',
    teamSize: '2-3 members',
    rules: [
      'Questions on core EE concepts: machines, power systems, control systems',
      'Multiple rounds with increasing difficulty',
      'Industry collaboration for question setting',
      'Top performers receive prizes and recognition'
    ],
    eligibility: 'Open to all engineering students',
    contact: 'sphuran.ees@gmail.com',
  },
  {
    title: 'Illumination',
    description: 'A circuit design and simulation event that challenges participants to create efficient and innovative electronic solutions. Includes both simulation and hands-on hardware rounds to bring designs to life.',
    icon: Zap,
    category: 'Circuit Simulation',
    date: 'Day 1',
    prize: 'TBA',
    venue: 'Electronics Lab',
    teamSize: '1-3 members',
    rules: [
      'Design efficient and innovative electronic circuits',
      'Simulation round followed by hardware implementation',
      'Bring designs to life with hands-on hardware',
      'Judged on efficiency, innovation, and functionality'
    ],
    eligibility: 'Open to all ECE, EE students',
    contact: 'sphuran.ees@gmail.com',
  },
  {
    title: 'Cyberblame',
    description: 'A competitive coding contest testing problem solving skills and programming expertise. A platform for coders to innovate, compete, and push their limits.',
    icon: Code,
    category: 'Coding',
    date: 'Day 2',
    prize: 'TBA',
    venue: 'Computer Lab',
    teamSize: '1-2 members',
    rules: [
      'Competitive programming problems',
      'Tests problem-solving and coding expertise',
      'Multiple rounds with time constraints',
      'Platform to innovate and push limits'
    ],
    eligibility: 'Open to all students with programming knowledge',
    contact: 'sphuran.ees@gmail.com',
  },
  {
    title: 'Adhyayan',
    description: 'A case study competition focused on analyzing real world tech and business challenges. Test your problem solving, innovation, and strategic thinking skills.',
    icon: BookOpen,
    category: 'Case Study',
    date: 'Day 2',
    prize: 'TBA',
    venue: 'Seminar Hall',
    teamSize: '2-4 members',
    rules: [
      'Analyze real-world tech and business challenges',
      'Present innovative solutions',
      'Judged on problem-solving and strategic thinking',
      'Presentation skills matter'
    ],
    eligibility: 'Open to all college students',
    contact: 'sphuran.ees@gmail.com',
  },
  {
    title: 'Vidyut Gyan',
    description: 'An open mic quiz celebrating intellect, patience, and strategic brilliance. This competition brings together sharp minds to battle, where every answer counts and knowledge defines victory.',
    icon: Brain,
    category: 'Open Mic Quiz',
    date: 'Day 2',
    prize: 'TBA',
    venue: 'Main Auditorium',
    teamSize: '2-3 members',
    rules: [
      'Open mic format quiz',
      'Tests general and technical knowledge',
      'Quick thinking and recall required',
      'Multiple exciting rounds'
    ],
    eligibility: 'Open to all students',
    contact: 'sphuran.ees@gmail.com',
  },
  {
    title: 'Online Gaming',
    description: 'Intense gaming events featuring MotoGP and FIFA. Players compete in matches showcasing strategy, reflexes, and teamwork. A perfect platform to test your gaming skills and gain victory.',
    icon: Gamepad2,
    category: 'Gaming',
    date: 'All Days',
    prize: 'TBA',
    venue: 'Online',
    teamSize: '1-2 players',
    rules: [
      'Games: MotoGP and FIFA',
      'Compete in intense matches',
      'Strategy, reflexes, and teamwork tested',
      'Online participation'
    ],
    eligibility: 'Open to all gaming enthusiasts',
    contact: 'sphuran.ees@gmail.com',
  },
  {
    title: 'Alumni Convention',
    description: 'A special gathering to reconnect alumni, share experiences, and celebrate a journey of innovation and learning—strengthening alumni-student bonds through inspiration, mentorship, and growth within the EES community.',
    icon: Users,
    category: 'Networking',
    date: 'Day 1',
    prize: '-',
    venue: 'Main Auditorium',
    teamSize: 'Open',
    rules: [
      'Reconnect with alumni',
      'Share experiences and insights',
      'Mentorship opportunities',
      'Strengthen alumni-student bonds'
    ],
    eligibility: 'EES Alumni and current students',
    contact: 'sphuran.ees@gmail.com',
  },
  {
    title: 'Sphuran × ICCHE',
    description: 'The T-Shirt Distribution Drive is a social initiative aimed at promoting community welfare and collective responsibility. Essential clothing is distributed to individuals, reinforcing values of compassion, inclusivity, and social commitment.',
    icon: Heart,
    category: 'Social Initiative',
    date: 'Day 2',
    prize: '-',
    venue: 'Campus',
    teamSize: 'Volunteers',
    rules: [
      'Social initiative for community welfare',
      'T-shirt distribution to underprivileged',
      'Promotes compassion and inclusivity',
      'Active participation in community service'
    ],
    eligibility: 'Open to all volunteers',
    contact: 'sphuran.ees@gmail.com',
  },
  {
    title: 'Sphuran × RxB Flashmob',
    description: 'A curated dance performance highlighting rhythm, expression, and artistic excellence. A celebration of movement and creativity.',
    icon: Music,
    category: 'Cultural',
    date: 'Day 2',
    prize: '-',
    venue: 'Campus Ground',
    teamSize: 'Performance Team',
    rules: [
      'Curated dance performance',
      'Highlights rhythm and expression',
      'Artistic excellence showcased',
      'Collaboration with RxB'
    ],
    eligibility: 'Selected performers',
    contact: 'sphuran.ees@gmail.com',
  },
];

const categories = ['All', 'Quiz', 'Coding', 'Circuit Simulation', 'Case Study', 'Gaming', 'Cultural'];

const EventsSection = () => {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [activeCategory, setActiveCategory] = useState('All');
  
  const filteredEvents = activeCategory === 'All' 
    ? events 
    : events.filter(e => e.category === activeCategory);

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
              <span className="font-display text-xl text-primary">9+ Events</span>
            </div>
          </div>
          
          {/* Category Filter - Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
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
                <span className="font-body text-xs tracking-widest text-primary uppercase">Industry Collaborated</span>
                <h3 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">
                  ELECTROQUIP
                </h3>
                <p className="font-body text-muted-foreground mt-4 leading-relaxed">
                  An industry-collaborated quiz that tests core Electrical Engineering concepts like machines, 
                  power systems, and control systems. Compete for prizes and recognition as a top performer.
                </p>
                <button 
                  onClick={() => setSelectedEvent(events.find(e => e.title === 'Electroquip') || null)}
                  className="mt-6 px-6 py-3 bg-primary text-primary-foreground font-display text-sm tracking-wider hover:bg-primary/90 transition-all"
                >
                  VIEW DETAILS
                </button>
              </div>
              <div className="flex justify-center">
                <Lightbulb className="w-32 h-32 md:w-48 md:h-48 text-primary/20" strokeWidth={1} />
              </div>
            </div>
          </div>
        )}

        {/* Events Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredEvents.map((event, index) => (
            <div
              key={event.title}
              style={{ animationDelay: `${index * 0.05}s` }}
              className="animate-slide-up"
            >
              <EventCard {...event} onClick={() => setSelectedEvent(event)} />
            </div>
          ))}
        </div>
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
