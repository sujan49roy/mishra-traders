import { MessageSquare } from "lucide-react";
import { cn } from "@/lib/utils";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/9804906236"
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "fixed bottom-6 right-6 z-50",
        "bg-[#25D366] text-white p-4 rounded-full shadow-lg",
        "hover:bg-[#1da851] transition-colors",
        "flex items-center justify-center"
      )}
      aria-label="Chat with us on WhatsApp"
    >
      <MessageSquare className="w-6 h-6" />
    </a>
  );
};

export default WhatsAppButton;