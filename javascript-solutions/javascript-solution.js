// Using an async function, make a request to the following API endpoint and return an array of usernames of users who have an email address ending in 'biz'.
async function getUsernamesWithBizEmail() {
  const myEndpoint = "https://jsonplaceholder.typicode.com/users";
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
    return users
      .filter((user) => user.email.endsWith("biz"))
      .map((user) => user.name);
  } catch (error) {
    console.error("Error fetching users:", error);
  }
}

getUsernamesWithBizEmail().then((usernames) => console.log(usernames));

const complexJSON = {
  company: {
    name: "Tech Innovators Inc.",
    industry: "Technology",
    headquarters: {
      address: "123 Innovation Drive",
      city: "San Francisco",
      state: "California",
      country: "USA",
      zipCode: "94107",
    },
    departments: [
      {
        name: "Engineering",
        employees: [
          {
            id: 101,
            name: "Alice Johnson",
            role: "Software Engineer",
            skills: ["JavaScript", "React", "Node.js"],
            projects: [
              {
                name: "Project Alpha",
                status: "Completed",
                teamSize: 5,
              },
              {
                name: "Project Beta",
                status: "In Progress",
                teamSize: 3,
              },
            ],
          },
          {
            id: 102,
            name: "Bob Smith",
            role: "DevOps Engineer",
            skills: ["Docker", "Kubernetes", "CI/CD"],
            projects: [
              {
                name: "Infrastructure Overhaul",
                status: "In Progress",
                teamSize: 4,
              },
            ],
          },
        ],
      },
      {
        name: "Marketing",
        employees: [
          {
            id: 201,
            name: "Catherine Green",
            role: "Marketing Manager",
            skills: ["SEO", "Content Strategy", "Analytics"],
            projects: [
              {
                name: "Brand Awareness Campaign",
                status: "Completed",
                teamSize: 6,
              },
            ],
          },
        ],
      },
      {
        name: "Sales",
        employees: [],
      },
    ],
    revenue: {
      year: 2024,
      total: "10M USD",
      breakdown: {
        products: "7M USD",
        services: "3M USD",
      },
    },
  },
};

// Create a function that validates whether an employee with the name "Alice Johnson" exists in the "Engineering" department
function validateEmployee(name, department) {
  const dept = complexJSON.company.departments.find(
    (dept) => dept.name === department
  );
  if (!dept) {
    return false;
  }
  return dept.employees.some((employee) => employee.name === name);
}

console.log(validateEmployee("Alice Johnson", "Engineering")); // true
console.log(validateEmployee("Alice Johnson", "Marketing")); // false
console.log(validateEmployee("Alice Johnson", "Sales")); // false

// Create a function to get the value of the "revenue total" property in my complexJSON object
function getRevenueDotNotation() {
  return complexJSON.company.revenue.total;
}

console.log(getRevenueDotNotation()); // 10MD USD

// Now create the same function but using bracket notation
function getRevenueBracketNotation() {
  return complexJSON["company"]["revenue"]["total"];
}

console.log(getRevenueBracketNotation()); // 10MD USD
