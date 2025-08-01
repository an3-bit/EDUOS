
import { z } from 'zod';
import { PlusCircle } from 'lucide-react';

import { columns } from '@/app/dashboard/library/components/columns';
import { DataTable } from '@/app/dashboard/library/components/data-table';
import { bookSchema } from '@/app/dashboard/library/data/schema';
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
import { getLibraryBooks } from '@/api';

async function getBooks() {
  const response = await getLibraryBooks();
  if (response && response.data) {
    return z.array(bookSchema).parse(response.data);
  }
  return [];
}

export default async function LibraryManagementPage() {
  const books = await getBooks();

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
            <DialogContent className="sm:max-w-[425px]">
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
            <TabsList>
                <TabsTrigger value="books">Books</TabsTrigger>
                <TabsTrigger value="borrowing">Borrowing Records</TabsTrigger>
                <TabsTrigger value="fines">Fines</TabsTrigger>
            </TabsList>
            <TabsContent value="books">
                 <DataTable data={books} columns={columns} />
            </TabsContent>
            <TabsContent value="borrowing">
                <p className="text-muted-foreground p-4">Borrowing records will be displayed here.</p>
            </TabsContent>
            <TabsContent value="fines">
                 <p className="text-muted-foreground p-4">Fines will be displayed here.</p>
            </TabsContent>
        </Tabs>
      </div>
    </>
  );
}
