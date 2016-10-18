import moment from 'moment';

export function ago (date) {
  return moment(date).fromNow();
}

export function MMM_D_YYYY (date) {
  return moment(date).format('MMM D, YYYY');
}
