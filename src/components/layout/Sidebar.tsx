import React from 'react';
import {
  Building2, Users2, Settings, LayoutDashboard, LogOut,
  Eye, Target, Gem, Compass, Flag, CheckSquare,
  ClipboardList, BarChart2, MapPin
} from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';
import { useLanguage } from '../../contexts/LanguageContext';

interface SidebarProps {
  onNavigate: (page: 'dashboard' | 'companies' | 'users' | 'settings' | 'vision' |
    'mission' | 'values' | 'perspectivas' | 'goals' | 'objectives' |
    'action-plans' | 'swot' | 'strategic-map') => void;
}

export function Sidebar({ onNavigate }: SidebarProps) {
  const { user, logout } = useAuth();
  const { t } = useLanguage();
  
  return (
    <aside className="bg-gray-900 text-white w-64 min-h-screen p-4">
      <div className="flex items-center gap-2 mb-8">
        <Building2 className="h-8 w-8 text-blue-400" />
        <span className="text-xl font-bold">Enterprise Hub</span>
      </div>
      
      <nav className="space-y-2">
        <button
          onClick={() => onNavigate('dashboard')}
          className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-800 transition-colors w-full text-left"
        >
          <LayoutDashboard className="h-5 w-5" />
          <span>Dashboard</span>
        </button>
        
        {(user?.role === 'ADMIN' || user?.role === 'MASTER') && (
          <>
            <button
              onClick={() => onNavigate('vision')}
              className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-800 transition-colors w-full text-left"
            >
              <Eye className="h-5 w-5" />
              <span>Vision</span>
            </button>

            <button
              onClick={() => onNavigate('mission')}
              className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-800 transition-colors w-full text-left"
            >
              <Target className="h-5 w-5" />
              <span>Mission</span>
            </button>

            <button
              onClick={() => onNavigate('values')}
              className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-800 transition-colors w-full text-left"
            >
              <Gem className="h-5 w-5" />
              <span>Values</span>
            </button>

            <button
              onClick={() => onNavigate('perspectivas')}
              className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-800 transition-colors w-full text-left"
            >
              <Compass className="h-5 w-5" />
              <span>Perspectives</span>
            </button>

            <button
              onClick={() => onNavigate('goals')}
              className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-800 transition-colors w-full text-left"
            >
              <Flag className="h-5 w-5" />
              <span>Goals</span>
            </button>

            <button
              onClick={() => onNavigate('objectives')}
              className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-800 transition-colors w-full text-left"
            >
              <CheckSquare className="h-5 w-5" />
              <span>Objectives</span>
            </button>

            <button
              onClick={() => onNavigate('action-plans')}
              className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-800 transition-colors w-full text-left"
            >
              <ClipboardList className="h-5 w-5" />
              <span>Action Plans</span>
            </button>

            <button
              onClick={() => onNavigate('strategic-map')}
              className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-800 transition-colors w-full text-left"
            >
              <MapPin className="h-5 w-5" />
              <span>Strategic Map</span>
            </button>

            <button
              onClick={() => onNavigate('swot')}
              className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-800 transition-colors w-full text-left"
            >
              <BarChart2 className="h-5 w-5" />
              <span>SWOT Analysis</span>
            </button>

            <button
              onClick={() => onNavigate('users')}
              className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-800 transition-colors w-full text-left"
            >
              <Users2 className="h-5 w-5" />
              <span>Users</span>
            </button>
          </>
        )}
        
        {user?.role === 'ADMIN' && (
          <button
            onClick={() => onNavigate('companies')}
            className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-800 transition-colors w-full text-left"
          >
            <Building2 className="h-5 w-5" />
            <span>Companies</span>
          </button>
        )}
        
        <button
          onClick={() => onNavigate('settings')}
          className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-800 transition-colors w-full text-left"
        >
          <Settings className="h-5 w-5" />
          <span>Settings</span>
        </button>
      </nav>
      
      <button
        onClick={logout}
        className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-800 transition-colors mt-auto absolute bottom-4"
      >
        <LogOut className="h-5 w-5" />
        <span>Logout</span>
      </button>
    </aside>
  );
}