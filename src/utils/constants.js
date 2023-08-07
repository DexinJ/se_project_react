const latitude = 34.05;
const longitude = -118.24;
const APIkey = "791e0eb33eb84e901df9e55dfa0aa052";
const defaultClothingItems = [
  {
    _id: 0,
    name: "Cap",
    weather: "hot",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Cap.png?etag=f3dad389b22909cafa73cff9f9a3d591",
  },
  {
    _id: 1,
    name: "Hoodie",
    weather: "warm",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Hoodie.png?etag=5f52451d0958ccb1016c78a45603a4e8",
  },
  {
    _id: 2,
    name: "Jacket",
    weather: "cold",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Jacket.png?etag=f4bb188deaa25ac84ce2338be2d404ad",
  },
  {
    _id: 3,
    name: "Sneakers",
    weather: "cold",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Sneakers.png?etag=3efeec41c1c78b8afe26859ca7fa7b6f",
  },
  {
    _id: 4,
    name: "T-Shirt",
    weather: "hot",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/T-Shirt.png?etag=44ed1963c44ab19cd2f5011522c5fc09",
  },
  {
    _id: 5,
    name: "Winter coat",
    weather: "cold",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Coat.png?etag=298717ed89d5e40b1954a1831ae0bdd4",
  },
];
const weatherOptions = [
  { url: "/images/day/sunny.svg", day: true, type: "sunny" },
  { url: "/images/day/cloudy.svg", day: true, type: "cloudy" },
  { url: "/images/day/rainy.svg", day: true, type: "rainy" },
  { url: "/images/day/snowy.svg", day: true, type: "snowy" },
  { url: "/images/day/stormy.svg", day: true, type: "stormy" },
  { url: "/images/day/foggy.svg", day: true, type: "foggy" },
  { url: "/images/night/sunny.svg", day: false, type: "sunny" },
  { url: "/images/night/cloudy.svg", day: false, type: "cloudy" },
  { url: "/images/night/rainy.svg", day: false, type: "rainy" },
  { url: "/images/night/snowy.svg", day: false, type: "snowy" },
  { url: "/images/night/stormy.svg", day: false, type: "stormy" },
  { url: "/images/night/foggy.svg", day: false, type: "foggy" },
];
export { latitude, longitude, APIkey, defaultClothingItems, weatherOptions };
