const CSSTricksList = [
  {
    CSSTrickID: "CSSTrick001",
    title:
      "Whenever text in a container overflows we can use this trick, it will put '...' at the last of the text.",
    tags: ["overflow", "text"],
    code: [
      "display: -webkit-box;",
      "-webkit-line-clamp: 3;",
      "-webkit-box-orient: vertical;",
      "overflow: hidden;",
    ],
  },
  {
    CSSTrickID: "CSSTrick002",
    title: "This trick center the element inside a div",
    tags: ["center", "container"],
    code: ["display: grid;", "place-items: center;"],
  },
];

export default CSSTricksList;
