import { Dispatch, SetStateAction } from "react"
import { useToast } from "./ui/use-toast";
import { Dialog, DialogContent, DialogDescription,
    DialogHeader,DialogTitle,DialogTrigger
} from "@/components/ui/dialog";
import { Button } from "./ui/button";
import { Copy } from "lucide-react";

function ShareLink({
    isOpen,chatId,setIsOpen
}: {
    isOpen: boolean;
    chatId: string;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
}) {
    const { toast } = useToast();
    const host = window.location.host;

    const linkToChat = process.env.NODE_ENV == "development" ?
    `http://${host}/chat/${chatId}` :
    `https://${host}/chat/${chatId}`;


    async function copyToClipboard() {
        try{
            await navigator.clipboard.writeText(linkToChat);
            console.log("Text copied to clipboard");

            toast({
                title: "Copied Successfully",
                description: "Share to the person ypu want to chat with! (NOTE: They must be added to the chat to access it!",
                className: "bg-green-600 text-white",
            });
        } catch(err) {
            console.log("Failed to copy text:" , err);
        }
        
    }
  return (
    <Dialog onOpenChange={(open) => setIsOpen(open)} open={isOpen} defaultOpen={isOpen}>
        <DialogTrigger asChild>
            <Button variant="outline">
                <Copy className="mr-2" />
                Share Link
            </Button>
        </DialogTrigger>

    </Dialog>
  )
}

export default ShareLink