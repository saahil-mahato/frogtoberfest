import dayjs from 'dayjs';

const getTimeMessage = () => {
  const today = new Date();
  const currentMonth = today.getMonth();

  const november8 = dayjs(`${today.getFullYear()}-11-08`);
  const daysLeft = november8.diff(today, 'day');

  if (currentMonth < 9) {
    const currentYear = today.getFullYear();

    return `Stay tuned for frogtoberfest ${currentYear} !!`;
  }

  if (november8.isBefore(today)) {
    return `Thank you for your participation. Stay tuned for Next Year !!`;
  }

  if (daysLeft === 0) {
    return "It's the very last day! Get your last PRs in!";
  }

  if (daysLeft === 1) {
    return 'One more day, keep it going!';
  }

  if (daysLeft < 10) {
    return `Only ${daysLeft} days left. You can do it!`;
  }

  return `${daysLeft} days remaining!`;
};

export default getTimeMessage;
