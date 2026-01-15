import { Mail, MapPin, Phone } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="font-body text-primary text-sm tracking-widest uppercase">
            Get In Touch
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4">
            CONTACT US
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mt-6" />
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 flex items-center justify-center border border-primary/50 rounded-lg">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-foreground mb-2">Venue</h3>
                <p className="font-body text-muted-foreground">
                  Department of Electrical Engineering<br />
                  Indian Institute of Engineering Science and Technology<br />
                  Shibpur, Howrah - 711103, West Bengal
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="w-12 h-12 flex items-center justify-center border border-primary/50 rounded-lg">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-foreground mb-2">Email</h3>
                <p className="font-body text-muted-foreground">
                  sphuran@iiests.ac.in<br />
                  ees.iiests@gmail.com
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="w-12 h-12 flex items-center justify-center border border-primary/50 rounded-lg">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-foreground mb-2">Phone</h3>
                <p className="font-body text-muted-foreground">
                  +91 98765 43210<br />
                  +91 98765 43211
                </p>
              </div>
            </div>

            {/* Society Info */}
            <div className="mt-8 p-6 border border-border rounded-lg bg-card/50">
              <h3 className="font-display text-lg font-bold text-primary mb-2">
                Electrical Engineers' Society
              </h3>
              <p className="font-body text-sm text-muted-foreground">
                The student body of the Department of Electrical Engineering at IIEST Shibpur, 
                dedicated to fostering technical excellence and innovation since its establishment.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <form className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block font-body text-sm text-muted-foreground mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-card border border-border rounded-lg font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block font-body text-sm text-muted-foreground mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-card border border-border rounded-lg font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                  placeholder="your@email.com"
                />
              </div>
            </div>
            <div>
              <label className="block font-body text-sm text-muted-foreground mb-2">Subject</label>
              <input
                type="text"
                className="w-full px-4 py-3 bg-card border border-border rounded-lg font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                placeholder="How can we help?"
              />
            </div>
            <div>
              <label className="block font-body text-sm text-muted-foreground mb-2">Message</label>
              <textarea
                rows={5}
                className="w-full px-4 py-3 bg-card border border-border rounded-lg font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                placeholder="Your message..."
              />
            </div>
            <button
              type="submit"
              className="w-full sm:w-auto px-8 py-4 bg-primary text-primary-foreground font-display text-sm tracking-widest uppercase hover:bg-primary/90 transition-all duration-300 box-glow hover:box-glow-strong rounded-sm"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
