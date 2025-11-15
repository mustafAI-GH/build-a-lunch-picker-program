const lunches = [];

function addLunchToEnd(arr, lunch) {
  arr.push(lunch);
  console.log(`${lunch} added to the end of the lunch menu.`);
  return arr;
}

addLunchToEnd(lunches, "Tacos");

function addLunchToStart(arr, lunch) {
 arr.unshift(lunch);
 console.log(`${lunch} added to the start of the lunch menu.`);
 return arr;
}

addLunchToStart(lunches, "Sushi");

function removeLastLunch(arr) {
  if (arr.length === 0) {
    console.log("No lunches to remove.");
  } else {
  let removedLunch = arr.pop();
  console.log(`${removedLunch} removed from the end of the lunch menu.`);
  return arr;
  }
}

removeLastLunch(lunches);

function removeFirstLunch(arr) {
  if (arr.length === 0) {
    console.log("No lunches to remove.");
  } else {
    let removedLunch = arr.shift();
    console.log(`${removedLunch} removed from the start of the lunch menu.`);
    return arr;
  }
}

removeFirstLunch(lunches);

function getRandomLunch(arr) {
  if (arr.length === 0) {
    console.log("No lunches available.");
  } else {
    let randomIndex = Math.floor(Math.random() * arr.length);
    let randomLunch = arr[randomIndex];
    console.log(`Randomly selected lunch: ${randomLunch}`);
  }
}

 getRandomLunch(lunches);

 function showLunchMenu(arr) {
   if (arr.length === 0) {
     console.log("The menu is empty.");
   } else {
     let randomMenu = arr.join(", ");
     console.log(`Menu items: ${randomMenu}`);
   }
 }

 showLunchMenu(lunches);
