import { MessageCircle, FileText, Users } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Page1Problem() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-green-900 flex items-center justify-center p-8">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div className="text-white space-y-8">
          <div className="space-y-6">
            <h1 className="text-6xl font-bold leading-tight">
              The Student Experience is{' '}
              <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
                Broken
              </span>
            </h1>
            
            <div className="space-y-6 text-lg">
              <div className="flex items-start gap-4">
                <div className="bg-red-500/20 p-3 rounded-full">
                  <MessageCircle className="h-6 w-6 text-red-400" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Scattered WhatsApp Groups</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Students juggle dozens of group chats for different classes, clubs, and housing—information gets lost in the chaos.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-red-500/20 p-3 rounded-full">
                  <FileText className="h-6 w-6 text-red-400" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Outdated Bulletin Boards</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Physical flyers and outdated websites make it impossible to find relevant opportunities and events.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-red-500/20 p-3 rounded-full">
                  <Users className="h-6 w-6 text-red-400" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Limited Engagement Tools</h3>
                  <p className="text-gray-300 leading-relaxed">
                    No unified platform means missed connections, forgotten events, and a fragmented campus experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Right Visual */}
        <div className="relative">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1650938200217-05d2ba94caf7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGFvdGljJTIwdW5pdmVyc2l0eSUyMGNhbXB1cyUyMGJ1bGxldGluJTIwYm9hcmQlMjBmbHllcnN8ZW58MXx8fHwxNzU4NzkwOTE2fDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Chaotic campus bulletin board with scattered flyers"
              className="w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>
          
          {/* Floating chat bubbles overlay */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-4 right-4 bg-green-500 text-white p-2 rounded-lg text-sm max-w-32 shadow-lg">
              &quot;Anyone know about housing?&quot;
            </div>
            <div className="absolute top-20 left-4 bg-blue-500 text-white p-2 rounded-lg text-sm max-w-36 shadow-lg">
              &quot;Did you see the event flyer?&quot;
            </div>
            <div className="absolute bottom-20 right-8 bg-purple-500 text-white p-2 rounded-lg text-sm max-w-28 shadow-lg">
              &quot;Need a ride to...&quot;
            </div>
            <div className="absolute bottom-4 left-6 bg-red-500 text-white p-2 rounded-lg text-sm max-w-32 shadow-lg">
              &quot;Lost in the chaos!&quot;
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}