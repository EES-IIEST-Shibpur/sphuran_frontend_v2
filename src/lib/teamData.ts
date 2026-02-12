export interface TeamMember {
  name: string;
  role?: string;
  year?: number;
  image?: string;
}

export interface Department {
  head: TeamMember[];
  associateHead: TeamMember[];
  associates: TeamMember[];
}

export interface TeamData {
  faculty: TeamMember[];
  mainCoordinators: TeamMember[];
  jointCoordinators: TeamMember[];
  financeAudit: Department;
  design: Department;
  sponsorship: Department;
  publicity: Department;
  eventManagement: Department;
  website: Department;
  travelLogistics: Department;
  volunteers: TeamMember[];
}

export const teamData: TeamData = {
  faculty: [
    { 
      name: 'Prof. Bhaskaran Barman', 
      role: 'Professor-in-Charge, Electrical Engineers\' Society',
      image: 'https://www.iiests.ac.in/assets/images/faculty/90.jpg'
    },
    { 
      name: 'Prof. Anirudh Nath', 
      role: 'Convenor, SPHURAN 4.0',
      image: 'https://www.iiests.ac.in/assets/images/faculty/653f41610c27fani1%20(1).jpg'
    },
    { 
      name: 'Prof. Syed Abdullah Qasim', 
      role: 'Co-Convenor, SPHURAN 4.0',
      image: 'https://www.iiests.ac.in/assets/images/faculty/64e65300f0cd1db043e76-30a2-45c9-ade7-4ac7150d1888.jpg'
    }
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
