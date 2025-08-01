
import { z } from 'zod';
import { PlusCircle, MessageSquare } from 'lucide-react';

import { columns } from '@/app/dashboard/parents/components/columns';
import { DataTable } from '@/app/dashboard/parents/components/data-table';
import { guardianSchema } from '@/app/dashboard/parents/data/schema';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { GuardianForm } from './components/guardian-form';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { getGuardians } from '@/api';

async function getGuardiansData() {
  const response = await getGuardians();
  if (response && response.data && Array.isArray(response.data.results)) {
    return z.array(guardianSchema).parse(response.data.results);
  }
  return [];
}

export default async function GuardianPortalPage() {
  const guardians = await getGuardiansData();

  return (
    <>
      <div className="flex items-center justify-between space-y-2">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Guardian Portal</h2>
          <p className="text-muted-foreground">
            Manage guardian access and communication.
          </p>
        </div>
        <div className="flex items-center space-x-2">
           <Button variant="outline">
            <MessageSquare className="mr-2 h-4 w-4" /> Send Broadcast
          </Button>
          <Dialog>
            <DialogTrigger asChild>
              <Button>
                <PlusCircle className="mr-2 h-4 w-4" /> Add Guardian
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Add New Guardian</DialogTitle>
                <DialogDescription>
                  Fill in the details below to add a new guardian.
                </DialogDescription>
              </DialogHeader>
              <GuardianForm />
            </DialogContent>
          </Dialog>
        </div>
      </div>
       <div className="mt-6">
        <Tabs defaultValue="guardians">
            <TabsList>
                <TabsTrigger value="guardians">Guardians</TabsTrigger>
                <TabsTrigger value="communication">Communication</TabsTrigger>
                 <TabsTrigger value="linked-students">Linked Students</TabsTrigger>
            </TabsList>
            <TabsContent value="guardians">
                 <DataTable data={guardians} columns={columns} />
            </TabsContent>
            <TabsContent value="communication">
                <Card>
                    <CardHeader>
                        <CardTitle>Recent Communications</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="flex items-start gap-4">
                            <Avatar>
                                <AvatarImage src="https://placehold.co/100x100" data-ai-hint="person user"/>
                                <AvatarFallback>JS</AvatarFallback>
                            </Avatar>
                            <div className="space-y-1">
                                <p className="font-medium">John Smith (Parent of Jane Doe)</p>
                                <p className="text-sm text-muted-foreground">Inquiry about fee structure.</p>
                                <p className="text-xs text-muted-foreground">2 hours ago</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </TabsContent>
             <TabsContent value="linked-students">
                <p className="text-muted-foreground p-4">Linked students will be displayed here.</p>
            </TabsContent>
        </Tabs>
      </div>
    </>
  );
}
