"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { BookOpen, Heart, MessageCircle, User } from 'lucide-react';
import { ThemeToggle } from '@/components/theme-toggle';
import AuthDialog from '@/components/auth/AuthDialog';

export default function Header() {
  const [showAuthDialog, setShowAuthDialog] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="bg-purple-600 p-2 rounded-lg">
              <BookOpen className="h-5 w-5 text-white" />
            </div>
            <span className="font-bold text-xl text-purple-600">EnraPortal</span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/schools" className="text-sm font-medium text-gray-600 transition-colors hover:text-purple-600">
              Schools
            </Link>
            <Link href="/programs" className="text-sm font-medium text-gray-600 transition-colors hover:text-purple-600">
              Programs
            </Link>
            <Link href="/applications" className="text-sm font-medium text-gray-600 transition-colors hover:text-purple-600">
              My Applications
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Link href="/wishlist">
              <Button variant="ghost" size="icon" className="text-gray-600 hover:text-purple-600 hover:bg-purple-50">
                <Heart className="h-5 w-5" />
              </Button>
            </Link>
            <Link href="/messages">
              <Button variant="ghost" size="icon" className="text-gray-600 hover:text-purple-600 hover:bg-purple-50">
                <MessageCircle className="h-5 w-5" />
              </Button>
            </Link>
            <ThemeToggle />
            <Button 
              className="bg-purple-600 hover:bg-purple-700 shadow-sm"
              onClick={() => setShowAuthDialog(true)}
            >
              <User className="h-4 w-4 mr-2" />
              Sign In
            </Button>
          </div>
        </div>
      </header>

      <AuthDialog 
        isOpen={showAuthDialog} 
        onClose={() => setShowAuthDialog(false)} 
      />
    </>
  );
}