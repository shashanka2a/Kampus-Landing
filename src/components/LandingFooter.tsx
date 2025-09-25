"use client";

export function LandingFooter() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-r from-green-600 to-violet-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">K</span>
              </div>
              <span className="font-bold text-xl">Kampus</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Your campus, simplified. Making student life easier with trusted marketplace solutions.
            </p>
          </div>
          
          {/* Product */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Product</h3>
            <div className="space-y-2">
              <a href="#features" className="block text-gray-400 hover:text-white transition-colors">
                Features
              </a>
              <a href="#pricing" className="block text-gray-400 hover:text-white transition-colors">
                Pricing
              </a>
              <a href="#faq" className="block text-gray-400 hover:text-white transition-colors">
                FAQ
              </a>
            </div>
          </div>
          
          {/* Apps */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Apps</h3>
            <div className="space-y-2">
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                GatorEx
              </a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                Rydify
              </a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                Vybr
              </a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                Tribzy
              </a>
            </div>
          </div>
          
          {/* Support */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Support</h3>
            <div className="space-y-2">
              <a href="#contact" className="block text-gray-400 hover:text-white transition-colors">
                Contact Us
              </a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                Help Center
              </a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 Kampus. All rights reserved. Made with ❤️ for students.
          </p>
        </div>
      </div>
    </footer>
  );
}