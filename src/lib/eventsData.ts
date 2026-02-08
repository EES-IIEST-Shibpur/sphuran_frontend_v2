import { Brain, Gamepad2, Lightbulb, Code, BookOpen, Users, Heart, Music, Zap } from 'lucide-react';

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
    image?: string;
    isSpecialEvent?: boolean;
}

export const events: Event[] = [
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
        date: 'To Be Announced',
        prize: '-',
        venue: 'To Be Announced',
        teamSize: 'Open',
        rules: [
            'Reconnect with alumni and celebrate shared experiences',
            'Share insights on innovation and learning journeys',
            'Mentorship opportunities for current students',
            'Strengthen alumni-student bonds within the EES community'
        ],
        eligibility: 'EES Alumni and current students',
        contact: 'sphuran.ees@gmail.com',
        image: 'https://res.cloudinary.com/dwr8472qb/image/upload/v1770546216/undraw_meeting_dunc_dctfbx.svg',
        isSpecialEvent: true,
    },
    {
        title: 'Sphuran × ICCHE',
        description: 'The T-Shirt Distribution Drive is a social initiative aimed at promoting community welfare and collective responsibility. Through this drive, essential clothing is distributed to individuals, reinforcing the values of compassion, inclusivity, and social commitment while encouraging active participation in community service.',
        icon: Heart,
        category: 'Social Initiative',
        date: 'To Be Announced',
        prize: '-',
        venue: 'To Be Announced',
        teamSize: 'Volunteers',
        rules: [
            'Social initiative promoting community welfare',
            'T-shirt distribution to individuals in need',
            'Reinforces values of compassion and inclusivity',
            'Encourages active participation in community service'
        ],
        eligibility: 'Open to all volunteers',
        contact: 'sphuran.ees@gmail.com',
        image: 'https://res.cloudinary.com/dwr8472qb/image/upload/v1770546806/sphuran-x-icche_gkfhoq.jpg',
        isSpecialEvent: true,
    },
    {
        title: 'Sphuran × RxB Flashmob',
        description: 'A curated dance performance highlighting rhythm, expression, and artistic excellence. A celebration of movement and creativity.',
        icon: Music,
        category: 'Cultural',
        date: 'To Be Announced',
        prize: '-',
        venue: 'To Be Announced',
        teamSize: 'Performance Team',
        rules: [
            'Curated dance performance showcasing talent',
            'Highlights rhythm, expression, and artistic excellence',
            'Celebration of movement and creativity',
            'Collaboration with RxB dance collective'
        ],
        eligibility: 'Selected performers',
        contact: 'sphuran.ees@gmail.com',
        image: 'https://res.cloudinary.com/dwr8472qb/image/upload/v1770546105/sphuran-x-rxb_vhuylt.jpg',
        isSpecialEvent: true,
    },
];

export const categories = ['All', 'Quiz', 'Coding', 'Circuit Simulation', 'Case Study', 'Gaming', 'Cultural'];
