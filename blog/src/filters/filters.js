import moment from 'moment';

export function ago (date) {
  return moment(date).fromNow();
}
