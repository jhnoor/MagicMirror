var config = {
  port: 80,
  ipWhitelist: ["0.0.0.0/0"], // Set [] to allow all IP addresses.
  // ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"], // Set [] to allow all IP addresses.

  language: "en",
  timeFormat: 24,
  units: "metric",

  modules: [
    {
      module: "alert"
    },
    {
      module: "updatenotification",
      position: "top_bar"
    },
    {
      module: "clock",
      position: "top_left"
    },
    {
      module: "calendar",
      header: "(navn)'s upcoming events",
      position: "top_left",
      config: {
        calendars: [
          {
            symbol: "calendar-check-o ",
            url: "https://calendar.google.com/calendar/ical/jamawadi%40gmail.com/private-83269bcfd5d192cae9b55016f9bf7d7b/basic.ics"
          }
        ]
      }
    },
    {
      module: "currentweather",
      position: "top_right",
      config: {
        location: "Trondheim",
        locationID: "03133880",  //ID from http://www.openweathermap.org/help/city_list.txt
        appid: "b83ae2c21675815fd0f615c1052ef016"
      }
    },
    {
      module: "weatherforecast",
      position: "top_right",
      header: "Weather Forecast",
      config: {
        location: "Trondheim",
        locationID: "03133880",  //ID from http://www.openweathermap.org/help/city_list.txt
        appid: "b83ae2c21675815fd0f615c1052ef016"
      }
    },
    {
      module: "newsfeed",
      position: "bottom_bar",
      config: {
        feeds: [
          {
            title: "E24",
            url: "https://e24.no/rss/"
          }
        ],
        showSourceTitle: true,
        showPublishDate: true
      }
    }
  ]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") { module.exports = config; }
