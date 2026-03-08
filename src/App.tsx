import React from 'react';
import { Clock, Leaf, Droplets, Phone, ChevronRight, Star, MapPin, Mail, CheckCircle2 } from 'lucide-react';

export default function App() {
  return (
    <div className="font-sans text-gray-800 antialiased">
      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-50 text-white py-6 px-4 md:px-8 flex justify-between items-center">
        <div className="font-heading font-bold text-2xl tracking-wider uppercase drop-shadow-md">
          AquaClear
        </div>
        <nav className="hidden lg:flex gap-8 text-sm font-semibold tracking-widest uppercase drop-shadow-md">
          <a href="#about" className="hover:text-[#e3b044] transition-colors">About Us</a>
          <a href="#services" className="hover:text-[#e3b044] transition-colors">Services</a>
          <a href="#packages" className="hover:text-[#e3b044] transition-colors">Packages</a>
          <a href="#gallery" className="hover:text-[#e3b044] transition-colors">Gallery</a>
          <a href="#reviews" className="hover:text-[#e3b044] transition-colors">Reviews</a>
          <a href="#contact" className="hover:text-[#e3b044] transition-colors">Contact</a>
        </nav>
        <div className="font-heading font-bold text-lg flex items-center gap-2 drop-shadow-md">
          <Phone size={20} className="text-[#e3b044]" /> +(123) 456-7890
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center text-center text-white">
        <div className="absolute inset-0 bg-black/30 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=2070&auto=format&fit=crop')" }}
        ></div>
        
        <div className="relative z-20 px-4 max-w-5xl mx-auto mt-16">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold uppercase tracking-wide mb-6 font-heading drop-shadow-xl leading-none">
            Splash Pool<br/>Cleaning Services
          </h1>
          <p className="text-2xl md:text-4xl font-semibold mb-10 drop-shadow-lg font-heading tracking-wide">
            AquaClear Pool Care
          </p>
          <button className="border-2 border-white px-8 py-4 text-lg font-bold uppercase tracking-widest hover:bg-white hover:text-[#288b9e] transition-colors flex items-center mx-auto gap-2 backdrop-blur-sm">
            Our Services <ChevronRight size={20} />
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white relative z-30 -mt-10 rounded-t-[3rem] shadow-[0_-10px_40px_rgba(0,0,0,0.1)]">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-12 text-center">
          {/* Feature 1 */}
          <div className="flex flex-col items-center px-4">
            <div className="w-24 h-24 bg-[#e3b044] rounded-full flex items-center justify-center text-white mb-8 shadow-lg shadow-[#e3b044]/30">
              <Clock size={48} strokeWidth={1.5} />
            </div>
            <h3 className="text-2xl font-bold uppercase mb-4 font-heading tracking-wide text-gray-900">Reliable and Timely<br/>Pool Cleaning</h3>
            <p className="text-gray-600 leading-relaxed text-lg">We provide punctual and efficient pool cleaning services, ensuring crystal-clear water every time.</p>
          </div>
          {/* Feature 2 */}
          <div className="flex flex-col items-center px-4">
            <div className="w-24 h-24 bg-[#e3b044] rounded-full flex items-center justify-center text-white mb-8 shadow-lg shadow-[#e3b044]/30">
              <Leaf size={48} strokeWidth={1.5} />
            </div>
            <h3 className="text-2xl font-bold uppercase mb-4 font-heading tracking-wide text-gray-900">Eco-Friendly Pool<br/>Cleaning Solutions</h3>
            <p className="text-gray-600 leading-relaxed text-lg">We use safe, environmentally friendly products to clean and maintain your pool, protecting nature.</p>
          </div>
          {/* Feature 3 */}
          <div className="flex flex-col items-center px-4">
            <div className="w-24 h-24 bg-[#e3b044] rounded-full flex items-center justify-center text-white mb-8 shadow-lg shadow-[#e3b044]/30">
              <Droplets size={48} strokeWidth={1.5} />
            </div>
            <h3 className="text-2xl font-bold uppercase mb-4 font-heading tracking-wide text-gray-900">Expert Pool Technicians<br/>At Your Service</h3>
            <p className="text-gray-600 leading-relaxed text-lg">Our certified pool cleaners are highly trained to handle all pool cleaning and maintenance needs.</p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-[#288b9e] text-center">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-5xl md:text-6xl font-bold text-white uppercase mb-16 font-heading tracking-wider drop-shadow-md">Why Choose Us</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="bg-white p-8 text-left shadow-xl hover:-translate-y-2 transition-transform duration-300">
              <div className="text-6xl font-bold text-[#e3b044] mb-4 font-heading drop-shadow-sm">500+</div>
              <h4 className="text-xl font-bold uppercase mb-4 text-gray-900 font-heading tracking-wide">Pools Cleaned</h4>
              <p className="text-base text-gray-600 leading-relaxed">We've cleaned and maintained over 500 residential and commercial pools with consistent, spotless results.</p>
            </div>
            {/* Card 2 */}
            <div className="bg-white p-8 text-left shadow-xl hover:-translate-y-2 transition-transform duration-300">
              <div className="text-6xl font-bold text-[#e3b044] mb-4 font-heading drop-shadow-sm">24-HR</div>
              <h4 className="text-xl font-bold uppercase mb-4 text-gray-900 font-heading tracking-wide">Response Time</h4>
              <p className="text-base text-gray-600 leading-relaxed">Quick and dependable support—our team responds within 24 hours to keep your pool in perfect shape.</p>
            </div>
            {/* Card 3 */}
            <div className="bg-white p-8 text-left shadow-xl hover:-translate-y-2 transition-transform duration-300">
              <div className="text-6xl font-bold text-[#e3b044] mb-4 font-heading drop-shadow-sm">100%</div>
              <h4 className="text-xl font-bold uppercase mb-4 text-gray-900 font-heading tracking-wide">Satisfaction<br/>Guarantee</h4>
              <p className="text-base text-gray-600 leading-relaxed">Our clients rave about our service—most stay with us long-term and refer us to their friends and family.</p>
            </div>
            {/* Card 4 */}
            <div className="bg-white p-8 text-left shadow-xl hover:-translate-y-2 transition-transform duration-300">
              <div className="text-6xl font-bold text-[#e3b044] mb-4 font-heading drop-shadow-sm">10+</div>
              <h4 className="text-xl font-bold uppercase mb-4 text-gray-900 font-heading tracking-wide">Years Of Pro<br/>Experience</h4>
              <p className="text-base text-gray-600 leading-relaxed">With over a decade in the industry, we bring unmatched knowledge and care to every pool we service.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#288b9e] uppercase mb-6 font-heading tracking-wider">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">Comprehensive pool care solutions tailored to your needs. From regular maintenance to emergency repairs, we've got you covered.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Regular Maintenance", desc: "Weekly or bi-weekly cleaning, skimming, vacuuming, and equipment checks to keep your pool swim-ready.", img: "https://images.unsplash.com/photo-1583325958573-3c89e40551cb?q=80&w=800&auto=format&fit=crop" },
              { title: "Chemical Balancing", desc: "Precise water testing and chemical adjustments for safe, crystal-clear water that won't irritate skin or eyes.", img: "https://images.unsplash.com/photo-1572331165267-854da2b10ccc?q=80&w=800&auto=format&fit=crop" },
              { title: "Equipment Repair", desc: "Expert diagnosis and repair of pumps, filters, heaters, and other pool equipment to ensure optimal performance.", img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800&auto=format&fit=crop" }
            ].map((service, i) => (
              <div key={i} className="bg-white rounded-xl overflow-hidden shadow-lg group hover:shadow-2xl transition-all duration-300">
                <div className="h-56 overflow-hidden relative">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10"></div>
                  <img src={service.img} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold uppercase mb-4 text-gray-900 font-heading tracking-wide">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.desc}</p>
                  <ul className="space-y-2 mb-8">
                    <li className="flex items-center gap-2 text-sm text-gray-600"><CheckCircle2 size={16} className="text-[#288b9e]" /> Professional Service</li>
                    <li className="flex items-center gap-2 text-sm text-gray-600"><CheckCircle2 size={16} className="text-[#288b9e]" /> Guaranteed Results</li>
                  </ul>
                  <a href="#contact" className="inline-flex items-center gap-2 text-[#288b9e] font-bold uppercase text-sm tracking-widest hover:text-[#e3b044] transition-colors">
                    Learn More <ChevronRight size={18} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="reviews" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#288b9e] uppercase mb-6 font-heading tracking-wider">Client Reviews</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">Don't just take our word for it. See what our satisfied customers have to say about our pool cleaning services.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Sarah Johnson", text: "AquaClear has been maintaining our pool for 3 years. They are always on time, professional, and our pool has never looked better! Highly recommended for anyone needing reliable service." },
              { name: "Michael Smith", text: "I had a green pool emergency before a big party. The team came out the same day and had it sparkling clean in no time. They saved the day and gained a customer for life." },
              { name: "David & Lisa", text: "We love the eco-friendly approach. It's great knowing our kids are swimming in safe water without harsh chemical smells. The technicians are always friendly and knowledgeable." }
            ].map((review, i) => (
              <div key={i} className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative shadow-sm hover:shadow-md transition-shadow">
                <div className="flex text-[#e3b044] mb-6">
                  {[...Array(5)].map((_, j) => <Star key={j} size={20} fill="currentColor" />)}
                </div>
                <p className="text-gray-600 italic mb-8 leading-relaxed text-lg">"{review.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#288b9e] rounded-full flex items-center justify-center text-white font-bold font-heading text-xl">
                    {review.name.charAt(0)}
                  </div>
                  <div className="font-bold uppercase text-sm tracking-wider text-gray-900 font-heading">{review.name}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-24 bg-[#288b9e] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold uppercase mb-6 font-heading tracking-wider drop-shadow-md">Ready for a Crystal Clear Pool?</h2>
          <p className="text-xl md:text-2xl mb-12 text-teal-50 drop-shadow-sm">Contact us today for a free estimate and let us take the hassle out of pool maintenance.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button className="bg-[#e3b044] text-white px-10 py-5 text-lg font-bold uppercase tracking-widest hover:bg-yellow-500 transition-colors shadow-lg">
              Get a Free Quote
            </button>
            <button className="border-2 border-white px-10 py-5 text-lg font-bold uppercase tracking-widest hover:bg-white hover:text-[#288b9e] transition-colors flex items-center justify-center gap-3 shadow-lg backdrop-blur-sm">
              <Phone size={24} /> Call (123) 456-7890
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-16">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-2">
            <div className="font-bold text-3xl tracking-wider uppercase text-white mb-6 font-heading">AquaClear</div>
            <p className="mb-8 max-w-md leading-relaxed text-lg">Professional, reliable, and eco-friendly pool cleaning services for residential and commercial properties. We keep your water crystal clear so you can focus on enjoying it.</p>
            <div className="flex gap-4">
              {/* Social icons could go here */}
            </div>
          </div>
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest mb-6 font-heading text-lg">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#about" className="hover:text-[#e3b044] transition-colors flex items-center gap-2"><ChevronRight size={16} /> About Us</a></li>
              <li><a href="#services" className="hover:text-[#e3b044] transition-colors flex items-center gap-2"><ChevronRight size={16} /> Services</a></li>
              <li><a href="#packages" className="hover:text-[#e3b044] transition-colors flex items-center gap-2"><ChevronRight size={16} /> Pricing Packages</a></li>
              <li><a href="#reviews" className="hover:text-[#e3b044] transition-colors flex items-center gap-2"><ChevronRight size={16} /> Testimonials</a></li>
              <li><a href="#contact" className="hover:text-[#e3b044] transition-colors flex items-center gap-2"><ChevronRight size={16} /> Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest mb-6 font-heading text-lg">Contact Info</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <MapPin size={24} className="text-[#e3b044] shrink-0 mt-1" />
                <span className="leading-relaxed">123 Poolside Lane,<br/>Sunnyville, CA 90210</span>
              </li>
              <li className="flex items-center gap-4">
                <Phone size={24} className="text-[#e3b044] shrink-0" />
                <span className="text-lg">(123) 456-7890</span>
              </li>
              <li className="flex items-center gap-4">
                <Mail size={24} className="text-[#e3b044] shrink-0" />
                <span className="text-lg">info@aquaclearpool.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 mt-16 pt-8 border-t border-gray-800 text-center text-gray-500">
          &copy; {new Date().getFullYear()} AquaClear Pool Care. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
