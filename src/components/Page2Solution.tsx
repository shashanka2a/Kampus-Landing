import { Home, Car, Calendar, Users } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Page2Solution() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-green-50 to-violet-50 flex items-center justify-center p-8">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div className="space-y-8">
          <div className="space-y-6">
            <div className="inline-block">
              <h1 className="text-6xl font-bold bg-gradient-to-r from-green-600 to-violet-600 bg-clip-text text-transparent leading-tight">
                One Super-App
              </h1>
              <h2 className="text-5xl font-bold text-gray-900 mt-2">
                for Your Campus
              </h2>
            </div>
            
            <p className="text-xl text-gray-600 leading-relaxed max-w-md">
              Kampus unifies everything students need into one beautiful, secure platform.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-white p-4 rounded-xl shadow-lg border border-green-100">
                <div className="bg-gradient-to-r from-green-500 to-green-600 p-3 rounded-lg w-fit mb-3">
                  <Home className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">GatorEx</h3>
                <p className="text-sm text-gray-600">Housing marketplace</p>
              </div>
              
              <div className="bg-white p-4 rounded-xl shadow-lg border border-violet-100">
                <div className="bg-gradient-to-r from-violet-500 to-violet-600 p-3 rounded-lg w-fit mb-3">
                  <Car className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">Rydify</h3>
                <p className="text-sm text-gray-600">Ride-sharing</p>
              </div>
              
              <div className="bg-white p-4 rounded-xl shadow-lg border border-green-100">
                <div className="bg-gradient-to-r from-green-500 to-violet-500 p-3 rounded-lg w-fit mb-3">
                  <Calendar className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">Vybr</h3>
                <p className="text-sm text-gray-600">Events & activities</p>
              </div>
              
              <div className="bg-white p-4 rounded-xl shadow-lg border border-violet-100">
                <div className="bg-gradient-to-r from-violet-500 to-green-500 p-3 rounded-lg w-fit mb-3">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">Tribzy</h3>
                <p className="text-sm text-gray-600">Roommate matching</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Right Visual */}
        <div className="relative flex justify-center">
          {/* Phone mockup */}
          <div className="relative">
            <div className="w-72 h-[600px] bg-gradient-to-b from-gray-900 to-black rounded-[3rem] p-3 shadow-2xl">
              <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
                {/* Status bar */}
                <div className="bg-gray-50 h-6 flex items-center justify-between px-6 text-xs font-medium">
                  <span>9:41</span>
                  <span>●●●</span>
                </div>
                
                {/* App content */}
                <div className="p-6 space-y-4">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-green-600 to-violet-600 bg-clip-text text-transparent">
                      Kampus
                    </h3>
                    <p className="text-gray-500 text-sm">Your Campus, Simplified</p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-green-50 p-4 rounded-xl border border-green-200">
                      <Home className="h-8 w-8 text-green-600 mb-2" />
                      <p className="text-sm font-medium">Housing</p>
                    </div>
                    <div className="bg-violet-50 p-4 rounded-xl border border-violet-200">
                      <Car className="h-8 w-8 text-violet-600 mb-2" />
                      <p className="text-sm font-medium">Rides</p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-xl border border-green-200">
                      <Calendar className="h-8 w-8 text-green-600 mb-2" />
                      <p className="text-sm font-medium">Events</p>
                    </div>
                    <div className="bg-violet-50 p-4 rounded-xl border border-violet-200">
                      <Users className="h-8 w-8 text-violet-600 mb-2" />
                      <p className="text-sm font-medium">Connect</p>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-green-500 to-violet-600 text-white p-4 rounded-xl">
                    <p className="text-sm font-medium">📍 University of Florida</p>
                    <p className="text-xs opacity-90 mt-1">Verified with .edu email</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Connecting lines and icons */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-32 -left-8 bg-white p-3 rounded-full shadow-lg border">
              <Home className="h-5 w-5 text-green-600" />
            </div>
            <div className="absolute top-48 -right-8 bg-white p-3 rounded-full shadow-lg border">
              <Car className="h-5 w-5 text-violet-600" />
            </div>
            <div className="absolute bottom-32 -left-8 bg-white p-3 rounded-full shadow-lg border">
              <Calendar className="h-5 w-5 text-green-600" />
            </div>
            <div className="absolute bottom-48 -right-8 bg-white p-3 rounded-full shadow-lg border">
              <Users className="h-5 w-5 text-violet-600" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}