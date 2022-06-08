const line = ['\r| ', '\r/ ', '\r- ', '\r\\ ']
const spinner = () => {
    for (let i = 0; i < line.length; i++) {
        if (i === line.length - 1) {
            process.stdout.write(`\r${line[i]}\n`)
        }
        setTimeout(() => {
            process.stdout.write(line[i]);
        }, i * 500)
    }
};

spinner()

    

// setTimeout(() => {
//     process.stdout.write('\r|   ');
//   }, 100);
  
//   setTimeout(() => {
//     process.stdout.write('\r/   ');
//   }, 300);
  
//   setTimeout(() => {
//     process.stdout.write('\r-   ');
//   }, 500);
  
//   setTimeout(() => {
//     // Need to escape the backslash since it's a special character.
//     process.stdout.write('\r\\   '); 
//   }, 700);

//   setTimeout(() => {
//     process.stdout.write('\r|   \n')
//   }, 900);
  
  