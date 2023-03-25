let counter1 = 0;
while (counter1 <= 50) {
  console.log(counter1);
  counter1 = counter1 + 1;
}

let counter2 = 0;
while (counter2 >= -50) {
  console.log(counter2);
  counter2 = counter2 - 1;
}
counter1 = 0
let users = ['Alex', 'Cat', 'CatAlex'];
let counter = 0;
while (counter < users.length) {
  console.log(users[counter]);
  counter = counter + 1;
}
let company = {
  name: "Acme Corp",
  yearly_revenue: 1500000,
  ceo: "John Smith",
  number_of_employees: 100,
  managers: ["Mary Jones", "Bob Smith", "Samantha Lee"]
}

const tweets = [
  {
    tweet: "Hello world!",
    username: "JohnDoe",
    created_at: "03-22-2023",
    age: 25
  },
  {
    tweet: "This is a tweet",
    username: "JaneDoe",
    created_at: "03-20-2023",
    age: 17
  },

];

let i = 0;
while (i < tweets.length) {
  if (tweets[i].age >= 18) {
    console.log(tweets[i].tweet + " - " + tweets[i].username + " - " + tweets[i].created_at);
  }
  i++;
}

for (let j = 0; j < tweets.length; j++) {
  if (tweets[j].age < 18) {
    console.log(tweets[j].tweet + " - " + tweets[j].username + " - " + tweets[j].created_at);
  }
}