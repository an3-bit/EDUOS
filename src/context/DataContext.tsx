
"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { mockData } from '@/lib/assets';
import { Student } from '@/app/dashboard/students/data/schema';
import { Teacher } from '@/app/dashboard/teachers/data/schema';
import { Class } from '@/app/dashboard/academics/data/schema';
import { Exam } from '@/app/dashboard/assessments/data/schema';
import { Invoice } from '@/app/dashboard/fee/data/schema';
import { Guardian, GuardianNotification } from '@/app/dashboard/parents/data/schema';
import { Book } from '@/app/dashboard/library/data/schema';

interface DataContextType {
  students: Student[];
  teachers: Teacher[];
  classes: Class[];
  classLevels: any[];
  streams: any[];
  exams: Exam[];
  examResults: any[];
  examStats: any[];
  invoices: Invoice[];
  guardians: Guardian[];
  guardianNotifications: GuardianNotification[];
  linkedStudents: any[];
  libraryBooks: Book[];
  subjectAnalytics: any;
  loading: boolean;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider = ({ children }: { children: ReactNode }) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<Omit<DataContextType, 'loading'>>({
    students: [],
    teachers: [],
    classes: [],
    classLevels: [],
    streams: [],
    exams: [],
    examResults: [],
    examStats: [],
    invoices: [],
    guardians: [],
    guardianNotifications: [],
    linkedStudents: [],
    libraryBooks: [],
    subjectAnalytics: {},
  });

  useEffect(() => {
    // In a real app, you'd fetch this data from an API.
    // For now, we're just using the mock data from assets.
    setData(mockData);
    setLoading(false);
  }, []);

  const value = { ...data, loading };

  return (
    <DataContext.Provider value={value}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};
