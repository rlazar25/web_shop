// utils/toastHelpers.js
import { toast } from "react-toastify";

export const showToast = {
  success: (msg) => toast.success(msg, { autoClose: 2000 }),
  error: (msg) => toast.error(msg, { autoClose: 2000 }),
  info: (msg) => toast.info(msg, { autoClose: 2000 }),
  warn: (msg) => toast.warn(msg, { autoClose: 2000 }),
};
