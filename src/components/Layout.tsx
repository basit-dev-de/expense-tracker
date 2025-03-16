
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import { 
  BarChart3, 
  Home, 
  PieChart, 
  Settings as SettingsIcon, 
  CreditCard,
  Menu,
  X
} from "lucide-react";
import { Button } from "@/components/ui/button";
import ThemeSwitcher from "./ThemeSwitcher";
import LanguageSwitcher from "./LanguageSwitcher";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const { t } = useTranslation();
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const navigation = [
    { name: t('dashboard'), href: '/', icon: Home },
    { name: t('transactions'), href: '/transactions', icon: CreditCard },
    { name: t('budgets'), href: '/budgets', icon: PieChart },
    { name: t('reports'), href: '/reports', icon: BarChart3 },
    { name: t('settings'), href: '/settings', icon: SettingsIcon },
  ];

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex min-h-screen bg-background">
      {/* Mobile sidebar toggle */}
      <div className="fixed z-50 top-4 left-4 md:hidden">
        <Button 
          variant="outline" 
          size="icon" 
          onClick={toggleSidebar}
          className="rounded-full"
        >
          {isSidebarOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </Button>
      </div>

      {/* Sidebar */}
      <div 
        className={`fixed inset-y-0 left-0 z-40 w-64 transform transition-transform duration-300 ease-in-out bg-sidebar border-r border-border md:translate-x-0 ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between px-4 h-16 border-b border-border">
            <div className="flex items-center gap-2">
              <BarChart3 className="h-6 w-6 text-primary" />
              <h1 className="text-xl font-bold">{t('expenseTracker')}</h1>
            </div>
          </div>
          <nav className="flex-1 overflow-y-auto p-4">
            <ul className="space-y-2">
              {navigation.map((item) => {
                const isActive = location.pathname === item.href;
                return (
                  <li key={item.name}>
                    <Link
                      to={item.href}
                      className={`flex items-center px-4 py-2 rounded-md transition-colors ${
                        isActive
                          ? 'bg-primary text-primary-foreground'
                          : 'text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground'
                      }`}
                      onClick={() => setIsSidebarOpen(false)}
                    >
                      <item.icon className="mr-3 h-5 w-5" />
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
          <div className="p-4 border-t border-border">
            <div className="flex justify-between">
              <ThemeSwitcher />
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col md:ml-64">
        <main className="flex-1 p-4 md:p-6">
          {children}
        </main>
      </div>

      {/* Overlay for mobile sidebar */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 z-30 bg-black bg-opacity-50 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </div>
  );
};

export default Layout;
