const convertTime12to24 = (time12h) => {
  if (!time12h || !time12h?.trim?.()) {
    return null;
  }
  const [time, modifier] = time12h.split(" ");

  let [hours, minutes] = time.split(":");

  if (hours === "12") {
    hours = "00";
  }

  if (modifier === "PM") {
    hours = parseInt(hours, 10) + 12;
  }
  return `2023-12-06T${hours}:${minutes}:17.689Z`;
};

module.exports = {
  convertTime12to24,
};
