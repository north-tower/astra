'use client'

import useAdminId from '@/hooks/useAdminId';
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { useToast } from './ui/use-toast';
import { Dialog, DialogClose, DialogContent, DialogDescription,
    DialogFooter,
    DialogHeader,DialogTitle,DialogTrigger
} from "@/components/ui/dialog";
import { Button } from "./ui/button";

function DeleteChatButton({chatId}: { chatId: string}) {
    const { data: session} = useSession();
    const [ open,  setOpen] = useState(false);
    const { toast } = useToast();
    const router = useRouter();
    const adminId = useAdminId({ chatId });

    const handleDelete = async () => {
        toast({
            title:"Deleting Chat",
            description: "Please wait while we delete the chat..."
        });

        console.log("Deleting : " , chatId);

        await fetch("/api/chat/delete", {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ chatId: chatId}),
        }).then((res) => {
            toast({
                title: "Success",
                description: "Your chat has been deleted",
                className: "bg-green-600 text-white",
                duration: 3000,
            });
            router.replace('/chat');

        })
    };
    
  return (
    session?.user.id === adminId && (
        <Dialog onOpenChange={setOpen} open={open} >
        <DialogTrigger asChild>
            <Button variant="destructive">
               Delete Chat
            </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
            <DialogHeader>
                <DialogTitle>Are you sure?</DialogTitle>
                <DialogDescription>
                    This will delete the chat for all users.
                </DialogDescription>
            </DialogHeader>
            <div className="grid grid-cols-2 space-x-2">
                <Button variant={"destructive"} onClick={handleDelete}>
                    Delete
                </Button>
               <Button variant={"outline"} >
                    Cancel
                </Button>
            </div>
           
        </DialogContent>

    </Dialog>
    )
  )
}

export default DeleteChatButton