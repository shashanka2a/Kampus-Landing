import { ShoppingCart, Car, Home, Users } from 'lucide-react';

"use client";

export function LandingApps() {
  return (
    <section id="apps" className="py-20 bg-gradient-to-br from-slate-50 via-white to-violet-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-16">
          
          {/* Header */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Everything You Need
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Four powerful student-focused apps, all designed to make your campus life easier
            </p>
          </div>
          
          {/* App Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* GatorEx */}
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-orange-100 hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="bg-gradient-to-r from-orange-500 to-red-500 p-4 rounded-xl w-fit mx-auto mb-6">
                <ShoppingCart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">GatorEx</h3>
              <p className="text-gray-600 leading-relaxed">
                Sell textbooks in seconds
              </p>
            </div>
            
            {/* Rydify */}
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-red-100 hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="bg-gradient-to-r from-red-500 to-pink-500 p-4 rounded-xl w-fit mx-auto mb-6">
                <Car className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Rydify</h3>
              <p className="text-gray-600 leading-relaxed">
                Split ride costs effortlessly
              </p>
            </div>
            
            {/* Vybr */}
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-green-100 hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-4 rounded-xl w-fit mx-auto mb-6">
                <Home className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Vybr</h3>
              <p className="text-gray-600 leading-relaxed">
                Discover your dream housing
              </p>
            </div>
            
            {/* Tribzy */}
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-violet-100 hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="bg-gradient-to-r from-violet-500 to-purple-500 p-4 rounded-xl w-fit mx-auto mb-6">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Tribzy</h3>
              <p className="text-gray-600 leading-relaxed">
                Never miss campus events
              </p>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}