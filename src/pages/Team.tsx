import { useState, memo } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ChevronDown, ChevronUp } from 'lucide-react';
import Footer from '@/components/Footer';
import { BackgroundBeams } from '@/components/ui/background-beams';

const teamData = {
  faculty: [
    { name: 'Prof. Bhaskaran Barman', role: 'Professor-in-Charge, Electrical Engineers\' Society' },
    { name: 'Prof. Anirudh Nath', role: 'Convenor, SPHURAN 4.0' },
    { name: 'Prof. Syed Abdullah Qasim', role: 'Co-Convenor, SPHURAN 4.0' }
  ],
  mainCoordinators: [
    { name: 'Devendra Prasad', year: 4 },
    { name: 'Deepak Garg', year: 4 },
    { name: 'Ambhrin Roy', year: 4 }
  ],
  jointCoordinators: [
    { name: 'Aman Kumar Mehta', year: 3 },
    { name: 'Sandip Kumar Das', year: 3 }
  ],
  financeAudit: {
    head: [{ name: 'Niloy Mondal', year: 4 }],
    associateHead: [{ name: 'Suryansh Singh', year: 3 }],
    associates: [{ name: 'Aditya Kumar Vats', year: 2 }]
  },
  design: {
    head: [{ name: 'Saatwata Sen', year: 4 }],
    associateHead: [
      { name: 'Sumit Kumar', year: 3 },
      { name: 'Anshita', year: 3 },
      { name: 'Aarush Roy', year: 3 }
    ],
    associates: [
      { name: 'Jannat Parveen', year: 2 },
      { name: 'Daksha Raj', year: 2 },
      { name: 'Tanusree Gupta', year: 2 },
      { name: 'Shreya Goswami', year: 2 }
    ]
  },
  sponsorship: {
    head: [
      { name: 'Rudra Pratap Singh', year: 4 },
      { name: 'Esha Kumari', year: 4 },
      { name: 'Hrishit Das', year: 4 }
    ],
    associateHead: [
      { name: 'Amit Kiran Das', year: 3 },
      { name: 'Keshav Bhagat', year: 3 },
      { name: 'Banoth Amitha', year: 3 },
      { name: 'Shreya Sen', year: 3 }
    ],
    associates: [
      { name: 'Ahana pal', year: 2 },
      { name: 'Bikramjeet', year: 2 },
      { name: 'Joyon rudra pal', year: 2 },
      { name: 'Alok Kumar', year: 2 },
      { name: 'Ayisa Nithara S G', year: 2 }
    ]
  },
  publicity: {
    head: [
      { name: 'Ishika Singh', year: 4 },
      { name: 'Abhay Raj Singh', year: 4 }
    ],
    associateHead: [
      { name: 'Dhruv Kumar', year: 3 },
      { name: 'Lonisha Rudra', year: 3 },
      { name: 'Adarsh Raj', year: 3 }
    ],
    associates: [
      { name: 'Shruti Tudu', year: 2 },
      { name: 'Biswaroop Sinha', year: 2 },
      { name: 'Koutilya Shashwat', year: 2 }
    ]
  },
  eventManagement: {
    head: [
      { name: 'Anay Verma', year: 4 },
      { name: 'Shekhar Pal', year: 4 }
    ],
    associateHead: [
      { name: 'Kilari Dheeraj Kumar', year: 3 },
      { name: 'Bithika Mondal', year: 3 },
      { name: 'Mahesh Purohit', year: 3 },
      { name: 'Preeti Bhargava', year: 3 }
    ],
    associates: [
      { name: 'Debangik Biswas', year: 2 },
      { name: 'Ahmad Raza Beg', year: 2 },
      { name: 'Kunal Bhaskar', year: 2 },
      { name: 'Ravi Ranjan Patel', year: 2 },
      { name: 'Samrat Das', year: 2 }
    ]
  },
  website: {
    head: [{ name: 'Sakshi Kailas Pardhi', year: 4 }],
    associateHead: [{ name: 'Aminul Islam', year: 3 }],
    associates: [
      { name: 'Shivam Kumar', year: 2 },
      { name: 'Vijay Nitin Deshmukh', year: 2 }
    ]
  },
  travelLogistics: {
    head: [
      { name: 'Sandeep Raj', year: 4 },
      { name: 'Akash kumar Bharti', year: 4 }
    ],
    associateHead: [
      { name: 'Ashutosh Kumar', year: 3 },
      { name: 'Gugulothu Krupakaran', year: 3 },
      { name: 'Harsh Kamal', year: 3 },
      { name: 'Piyush Raj', year: 3 }
    ],
    associates: [
      { name: 'Bisani Love Vijay', year: 2 },
      { name: 'Gaurav Sau', year: 2 },
      { name: 'Shivam Yadav', year: 2 },
      { name: 'Kurada Venkata Sai Purnesh', year: 2 }
    ]
  },
  volunteers: [
    { name: 'Saptarshi Mallick', year: 4 },
    { name: 'PENDELA VINAY RAJ', year: 3 },
    { name: 'Ankul Kumar', year: 3 },
    { name: 'Harshit Awasthi', year: 3 },
    { name: 'Keshav Kumar', year: 3 }
  ]
};

const TeamSection = memo(({ title, members, expandable = false }: { title: string; members: { name: string; role?: string; year?: number }[]; expandable?: boolean }) => {
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
  department: { head: { name: string; role?: string; year?: number }[]; associateHead: { name: string; role?: string; year?: number }[]; associates: { name: string; role?: string; year?: number }[] } 
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
  return (
    <div className="min-h-screen bg-background relative">
      {/* Background Beams */}
      <BackgroundBeams className="absolute inset-0 z-0" />
      
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border relative">
        <div className="container mx-auto px-4 md:px-6 py-4">
          <Link 
            to="/"
            className="inline-flex items-center gap-2 font-display text-sm tracking-wider uppercase text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </header>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16 relative z-10">
        {/* Page Header */}
        <div className="mb-16">
          <span className="font-body text-xs tracking-[0.4em] uppercase text-muted-foreground">
            Meet Our Team
          </span>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-black text-foreground mt-4 leading-none">
            TEAM SPHURAN 4.0
          </h1>
          <div className="w-32 h-1 bg-primary mt-8" />
        </div>

        {/* Faculty */}
        <div className="mb-12">
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
        <div className="mb-12">
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

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Team;
