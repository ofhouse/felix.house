import * as React from 'react';

interface FormattedDateProps {
  date: string | Date;
}

const monthNamesShort = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

function formatDate(date: Date) {
  const year = date.getFullYear(); // 2020
  const month = date.getMonth(); // 1 -12
  const day = date.getDate(); // 1 - 31

  return `${monthNamesShort[month]} ${day}, ${year}`;
}

export const FormattedDate: React.FC<FormattedDateProps> = ({ date }) => {
  const dateString = React.useMemo(() => {
    const _date = typeof date === 'string' ? new Date(date) : date;
    return formatDate(_date);
  }, [date]);

  return <>{dateString}</>;
};
