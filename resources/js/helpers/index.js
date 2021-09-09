import Swal from 'sweetalert2'
import { getMetadata, getThumbnails } from 'video-metadata-thumbnails'
import moment from 'moment'

export const swalOops = (message = 'Something went wrong!') => {
  return Swal.fire({
    title: 'Oops!',
    text: message,
    icon: 'error'
  })
}

export const swalSuccess = (message = 'Action successfuly finished!') => {
  return Swal.fire({
    title: 'Success!',
    text: message,
    icon: 'success'
  })
}

export const createObjectURL = (object) => { // convert video url to blob
  return (window.URL) ? window.URL.createObjectURL(object) : window.webkitURL.createObjectURL(object)
}

export const videoToBlob = async (videoStream) => {
  return await fetch(videoStream).then(r => r.blob())
}

export const blobVideoToBlobThumbnail = async (blob) => {
  const thumbnails = await getThumbnails(blob, {
    interval: 1,
    start: 2,
    end: 3
  })

  return thumbnails[0]['blob']
}

export const setPagination = (data) => {
  let pagination = {
    current_page: data.current_page,
    last_page: data.last_page,
    next_url: data.next_page_url,
    prev_url: data.prev_page_url,
    total: data.total
  }

  return pagination
}

export const momentFormat = (date, format = 'D MMM YYYY') => {
  let f = format || 'D MMM YYYY'
  return moment(date).format(f)
}
