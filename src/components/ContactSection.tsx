import { Mail, MapPin, Phone, Instagram, ExternalLink } from 'lucide-react';
import { useState, FormEvent } from 'react';
import axios from 'axios';

const contacts = [
  { name: 'Ruman Paul', phone: '+91 79083 62321' },
  { name: 'Devendra Prasad', phone: '+91 79085 83033' },
  { name: 'Deepak Garg', phone: '+91 82094 17098' },
];

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await axios.post(
        import.meta.env.VITE_API_URL || 'http://localhost:5000/api/contact/send',
        formData,
        {
          withCredentials: true,
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );

      if (response.data?.success) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="mb-16">
          <span className="font-body text-xs tracking-[0.4em] uppercase text-muted-foreground">
            Get In Touch
          </span>
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl font-black text-foreground mt-4 leading-none">
            CONTACT
          </h2>
          <div className="w-32 h-1 bg-primary mt-8" />
        </div>

        {/* Contact Grid */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Contact Info */}
          <div className="space-y-6">
            {/* Contact Cards Row */}
            <div className="grid sm:grid-cols-2 gap-4">
              {/* Email */}
              <div className="flex items-start gap-4 p-5 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors">
                <div className="w-10 h-10 flex items-center justify-center bg-primary/10 rounded-lg shrink-0">
                  <Mail className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-xs tracking-wider uppercase text-muted-foreground mb-1">Email</h3>
                  <a 
                    href="mailto:sphuran.ees@gmail.com" 
                    className="font-body text-sm text-foreground hover:text-primary transition-colors"
                  >
                    sphuran.ees@gmail.com
                  </a>
                </div>
              </div>

              {/* Website */}
              <div className="flex items-start gap-4 p-5 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors">
                <div className="w-10 h-10 flex items-center justify-center bg-primary/10 rounded-lg shrink-0">
                  <ExternalLink className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-xs tracking-wider uppercase text-muted-foreground mb-1">Website</h3>
                  <a 
                    href="https://sphuran.eesiiests.org" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-body text-sm text-foreground hover:text-primary transition-colors"
                  >
                    sphuran.eesiiests.org
                  </a>
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-start gap-4 p-5 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors">
              <div className="w-10 h-10 flex items-center justify-center bg-primary/10 rounded-lg shrink-0">
                <MapPin className="w-4 h-4 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-xs tracking-wider uppercase text-muted-foreground mb-1">Location</h3>
                <p className="font-body text-sm text-foreground">
                  Department of Electrical Engineering, IIEST Shibpur<br />
                  Howrah - 711103, West Bengal, India
                </p>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex items-start gap-4 p-5 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors">
              <div className="w-10 h-10 flex items-center justify-center bg-primary/10 rounded-lg shrink-0">
                <Instagram className="w-4 h-4 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-xs tracking-wider uppercase text-muted-foreground mb-2">Social Media</h3>
                <div className="flex flex-wrap gap-2">
                  <a 
                    href="https://instagram.com/sphuran.ees" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 bg-card border border-border rounded-full font-body text-xs text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                  >
                    @sphuran.ees
                  </a>
                  <a 
                    href="https://twitter.com/_sphuran.ees" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 bg-card border border-border rounded-full font-body text-xs text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                  >
                    @_sphuran.ees
                  </a>
                  <a 
                    href="https://linkedin.com/company/sphuran-iiests" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 bg-card border border-border rounded-full font-body text-xs text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                  >
                    sphuran-iiests
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Persons */}
            <div>
              <h3 className="font-display text-sm tracking-wider uppercase text-foreground mb-4">Contact Persons</h3>
              <div className="space-y-3">
                {contacts.map((contact) => (
                  <div 
                    key={contact.name}
                    className="flex items-center justify-between p-4 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors"
                  >
                    <div>
                      <h4 className="font-display text-sm font-semibold text-foreground">{contact.name}</h4>
                      <p className="font-body text-xs text-muted-foreground">Event Coordinator</p>
                    </div>
                    <a 
                      href={`tel:${contact.phone.replace(/\s/g, '')}`}
                      className="flex items-center gap-2 px-3 py-1.5 bg-primary/10 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors group"
                    >
                      <Phone className="w-3 h-3 text-primary group-hover:text-primary-foreground" />
                      <span className="font-body text-xs text-primary group-hover:text-primary-foreground">{contact.phone}</span>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div>
            <h3 className="font-display text-sm tracking-wider uppercase text-foreground mb-6">Send a Message</h3>
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block font-body text-xs text-muted-foreground mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-card border border-border font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block font-body text-xs text-muted-foreground mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-card border border-border font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div>
                <label className="block font-body text-xs text-muted-foreground mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-card border border-border font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                  placeholder="How can we help?"
                />
              </div>
              <div>
                <label className="block font-body text-xs text-muted-foreground mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-card border border-border font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                  placeholder="Your message..."
                />
              </div>
              
              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="p-4 bg-green-500/10 border border-green-500/50">
                  <p className="font-body text-sm text-green-500">
                    Message sent successfully!
                  </p>
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="p-4 bg-red-500/10 border border-red-500/50">
                  <p className="font-body text-sm text-red-500">
                    Failed to send. Please contact us directly at sphuran.ees@gmail.com
                  </p>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 bg-primary text-primary-foreground font-display text-sm tracking-widest uppercase hover:bg-primary/90 transition-all duration-300 box-glow hover:box-glow-strong disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </section>
  );
};

export default ContactSection;
