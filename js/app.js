let age = 24;
let is_subscribed = true;
let user_points = 150;

if (age < 24 && !is_subscribed) {
  console.log("The user is younger than 24 and not subscribed.");
} else if (age >= 24 && !is_subscribed) {
  console.log("The user is 24 or older and not subscribed.");
} else if (age < 24 && is_subscribed) {
  console.log("The user is younger than 24 and is subscribed.");
} else if (age >= 24 && is_subscribed) {
  console.log("The user is 24 or older and is subscribed.");
}

if (is_subscribed && age > 24 || user_points >= 100) {
  console.log("Congratulations! You are eligible for a special offer.");
}

