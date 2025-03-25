const students = [
    { registerNo: 101, subject: 'Maths', score: 60 },
    { registerNo: 102, subject: 'Maths', score: 70 },
    { registerNo: 101, subject: 'Science', score: 50 }
 ];
 
 const result = Object.values(
     students.reduce((acc, { registerNo, score }) => {
         acc[registerNo] = acc[registerNo] || { registerNo, score: 0 };
         acc[registerNo].score += score;
         return acc;
     }, {})
 );
 
 console.log(result);


//  OUTPUT QUESTION
 const sampleFunc = options=>console.log({...options})

sampleFunc("httpssdvfsdv","wer");
 