import { Event } from './eventsData';

/**
 * Generates JSON-LD structured data for an individual event
 */
export const generateEventSchema = (event: Event) => {
  // Don't generate schema for special events without specific dates
  if (event.isSpecialEvent && event.date === 'To Be Announced') {
    return null;
  }

  // Map generic day descriptions to actual dates
  const getEventDate = (day: string): string => {
    if (day === 'Day 1') return '2026-03-01';
    if (day === 'Day 2') return '2026-03-02';
    if (day === 'All Days') return '2026-03-01'; // Start date for multi-day events
    return '2026-03-01'; // Default
  };

  const getEventEndDate = (day: string): string => {
    if (day === 'All Days') return '2026-03-02';
    return getEventDate(day); // Same day events
  };

  return {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: event.title,
    description: event.description,
    image: event.image || 'https://res.cloudinary.com/dwr8472qb/image/upload/v1770880076/og-sphuran_lnd2mq.png',
    startDate: getEventDate(event.date),
    endDate: getEventEndDate(event.date),
    eventStatus: 'https://schema.org/EventScheduled',
    eventAttendanceMode: event.venue === 'Online' 
      ? 'https://schema.org/OnlineEventAttendanceMode' 
      : 'https://schema.org/OfflineEventAttendanceMode',
    location: event.venue === 'Online' 
      ? {
          '@type': 'VirtualLocation',
          url: 'https://sphuran.eesiiests.org/events'
        }
      : {
          '@type': 'Place',
          name: event.venue || 'IIEST Shibpur',
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'Indian Institute of Engineering Science and Technology',
            addressLocality: 'Howrah',
            addressRegion: 'West Bengal',
            postalCode: '711103',
            addressCountry: 'IN'
          }
        },
    organizer: {
      '@type': 'Organization',
      name: 'Electrical Engineers\' Society, IIEST Shibpur',
      url: 'https://sphuran.eesiiests.org',
      email: event.contact || 'sphuran.ees@gmail.com'
    },
    offers: {
      '@type': 'Offer',
      url: event.registrationLink || 'https://sphuran.eesiiests.org/events',
      price: '0',
      priceCurrency: 'INR',
      availability: 'https://schema.org/InStock',
      validFrom: '2026-02-12'
    },
    ...(event.prize && event.prize !== 'TBA' && event.prize !== '-' && {
      award: event.prize
    })
  };
};

/**
 * Generates JSON-LD for all events as an ItemList
 */
export const generateEventsListSchema = (events: Event[]) => {
  const competitiveEvents = events.filter(e => !e.isSpecialEvent);
  
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: competitiveEvents.map((event, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: generateEventSchema(event)
    })).filter(item => item.item !== null)
  };
};
