import { useState } from 'react';
import { 
  Play, 
  ArrowRight, 
  Zap, 
  Video, 
  Globe, 
  Smartphone, 
  Clock, 
  Lightbulb, 
  DollarSign, 
  Headphones,
  Star,
  ChevronLeft,
  ChevronRight,
  Mail,
  Phone,
  Instagram,
  Linkedin,
  Youtube,
  MessageCircle,
  Check,
} from 'lucide-react';

function App() {
  const [portfolioFilter, setPortfolioFilter] = useState('All');
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [pricingToggle, setPricingToggle] = useState('monthly');

  const services = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Digital Marketing",
      description: "Google Ads, Meta Ads, SEO optimization to boost your online presence",
      color: "from-blue-500 to-cyan-400"
    },
    {
      icon: <Video className="w-8 h-8" />,
      title: "Video Editing",
      description: "Reels, Shorts, YouTube content that converts and engages",
      color: "from-purple-500 to-pink-400"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Web Design",
      description: "Custom websites & landing pages that drive results",
      color: "from-green-500 to-teal-400"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "App Development",
      description: "Android/iOS apps using Flutter or React Native",
      color: "from-orange-500 to-red-400"
    }
  ];

  const portfolioItems = [
    { id: 1, type: 'Reels', title: 'Fashion Brand Reel', image: 'https://images.pexels.com/photos/3584994/pexels-photo-3584994.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: 2, type: 'Web', title: 'E-commerce Website', image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: 3, type: 'Apps', title: 'Food Delivery App', image: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: 4, type: 'Ads', title: 'Google Ads Campaign', image: 'https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: 5, type: 'Reels', title: 'Restaurant Promo', image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: 6, type: 'Web', title: 'SaaS Landing Page', image: 'https://images.pexels.com/photos/177598/pexels-photo-177598.jpeg?auto=compress&cs=tinysrgb&w=400' }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStart Inc.",
      text: "Lunzo boosted our social media engagement 4x in just 2 weeks! Their creative approach is unmatched.",
      rating: 5
    },
    {
      name: "Mike Chen",
      company: "FoodieHub",
      text: "The app they developed for us is exactly what we envisioned. Fast, reliable, and beautiful UI.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      company: "Fashion Forward",
      text: "Our website redesign led to 60% more conversions. Lunzo truly understands digital marketing.",
      rating: 5
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      monthly: 299,
      yearly: 2390,
      features: [
        "Up to 5 reels/month",
        "Basic SEO setup",
        "Simple landing page",
        "Email support"
      ],
      popular: false
    },
    {
      name: "Growth",
      monthly: 599,
      yearly: 4790,
      features: [
        "Up to 15 reels/month",
        "Advanced SEO",
        "Custom website",
        "Priority support",
        "Google Ads setup"
      ],
      popular: true
    },
    {
      name: "Pro",
      monthly: 999,
      yearly: 7990,
      features: [
        "Unlimited reels",
        "Full SEO package",
        "App development",
        "24/7 dedicated support",
        "Complete marketing suite"
      ],
      popular: false
    }
  ];

  const filteredPortfolio = portfolioFilter === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.type === portfolioFilter);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-inter">
      {/* Hero Section */}
      <section className="relative h-screen bg-gradient-to-br from-[#1E1F26] via-[#2A2B35] to-[#1E1F26] overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-72 h-72 bg-[#4ADEDE] rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-1/2 right-10 w-96 h-96 bg-[#4ADEDE] rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-10 left-1/2 w-80 h-80 bg-[#4ADEDE] rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
        </div>
        
        <div className="relative z-10 flex items-center justify-center h-full px-4">
          <div className="text-center max-w-4xl">
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 font-poppins tracking-tight">
              Lunzo
            </h1>
            <p className="text-xl md:text-2xl text-[#4ADEDE] mb-4 font-medium">
              Win More, Digitally
            </p>
            <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
              We build brands, design websites, launch apps, and edit reels that convert.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="bg-[#4ADEDE] text-[#1E1F26] px-8 py-4 rounded-full font-bold text-lg hover:bg-white transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2" onClick={() => {
                window.location.href = '#contact';
              }}>
                Get Started <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border-2 border-[#4ADEDE] text-[#4ADEDE] px-8 py-4 rounded-full font-bold text-lg hover:bg-[#4ADEDE] hover:text-[#1E1F26] transition-all duration-300 flex items-center justify-center gap-2" onClick={() => {
                window.location.href = '#services';
              }}>
                <Play className="w-5 h-5" /> See Our Work
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-gray-50" id='services'>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1E1F26] mb-6 font-poppins">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive digital solutions to elevate your brand and drive growth
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#1E1F26] mb-4 font-poppins">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Lunzo Section */}
      <section className="py-20 px-4 bg-[#1E1F26]" id='why-choose'>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 font-poppins">
                Why Choose Lunzo ?
              </h2>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#4ADEDE] rounded-xl flex items-center justify-center">
                    <Clock className="w-6 h-6 text-[#1E1F26]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Fast Turnaround</h3>
                    <p className="text-gray-300">Quick delivery without compromising quality</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#4ADEDE] rounded-xl flex items-center justify-center">
                    <Lightbulb className="w-6 h-6 text-[#1E1F26]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Creative Thinking</h3>
                    <p className="text-gray-300">Innovative solutions that stand out</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#4ADEDE] rounded-xl flex items-center justify-center">
                    <DollarSign className="w-6 h-6 text-[#1E1F26]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Affordable Packages</h3>
                    <p className="text-gray-300">Premium quality at competitive prices</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#4ADEDE] rounded-xl flex items-center justify-center">
                    <Headphones className="w-6 h-6 text-[#1E1F26]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Dedicated Support</h3>
                    <p className="text-gray-300">24/7 support for all your needs</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-[#4ADEDE] to-[#2A2B35] rounded-2xl flex items-center justify-center">
                <div className="text-center text-[#1E1F26]">
                  <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-12 h-12" />
                  </div>
                  <h3 className="text-2xl font-bold">Digital Excellence</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Gallery */}
      <section className="py-20 px-4 bg-gray-50" id='portfolio'>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1E1F26] mb-6 font-poppins">
              Our Portfolio
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              See our latest work and creative solutions
            </p>
            
            {/* Filter Tabs */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {['All', 'Reels', 'Web', 'Ads', 'Apps'].map((filter) => (
                <button
                  key={filter}
                  onClick={() => setPortfolioFilter(filter)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                    portfolioFilter === filter
                      ? 'bg-[#4ADEDE] text-[#1E1F26]'
                      : 'bg-white text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPortfolio.map((item) => (
              <div key={item.id} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1E1F26]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-6 text-white">
                      <span className="text-[#4ADEDE] text-sm font-semibold">{item.type}</span>
                      <h3 className="text-lg font-bold">{item.title}</h3>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-[#1E1F26]" id='testimonials'>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-poppins">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-300">
              Don't just take our word for it
            </p>
          </div>
          
          <div className="relative">
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-2xl">
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-xl md:text-2xl text-gray-700 text-center mb-8 font-medium leading-relaxed">
                "{testimonials[currentTestimonial].text}"
              </blockquote>
              <div className="text-center">
                <p className="font-bold text-[#1E1F26] text-lg">
                  {testimonials[currentTestimonial].name}
                </p>
                <p className="text-gray-600">
                  {testimonials[currentTestimonial].company}
                </p>
              </div>
            </div>
            
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-[#4ADEDE] rounded-full flex items-center justify-center text-[#1E1F26] hover:scale-110 transition-transform duration-300"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-[#4ADEDE] rounded-full flex items-center justify-center text-[#1E1F26] hover:scale-110 transition-transform duration-300"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 bg-gray-50" id='pricing'>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1E1F26] mb-6 font-poppins">
              Choose Your Plan
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Flexible pricing for businesses of all sizes
            </p>
            
            {/* Pricing Toggle */}
            <div className="flex items-center justify-center gap-4 mb-12">
              <span className={`font-semibold ${pricingToggle === 'monthly' ? 'text-[#1E1F26]' : 'text-gray-500'}`}>
                Monthly
              </span>
              <button
                onClick={() => setPricingToggle(pricingToggle === 'monthly' ? 'yearly' : 'monthly')}
                className="relative w-16 h-8 bg-gray-300 rounded-full transition-all duration-300"
              >
                <div className={`absolute top-1 w-6 h-6 bg-[#4ADEDE] rounded-full transition-all duration-300 ${
                  pricingToggle === 'yearly' ? 'translate-x-8' : 'translate-x-1'
                }`}></div>
              </button>
              <span className={`font-semibold ${pricingToggle === 'yearly' ? 'text-[#1E1F26]' : 'text-gray-500'}`}>
                Yearly <span className="text-[#4ADEDE] text-sm">(Save 20%)</span>
              </span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                  plan.popular ? 'border-2 border-[#4ADEDE] scale-105' : 'border border-gray-100'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-[#4ADEDE] text-[#1E1F26] px-6 py-2 rounded-full text-sm font-bold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-[#1E1F26] mb-4 font-poppins">
                    {plan.name}
                  </h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-[#1E1F26]">
                      ₹{pricingToggle === 'monthly' ? plan.monthly : plan.yearly}
                    </span>
                    <span className="text-gray-600">
                      /{pricingToggle === 'monthly' ? 'month' : 'year'}
                    </span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-[#4ADEDE] flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-4 rounded-full font-bold text-lg transition-all duration-300 ${
                  plan.popular
                    ? 'bg-[#4ADEDE] text-[#1E1F26] hover:bg-[#1E1F26] hover:text-[#4ADEDE]'
                    : 'bg-[#1E1F26] text-white hover:bg-[#4ADEDE] hover:text-[#1E1F26]'
                }`} onClick={() => {
                  window.location.href = '#contact';
                }}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-[#1E1F26]" id='contact'>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-poppins">
              Let's Work Together
            </h2>
            <p className="text-xl text-gray-300">
              Ready to take your digital presence to the next level?
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <form className="space-y-6">
                <div>
                  <input
                    type="text"
                    name='name'
                    placeholder="Your Name"
                    className="w-full px-6 py-4 bg-white rounded-xl border-0 focus:ring-2 focus:ring-[#4ADEDE] outline-none text-[#1E1F26]" required
                  />
                </div>
                <div>
                  <input
                    type="number"
                    name='phone'
                    placeholder="Your phone number"
                    className="w-full px-6 py-4 bg-white rounded-xl border-0 focus:ring-2 focus:ring-[#4ADEDE] outline-none text-[#1E1F26]" required
                  />
                </div>
                <div>
                  <select className="w-full px-6 py-4 bg-white rounded-xl border-0 focus:ring-2 focus:ring-[#4ADEDE] outline-none text-[#1E1F26]" name='service' required>
                    <option>Select Service</option>
                    <option>Digital Marketing</option>
                    <option>Video Editing</option>
                    <option>Web Design</option>
                    <option>App Development</option>
                  </select>
                </div>
                <div>
                  <textarea
                    rows={4}
                    placeholder="Your Message"
                    className="w-full px-6 py-4 bg-white rounded-xl border-0 focus:ring-2 focus:ring-[#4ADEDE] outline-none text-[#1E1F26] resize-none" name='message' required
                  ></textarea>
                </div>
                <button className="w-full bg-[#4ADEDE] text-[#1E1F26] py-4 rounded-xl font-bold text-lg hover:bg-white transition-all duration-300 transform hover:scale-105">
                  Send Message
                </button>
              </form>
            </div>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6 font-poppins">
                  Get In Touch
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#4ADEDE] rounded-xl flex items-center justify-center">
                      <Mail className="w-6 h-6 text-[#1E1F26]" />
                    </div>
                    <div>
                      <p className="text-white font-semibold">Email</p>
                      <a href="mailto:vasanthselvamani010@gmail.com">
                        <p className="text-gray-300">hello@lunzo.com</p>
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#4ADEDE] rounded-xl flex items-center justify-center">
                      <Phone className="w-6 h-6 text-[#1E1F26]" />
                    </div>
                    <div>
                      <p className="text-white font-semibold">Phone</p>
                      <a href="tel:+919344216320">
                        <p className="text-gray-300">+91 9344216320</p>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <a href="https://wa.me/9344216320?text=I'm%20interested%20in%20your%20Digital%20Marketing%20for%20Service." className="inline-flex items-center gap-3 bg-green-500 text-white px-6 py-4 rounded-xl font-bold hover:bg-green-600 transition-all duration-300 transform hover:scale-105">
                  <MessageCircle className="w-6 h-6" />
                  WhatsApp Us
                </a>
              </div>
              
              <div>
                <h4 className="text-lg font-bold text-white mb-4">Follow Us</h4>
                <div className="flex gap-4">
                  <a href="#" className="w-12 h-12 bg-[#4ADEDE] rounded-xl flex items-center justify-center text-[#1E1F26] hover:scale-110 transition-transform duration-300">
                    <Instagram className="w-6 h-6" />
                  </a>
                  <a href="#" className="w-12 h-12 bg-[#4ADEDE] rounded-xl flex items-center justify-center text-[#1E1F26] hover:scale-110 transition-transform duration-300">
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a href="#" className="w-12 h-12 bg-[#4ADEDE] rounded-xl flex items-center justify-center text-[#1E1F26] hover:scale-110 transition-transform duration-300">
                    <Youtube className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-[#4ADEDE] rounded-xl flex items-center justify-center">
                  <Zap className="w-6 h-6 text-[#1E1F26]" />
                </div>
                <span className="text-2xl font-bold text-white font-poppins">Lunzo</span>
              </div>
              <p className="text-gray-400 mb-4 max-w-md">
                Empowering brands with digital excellence. We create, innovate, and elevate your online presence.
              </p>
              <p className="text-[#4ADEDE] font-medium">
                Made with ❤️ in Tamil Nadu
              </p>
            </div>
            
            <div>
              <h5 className="text-white font-bold mb-4">Services</h5>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#portfolio" className="hover:text-[#4ADEDE] transition-colors">Digital Marketing</a></li>
                <li><a href="#portfolio" className="hover:text-[#4ADEDE] transition-colors">Video Editing</a></li>
                <li><a href="#portfolio" className="hover:text-[#4ADEDE] transition-colors">Web Design</a></li>
                <li><a href="#portfolio" className="hover:text-[#4ADEDE] transition-colors">App Development</a></li>
              </ul>
            </div>
            
            <div>
              <h5 className="text-white font-bold mb-4">Quick Links</h5>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-[#4ADEDE] transition-colors">About Us</a></li>
                <li><a href="#portfolio" className="hover:text-[#4ADEDE] transition-colors">Portfolio</a></li>
                <li><a href="#pricing" className="hover:text-[#4ADEDE] transition-colors">Pricing</a></li>
                <li><a href="#contact" className="hover:text-[#4ADEDE] transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 Lunzo. All rights reserved. | Privacy Policy | Terms of Service
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;