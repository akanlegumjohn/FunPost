export const postTime = (time) => {
  const today = new Date();
  const differenceInMs = Math.abs(today - time);
  const differenceInSecs = Math.floor(differenceInMs / 1000);
  const differenceInMins = Math.floor(
    ((differenceInMs % 86400000) % 3600000) / 60000
  );
  const differenceInHrs = Math.floor((differenceInMs % 86400000) / 3600000);
  const differenceInDays = Math.floor(differenceInMs / 86400000);

  if (differenceInSecs < 60 && differenceInMs < 60) {
    return `${differenceInSecs}  ${
      differenceInSecs === 1 ? `sec ago` : `secs ago`
    }`;
  } else if (differenceInMins < 60 && differenceInHrs < 1) {
    return `${differenceInMins} ${
      differenceInMins === 1 ? `min ago` : `mins ago`
    }`;
  } else if (differenceInHrs < 24 && differenceInSecs < 86400) {
    return `${differenceInHrs}${differenceInHrs === 1 ? `hr ago` : `hrs ago`}`;
  } else {
    return `${differenceInDays} ${
      differenceInDays === 1 ? `day ago` : `days ago`
    }`;
  }
};

// const UpdatedAt = new Date(
//   'Mon Nov 24 2022 22:14:44 GMT+0000 (Greenwich Mean Time)'
// );
