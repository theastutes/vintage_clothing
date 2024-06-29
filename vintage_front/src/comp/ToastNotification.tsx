"use client";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const ToastNotification = ({
  message,
  description,
}: {
  message: string;
  description: string;
}) => {
  const router = useRouter();
  toast.warning(message, {
    description,
    position: "bottom-right",
    action: {
      label: "Retry",
      onClick: () => router.refresh(),
    },
  });

  return null; // This component doesn't render anything visible
};

export default ToastNotification;
