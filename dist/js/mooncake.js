function midAutumnFestivalWithSavvycom() {
  console.log("Happy Mid Autumn festival ❤, here is your perfect mooncake for this year's event 🥮")
  var flavors = [
    "./src/images/mooncake/cheese.jpg",
    "./src/images/mooncake/chocolate.jpg",
    "./src/images/mooncake/coconutmilk.jpg",
    "./src/images/mooncake/coffee.jpg",
    "./src/images/mooncake/durian.jpg",
    "./src/images/mooncake/hazelnut.jpg",
    "./src/images/mooncake/jambon.jpg",
    "./src/images/mooncake/jelly.jpg",
    "./src/images/mooncake/matcha.jpg",
    "./src/images/mooncake/milktea.jpg",
    "./src/images/mooncake/mixed.jpg",
    "./src/images/mooncake/molteneggyolk.jpg",
    "./src/images/mooncake/mungbean.jpg",
    "./src/images/mooncake/redbean.jpg",
    "./src/images/mooncake/sesame.jpg",
    "./src/images/mooncake/taro.jpg",
    "./src/images/mooncake/tiramisu.jpg"
  ];

  var wishes = [
    "Chúc bạn và gia đình có một Tết Trung Thu tràn đầy niềm vui và hạnh phúc! 🥮🥮",
    "Mong rằng trăng rằm sáng sủa sẽ mang đến cho bạn sự may mắn và thành công trong cuộc sống 🥮🥮",
    "Chúc bạn được bao quanh bởi tình yêu và sự ấm áp của gia đình và những người thân yêu 🥮🥮",
    "Xin kính chúc mừng bạn có một bữa tiệc Trung Thu thật nhiều món ngon và hương vị truyền thống 🥮🥮",
    "Hy vọng rằng những chiếc đèn lồng lung linh sẽ đem đến cho bạn sự may mắn và thịnh vượng trong cuộc sống 🥮🥮",
    "Xin kính chúc mừng bạn có một đêm Trung Thu tràn đầy niềm vui, ân cần và tràn đầy tiếng cười 🥮🥮",
    "Chúc bạn được gặp gỡ và chia sẻ những khoảnh khắc vui vẻ cùng gia đình và bạn bè thân yêu 🥮🥮"
  ]
  var randomIndexF = Math.floor(Math.random() * flavors.length);
  var randomIndexW = Math.floor(Math.random() * wishes.length);
  var randomFlavor = flavors[randomIndexF];
  var randomWish = wishes[randomIndexW];
  const eleM = document.getElementById("mooncake");
  eleM.src = randomFlavor;
  const eleW = document.getElementById("wishes");
  eleW.innerHTML = randomWish;
  return randomFlavor;
}

var mooncakeFlavor = midAutumnFestivalWithSavvycom();
console.log("Enjoy your", mooncakeFlavor, "mooncake for the Mid-Autumn Festival!");

// function removeLoader() {

//   setTimeout(() => {
//     let loader = document.getElementById('loader');
//     let main = document.getElementById('midautumn');

//     // hide the loader
//     loader.style = 'display: none;';
//     main.style.removeProperty = 'display: none;';
//   },
//     1000);
// }