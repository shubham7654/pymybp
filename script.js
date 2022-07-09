$weekObj = [
  "",
  "Week 1",
  "Week 2",
  "Week 3",
  "Week 4",
  "Cumulative #1",
  "Week 5",
  "Week 6",
  "Week 7",
  "Week 8",
  "Cumulative #2",
  "Week 9",
  "Week 10",
  "Week 11",
  "Week 12",
  "Cumulative #3"
];

$stream = {
  lc: [
    "Attendance",
    "Communication",
    "Confidence",
    "Creative Thinking",
    "Bonus question done?",
    "CAPSTONE"
  ],
  math: [
    "Attendance",
    "Logical Reasoning",
    "Critical Thinking",
    "Creative Thinking",
    "Bonus question done?",
    "CAPSTONE"
  ],
  stem: [
    "Attendance",
    "Logical Reasoning",
    "Critical Thinking",
    "Creative Thinking",
    "Bonus question done?",
    "Project Link",
    "CAPSTONE"
  ]
}

$attendBonusSelectElement = `
  <td>
    <select class="attend-bonus-select-item form-control">
      <option value="0">0</option>
      <option value="1">1</option>
    <select>
  </td>
`;

$marksSelectElement = `
  <td>
    <select class="marks-select-item form-control">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
    <select>
  </td>
`;

/* $marksTable = $(".marks-table");

$marksTable.each(function() {
  $(this).append("<tr></tr>");
});

$.each($weekObj, function(weekItem) {
  if (weekItem%5!=0) {
    $marksTable.find("tr").append("<td>"+$weekObj[weekItem]+"</td>");
  } else {
    $marksTable.find("tr").append("<th>"+$weekObj[weekItem]+"</th>");
  }
}); */

// for (let key in $stream) {
//   // skip loop if the property is from prototype
//   if (!$stream.hasOwnProperty(key)) continue;

//   let obj = $stream[key];
//   for (let prop in obj) {
//       // skip loop if the property is from prototype
//       if (!obj.hasOwnProperty(prop)) continue;

//       // your code
//       console.log(obj[prop]);
//   }
// }