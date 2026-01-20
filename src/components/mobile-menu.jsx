import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

import { WorkingMessage } from "@/components/ui/working-message";

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [showWorkingMessage, setShowWorkingMessage] = useState(false);

  // No type annotation—just (e, linkName)
  const handleWorkingLinkClick = (e, linkName) => {
    e.preventDefault();
    setIsOpen(false);
    setShowWorkingMessage(true);
  };

  return (
    <div className="relative">
      {/* Working Message */}
      <WorkingMessage
        isVisible={showWorkingMessage}
        onClose={() => setShowWorkingMessage(false)}
        title="Working on it!"
        message="This feature is currently under development. We're working hard to bring you something amazing!"
        buttonText="Got it!"
        autoClose={true}
        autoCloseDelay={4000}
      />

      <Button
        variant="ghost"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 h-auto w-auto hover:bg-gray-100 rounded-lg transition-colors"
      >
        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </Button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-50"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Menu Slide Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Menu Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-900">Menu</h2>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsOpen(false)}
            className="p-2 h-auto w-auto hover:bg-gray-100 active:bg-gray-200 rounded-lg transition-colors touch-manipulation"
          >
            <X className="w-5 h-5" />
          </Button>
        </div>

        {/* Menu Items */}
        <div className="p-6 space-y-4">
          <Link to="/"
            className="block text-orange-500 font-semibold py-3 px-4 rounded-lg hover:bg-orange-50 active:bg-orange-100 transition-all duration-200 transform hover:scale-105 active:scale-95 touch-manipulation"
            onClick={() => setIsOpen(false)}
          >
            HOME
          </Link>
          <button
            onClick={(e) => handleWorkingLinkClick(e, "Services")}
            className="block text-gray-600 font-medium py-3 px-4 rounded-lg hover:bg-gray-50 active:bg-gray-100 transition-all duration-200 transform hover:scale-105 active:scale-95 cursor-pointer w-full text-left touch-manipulation"
          >
            SERVICES
          </button>
          <button
            onClick={(e) => handleWorkingLinkClick(e, "Courses")}
            className="block text-gray-600 font-medium py-3 px-4 rounded-lg hover:bg-gray-50 active:bg-gray-100 transition-all duration-200 transform hover:scale-105 active:scale-95 cursor-pointer w-full text-left touch-manipulation"
          >
            COURSES
          </button>
          <button
            onClick={(e) => handleWorkingLinkClick(e, "About Us")}
            className="block text-gray-600 font-medium py-3 px-4 rounded-lg hover:bg-gray-50 active:bg-gray-100 transition-all duration-200 transform hover:scale-105 active:scale-95 cursor-pointer w-full text-left touch-manipulation"
          >
            ABOUT US
          </button>
          <button
            onClick={(e) => handleWorkingLinkClick(e, "Contact")}
            className="block text-gray-600 font-medium py-3 px-4 rounded-lg hover:bg-gray-50 active:bg-gray-100 transition-all duration-200 transform hover:scale-105 active:scale-95 cursor-pointer w-full text-left touch-manipulation"
          >
            CONTACT
          </button>
        </div>

        {/* Menu Footer */}
        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-200">
          <div className="text-center">
            <p className="text-sm text-gray-500 mb-2">© 2024 PRABHIM Technologies</p>
            <p className="text-xs text-gray-400">All rights reserved</p>
          </div>
        </div>
      </div>
    </div>
  );
}
