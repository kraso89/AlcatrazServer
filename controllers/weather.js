const fetch = require("node-fetch");
module.exports = {
  fetch: async (city) => {
    const url = `${process.env.OPEN_WEATHER_URL}forecast?q=${city}&units=metric&appid=44e814a54f90b2b057c755d695972a44`
    const response = await fetch(url);
    return response.json();
  }
}
