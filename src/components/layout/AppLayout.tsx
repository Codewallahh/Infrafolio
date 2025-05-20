
"use client";

import type { ReactNode } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarInset,
  SidebarTrigger,
  SidebarFooter,
} from '@/components/ui/sidebar'; // Assuming this path is correct for your setup
import { Button } from '@/components/ui/button';
import {
  Home,
  Briefcase,
  LayoutDashboard,
  PlayCircle,
  Sparkles,
  Github,
  Linkedin,
  PanelLeftOpen,
  PanelLeftClose,
  Moon,
  Sun,
} from 'lucide-react';
import { useSidebar } from '@/components/ui/sidebar'; // To get sidebar state
import { useEffect, useState } from 'react';


const NavLink = ({ href, icon, label, tooltip }: { href: string; icon: ReactNode; label: string; tooltip: string }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <SidebarMenuItem>
      <Link href={href} passHref legacyBehavior>
        <SidebarMenuButton isActive={isActive} tooltip={tooltip} size="default">
          {icon}
          <span>{label}</span>
        </SidebarMenuButton>
      </Link>
    </SidebarMenuItem>
  );
};

const AppSidebarContent = () => {
  const { open, isMobile } = useSidebar();

  return (
    <>
      <SidebarHeader className="p-4">
        <Link href="/" className="flex items-center gap-2">
          {/* Simple SVG Logo Placeholder */}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8 text-primary">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          { (open || isMobile) && <h1 className="text-xl font-semibold">Infrafolio</h1> }
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          <NavLink href="/" icon={<Home />} label="Home" tooltip="Go to Home" />
          <NavLink href="/portfolio" icon={<Briefcase />} label="Portfolio" tooltip="View Portfolio" />
          <NavLink href="/dashboard" icon={<LayoutDashboard />} label="Dashboard" tooltip="View Dashboard" />
          <NavLink href="/live-demos" icon={<PlayCircle />} label="Live Demos" tooltip="See Live Demos" />
          <NavLink href="/ai-insights" icon={<Sparkles />} label="AI Insights" tooltip="Get AI Insights" />
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter className="p-4 mt-auto">
        { (open || isMobile) && (
            <div className="flex flex-col items-center space-y-2">
              <div className="flex space-x-3">
                <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" size="icon" aria-label="GitHub">
                    <Github className="h-5 w-5" />
                  </Button>
                </Link>
                <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" size="icon" aria-label="LinkedIn">
                    <Linkedin className="h-5 w-5" />
                  </Button>
                </Link>
              </div>
              <p className="text-xs text-muted-foreground">&copy; {new Date().getFullYear()} Infrafolio</p>
            </div>
          )}
          {/* Collapsed state icons could go here if needed */}
      </SidebarFooter>
    </>
  );
};


const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  // For now, we assume dark theme is default and don't implement actual toggle logic
  // This is a placeholder for a potential future theme toggle.
  const isDark = true; 

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <Button variant="ghost" size="icon" aria-label="Toggle theme (placeholder)">
      {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
    </Button>
  );
};


const TopBar = () => {
  const { toggleSidebar, open } = useSidebar();
  return (
    <header className="sticky top-0 z-40 flex h-16 items-center gap-4 border-b bg-background/80 backdrop-blur-sm px-4 md:px-6">
      <Button variant="ghost" size="icon" onClick={toggleSidebar} className="md:hidden">
        {open ? <PanelLeftClose /> : <PanelLeftOpen />}
        <span className="sr-only">Toggle Menu</span>
      </Button>
      <div className="flex-1">
        {/* Maybe a search bar or breadcrumbs in the future */}
      </div>
      <ThemeToggle />
    </header>
  );
}

export default function AppLayout({ children }: { children: ReactNode }) {
  return (
    <SidebarProvider defaultOpen={true} collapsible="icon">
      <div className="flex min-h-screen w-full">
        <Sidebar variant="sidebar" collapsible="icon" side="left">
          <AppSidebarContent />
        </Sidebar>
        <div className="flex flex-col flex-1 overflow-hidden">
           <TopBar />
           <SidebarInset className="flex-1 overflow-y-auto p-4 md:p-6">
            {children}
          </SidebarInset>
        </div>
      </div>
    </SidebarProvider>
  );
}
