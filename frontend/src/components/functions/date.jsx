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
      month = "Feb";
      break;
    case 3:
      month = "March";
      break;
    case 4:
      month = "April";
      break;
    case 5:
      month = "May";
      break;
    case 6:
      month = "June";
      break;
    case 7:
      month = "July";
      break;
    case 8:
      month = "Aug";
      break;
    case 9:
      month = "Sept";
      break;
    case 10:
      month = "Oct";
      break;
    case 11:
      month = "Nov";
      break;
    case 12:
      month = "Dec";
      break;
  }
  return (
    <div>
      {`${month} ${day} ${year}`}
    </div>
  );
};
export default dateGetter;
