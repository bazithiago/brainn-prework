const john = {
  name: 'John',
  surname: 'Doe',
  age: 30,
  hobbies: ['Surf', 'Design'],
}

function map(value, fn) {
  return {
    name: fn(value.name),
    hobbies: fn(value.hobbies)
  }
}

const jane = map(john, (value) => {
  return value
})

jane.name = 'Jane'
jane.hobbies.push('MuayThai', 'Programming')

console.log('John:', john)
console.log('Jane:', jane)
