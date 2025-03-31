const students = [
  { registerNo: 101, subject: "Maths", score: 60 },
  { registerNo: 102, subject: "Maths", score: 70 },
  { registerNo: 101, subject: "Science", score: 50 },
];

const result = Object.values(
  //  {101:{registerNo: 101,score: 60}} -> this type of object is created from below code
  students.reduce(
    (
      acc,
      {
        // here we have destructured current value of array of object
        registerNo,
        score,
      }
    ) => {
      // below code will remove duplicate registerNo or create new entry if not exist in acc object
      acc[registerNo] = acc[registerNo] || { registerNo, score: 0 };
      //   updates score for duplicate entries
      acc[registerNo].score += score;
      return acc;
    },
    {
      // initial value of accumulator is empty object
    }
  )
);

console.log(result);

//  OUTPUT QUESTION
const sampleFunc = (options) => console.log({ ...options });

sampleFunc("httpssdvfsdv", "wer");

/*
coding question

input  - 2, 10(take any two numbers from user)
output - make tables from 2 to 10.
*/

const a = 2,
  b = 4;

for (let i = a; i <= b; i++) {
  for (let j = 1; j <= 10; j++) {
    console.log(`${i} * ${j} = ${i * j}`);
  }
}
