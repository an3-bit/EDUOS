
"use client";

import { PlusCircle, MessageSquare } from 'lucide-react';

import { columns } from '@/app/dashboard/parents/components/columns';
import { DataTable } from '@/app/dashboard/parents/components/data-table';
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
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useData } from '@/context/DataContext';

export default function GuardianPortalPage() {
  const { guardians, guardianNotifications, linkedStudents } = useData();

  const augmentedGuardians = guardians.map((guardian: any) => ({
      ...guardian,
      name: `${guardian.user_details?.first_name || 'N/A'} ${guardian.user_details?.last_name || 'N/A'}`,
      studentName: guardian.linked_students?.map((s:any) => s.name).join(', ') || 'N/A',
      status: guardian.is_active ? 'Active' : 'Inactive',
    }));

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
            <DialogContent className="sm:max-w-[550px]">
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
            <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="guardians">Guardians</TabsTrigger>
                <TabsTrigger value="communication">Communication</TabsTrigger>
                 <TabsTrigger value="linked-students">Linked Students</TabsTrigger>
            </TabsList>
            <TabsContent value="guardians">
                 <DataTable data={augmentedGuardians} columns={columns} />
            </TabsContent>
            <TabsContent value="communication">
                <Card>
                    <CardHeader>
                        <CardTitle>Recent Communications</CardTitle>
                        <CardDescription>A log of all notifications sent to guardians.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        {guardianNotifications.map((comm: any) => (
                             <div key={comm.id} className="flex items-start gap-4">
                                <Avatar>
                                    <AvatarImage src="https://placehold.co/100x100" data-ai-hint="person user"/>
                                    <AvatarFallback>{comm.guardian_name?.substring(0,2) || 'G'}</AvatarFallback>
                                </Avatar>
                                <div className="space-y-1">
                                    <p className="font-medium">{comm.guardian_name}</p>
                                    <p className="font-bold text-sm">{comm.title}</p>
                                    <p className="text-sm text-muted-foreground">{comm.message}</p>
                                    <p className="text-xs text-muted-foreground">{new Date(comm.timestamp).toLocaleString()}</p>
                                </div>
                            </div>
                        ))}
                    </CardContent>
                </Card>
            </TabsContent>
             <TabsContent value="linked-students">
                 <Card>
                    <CardHeader>
                        <CardTitle>Guardian-Student Links</CardTitle>
                        <CardDescription>All registered relationships between guardians and students.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ul className="divide-y divide-border">
                           {linkedStudents.map((link: any, index: any) => (
                               <li key={index} className="py-3 flex justify-between items-center">
                                   <div>
                                        <span className="font-semibold">{link.guardianName}</span>
                                        <span className="text-muted-foreground"> is the </span>
                                        <span className="font-semibold">{link.relationship}</span>
                                        <span className="text-muted-foreground"> of </span>
                                        <span className="font-semibold">{link.studentName}</span>
                                   </div>
                                    <Button variant="ghost" size="sm">Manage</Button>
                               </li>
                           ))}
                        </ul>
                    </CardContent>
                 </Card>
            </TabsContent>
        </Tabs>
      </div>
    </>
  );
}
