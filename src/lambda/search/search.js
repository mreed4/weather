const handler = async (event) => {
  const { location } = event.queryStringParameters;
  const API_KEY = process.env.API_KEY;

  const endpoint = "https://api.openweathermap.org/data/2.5/weather";
  const searchOptions = [`q=${location}`, `appid=${API_KEY}`, "units=imperial"].join("&");

  const url = [endpoint, searchOptions].join("?");

  const response = await fetch(url);
  const data = await response.json();

  if (!response.ok) {
    return {
      statusCode: response.status,
      body: JSON.stringify(data),
    };
  }

  console.log(data);

  try {
    return {
      statusCode: response.status,
      body: JSON.stringify(data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ msg: error.message }),
    };
  }
};

module.exports = { handler };
