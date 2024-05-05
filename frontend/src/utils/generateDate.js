const generateDate = (date, type = "long") => {
  let all_month;
  if (type == "short") {
    all_month = [
      "01",
      "02",
      "03",
      "04",
      "05",
      "06",
      "07",
      "08",
      "09",
      "10",
      "11",
      "12",
    ];
  } else {
    all_month = [
      "Janvier",
      "Février",
      "Mars",
      "Avril",
      "Mai",
      "Juin",
      "Juillet",
      "Août",
      "Septembre",
      "Octobre",
      "Novembre",
      "Décembre",
    ];
  }
  let month = parseInt(new Date(date).getMonth());
  // month = month < 10 ? '0'+month : month
  let actual_date = new Date(date).getDate();
  actual_date = actual_date < 10 ? "0" + actual_date : actual_date;
  let year = new Date(date).getFullYear();
  let separator = type == "short" ? "-" : " ";
  let result = actual_date + separator + all_month[month] + separator + year;
  return result;
};

export default generateDate;
