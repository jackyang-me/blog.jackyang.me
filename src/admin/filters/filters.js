import moment from 'moment';

export function ago (date) {
  let now = new Date()
  if (moment.duration(now - date).days() < 1) {
    return moment(date).fromNow()
  } else {
    return moment(date).format('MMM D, YYYY, HH:m:s')
  }
}

export function MMM_D_YYYY (date) {
  return moment(date).format('MMM D, YYYY')
}

export function MMM_D_YYYY_HH_mm (date) {
  return moment(date).format('MMM D, YYYY, HH:mm')
}

export function iso (date) {
  if (!date) {
    return ''
  } else {
    return date.iso ? new Date(date.iso) : new Date(date)
  }
}

export function qiniuTinyImage (qiniuImageUrl) {
  return qiniuImageUrl ? qiniuImageUrl + '?imageView2/2/w/100' : ''
}
