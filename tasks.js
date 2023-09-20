
/**
 * Starts the application
 * This is the function that is run when the app starts
 * 
 * It prints a welcome line, and then a line with "----",
 * then nothing.
 *  
 * @param  {string} name the name of the app
 * @returns {void}
 */
function startApp(name){
  process.stdin.resume();
  process.stdin.setEncoding('utf8');
  process.stdin.on('data', onDataReceived);
  console.log(`Welcome to ${name}'s application!`)
  console.log("--------------------")
}


/**
 * Decides what to do depending on the data that was received
 * This function receives the input sent by the user.
 * 
 * For example, if the user entered 
 * ```
 * node tasks.js batata
 * ```
 * 
 * The text received would be "batata"
 * This function  then directs to other functions
 * 
 * @param  {string} text data typed by the user
 * @returns {void}
 */
function onDataReceived(text) {
  if (text === 'quit\n' || text === 'exit\n') {
    quit();
  }
  else if(text === 'hello\n'){
    hello();
  }
  else if(text.slice(0,5)==='hello'){// I used slice here to extract hello (from 0 till 5 )
                                    //I mean the indexes, so if it start with hello do this function
    newhello(text.slice(5));//here I applied the function so hello is fixed 
                            //only apply this function on the second slice(part of the given)
  }
  
  else if(text === 'help\n'){
    
    help();
  }

  else{
    unknownCommand(text);
  }
}


/**
 * prints "unknown command"
 * This function is supposed to run when all other commands have failed
 *
 * @param  {string} c the text received
 * @returns {void}
 */
function unknownCommand(c){
  console.log('unknown command: "'+c.trim()+'"')
}


/**
 * Says hello
 *
 * @returns {void}
 */
function hello(){
  
    console.log('hello!')

  }
  /**
 * Exits the application
 *
 * @returns {void}
 */
function newhello(name){
  let n=name.trim(); //I used trim here to remove the spacing when I press enter
  console.log(`Hello ${n}!`);
}
  





/**
 * Exits the application
 *
 * @returns {void}
 */
function quit(){
  console.log('Quitting now, goodbye!')
  process.exit();
}

/**
 * list all possible commamnds  
 *
 * @returns {void}
 */
function help(){
  console.log(`possible commands :
  hello
  exit 
  quit 
  help`)
}


// The following line starts the application
startApp("Issa Abdulrahman")
