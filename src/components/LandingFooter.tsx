"use client";

import { Heart, Mail, MessageCircle, ExternalLink } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

export function LandingFooter() {
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

  const productLinks = [
    { href: "#features", label: "Features" },
    { href: "#pricing", label: "Pricing" },
    { href: "#faq", label: "FAQ" }
  ];

  const appLinks = [
    { href: "#", label: "GatorEx" },
    { href: "#", label: "Rydify" },
    { href: "#", label: "Vybr" },
    { href: "#", label: "Tribzy" }
  ];

  const supportLinks = [
    { href: "#contact", label: "Contact Us", icon: Mail },
    { href: "#", label: "Help Center", icon: MessageCircle },
    { href: "#", label: "Privacy Policy", icon: ExternalLink },
    { href: "#", label: "Terms of Service", icon: ExternalLink }
  ];

  return (
    <footer ref={sectionRef} className="bg-gray-900 text-white py-16 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-green-500/5 to-violet-500/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-gradient-to-tr from-blue-500/5 to-purple-500/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid md:grid-cols-4 gap-8">
          
          {/* Brand */}
          <div className={`space-y-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="flex items-center gap-2 group cursor-pointer">
              <div className="relative">
                <img 
                  src="/kampus.png" 
                  alt="Kampus Logo" 
                  className="w-8 h-8 object-contain transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-violet-600 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm"></div>
              </div>
              <span className="font-bold text-xl group-hover:text-green-400 transition-colors duration-300">Kampus</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Your campus, simplified. Making student life easier with trusted marketplace solutions.
            </p>
          </div>
          
          {/* Product */}
          <div className={`space-y-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '0.1s' }}>
            <h3 className="font-semibold text-lg">Product</h3>
            <div className="space-y-2">
              {productLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.href} 
                  className="block text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-1 group"
                >
                  {link.label}
                  <span className="inline-block w-0 group-hover:w-2 h-0.5 bg-gradient-to-r from-green-500 to-violet-500 transition-all duration-300 ml-2"></span>
                </a>
              ))}
            </div>
          </div>
          
          {/* Apps */}
          <div className={`space-y-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '0.2s' }}>
            <h3 className="font-semibold text-lg">Apps</h3>
            <div className="space-y-2">
              {appLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.href} 
                  className="block text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-1 group"
                >
                  {link.label}
                  <span className="inline-block w-0 group-hover:w-2 h-0.5 bg-gradient-to-r from-green-500 to-violet-500 transition-all duration-300 ml-2"></span>
                </a>
              ))}
            </div>
          </div>
          
          {/* Support */}
          <div className={`space-y-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '0.3s' }}>
            <h3 className="font-semibold text-lg">Support</h3>
            <div className="space-y-2">
              {supportLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.href} 
                  className="flex items-center gap-2 text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-1 group"
                >
                  <link.icon className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                  {link.label}
                  <span className="inline-block w-0 group-hover:w-2 h-0.5 bg-gradient-to-r from-green-500 to-violet-500 transition-all duration-300 ml-2"></span>
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className={`border-t border-gray-800 mt-12 pt-8 text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '0.4s' }}>
          <p className="text-gray-400 flex items-center justify-center gap-2">
            © 2025 Kampus. All rights reserved. Made with 
            <Heart className="h-4 w-4 text-red-500 animate-pulse" />
            for students.
          </p>
        </div>
      </div>
    </footer>
  );
}