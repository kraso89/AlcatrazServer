const fetch = require("node-fetch");
module.exports = {
  fetch: async (city) => {
    const url = `${process.env.OPEN_WEATHER_URL}forecast?q=${city}&units=metric&appid=${process.env.API_KEY}`
    const response = await fetch(url);
    return response.json();
  }
}
