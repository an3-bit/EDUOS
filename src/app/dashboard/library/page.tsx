
"use client";

import { PlusCircle } from 'lucide-react';

import { columns } from '@/app/dashboard/library/components/columns';
import { DataTable } from '@/app/dashboard/library/components/data-table';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { BookForm } from './components/book-form';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { useData } from '@/context/DataContext';

export default function LibraryManagementPage() {
  const { libraryBooks } = useData();

  return (
    <>
      <div className="flex items-center justify-between space-y-2">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Library Management</h2>
          <p className="text-muted-foreground">
            Manage books, borrowing, fines, and inventory.
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Dialog>
            <DialogTrigger asChild>
              <Button>
                <PlusCircle className="mr-2 h-4 w-4" /> Add Book
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[480px]">
              <DialogHeader>
                <DialogTitle>Add New Book</DialogTitle>
                <DialogDescription>
                  Fill in the details below to add a new book to the library.
                </DialogDescription>
              </DialogHeader>
              <BookForm />
            </DialogContent>
          </Dialog>
        </div>
      </div>
      <div className="mt-6">
        <Tabs defaultValue="books">
            <TabsList className="grid w-full grid-cols-5">
                <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
                <TabsTrigger value="books">Books</TabsTrigger>
                <TabsTrigger value="borrowing">Borrowing</TabsTrigger>
                <TabsTrigger value="fines">Fines</TabsTrigger>
                <TabsTrigger value="members">Members</TabsTrigger>
            </TabsList>
            <TabsContent value="dashboard">
                <Card>
                    <CardHeader>
                        <CardTitle>Library Dashboard</CardTitle>
                        <CardDescription>Overview of library activities.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground p-4">Charts and KPIs will be displayed here.</p>
                    </CardContent>
                </Card>
            </TabsContent>
            <TabsContent value="books">
                 <DataTable data={libraryBooks} columns={columns} />
            </TabsContent>
            <TabsContent value="borrowing">
                <Card>
                    <CardHeader>
                        <CardTitle>Borrowing Records</CardTitle>
                        <CardDescription>All current and past borrowing transactions.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground p-4">Borrowing records will be displayed here.</p>
                    </CardContent>
                </Card>
            </TabsContent>
            <TabsContent value="fines">
                 <Card>
                    <CardHeader>
                        <CardTitle>Fines Management</CardTitle>
                        <CardDescription>All outstanding and paid fines.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground p-4">Fines will be displayed here.</p>
                    </CardContent>
                </Card>
            </TabsContent>
            <TabsContent value="members">
                <Card>
                    <CardHeader>
                        <CardTitle>Library Members</CardTitle>
                        <CardDescription>Manage student and teacher library memberships.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground p-4">A list of library members will be displayed here.</p>
                    </CardContent>
                </Card>
            </TabsContent>
        </Tabs>
      </div>
    </>
  );
}
