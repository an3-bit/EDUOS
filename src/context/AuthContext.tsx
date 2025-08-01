
"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useRouter } from 'next/navigation';
import { loginUser, registerUser } from '@/api';
import { User, UserRole } from '@/types';
import { jwtDecode } from 'jwt-decode';

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  register: (data: any) => Promise<void>;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Custom type for decoded token
interface DecodedToken {
    exp: number;
    // Add other properties from your token payload here
    role: UserRole; 
    email: string;
    first_name: string;
    last_name: string;
}


export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // For frontend development, we can mock a user
    const mockUser: User = {
        token: 'mock-token',
        role: UserRole.SUPER_ADMIN, // So all sidebar items are visible
        email: 'admin@eduos.com',
        firstName: 'Admin',
        lastName: 'User'
    }
    setUser(mockUser);
    setLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    // Mock login
    console.log("Mock login attempt with:", email);
    const mockUser: User = {
        token: 'mock-token',
        role: UserRole.SUPER_ADMIN, // Default to super admin for development
        email: email,
        firstName: 'Admin',
        lastName: 'User'
    }
    setUser(mockUser);
    return Promise.resolve();
  };

  const register = async (data: any) => {
    // Mock register
    console.log("Mock register attempt with:", data);
    return Promise.resolve();
  };

  const logout = () => {
    setUser(null);
    router.push('/');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, register, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

// A wrapper to protect routes
export function ProtectedRoute({ children }: { children: ReactNode }) {
    const { user, loading } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!loading && !user) {
            router.push('/');
        }
    }, [user, loading, router]);

    if (loading || !user) {
        return <div>Loading...</div>; // Or a proper loading spinner
    }

    return <>{children}</>;
}
