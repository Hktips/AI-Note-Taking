import { toast } from "sonner"

export function useToast() {
  return {
    toast,
    success: (message: string, options?: object) =>
      toast.success(message, options),
    error: (message: string, options?: object) =>
      toast.error(message, options),
    info: (message: string, options?: object) =>
      toast.message(message, options),
  }
}
