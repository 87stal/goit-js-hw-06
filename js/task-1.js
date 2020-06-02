import users from './user.js';

// TASK-1
const getUserNames = users => {
  return users.map(user => user.name);
};

console.log(getUserNames(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]

// TASK-2
const getUsersWithEyeColor = (users, color) => {
  return users.filter(users => users.eyeColor === color);
};

console.log(getUsersWithEyeColor(users, 'blue')); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]

// TASK-3

const getUsersWithGender = (users, gender) => {
  return users.filter(users => users.gender === gender);
};

console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]

// TASK-4

const getInactiveUsers = users => {
  return users.filter(users => !users.isActive);
};

console.log(getInactiveUsers(users));

// TASK-5
const getUserWithEmail = (users, email) => {
  return users.find(users => users.email === email);
};

console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {объект пользователя Sheree Anthony}
console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // {объект пользователя Elma Head}

// TASK-6
const getUsersWithAge = (users, min, max) => {
  return users.filter(users => users.age >= min && users.age <= max);
};

console.log(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]

console.log(getUsersWithAge(users, 30, 40));
// [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]

// TASK-7
const calculateTotalBalance = users => {
  return users.reduce((total, item) => {
    total + item.balance;
  }, 0);
};

console.log(calculateTotalBalance(users));

// TASK-8
const getUsersWithFriend = (users, friendName) => {
  return users.reduce((allUsers, item) => {
    if (item.friends.includes(friendName)) {
      allUsers.push(item.name);
    }

    return allUsers;
  }, []);
};

console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]

//TASK-9

const getNamesSortedByFriendsCount = users => {
  return users
    .sort((a, b) => a.friends.length - b.friends.length)
    .map(user => user.name);
  // твой код
};

console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]

// TASK-10

const getSortedUniqueSkills = users => {
  return users
    .reduce((allSkills, user) => {
      user.skills.forEach(skill => {
        if (allSkills.indexOf(skill) === -1) {
          allSkills.push(skill);
        }
      });
      return allSkills;
    }, [])
    .sort();
};

console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]


