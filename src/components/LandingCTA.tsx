import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

"use client";

export function LandingCTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-green-600 to-violet-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Ready to Simplify Your Campus Life?
          </h2>
          
          <p className="text-xl text-green-100 leading-relaxed">
            Get started with our student-focused platform today
          </p>
          
          <div className="space-y-4">
            <Button 
              size="lg"
              className="bg-white text-violet-600 hover:bg-gray-100 font-semibold px-8 py-4 text-lg rounded-xl shadow-lg"
            >
              Get Started
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
            
            <p className="text-sm text-green-100">
              Free to start • No credit card required
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}