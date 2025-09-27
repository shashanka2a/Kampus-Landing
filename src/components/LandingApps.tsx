"use client";

import { ShoppingCart, Car, Home, Users, ArrowRight, Sparkles } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

export function LandingApps() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const apps = [
    {
      icon: ShoppingCart,
      gradient: "from-orange-500 to-red-500",
      borderColor: "border-orange-100",
      title: "GatorEx",
      description: "Sell textbooks in seconds",
      features: ["Instant listings", "Smart pricing", "Secure payments"],
      delay: "0.1s"
    },
    {
      icon: Car,
      gradient: "from-red-500 to-pink-500",
      borderColor: "border-red-100",
      title: "Rydify",
      description: "Split ride costs effortlessly",
      features: ["Cost splitting", "Route optimization", "Safety features"],
      delay: "0.2s"
    },
    {
      icon: Home,
      gradient: "from-green-500 to-emerald-500",
      borderColor: "border-green-100",
      title: "Vybr",
      description: "Discover your dream housing",
      features: ["Verified listings", "Virtual tours", "Roommate matching"],
      delay: "0.3s"
    },
    {
      icon: Users,
      gradient: "from-violet-500 to-purple-500",
      borderColor: "border-violet-100",
      title: "Tribzy",
      description: "Never miss campus events",
      features: ["Event discovery", "RSVP tracking", "Social features"],
      delay: "0.4s"
    }
  ];

  return (
    <section ref={sectionRef} id="apps" className="py-20 bg-gradient-to-br from-slate-50 via-white to-violet-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-orange-400/10 to-red-400/10 rounded-full blur-2xl animate-float"></div>
        <div className="absolute bottom-20 left-20 w-32 h-32 bg-gradient-to-tr from-violet-400/10 to-purple-400/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '1.5s' }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center space-y-16">
          
          {/* Header */}
          <div className={`space-y-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Everything You Need
              <Sparkles className="inline-block ml-2 h-8 w-8 text-yellow-400 animate-bounce-subtle" />
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Four powerful student-focused apps, all designed to make your campus life easier
            </p>
          </div>
          
          {/* App Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {apps.map((app, index) => (
              <div 
                key={index}
                className={`bg-white p-8 rounded-2xl shadow-xl border ${app.borderColor} hover:shadow-2xl transition-all duration-500 hover:scale-105 group cursor-pointer relative overflow-hidden ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ 
                  animationDelay: app.delay,
                  transitionDelay: app.delay 
                }}
              >
                {/* Hover gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${app.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                {/* Icon */}
                <div className={`bg-gradient-to-r ${app.gradient} p-4 rounded-xl w-fit mx-auto mb-6 relative group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                  <app.icon className="h-8 w-8 text-white transition-transform duration-300 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                </div>
                
                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors duration-300">
                    {app.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4 group-hover:text-gray-800 transition-colors duration-300">
                    {app.description}
                  </p>
                  
                  {/* Features list */}
                  <div className="space-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    {app.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-500">
                        <div className="w-1.5 h-1.5 bg-gradient-to-r from-green-500 to-violet-500 rounded-full mr-2"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  {/* Learn more link */}
                  <div className="mt-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <div className="flex items-center text-sm text-green-600 font-medium group-hover:text-green-700">
                      Learn more
                      <ArrowRight className="h-4 w-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
                
                {/* Hover border effect */}
                <div className={`absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-gradient-to-r group-hover:from-green-500 group-hover:to-violet-500 transition-all duration-300`}></div>
              </div>
            ))}
          </div>
          
          {/* Bottom CTA */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '0.6s' }}>
            <p className="text-lg text-gray-600 mb-6">
              Ready to transform your campus experience?
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {apps.map((app, index) => (
                <div 
                  key={index}
                  className="px-4 py-2 bg-white rounded-full shadow-md border border-gray-200 hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer group"
                >
                  <span className="text-sm font-medium text-gray-700 group-hover:text-green-600 transition-colors duration-300">
                    {app.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}