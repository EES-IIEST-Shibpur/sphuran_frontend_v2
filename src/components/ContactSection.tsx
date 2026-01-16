import { Mail, MapPin, Phone } from 'lucide-react';
import { useState, FormEvent } from 'react';
import axios from 'axios';

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
                  sphuran@eesiiests.org<br />
                  contact@eesiiests.org
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
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block font-body text-sm text-muted-foreground mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-card border border-border rounded-lg font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block font-body text-sm text-muted-foreground mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-card border border-border rounded-lg font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                  placeholder="your@email.com"
                />
              </div>
            </div>
            <div>
              <label className="block font-body text-sm text-muted-foreground mb-2">Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-card border border-border rounded-lg font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                placeholder="How can we help?"
              />
            </div>
            <div>
              <label className="block font-body text-sm text-muted-foreground mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 bg-card border border-border rounded-lg font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                placeholder="Your message..."
              />
            </div>
            
            {/* Status Messages */}
            {submitStatus === 'success' && (
              <div className="p-4 bg-green-500/10 border border-green-500/50 rounded-lg">
                <p className="font-body text-sm text-green-500">
                  Message sent successfully! You'll receive a confirmation email shortly.
                </p>
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="p-4 bg-red-500/10 border border-red-500/50 rounded-lg">
                <p className="font-body text-sm text-red-500">
                  Failed to send message. Please try again or contact us directly.
                </p>
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-auto px-8 py-4 bg-primary text-primary-foreground font-display text-sm tracking-widest uppercase hover:bg-primary/90 transition-all duration-300 box-glow hover:box-glow-strong rounded-sm disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
