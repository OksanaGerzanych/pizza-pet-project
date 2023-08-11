import axios from "axios";

const options = {
  method: "GET",
  url: "https://pizza-and-desserts.p.rapidapi.com/pizzas/1",
  headers: {
    "X-RapidAPI-Key": "4fa1a96b42mshcd7bb2b8b778a18p18ffbejsnd7cd494d4645",
    "X-RapidAPI-Host": "pizza-and-desserts.p.rapidapi.com",
  },
};

try {
  const response = await axios.request(options);
  console.log(response.data);
} catch (error) {
  console.error(error);
}
