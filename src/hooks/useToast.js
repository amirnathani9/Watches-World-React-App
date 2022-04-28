import { toast } from "react-toastify";

export const useToast = () => {
  const showToast = (toastMsg, toastTheme) => {
    const notify = () => {
      toast[toastTheme](toastMsg, {
        position: "bottom-left",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    };
    notify();
  };
  return showToast;
};
