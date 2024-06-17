import useAdminId from '@/hooks/useAdminId';
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router';
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

    const handleDelete = async () => {};
    
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
                    Delete
                </Button>
            </div>
           
        </DialogContent>

    </Dialog>
    )
  )
}

export default DeleteChatButton