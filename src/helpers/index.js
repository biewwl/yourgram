export const formatTimer = (minutes) => {
  let timer = minutes;
  let format = 'minutes';
  if (minutes > 59) {
    timer = Math.floor(minutes / 60);
    format = 'hour';
  }
  if (format === 'hour' && timer >= 24) {
    timer = Math.floor(timer / 24);
    format = 'day';
  }
  return {
    timer,
    format,
  }
}