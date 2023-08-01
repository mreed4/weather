// Docs on event and context https://docs.netlify.com/functions/build/#code-your-function-2
const handler = async (event) => {
  const { lat, lon } = event.queryStringParameters;
  const API_KEY = process.env.API_KEY;

  const endpoint = "https://api.openweathermap.org/data/2.5/forecast";
  const searchOptions = [`appid=${API_KEY}`, "units=imperial", `lat=${lat}`, `lon=${lon}`].join("&");

  const url = [endpoint, searchOptions].join("?");

  const response = await fetch(url);
  const data = await response.json();

  if (!response.ok) {
    return {
      statusCode: response.status,
      body: JSON.stringify(data),
    };
  }

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
