//LOOPS AND MAP FUNCTIONS IN JS:
const numbers = [2, 7, 1, 8, 4, 5];

function performOperations(nums) {
  //FOR LOOP
  console.log("Squared Numbers :");
  for (let i = 0; i < nums.length; i++) {
    console.log(nums[i] ** 2);
  }
  console.log("\n");

  //FOR-EACH LOOP:
  console.log("Numbers multiplied by 2 :");
  nums.forEach((num) => {
    console.log(num * 2);
  });
  console.log("\n");

  //MAP FUNCTION:
  console.log("Cubed Numbers :");
  const cubedNumbers = nums.map((num) => num ** 3);
  console.log(cubedNumbers);
  console.log("\n");
}

// Display information about the numbers
console.log("Numbers:");
console.log(numbers);
console.log("\n");

// Perform operations on the numbers
performOperations(numbers);