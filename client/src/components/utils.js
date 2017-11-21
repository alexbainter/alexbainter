import dateFormat from 'dateformat';

const stringifySkills = skills =>
  skills
    .map(({ name }) => name)
    .sort()
    .join(', ');

const formatDate = date => dateFormat(date, 'mmm yyyy');

const ifEmpty = arr => fn => {
  if (arr.length === 0) {
    fn();
  }
};

export { stringifySkills, formatDate, ifEmpty };
