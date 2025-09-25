"use client";

import { BookOpen, Car, Home, Calendar, Plus } from 'lucide-react';
import { Button } from './ui/button';

export function LandingHero() {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-white via-green-50 to-violet-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-12">
          
          {/* Main Heading */}
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight">
              Your Campus,{' '}
              <span className="bg-gradient-to-r from-green-600 to-violet-600 bg-clip-text text-transparent">
                Simplified
              </span>
              .
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              <span className="font-semibold">Kampus.fun:</span> The UF student marketplace for textbooks, furniture, rides, housing, and events — trusted by 250+ Gators.
            </p>
          </div>
          
          {/* Category Icons */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-12">
            <div className="flex flex-col items-center space-y-3">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                <BookOpen className="h-8 w-8 text-white" />
              </div>
              <div className="text-center">
                <p className="font-semibold text-gray-900">Shop</p>
                <p className="text-sm text-gray-600">Textbooks</p>
              </div>
            </div>
            
            <div className="flex flex-col items-center space-y-3">
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-2xl flex items-center justify-center shadow-lg">
                <Car className="h-8 w-8 text-white" />
              </div>
              <div className="text-center">
                <p className="font-semibold text-gray-900">Uber</p>
                <p className="text-sm text-gray-600">Rideshare</p>
              </div>
            </div>
            
            <div className="flex flex-col items-center space-y-3">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center shadow-lg">
                <Home className="h-8 w-8 text-white" />
              </div>
              <div className="text-center">
                <p className="font-semibold text-gray-900">Live</p>
                <p className="text-sm text-gray-600">Housing</p>
              </div>
            </div>
            
            <div className="flex flex-col items-center space-y-3">
              <div className="w-16 h-16 bg-gradient-to-r from-violet-500 to-violet-600 rounded-2xl flex items-center justify-center shadow-lg">
                <Calendar className="h-8 w-8 text-white" />
              </div>
              <div className="text-center">
                <p className="font-semibold text-gray-900">Party</p>
                <p className="text-sm text-gray-600">Events</p>
              </div>
            </div>
          </div>
          
          {/* CTA Button */}
          <div>
            <Button 
              size="lg"
              className="bg-gradient-to-r from-green-600 to-violet-600 hover:from-green-700 hover:to-violet-700 text-white px-8 py-4 text-lg rounded-xl shadow-lg font-semibold"
            >
              <Plus className="h-5 w-5 mr-2" />
              Post a Listing
            </Button>
          </div>
          
          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 pt-8">
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <span className="text-3xl font-bold text-gray-900">250+</span>
              </div>
              <p className="text-gray-600">Active Students</p>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <span className="text-3xl font-bold text-gray-900">4.9</span>
                <span className="text-yellow-400 text-xl">★</span>
              </div>
              <p className="text-gray-600">Average Rating</p>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <span className="text-3xl font-bold text-gray-900">100%</span>
              </div>
              <p className="text-gray-600">.Edu Verified</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}