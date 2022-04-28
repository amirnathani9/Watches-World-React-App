import { toast } from "react-toastify";

const useToast = () => {
  const showToast = (toastMsg, toastTheme) => {
    const notify = () => {
      toast[toastTheme](toastMsg, {
        position: "bottom-right",
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
  return { showToast };
};
export { useToast };
