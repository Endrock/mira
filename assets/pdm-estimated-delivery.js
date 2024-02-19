(async () => {
  const LOCATION_URL =
    "https://us-central1-functions-358315.cloudfunctions.net/location";
  const DELIVERY_URL =
    "https://webhooks.endrock.software/endrockapi/v3/app/mira/orderByReceive/all ";

  const getLocation = async () => {
    return fetch(LOCATION_URL).then((res) => res.json());
  };

  const getDates = async (locationInfo) => {
    return fetch(DELIVERY_URL, {
      method: "POST",
      body: JSON.stringify(locationInfo),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());
  };

  /**
   * Formats a date to show in the widget
   *
   * @param date {Date} date to format
   */
  const formatDate = (date) => {
    const month = date.toLocaleString("en-us", { month: "short" });
    const day =
      date.getDate() +
      ((d) => {
        if (d > 3 && d < 21) return "th";
        switch (d % 10) {
          case 1:
            return "st";
          case 2:
            return "nd";
          case 3:
            return "rd";
          default:
            return "th";
        }
      })(date.getDate());

    return `${month} ${day}`;
  };

  const location = await getLocation();
  const dates = await getDates(location);

  const { delivery_max_date_at, delivery_min_date_at } = dates.data;

  const maxDate = formatDate(new Date(delivery_max_date_at.replace(/-/g, "/")));
  const minDate = formatDate(new Date(delivery_min_date_at.replace(/-/g, "/")));

  document.querySelector("#initial-date").innerHTML = minDate;
  document.querySelector("#final-date").innerHTML = maxDate;
})();
