const { faker } = require('@faker-js/faker');

class UsersService {

  constructor() {
    this.users = [];
    this.generate();
  }

  generate() {
    const limit = 100;
    for (let i = 0; i < limit; i++) {
      this.users.push({
        id: faker.string.uuid(),
        name: faker.internet.username(),
        lastName: faker.person.lastName(),
        email: faker.internet.email(),
        avatar: faker.image.avatar(),
      })
    }
  }

  create() {

  }

  find() {
    return this.users;

  }

  findOne(id) {
    return this.users.find(item => item.id === id);
  }

  update() {

  }

  delete() {

  }
}

module.exports = UsersService;
