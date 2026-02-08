import { memo } from 'react';

const scheduleData = [
  {
    day: 'Day 1',
    date: 'March 14, 2025',
    events: [
      { time: '09:00', title: 'Inauguration Ceremony', venue: 'Main Auditorium' },
      { time: '10:30', title: 'CodeStorm Begins', venue: 'Lab Complex A' },
      { time: '11:00', title: 'CTF Challenge', venue: 'Cyber Lab' },
      { time: '14:00', title: 'Hackathon Kickoff', venue: 'Innovation Hub' },
      { time: '16:00', title: 'Keynote: Future of AI', venue: 'Main Auditorium' },
    ],
  },
  {
    day: 'Day 2',
    date: 'March 15, 2025',
    events: [
      { time: '09:00', title: 'RoboWars Prelims', venue: 'Arena Ground' },
      { time: '11:00', title: 'TechQuiz Finals', venue: 'Seminar Hall' },
      { time: '14:00', title: 'TechTalk Competition', venue: 'Main Auditorium' },
      { time: '16:00', title: 'RoboWars Finals', venue: 'Arena Ground' },
      { time: '18:00', title: 'Networking Night', venue: 'Central Lawn' },
    ],
  },
  {
    day: 'Day 3',
    date: 'March 16, 2025',
    events: [
      { time: '09:00', title: 'GameJam Submissions', venue: 'Gaming Arena' },
      { time: '11:00', title: 'Debug Derby', venue: 'Lab Complex B' },
      { time: '14:00', title: 'Hackathon Presentations', venue: 'Innovation Hub' },
      { time: '16:00', title: 'Award Ceremony', venue: 'Main Auditorium' },
      { time: '18:00', title: 'Closing & Cultural Night', venue: 'Open Air Theater' },
    ],
  },
];

const ScheduleSection = memo(() => {
  return (
    <section id="schedule" className="relative py-24 md:py-32 bg-card/30">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="font-body text-primary text-sm tracking-widest uppercase">
            Mark Your Calendar
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4">
            EVENT SCHEDULE
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mt-6" />
        </div>

        {/* Schedule Grid */}
        {/* <div className="grid md:grid-cols-3 gap-8">
          {scheduleData.map((day, dayIndex) => (
            <div
              key={day.day}
              className="border border-border rounded-lg overflow-hidden bg-card/50 animate-slide-up"
              style={{ animationDelay: `${dayIndex * 0.2}s` }}
            >
              <div className="p-6 border-b border-border bg-secondary/50">
                <h3 className="font-display text-2xl font-bold text-primary">{day.day}</h3>
                <p className="font-body text-sm text-muted-foreground mt-1">{day.date}</p>
              </div>

              <div className="divide-y divide-border">
                {day.events.map((event, eventIndex) => (
                  <div
                    key={eventIndex}
                    className="p-4 hover:bg-secondary/30 transition-colors duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <span className="font-display text-sm text-primary font-semibold min-w-[50px]">
                        {event.time}
                      </span>
                      <div>
                        <h4 className="font-body text-foreground font-medium">{event.title}</h4>
                        <p className="font-body text-xs text-muted-foreground mt-1">{event.venue}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div> */}
        {/* Coming Soon Message */}
        <div className="flex flex-col items-center justify-center py-20">
          <div className="relative">
            <h3 className="font-display text-5xl md:text-7xl lg:text-8xl font-black text-foreground/10">
              COMING
            </h3>
            <h3 className="font-display text-5xl md:text-7xl lg:text-8xl font-black text-primary text-glow absolute top-0 left-0 transform translate-y-16 md:translate-y-20">
              SOON
            </h3>
          </div>
          <p className="font-body text-muted-foreground text-center mt-32 md:mt-40 max-w-md">
            The detailed event schedule will be announced soon. Stay tuned for updates!
          </p>
        </div>
      </div>
    </section>
  );
});

ScheduleSection.displayName = 'ScheduleSection';

export default ScheduleSection;
