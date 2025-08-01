
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
  register: (email: string, password: string, role: UserRole) => Promise<void>;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Custom type for decoded token
interface DecodedToken {
    exp: number;
    // Add other properties from your token payload here
    role: UserRole; 
    email: string;
}


export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      try {
        const decodedToken = jwtDecode<DecodedToken>(token);
        if (decodedToken.exp * 1000 > Date.now()) {
          setUser({ token, role: decodedToken.role, email: decodedToken.email });
        } else {
          // Token expired
          localStorage.removeItem('authToken');
        }
      } catch (error) {
        console.error("Invalid token:", error);
        localStorage.removeItem('authToken');
      }
    }
    setLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    const response = await loginUser({ email, password });
    const { access: token } = response.data;
    localStorage.setItem('authToken', token);
    const decodedToken = jwtDecode<DecodedToken>(token);
    setUser({ token, role: decodedToken.role, email: decodedToken.email });
  };

  const register = async (email: string, password: string, role: UserRole) => {
    await registerUser({ email, password, role });
  };

  const logout = () => {
    localStorage.removeItem('authToken');
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
