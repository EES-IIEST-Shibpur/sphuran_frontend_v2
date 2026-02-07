import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ChevronDown, ChevronUp } from 'lucide-react';

const teamData = {
  faculty: [
    { name: 'Professor Bhaskaran Barman', role: 'Professor-in-Charge, Electrical Engineers\' Society' },
    { name: 'Professor Anirudh Nath', role: 'Conveyor, SPHURAN 4.0' },
    { name: 'Professor Sayid Abdul Qasim', role: 'Co-Conveyor, SPHURAN 4.0' }
  ],
  mainCoordinators: [
    { name: 'Devendra Prasad' },
    { name: 'Deepak Garg' },
    { name: 'Ambhrin Roy' }
  ],
  jointCoordinators: [
    { name: 'Aman Kumar Mehta' },
    { name: 'Sandip Kumar Das' }
  ],
  financeAudit: {
    head: [{ name: 'Niloy Mondal' }],
    associateHead: [{ name: 'Suryansh Singh' }],
    associates: [{ name: 'Aditya Kumar Vats' }]
  },
  design: {
    head: [{ name: 'Saatwata Sen' }],
    associateHead: [
      { name: 'Sumit Kumar' },
      { name: 'Anshita' },
      { name: 'Aarush Roy' }
    ],
    associates: [
      { name: 'Jannat Parveen' },
      { name: 'Daksha Raj' },
      { name: 'Tanusree Gupta' },
      { name: 'Shreya Goswami' }
    ]
  },
  sponsorship: {
    head: [
      { name: 'Rudra Pratap Singh' },
      { name: 'Esha Kumari' },
      { name: 'Hrishit Das' }
    ],
    associateHead: [
      { name: 'Amit Kiran Das' },
      { name: 'Keshav Bhagat' },
      { name: 'Banoth Amitha' },
      { name: 'Shreya Sen' }
    ],
    associates: [
      { name: 'Ahana pal' },
      { name: 'Bikramjeet' },
      { name: 'Joyon rudra pal' },
      { name: 'Alok Kumar' },
      { name: 'Ayisa Nithara S G' }
    ]
  },
  publicity: {
    head: [
      { name: 'Ishika Singh' },
      { name: 'Abhay Raj Singh' }
    ],
    associateHead: [
      { name: 'Dhruv Kumar' },
      { name: 'Lonisha Rudra' },
      { name: 'Adarsh Raj' }
    ],
    associates: [
      { name: 'Shruti Tudu' },
      { name: 'Biswaroop Sinha' },
      { name: 'Koutilya Shashwat' }
    ]
  },
  eventManagement: {
    head: [
      { name: 'Anay Verma' },
      { name: 'Shekhar Pal' }
    ],
    associateHead: [
      { name: 'Kilari Dheeraj Kumar' },
      { name: 'Bithika Mondal' },
      { name: 'Mahesh Purohit' },
      { name: 'Preeti Bhargava' }
    ],
    associates: [
      { name: 'Debangik Biswas' },
      { name: 'Ahmad Raza Beg' },
      { name: 'Kunal Bhaskar' },
      { name: 'Ravi Ranjan Patel' },
      { name: 'Samrat Das' }
    ]
  },
  website: {
    head: [{ name: 'Sakshi Kailas Pardhi' }],
    associateHead: [{ name: 'Aminul Islam' }],
    associates: [
      { name: 'Shivam Kumar' },
      { name: 'Vijay Nitin Deshmukh' }
    ]
  },
  travelLogistics: {
    head: [
      { name: 'Sandeep Raj' },
      { name: 'Akash kumar Bharti' }
    ],
    associateHead: [
      { name: 'Ashutosh Kumar' },
      { name: 'Gugulothu Krupakaran' },
      { name: 'Harsh Kamal' },
      { name: 'Piyush Raj' }
    ],
    associates: [
      { name: 'Bisani Love Vijay' },
      { name: 'Gaurav Sau' },
      { name: 'Shivam Yadav' },
      { name: 'Kurada Venkata Sai Purnesh' }
    ]
  },
  volunteers: [
    { name: 'Saptarshi Mallick' },
    { name: 'PENDELA VINAY RAJ' },
    { name: 'Ankul Kumar' },
    { name: 'Harshit Awasthi' },
    { name: 'Keshav Kumar' }
  ]
};

const TeamSection = ({ title, members, expandable = false }: { title: string; members: { name: string; role?: string }[]; expandable?: boolean }) => {
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
            <p className="font-display text-sm font-semibold text-foreground">{member.name}</p>
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
};

const DepartmentSection = ({ 
  title, 
  department 
}: { 
  title: string; 
  department: { head: { name: string }[]; associateHead: { name: string }[]; associates: { name: string }[] } 
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
};

const Team = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
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
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
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
    </div>
  );
};

export default Team;
