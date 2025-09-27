"use client";

import { ArrowRight, Sparkles, CheckCircle, Users, Star } from 'lucide-react';
import { Button } from './ui/button';
import { useState, useEffect, useRef } from 'react';

export function LandingCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
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

  const benefits = [
    { icon: CheckCircle, text: "No setup fees" },
    { icon: Users, text: "Join 250+ students" },
    { icon: Star, text: "4.9/5 rating" }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-r from-green-600 to-violet-600 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-float"></div>
        <div className="absolute top-20 right-20 w-16 h-16 bg-white/5 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white/10 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-white/5 rounded-full animate-float" style={{ animationDelay: '0.5s' }}></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        <div className="space-y-8">
          {/* Main heading with animated gradient */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight relative">
              Ready to Simplify Your Campus Life?
              <Sparkles className="absolute -top-2 -right-2 h-8 w-8 text-yellow-300 animate-bounce-subtle" />
            </h2>
          </div>
          
          {/* Subtitle */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '0.2s' }}>
            <p className="text-xl text-green-100 leading-relaxed">
              Get started with our student-focused platform today
            </p>
          </div>
          
          {/* Benefits */}
          <div className={`flex flex-wrap justify-center gap-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '0.4s' }}>
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 hover:bg-white/20 transition-all duration-300 hover:scale-105"
                style={{ animationDelay: `${0.6 + index * 0.1}s` }}
              >
                <benefit.icon className="h-5 w-5 text-white" />
                <span className="text-white font-medium">{benefit.text}</span>
              </div>
            ))}
          </div>
          
          {/* CTA Button */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '0.6s' }}>
            <Button 
              size="lg"
              className="bg-white text-violet-600 hover:bg-gray-100 font-semibold px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 relative overflow-hidden group"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-violet-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              <span className="relative z-10">Get Started</span>
              <ArrowRight className="h-5 w-5 ml-2 relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
              
              {/* Animated sparkles on hover */}
              {isHovered && (
                <>
                  <Sparkles className="absolute top-2 right-2 h-4 w-4 text-yellow-400 animate-bounce-subtle" />
                  <Sparkles className="absolute bottom-2 left-2 h-3 w-3 text-yellow-300 animate-bounce-subtle" style={{ animationDelay: '0.2s' }} />
                </>
              )}
            </Button>
          </div>
          
          {/* Trust indicators */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '0.8s' }}>
            <p className="text-sm text-green-100 flex items-center justify-center gap-2">
              <CheckCircle className="h-4 w-4" />
              Free to start • No credit card required
            </p>
          </div>
          
          {/* Floating elements */}
          <div className="absolute top-1/2 left-10 w-2 h-2 bg-white/30 rounded-full animate-float" style={{ animationDelay: '1.5s' }}></div>
          <div className="absolute top-1/3 right-20 w-1 h-1 bg-white/40 rounded-full animate-float" style={{ animationDelay: '2.5s' }}></div>
          <div className="absolute bottom-1/3 left-20 w-1.5 h-1.5 bg-white/20 rounded-full animate-float" style={{ animationDelay: '3s' }}></div>
        </div>
      </div>
    </section>
  );
}