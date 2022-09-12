const provinces = {
  Chonburi: 226687,
  Suphanburi: 41012,
  Trang: 24826,
  Trat: 47202,
  Lopburi: 29815,
  'Chiang Mai': 48911,
  Lampang: 12545,
  Phuket: 88674,
  Saraburi: 23655,
  Phrae: 15678,
  Loei: 76757,
  'Chiang Rai': 11230,
  'Nakhon Pathom': 76705,
  Bangkok: 370177,
  'Samut Prakan': 38590,
  Rayong: 40543,
  Yala: 11315,
  Ranong: 42612,
  Phayao: 48147,
  Khonkaen: 23218,
  Nan: 37463,
  'Nakhon Sawan': 74321
}

// Start coding here
let provincesArray = Object.entries(provinces);
console.log(provincesArray);

let show50000Up = provincesArray.filter((key => key[1] > 50000));
console.log(show50000Up);