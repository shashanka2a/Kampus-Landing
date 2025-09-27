"use client";

import { BookOpen, Car, Home, Calendar, Plus, Sparkles } from 'lucide-react';
import { Button } from './ui/button';
import { useState, useEffect } from 'react';

export function LandingHero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const categoryIcons = [
    {
      icon: BookOpen,
      gradient: "from-blue-500 to-blue-600",
      title: "Shop",
      subtitle: "Textbooks",
      delay: "0.1s"
    },
    {
      icon: Car,
      gradient: "from-red-500 to-red-600",
      title: "Uber",
      subtitle: "Rideshare",
      delay: "0.2s"
    },
    {
      icon: Home,
      gradient: "from-green-500 to-green-600",
      title: "Live",
      subtitle: "Housing",
      delay: "0.3s"
    },
    {
      icon: Calendar,
      gradient: "from-violet-500 to-violet-600",
      title: "Party",
      subtitle: "Events",
      delay: "0.4s"
    }
  ];

  const stats = [
    { value: "250+", label: "Active Students", delay: "0.5s" },
    { value: "4.9", label: "Average Rating", icon: "★", delay: "0.6s" },
    { value: "100%", label: ".Edu Verified", delay: "0.7s" }
  ];

  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-white via-green-50 to-violet-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-green-400/20 to-violet-400/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-blue-400/20 to-pink-400/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center space-y-12">
          
          {/* Main Heading */}
          <div className={`space-y-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight">
              Your Campus,{' '}
              <span className="text-gradient-animated relative">
                Simplified
                <Sparkles className="absolute -top-2 -right-2 h-6 w-6 text-yellow-400 animate-bounce-subtle" />
              </span>
              .
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              <span className="font-semibold bg-gradient-to-r from-green-600 to-violet-600 bg-clip-text text-transparent">Kampus.fun:</span> The UF student marketplace for textbooks, furniture, rides, housing, and events — trusted by 250+ Gators.
            </p>
          </div>
          
          {/* Category Icons */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-12">
            {categoryIcons.map((category, index) => (
              <div 
                key={index}
                className={`flex flex-col items-center space-y-3 group cursor-pointer transition-all duration-500 hover:scale-110 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ 
                  animationDelay: category.delay,
                  transitionDelay: category.delay 
                }}
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${category.gradient} rounded-2xl flex items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:rotate-6 group-hover:scale-110 relative overflow-hidden`}>
                  <category.icon className="h-8 w-8 text-white transition-transform duration-300 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="text-center">
                  <p className="font-semibold text-gray-900 group-hover:text-green-600 transition-colors duration-300">{category.title}</p>
                  <p className="text-sm text-gray-600 group-hover:text-gray-800 transition-colors duration-300">{category.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
          
          {/* CTA Button */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '0.5s' }}>
            <Button 
              size="lg"
              className="bg-gradient-to-r from-green-600 to-violet-600 hover:from-green-700 hover:to-violet-700 text-white px-8 py-4 text-lg rounded-xl shadow-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-violet-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Plus className="h-5 w-5 mr-2 transition-transform duration-300 group-hover:rotate-90" />
              <span className="relative z-10">Post a Listing</span>
            </Button>
          </div>
          
          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 pt-8">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className={`text-center group cursor-pointer transition-all duration-500 hover:scale-105 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ 
                  animationDelay: stat.delay,
                  transitionDelay: stat.delay 
                }}
              >
                <div className="flex items-center justify-center gap-2 mb-2">
                  <span className="text-3xl font-bold text-gray-900 group-hover:text-green-600 transition-colors duration-300">
                    {stat.value}
                  </span>
                  {stat.icon && (
                    <span className="text-yellow-400 text-xl animate-bounce-subtle">{stat.icon}</span>
                  )}
                </div>
                <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}