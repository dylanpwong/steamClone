import React from "react";
//2020-08-05T23:22:30.225Z
const dateGetter = (props) => {
  let year = props.date.slice(0, 4);
  let month = props.date.slice(5, 7);
  let day = props.date.slice(8, 10);

  let intMonth = parseInt(month, 10);
  switch (intMonth) {
    case 1:
      month = "Jan";
      break;
    case 2:
      month = "Jan";
      break;
    case 3:
      month = "Jan";
      break;
    case 4:
      month = "Jan";
      break;
    case 5:
      month = "Jan";
      break;
    case 6:
      month = "Jan";
      break;
    case 7:
      month = "Jan";
      break;
    case 8:
      month = "Jan";
      break;
    case 9:
      month = "Jan";
      break;
    case 10:
      month = "Jan";
      break;
    case 11:
      month = "Jan";
      break;
    case 12:
      month = "Jan";
      break;
  }
  return (
    <div>
      {`${month} ${day} ${year}`}
    </div>
  );
};
export default dateGetter;
