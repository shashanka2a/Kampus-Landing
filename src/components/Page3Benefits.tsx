import { TrendingUp, Shield, BarChart3, Mail } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Page3Benefits() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-violet-50 flex items-center justify-center p-8">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="text-center space-y-6">
          <h1 className="text-6xl font-bold text-gray-900 leading-tight">
            Why Universities Choose{' '}
            <span className="bg-gradient-to-r from-green-600 to-violet-600 bg-clip-text text-transparent">
              Kampus
            </span>
          </h1>
        </div>
        
        {/* Benefits Cards */}
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-green-100 hover:shadow-2xl transition-all duration-300">
            <div className="bg-gradient-to-r from-green-500 to-green-600 p-4 rounded-xl w-fit mb-6">
              <TrendingUp className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Student Engagement ↑</h3>
            <p className="text-gray-600 leading-relaxed">
              Increase campus participation by 40% with unified event discovery, seamless communication, and integrated social features that keep students connected.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-violet-100 hover:shadow-2xl transition-all duration-300">
            <div className="bg-gradient-to-r from-violet-500 to-violet-600 p-4 rounded-xl w-fit mb-6">
              <Shield className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Centralized & Secure</h3>
            <p className="text-gray-600 leading-relaxed">
              .edu email verification ensures only verified students access your campus. Reduce security concerns while maintaining complete control over your community.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-green-100 hover:shadow-2xl transition-all duration-300">
            <div className="bg-gradient-to-r from-green-500 to-violet-500 p-4 rounded-xl w-fit mb-6">
              <BarChart3 className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Analytics for Administrators</h3>
            <p className="text-gray-600 leading-relaxed">
              Real-time insights into student activity, event attendance, and campus trends. Make data-driven decisions to improve student life.
            </p>
          </div>
        </div>
        
        {/* Dashboard Visual */}
        <div className="relative">
          <div className="bg-white rounded-2xl shadow-2xl border overflow-hidden">
            <div className="bg-gradient-to-r from-green-600 to-violet-600 p-6">
              <h3 className="text-2xl font-bold text-white">University Admin Dashboard</h3>
              <p className="text-green-100">Real-time campus insights</p>
            </div>
            
            <div className="p-8">
              <div className="grid md:grid-cols-4 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">2,847</div>
                  <div className="text-gray-600">Active Students</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-violet-600">156</div>
                  <div className="text-gray-600">Events This Month</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">89%</div>
                  <div className="text-gray-600">Engagement Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-violet-600">4.8★</div>
                  <div className="text-gray-600">Student Rating</div>
                </div>
              </div>
              
              <div className="relative h-32 bg-gray-50 rounded-xl overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1628641538565-135707638a61?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwY2FtcHVzJTIwYW5hbHl0aWNzJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc1ODc5MDkxOXww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Analytics dashboard with charts and metrics"
                  className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-violet-500/20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-gray-700 font-medium">Live Analytics Preview</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* CTA Footer */}
        <div className="text-center space-y-6 bg-gradient-to-r from-green-600 to-violet-600 p-12 rounded-2xl text-white">
          <h2 className="text-4xl font-bold">Ready to Transform Your Campus?</h2>
          <p className="text-xl text-green-100 max-w-2xl mx-auto">
            Join leading universities already piloting Kampus. See how we can simplify and enhance your student experience.
          </p>
          <Button 
            size="lg" 
            className="bg-white text-violet-600 hover:bg-gray-100 font-semibold px-8 py-4 text-lg rounded-xl"
          >
            <Mail className="h-5 w-5 mr-2" />
            Pilot Kampus at Your Campus – Contact Us
          </Button>
        </div>
      </div>
    </div>
  );
}