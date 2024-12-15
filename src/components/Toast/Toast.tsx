import Swal from "sweetalert2";

// Define the Toast function with type annotations for the parameters
const Toast = async (
  type: "success" | "error" | "warning" | "info" | "question",
  title: string
): Promise<void> => {
  await Swal.fire({
    position: "top",
    icon: type,
    title: title,
    showConfirmButton: false,
    toast: true,
    timer: 1500,
  });
};

export default Toast;
