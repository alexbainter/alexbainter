import dateFormat from 'dateformat';

const stringifySkills = skills =>
  skills
    .map(({ name }) => name)
    .sort()
    .join(', ');

const formatDate = date => dateFormat(date, 'mmm yyyy');

export { stringifySkills, formatDate };
