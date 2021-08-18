const john = {
  name: 'John',
  surname: 'Doe',
  age: 30,
  hobbies: ['Surf', 'Design'],
}

function map(john, fn) {
  return {
    name: fn(john.name),
    hobbies: fn(john.hobbies)
  }
}

const jane = map(john, (value) => {
  return value
})

jane.name = 'Jane'
jane.hobbies.push('MuayThai', 'Programming')

console.log('John:', john)
console.log('Jane:', jane)
