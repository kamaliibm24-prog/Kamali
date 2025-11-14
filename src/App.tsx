import { Menu, X, Home, Info, Briefcase, Mail } from 'lucide-react';
import { useState } from 'react';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Home className="w-6 h-6 text-slate-800" />
              <span className="text-xl font-semibold text-slate-800">Brand</span>
            </div>

            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-slate-600 hover:text-slate-800 transition-colors">
                Home
              </button>
              <button onClick={() => scrollToSection('about')} className="text-slate-600 hover:text-slate-800 transition-colors">
                About
              </button>
              <button onClick={() => scrollToSection('services')} className="text-slate-600 hover:text-slate-800 transition-colors">
                Services
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-slate-600 hover:text-slate-800 transition-colors">
                Contact
              </button>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-slate-600 hover:text-slate-800"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-3 space-y-3">
              <button onClick={() => scrollToSection('home')} className="block w-full text-left text-slate-600 hover:text-slate-800 py-2">
                Home
              </button>
              <button onClick={() => scrollToSection('about')} className="block w-full text-left text-slate-600 hover:text-slate-800 py-2">
                About
              </button>
              <button onClick={() => scrollToSection('services')} className="block w-full text-left text-slate-600 hover:text-slate-800 py-2">
                Services
              </button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left text-slate-600 hover:text-slate-800 py-2">
                Contact
              </button>
            </div>
          </div>
        )}
      </nav>

      <main className="pt-16">
        <section id="home" className="min-h-screen flex items-center justify-center bg-slate-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
            <h1 className="text-5xl md:text-6xl font-bold text-slate-800 mb-6">
              Welcome to Our Platform
            </h1>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Creating modern solutions for the digital world. Simple, elegant, and effective.
            </p>
            <button
              onClick={() => scrollToSection('about')}
              className="bg-slate-800 text-white px-8 py-3 rounded-lg hover:bg-slate-700 transition-colors"
            >
              Learn More
            </button>
          </div>
        </section>

        <section id="about" className="min-h-screen flex items-center justify-center bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="flex items-center space-x-3 mb-8">
              <Info className="w-8 h-8 text-slate-800" />
              <h2 className="text-4xl font-bold text-slate-800">About Us</h2>
            </div>
            <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
              <p>
                We are dedicated to providing exceptional services that meet the needs of modern businesses
                and individuals. Our approach combines simplicity with sophistication.
              </p>
              <p>
                With years of experience and a commitment to excellence, we deliver solutions that make
                a real difference. Our team works tirelessly to ensure quality in everything we do.
              </p>
              <p>
                We believe in clear communication, transparent processes, and building lasting relationships
                with our clients. Your success is our priority.
              </p>
            </div>
          </div>
        </section>

        <section id="services" className="min-h-screen flex items-center justify-center bg-slate-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="flex items-center space-x-3 mb-12">
              <Briefcase className="w-8 h-8 text-slate-800" />
              <h2 className="text-4xl font-bold text-slate-800">Our Services</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-2xl font-semibold text-slate-800 mb-4">Consulting</h3>
                <p className="text-slate-600 leading-relaxed">
                  Expert guidance to help you navigate complex challenges and make informed decisions
                  for your business growth.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-2xl font-semibold text-slate-800 mb-4">Development</h3>
                <p className="text-slate-600 leading-relaxed">
                  Custom solutions built with modern technology, tailored to your specific needs
                  and objectives.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-2xl font-semibold text-slate-800 mb-4">Support</h3>
                <p className="text-slate-600 leading-relaxed">
                  Ongoing assistance and maintenance to ensure your systems run smoothly and
                  efficiently at all times.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="min-h-screen flex items-center justify-center bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="flex items-center space-x-3 mb-8">
              <Mail className="w-8 h-8 text-slate-800" />
              <h2 className="text-4xl font-bold text-slate-800">Get in Touch</h2>
            </div>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              Have a question or want to work together? We'd love to hear from you.
            </p>
            <div className="bg-slate-50 p-8 rounded-lg">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-800"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-800"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-800"
                    placeholder="Your message"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-slate-800 text-white px-8 py-3 rounded-lg hover:bg-slate-700 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-slate-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-slate-300">
            © 2025 Brand. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
