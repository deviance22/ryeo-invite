// The guest list for the RSVP note.
//
// Guests type their name, pick it from the list, and then answer for
// everyone in their group. Replace the sample groups below with your own.
//
// - `id` is how replies are matched up in the Google Sheet. Keep it short,
//   unique and unchanged once guests have replied; renaming a group or a
//   person is fine, but a changed `id` starts that group over.
// - Spell names the way guests will look for them. Search ignores case and
//   accents and matches the start of any word, so "ana", "santos" or
//   "ana san" all find "Ana Santos".
//
// Note: this file ships with the site, so anyone with the link could read
// the names in it.
const GROUPS = [
  {
    id: "bamba",
    name: "Bamba Family",
    members: [
      "Cesar Bamba",
      "Aileen Ruth Bamba",
      "Raven Bamba",
      "Raj Rogel Bamba",
    ],
  },
  {
    id: "bakakeng",
    name: "Grandma and Grandpa",
    members: ["Cecilia Frianela", "Catalino Menor"],
  },
  {
    id: "lester",
    name: "Tito Lester and Family",
    members: ["Lester Valdez", "Rachelle Esmena", "Luke Valdez"],
  },
  {
    id: "mac",
    name: "Tito Mac and Tita Cathy",
    members: ["Mark Anthony Valdez", "Rizza Buenavente"],
  },
  {
    id: "jonats",
    name: "Ninong Jonathan, Macoy and Family",
    members: [
      "Jonathan Valdez",
      "Michael Clemente",
      "Josephine Clemente",
      "Francisco Clemente",
    ],
  },
  {
    id: "carlo",
    name: "Tito Carlo",
    members: ["Carlo Frianela"],
  },
  {
    id: "happie",
    name: "Happie and Kids",
    members: ["Happie Abrio", "Ella Frianela", "Elisha Frianela"],
  },
  {
    id: "argueza",
    name: "Ninang Carmel and Family",
    members: ["Nathaniel Argueza", "Ninang Carmel Santiago-Argueza"],
  },
  {
    id: "gemma",
    name: "Ninang Gemma and Tito James",
    members: ["Gemma Camille Bautista", "Raven James Bautista"],
  },
  {
    id: "aquino",
    name: "Aquino Siblings",
    members: ["Jhyl Aqunio", "Joy Aquino"],
  },
  {
    id: "lois",
    name: "Ninang Lois",
    members: ["Lois Patol"],
  },
  {
    id: "pascua",
    name: "Ninang Olive and Family",
    members: [
      "Ninong Haridas Pascua",
      "Ninang Olive Galang-Pascua",
      "Kavi Pascua",
    ],
  },
  {
    id: "renz",
    name: "Ninong Renz and Kye",
    members: ["Renz Jervain Rillon", "Eirohna Kye Dumpit"],
  },
  {
    id: "chu",
    name: "Tito Wilbert",
    members: ["Wilbert Chu"],
  },
  {
    id: "michael",
    name: "Ninong Michael",
    members: ["Michael Bandiola"],
  },
  {
    id: "paula",
    name: "Ninang Paula",
    members: ["Paula Demdam"],
  },
  {
    id: "allison",
    name: "Tita Allison",
    members: ["Allison Awkit"],
  },
  {
    id: "felna",
    name: "Tita Felna",
    members: ["Felna Napadawan"],
  },
  {
    id: "nathan",
    name: "Tito Nathan and family",
    members: ["Nathan Macabante", "Ojie Macabante"],
  },
  {
    id: "abby",
    name: "Tita Abby",
    members: ["Abigail Manio"],
  },
  {
    id: "jl",
    name: "Tito JL",
    members: ["Jhon Luis Bernas"],
  },
  {
    id: "luigi",
    name: "Tito Luigi and family",
    members: ["Luigi Canosa", "Marion Therese Baguilat-Canosa"],
  },
  {
    id: "rodel",
    name: "Lolo Rodel and Family",
    members: [
      "Rodel Urbanozo",
      "Angie Balalang",
      "Gary Andrei Urbanozo",
      "Gian Urbanozo",
      "Michael Urbanozo",
    ],
  },
  {
    id: "aaron",
    name: "Ninong Aaron and Family",
    members: ["Aaron Nimo", "Mary Grace Nimo"],
  },
  {
    id: "tuod",
    name: "Lolo Ogie and Family",
    members: ["Rogelio Urbanozo", "Adelaida Urbanozo", "Ruben Ancheta"],
  },
  {
    id: "ayrah",
    name: "Tito Manuel and Family",
    members: ["Ayrah Yangco-Ngalaan", "Manuel Ngalaan", "Ahmir Ngalaan"],
  },
  {
    id: "ayriz",
    name: "Tita Ayriz and Family",
    members: ["Ayriz Yangco", "Teemo Yangco", "Ahyman Yangco"],
  },
  {
    id: "cayaba",
    name: "Lolo Tani and Family",
    members: [
      "Nathaniel Cayaba",
      "Ming Cayaba",
      "Melvin Moralde",
      "Kristine Moralde",
      "Czarinna Balajadia",
      "Monica Cayaba-Bangloy",
      "Oliver Bangloy",
      "Nathalie Cayaba",
    ],
  },
  {
    id: "michelle",
    name: "Tita Michelle",
    members: ["Michelle Salgado"],
  },
  {
    id: "ronica",
    name: "Tita Ronica",
    members: ["Ronica Habon"],
  },
  {
    id: "lance",
    name: "Tito Lance and Family",
    members: ["Christopher Lance Tungcul", "Louella Tungcul"],
  },
  {
    id: "mina",
    name: "Lola Mina and Ate Cata",
    members: ["Myrnna Banton", "Cata"],
  },
  {
    id: "lucet",
    name: "Lola Lucet",
    members: ["Lucet"],
  },
  {
    id: "lorie",
    name: "Lola Lorie",
    members: ["Lorie Gaspard"],
  },
  {
    id: "bulut",
    name: "Lolo Butzy and Family",
    members: [
      "Elias Bulut Jr.",
      "Liza Bulut",
      "Russel Bulut",
      "Radley Bulut",
      "Moimoi Bulut",
    ],
  },
  {
    id: "kyle",
    name: "Tita Kyle and Family",
    members: ["Kyle Bulut-Cunan", "Garel Cunan", "Alon Cunan"],
  },
  {
    id: "gr",
    name: "Tito GR and family",
    members: ["Gerald Urbanozo", "Zarah Urbanozo", "Gia Urbanozo"],
  },
  {
    id: "jhuna",
    name: "Ninang Jhunabeth",
    members: ["Ninang Jhunabeth Punla", "Patrick Midang"],
  },
  {
    id: "robles",
    name: "Dr. Robles",
    members: ["Dr. Adela Roxan Viray-Robles"],
  },
  {
    id: "von",
    name: "Von and Friends",
    members: ["Von De Guzman", "Nicole De Guzman", "Dansen Lastimado"],
  },
  {
    id: "newman",
    name: "Ninang Jen and Gerrod Newman",
    members: ["Ninang Jen Newman", "Gerrod Newman"],
  },
  {
    id: "princess",
    name: "Ninang Princess and Family",
    members: ["Ninang Princess Suba", "Jhon Suba", "Cody Suba", "Rio Suba"],
  },
  {
    id: "doay",
    name: "Lola Doay",
    members: ["Lola Doay"],
  },
  {
    id: "lianne",
    name: "Tita Lianne",
    members: ["Lianne "],
  },
  {
    id: "chach",
    name: "Tito Chach",
    members: ["Chachary Ramos"],
  },
  {
    id: "coleen",
    name: "Tita Coleen",
    members: ["Jannah Coleen Balaccua"],
  },
  {
    id: "tacs",
    name: "Tito Brian and Family",
    members: ["Brian James Taccayan", "Kayla Taccayan"],
  },
  {
    id: "ac",
    name: "Tita AC",
    members: ["Anne Carlou Calija"],
  },
  {
    id: "mario",
    name: "Lolo Mar",
    members: ["Mario Menor"],
  },
  {
    id: "nene",
    name: "Lola Nene and Family",
    members: [
      "Michellany Nabong",
      "Macc Nabong",
      "Nene Nabong",
      "Michael Andrei Llamosa",
    ],
  },
  {
    id: "kirby",
    name: "Tito Kirby and Family",
    members: [
      "John Kirby Frianela",
      "Maynalyn Frianela",
      "Zyrille Claire Frianela",
      "Emy Frianela",
    ],
  },
  {
    id: "mark",
    name: "Lolo Mark and Family",
    members: ["Mark Bamba", "Michelle Bamba", "Patricia Bamba", "Marco Bamba"],
  },
  {
    id: "susan",
    name: "Tita Susan and Family",
    members: ["Susan Lauro-Putranto", "Nicolas Putranto", "Raphael Putranto"],
  },
];

export default GROUPS;
