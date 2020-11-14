const axios = require("axios").default;
const express = require("express");

const app = express();

const baseURL = "https://apidojo-yahoo-finance-v1.p.rapidapi.com";
const headers = {
  "x-rapidapi-key": "a30144df83msh97c5c4b72a7ead4p1a1ae9jsnce2343467992",
  "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
};

app.get("/analysis", async (req, res) => {
  const symbol = req.query.symbol;

  const options = {
    method: "GET",
    url: `${baseURL}/stock/v2/get-analysis`,
    params: { symbol },
    headers,
  };

  const result = await axios
    .request(options)
    .then((res) => res.data)
    .catch((err) => err);

  res.json(result);
});

app.get("/news", async (req, res) => {
  const symbol = req.query.symbol;

  const options = {
    method: "GET",
    url: `${baseURL}/auto-complete`,
    params: { q: symbol },
    headers,
  };

  const result = await axios
    .request(options)
    .then((res) => res.data)
    .catch((err) => err);

  res.json(result);
});

app.listen(4000, () => console.log("server started on port 4000"));
