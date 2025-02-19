const contacts = require("./data.json");

// the following exercises require the data from data.json.
// you can look in that file to see the data structure you
// will be working with.

// For each exercise:
// 1. use array methods with the variable contacts to get the desired result,
// 2. store the result with a variable
// 3. appropriately log the results to the console

//You can put your solutions after each comment below:

// 1. an array that contains all of the contacts that work at INSECTUS
// filter the contacts to only include contacts where company's value is "Insectus"
// Give a good variable name
const insectusEmployees = contacts.filter((contact) => {
  return contact.company === "INSECTUS";
});
// Loop over the reults
for (const emp of insectusEmployees) {
  // Find a nice way to print them
  console.log(`${emp.name} works for Insectus`);
}

//2. an array all of the contacts, with only the name property
const contactName = contacts.filter((contact) => {
  console.log(contact.name);
});

//3. an array of all of the contacts over the age of 50
const overFifty = contacts.filter((contact) => {
  if (contact.age > 50) console.log(contact.name);
});

//4. the first ten contacts when alphabetically ordered by name
const firstTen = contacts.sort((a, b) => a.name.localeCompare(b.name));
console.log(firstTen.splice(0, 10));

//5. the oldest person's name
const findOldest = contacts.map((contact) => ({ ...contact }));
findOldest.sort((a, b) => b.age - a.age);
const oldestContact = findOldest[0];
console.log(oldestContact);

//6. the contact id with the name Isabella Burke

//7. an array of all of the contacts, but with the name split up into a firstName
// and lastName properties

//8. an array of all of the contacts where the friends property
// is an array with each contact that is their friend

//9. the average age of the contacts

//10. the median age of the contacts
