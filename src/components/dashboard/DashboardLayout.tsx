
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Home, Users, FileText, BarChart2, Calendar, Settings, LogOut } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

type DashboardLayoutProps = {
  children: React.ReactNode;
};

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col w-full">
      {/* Main Navbar */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo & Title */}
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-purple-500 flex items-center justify-center text-white font-bold">
                OA
              </div>
              <h1 className="font-bold text-lg hidden sm:block">OPD Assessment V2</h1>
            </div>

            {/* Desktop Nav Links */}
            <nav className="hidden md:flex space-x-8">
              <a href="/" className="flex items-center gap-2 text-sm font-medium text-slate-700 hover:text-purple-600">
                <Home size={18} />
                <span>Dashboard</span>
              </a>
              <a href="#patients" className="flex items-center gap-2 text-sm font-medium text-slate-700 hover:text-purple-600">
                <Users size={18} />
                <span>Patients</span>
              </a>
              <a href="#records" className="flex items-center gap-2 text-sm font-medium text-slate-700 hover:text-purple-600">
                <FileText size={18} />
                <span>OPD Records</span>
              </a>
              <a href="#reports" className="flex items-center gap-2 text-sm font-medium text-slate-700 hover:text-purple-600">
                <BarChart2 size={18} />
                <span>Reports</span>
              </a>
              <a href="#appointments" className="flex items-center gap-2 text-sm font-medium text-slate-700 hover:text-purple-600">
                <Calendar size={18} />
                <span>Appointments</span>
              </a>
            </nav>

            {/* Settings/Logout & Mobile menu button */}
            <div className="flex items-center gap-4">
              <div className="hidden md:flex items-center gap-2">
                <a href="#settings" className="flex items-center gap-2 text-sm font-medium text-slate-700 hover:text-purple-600 p-2 rounded-md">
                  <Settings size={18} />
                </a>
                <a href="#logout" className="flex items-center gap-2 text-sm font-medium text-slate-700 hover:text-purple-600 p-2 rounded-md">
                  <LogOut size={18} />
                </a>
              </div>
              
              {/* Mobile Menu Button */}
              <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="md:hidden">
                    <Menu size={24} />
                    <span className="sr-only">Toggle menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[250px] sm:w-[300px]">
                  <div className="flex flex-col gap-6 py-6">
                    <div className="flex items-center gap-2">
                      <div className="h-8 w-8 rounded-full bg-purple-500 flex items-center justify-center text-white font-bold">
                        OA
                      </div>
                      <h1 className="font-bold text-lg">OPD Assessment V2</h1>
                    </div>
                    <nav className="flex flex-col space-y-4">
                      <a href="/" className="flex items-center gap-3 px-2 py-2 text-sm font-medium rounded-md text-slate-700 hover:bg-slate-100 hover:text-purple-600">
                        <Home size={18} />
                        <span>Dashboard</span>
                      </a>
                      <a href="#patients" className="flex items-center gap-3 px-2 py-2 text-sm font-medium rounded-md text-slate-700 hover:bg-slate-100 hover:text-purple-600">
                        <Users size={18} />
                        <span>Patients</span>
                      </a>
                      <a href="#records" className="flex items-center gap-3 px-2 py-2 text-sm font-medium rounded-md text-slate-700 hover:bg-slate-100 hover:text-purple-600">
                        <FileText size={18} />
                        <span>OPD Records</span>
                      </a>
                      <a href="#reports" className="flex items-center gap-3 px-2 py-2 text-sm font-medium rounded-md text-slate-700 hover:bg-slate-100 hover:text-purple-600">
                        <BarChart2 size={18} />
                        <span>Reports</span>
                      </a>
                      <a href="#appointments" className="flex items-center gap-3 px-2 py-2 text-sm font-medium rounded-md text-slate-700 hover:bg-slate-100 hover:text-purple-600">
                        <Calendar size={18} />
                        <span>Appointments</span>
                      </a>
                      <a href="#settings" className="flex items-center gap-3 px-2 py-2 text-sm font-medium rounded-md text-slate-700 hover:bg-slate-100 hover:text-purple-600">
                        <Settings size={18} />
                        <span>Settings</span>
                      </a>
                      <a href="#logout" className="flex items-center gap-3 px-2 py-2 text-sm font-medium rounded-md text-slate-700 hover:bg-slate-100 hover:text-purple-600">
                        <LogOut size={18} />
                        <span>Logout</span>
                      </a>
                    </nav>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 p-4 md:p-6 overflow-y-auto max-w-7xl mx-auto w-full">
        {children}
      </main>

      {/* Footer */}
      <footer className="py-4 px-6 border-t border-slate-200 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} OPD Assessment V2. All rights reserved.
      </footer>
    </div>
  );
};

export default DashboardLayout;
