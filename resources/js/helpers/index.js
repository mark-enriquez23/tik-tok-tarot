import Swal from 'sweetalert2';

export const swalOops = (message = 'Something went wrong!') => {
    return Swal.fire({
        title: "Oops!",
        text: message,
        icon: "error",
      });
}

export const swalSuccess = (message = 'Action successfuly finished!') => {
    return Swal.fire({
        title: "Success!",
        text: message,
        icon: "success",
    });
}