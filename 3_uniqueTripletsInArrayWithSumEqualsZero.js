const threeSum = (arr) => {
  const result = [];
  arr.sort((a, b) => a - b); //array sorted
  //this for loop gives us first number of triplet array joo chlega tbtk jbtk uske aage doo numbers available hoo to form triplet
  for (let i = 0; i < arr.length - 2; i++) {
    if (i > 0 && arr[i] === arr[i - 1]) continue; //as duplicate number as first entry already triplet bna chuka hai apna so it will create duplicate triplets.
    //i points to first value of triplet and left and right will point to another two values of triplet
    left = i + 1; //we will icrease the value from left to reach 0 agar left aur right consecutive liye toh 0 tk nhi pahuchenge jldi aur kuch case skip bhi hojaye
    right = arr.length - 1; //we will decrease the value from right
    while (left < right) {
      //because woh equal hogye to woh triplet nhi duplicate hojayega
      let sum = arr[i] + arr[left] + arr[right];

      if (sum === 0) {
        result.push([arr[i], arr[left], arr[right]]);
        // to prevent duplicates
        while (arr[left] === arr[left + 1]) left++; //isse ye duplicate skip hojayega kyunki iss number ke saath already combination bngaya hai
        while (arr[right] === arr[right - 1]) right--;
        //dono saath mein move hooga kyunki tbhi zero ke kareeb pahuchenge
        left++;
        right--;
      } else if (sum < 0) {
        left++; //kyunki humein negativity km krni hai toh left wala value badni chiye
      } else {
        right--;
      }
    }
  }
  return result;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
// o/p -> [ [ -1, -1, 2 ], [ -1, 0, 1 ] ]
