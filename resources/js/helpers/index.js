import Swal from 'sweetalert2';
import { getMetadata, getThumbnails } from 'video-metadata-thumbnails';

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

export const createObjectURL = (object) => { // convert video url to blob
    return (window.URL) ? window.URL.createObjectURL(object) : window.webkitURL.createObjectURL(object);
}

export const videoToBlob = async (videoStream) => {
    return await fetch(videoStream).then(r => r.blob())
}

export const blobVideoToBlobThumbnail = async (blob) => {
    const thumbnails = await getThumbnails(blob, {
        interval: 1,
        start: 2,
        end: 3
    });

    return thumbnails[0]['blob']
}