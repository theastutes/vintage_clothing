"use client";
import { toast } from "sonner";

const ToastNotification = ({
  message,
  description,
}: {
  message: string;
  description: string;
}) => {
  toast.warning(message, {
    description,
    position: "top-center",
  });

  return null;
};

export default ToastNotification;
