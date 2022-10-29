export const formatTimer = (minutes) => {
  let timer = minutes;
  let format = 'minute';
  if (minutes > 59) {
    timer = Math.floor(minutes / 60);
    format = 'hour';
  }
  if (format === 'hour' && timer >= 24) {
    timer = Math.floor(timer / 24);
    format = 'day';
  }
  if (format === 'day' && timer >= 30) {
    timer = Math.floor(timer / 30);
    format = 'month';
  }
  if (format === 'month' && timer >= 12) {
    timer = Math.floor(timer / 12);
    format = 'year';
  }
  return {
    timer,
    format,
  }
}

export const validateEmail = (email) => {
  const mailFormat = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  if (email.match(mailFormat)) {
    return true;
  }
  return false;
};

export const getElapsedMinutes = (startDate) => {
  const start = new Date(startDate);
  const endDate = new Date();
  let diff =(start.getTime() - endDate.getTime()) / 1000;
  diff /= 60;
  return Math.abs(Math.round(diff));
};

