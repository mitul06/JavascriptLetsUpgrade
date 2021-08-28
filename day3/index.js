let employee = [
  {
    name: "Daksh",
    eID: 12,
    eSalary: 15000,
    eRole: "Front End Dev",
  },

  {
    name: "Paras",
    eID: 13,
    eSalary: 18000,
    eRole: "Back End Dev"
  },
  {
    name: "Yash",
    eID: 43,
    eSalary: 21000,
    eRole: "Full Stack Dev"
  }
];

employee.push({
  name: "Hardik",
  eID: 23,
  eRole: "Dev Ops",
  eSalary: 20000
});



employee.forEach(element => {
    console.log(element)
});

