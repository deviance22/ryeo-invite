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
    members: ["Cesar Bamba", "Aileen Ruth Bamba", "Raven Bamba", "Raj Rogel Bamba"]
  },
  {
    id: "bakakeng",
    name: "Grandma and Grandpa",
    members: ["Cecilia Frianela", "Catalino Menor"]
  },
  {
    id: "lester",
    name: "Tito Lester and Family",
    members: ["Lester Valdez", "Rachelle Esmena", "Luke Valdez"]
  },
  {
    id: "mac",
    name: "Tito Mac and Tita Cathy",
    members: ["Mark Anthony Valdez", "Catherine Buenavente"]
  },
  {
    id: "jonats",
    name: "Ninong Jonathan, Macoy and Family",
    members: ["Jonathan Valdez", "Macoy", "Macoy's mother", "Macoy's Father"]
  },
  {
    id: "carlo",
    name: "Tito Carlo",
    members: ["Carlo Frianela"]
  },
  {
    id: "happie",
    name: "Happie and Kids",
    members: ["Happie Abrio", "Ella Frianela", "Eisha Frianela"]
  },
  {
    id: "argueza",
    name: "Argueza Family",
    members: ["Nathaniel Argueza", "Carmel Santiago-Argueza"]
  },
  {
    id: "gemma",
    name: "Ninang Gemma",
    members: ["Gemma Camille Bautista"]
  },
  {
    id: "aquino",
    name: "Aquino Siblings",
    members: ["Jhyl Aqunio", "Joy Aquino"]
  },
  {
    id: "lois",
    name: "Ninang Lois",
    members: ["Lois Patol"]
  },
  {
    id: "pascua",
    name: "Pascua Family",
    members: ["Ninong Haridas Pascua", "Ninang Olive Galang-Pascua", "Kavi Pascua"]
  },
  {
    id: "renz",
    name: "Ninong Renz and Kye",
    members: ["Renz Jervain Rillon", "Eirohna Kye Dumpit"]
  },
  {
    id: "chu",
    name: "Tito Wilbert",
    members: ["Wilbert Chu"]
  },
  {
    id: "michael",
    name: "Ninong Michael",
    members: ["Michael Bandiola"]
  },
  {
    id: "paula",
    name: "Ninang Paula",
    members: ["Paula Demdam"]
  },
  {
    id: "allison",
    name: "Tita Allison",
    members: ["Allison Awkit"]
  },
  {
    id: "felna",
    name: "Tita Felna",
    members: ["Felna Napadawan"]
  },
  {
    id: "nathan",
    name: "Tito Nathan and family",
    members: ["Nathan Macabante", "Ojie Macabante"]
  },
  {
    id: "abby",
    name: "Tita Abby",
    members: ["Abigail Manio"]
  },
  {
    id: "jl",
    name: "Tito JL",
    members: ["Jhon Luis Bernas"]
  },
  {
    id: "luigi",
    name: "Tito Luigi and family",
    members: ["Luigi Canosa", "Marion Therese Baguilat-Canosa"]
  },
  {
    id: "rodel",
    name: "Lolo Rodel and Family",
    members: ["Rodel Urbanozo", "Angie Balalang", "Gary Andrei Urbanozo", "Gian Urbanozo", "Michael Urbanozo"]
  },
  {
    id: "aaron",
    name: "Ninong Aaron and Family",
    members: ["Aaron Nimo", "Mary Grace Nimo"]
  },
  {
    id: "tuod",
    name: "Lolo Ogie and Family",
    members: ["Rogelio Urbanozo", "Adelaida Urbanozo", "Ruben Ancheta"]
  },
  {
    id: "ayrah",
    name: "Tito Manuel and Family",
    members: ["Ayrah Yangco-Ngalaan", "Manuel Ngalaan", "Ahmir Ngalaan"]
  },
  {
    id: "ayriz",
    name: "Tita Ayriz and Family",
    members: ["Ayriz Yangco", "Teemo Yangco", "Ahyman Yangco"]
  },
  {
    id: "cayaba",
    name: "Lolo Tani and Family",
    members: ["Nathaniel Cayaba", "Ming Cayaba", "Melvin Moralde", "Kristine Moralde", "Czarinna Balajadia", "Monica Cayaba-Bangloy", "Oliver Bangloy", "Nathalie Cayaba"]
  },
  {
    id: "michelle",
    name: "Tita Michelle",
    members: ["Michelle Salgado"]
  },
  {
    id: "ronica",
    name: "Tita Ronica",
    members: ["Ronica Habon"]
  },
  {
    id: "lance",
    name: "Tito Lance and Family",
    members: ["Christopher Lance Tungcul", "Louella Tungcul"]
  },
  {
    id: "mina",
    name: "Lola Mina and Ate Cata",
    members: ["Mina", "Cata"]
  },
  {
    id: "lucet",
    name: "Lola Lucet",
    members: ["Lucet"]
  },
  {
    id: "lorie",
    name: "Lola Lorie",
    members: ["Lorie"]
  },
  {
    id: "bulut",
    name: "Lolo Butzy and Family",
    members: ["Elias Bulut Jr.", "Liza Bulut", "Russel Bulut", "Radley Bulut", "Moimoi Bulut"]
  },
  {
    id: "kyle",
    name: "Tita Kyle and Family",
    members: ["Kyle Bulut-Cunan", "Garel Cunan", "Alon Cunan"]
  },
  {
    id: "gr",
    name: "Tito GR and family",
    members: ["Gerald Urbanozo", "Zarah Urbanozo", "Gia Urbanozo"]
  },
  {
    id: "jhuna",
    name: "Ninang Jhunabeth",
    members: ["Jhunabeth", "Patrick"]
  },
];

export default GROUPS;
