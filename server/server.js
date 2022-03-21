const express = require("express");
const app = express();
const port = 8000;
const { faker } = require("@faker-js/faker");

class User {
  constructor() {
    this._id = faker.datatype.uuid();
    this.firstName = faker.name.firstName();
    this.lastName = faker.name.lastName();
    this.phoneNumber = faker.phone.phoneNumber();
    this.email = faker.internet.email();
    this.password = faker.internet.password();
  }
}

class Company {
  constructor() {
    this._id = faker.datatype.uuid();
    this.name = faker.company.companyName();
    this.address = {
      street: faker.address.streetName(),
      city: faker.address.cityName(),
      state: faker.address.state(),
      zipCode: faker.address.zipCode(),
      country: faker.address.country(),
    };
  }
}

//ROUTES
//getAll, getOne, post, put, delete

//getAll
app.get("/api/users", (req, res) => {
  res.json(new User());
});

app.get("/api/company", (req, res) => {
  res.json(new Company());
});

app.get("/api/user/company", (req, res) => {
  res.json([new User(), new Company()]);
});

// this needs to below the other code blocks
app.listen(port, () => console.log(`Listening on port: ${port}`));
