import moment from 'moment';

export function ago (date) {
  var now = new Date();
  if (moment.duration(now - date).days() < 1) {
    return moment(date).fromNow();
  } else {
    return moment(date).format('MMM D, YYYY, HH:m:s');
  }
}

export function MMM_D_YYYY (date) {
  return moment(date).format('MMM D, YYYY');
}
