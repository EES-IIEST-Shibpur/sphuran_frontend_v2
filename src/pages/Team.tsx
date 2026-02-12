import { useState, memo } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ChevronDown, ChevronUp } from 'lucide-react';
import Footer from '@/components/Footer';
import { BackgroundBeams } from '@/components/ui/background-beams';
import { SEO } from '@/components/SEO';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { useInView } from '@/hooks/use-in-view';
import { teamData, type TeamMember, type Department } from '@/lib/teamData';

const TeamSection = memo(({ title, members, expandable = false }: { title: string; members: TeamMember[]; expandable?: boolean }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const displayMembers = expandable && !isExpanded ? members.slice(0, 3) : members;

  return (
    <div className="mb-6">
      <h3 className="font-display text-sm tracking-wider uppercase text-primary mb-3">{title}</h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {displayMembers.map((member, index) => (
          <div 
            key={index}
            className="p-4 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors"
          >
            <p className="font-display text-sm font-semibold text-foreground">
              {member.name}
              {member.year && (
                <span className="text-xs text-accent ml-2 font-normal">
                  ({member.year}<sup>{member.year === 1 ? 'st' : member.year === 2 ? 'nd' : member.year === 3 ? 'rd' : 'th'}</sup> year)
                </span>
              )}
            </p>
            {member.role && (
              <p className="font-body text-xs text-muted-foreground mt-1">{member.role}</p>
            )}
          </div>
        ))}
      </div>
      {expandable && members.length > 3 && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-3 w-full p-3 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors font-body text-xs text-muted-foreground hover:text-primary flex items-center justify-center gap-2"
        >
          {isExpanded ? (
            <>
              <ChevronUp className="w-4 h-4" />
              Show Less
            </>
          ) : (
            <>
              <ChevronDown className="w-4 h-4" />
              Show {members.length - 3} More
            </>
          )}
        </button>
      )}
    </div>
  );
});

TeamSection.displayName = 'TeamSection';

const DepartmentSection = memo(({ 
  title, 
  department 
}: { 
  title: string; 
  department: Department 
}) => {
  return (
    <div className="mb-8">
      <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6 border-b border-border pb-3">
        {title}
      </h2>
      <div className="space-y-6">
        <TeamSection title="Head" members={department.head} />
        <TeamSection title="Associate Head" members={department.associateHead} expandable={department.associateHead.length > 3} />
        <TeamSection title="Associates" members={department.associates} expandable={department.associates.length > 3} />
      </div>
    </div>
  );
});

DepartmentSection.displayName = 'DepartmentSection';

const Team = () => {
  const navigate = useNavigate();
  
  // Animation refs
  const heroRef = useInView({ threshold: 0.2, triggerOnce: true });
  const facultyRef = useInView({ threshold: 0.2, triggerOnce: true });
  const coordinatorsRef = useInView({ threshold: 0.2, triggerOnce: true });
  const departmentsRef = useInView({ threshold: 0.2, triggerOnce: true });
  
  return (
    <div className="min-h-screen bg-background relative">
      {/* SEO Meta Tags */}
      <SEO
        title="Team"
        description="Meet the dedicated team behind SPHURAN 4.0 at IIEST Shibpur. Faculty coordinators, main coordinators, and department heads organizing the technical festival."
        keywords="SPHURAN team, EES IIEST team, SPHURAN organizers, student coordinators, faculty advisors, IIEST Shibpur team"
        url="https://sphuran.eesiiests.org/team"
      />
      
      {/* Background Beams */}
      <BackgroundBeams className="absolute inset-0 z-0" />
      
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border relative">
        <div className="container mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
          <button 
            onClick={() => window.history.length > 1 ? navigate(-1) : navigate('/')}
            className="inline-flex items-center gap-2 font-display text-sm tracking-wider uppercase text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </button>
          
          <Breadcrumbs 
            items={[
              { label: 'Home', href: '/' },
              { label: 'Team' }
            ]}
          />
        </div>
      </header>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16 relative z-10">
        {/* Page Header */}
        <div 
          ref={heroRef.ref}
          className={`mb-16 transition-all duration-700 ${
            heroRef.isInView 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="font-body text-xs tracking-[0.4em] uppercase text-muted-foreground">
            Meet Our Team
          </span>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-black text-foreground mt-4 leading-none">
            TEAM SPHURAN 4.0
          </h1>
          <div className="w-32 h-1 bg-primary mt-8" />
        </div>

        {/* Faculty */}
        <div 
          ref={facultyRef.ref}
          className={`mb-12 ${
            facultyRef.isInView 
              ? 'animate-load-slide-up' 
              : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6 border-b border-border pb-3">
            Faculty Advisors
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {teamData.faculty.map((member, index) => (
              <div 
                key={index}
                className="p-6 bg-card border-2 border-primary/30 rounded-lg hover:border-primary transition-colors"
              >
                <p className="font-display text-base font-bold text-foreground mb-2">{member.name}</p>
                <p className="font-body text-xs text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Main Coordinators */}
        <div 
          ref={coordinatorsRef.ref}
          className={`mb-12 transition-all duration-700 ${
            coordinatorsRef.isInView 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6 border-b border-border pb-3">
            Main Coordinators
          </h2>
          <TeamSection title="" members={teamData.mainCoordinators} />
        </div>

        {/* Joint Coordinators */}
        <div className="mb-12">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6 border-b border-border pb-3">
            Joint Coordinators
          </h2>
          <TeamSection title="" members={teamData.jointCoordinators} />
        </div>

        {/* Departments */}
        <div 
          ref={departmentsRef.ref}
          className={`transition-all duration-700 ${
            departmentsRef.isInView 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}
        >
        <DepartmentSection title="Finance & Audit" department={teamData.financeAudit} />
        <DepartmentSection title="Website" department={teamData.website} />
        <DepartmentSection title="Design" department={teamData.design} />
        <DepartmentSection title="Sponsorship" department={teamData.sponsorship} />
        <DepartmentSection title="Publicity" department={teamData.publicity} />
        <DepartmentSection title="Event Management" department={teamData.eventManagement} />
        <DepartmentSection title="Travel & Logistics" department={teamData.travelLogistics} />

        {/* Volunteers */}
        <div className="mb-8">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6 border-b border-border pb-3">
            Volunteers
          </h2>
          <TeamSection title="" members={teamData.volunteers} />
        </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Team;
