const Database = require("./routes/Database");
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const input = (inputText) => {
 return new Promise((resolve) => {
    rl.question(`${inputText}\n[yes] yes / y | [no] no / n: `, (answer) => {
      const normalizedAnswer = answer.trim().toLowerCase();
      if (normalizedAnswer === 'yes' || normalizedAnswer === 'y') {
        resolve(true);
      } else if (normalizedAnswer === 'no' || normalizedAnswer === 'n') {
        resolve(false);
      } else {
        console.log('Please answer with "yes" or "no".');
        resolve(input(inputText));
      }
    });
  });
}


async function main() {
    // create database
    // create tables
    
    const answer = await input('Do you want to save test data');
    switch(answer) {
        case true: {
            // push data
            try {
                console.log(`
                    [ USER ]
                    ---------------------------------
                    First Name & Last Name : John Doe
                    E-mail : test@exemple.com
                    Password : password
                    ---------------------------------
                `)
    
                console.log(`
                    [ CODE : 200 ]
                    ---------------------------------
                    Successfull created database : easycash.
                    Succesfull push testing data.
                    ---------------------------------
                `)
            } catch(error) {
                console.log(`
                    [ CODE : 404 ]
                    ---------------------------------
                    ERROR : Cannot created database : easycash.
                    ERROR : Cannot push testing data.
                    ---------------------------------
                `)
            }
            break;
        }

        case false: {
            console.log(`
                [ CODE : 200 ]
                ---------------------------------
                Successfull created database : easycash.
                ---------------------------------
            `)

            return rl.close();
        }
    }
    rl.close();
}

main();
