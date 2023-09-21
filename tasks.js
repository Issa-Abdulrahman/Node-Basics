
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
  else if(text === 'list\n'){
    list();
  }
//here we are removing the spaces then spliting them in order to work on the second section which is the new command.
//and keeping the first section with index 0 as it is ( i mean the add)
  else if(text.trim().split(" ")[0] === 'add'){
    add(text);
  }
  else if(text==='remove\n'){
    remove();
  }
 else if(text==='remove1\n'){
    remove1();
  }
  else if(text==='remove2\n'){
    remove1();
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

  console.log("\npossible commands:"+
  "\nhello: return (hello!)"+
  "\nnewhello: return (hello + name!)"+
  "\nexit: return (Quitting now, goodbye!)"+
  "\nquit: return (Quitting now, goodbye!)"+
  "\nhelp: list all the command"+
  "\nadd: will add the element entered"+
  "\nremove: remove the last element added"+
  "\nremove1: remove the first element"+
  "\nremove2: remove the second elment")
}

/**
 * list for some commands
 *
 * @returns {void}
 */
let commands=['do a list','add','remove']// I declared an array with some commands
function list(){
  commands.forEach((commamnds, index) => {//here selecting each index in the command 
    console.log(`${index + 1}. ${commamnds}`);// here we are displaying the index number with the related content i put +1 just to start ordering the task from 1 instead of 0 since indexes start by 0
  });
}
/**
 * Add new commands  
 *
 * @returns {void}
 */
function add(text){
  let t=text.slice(4);//here i am taking what we have after the word
  if(t===""){
//here i am checking if after the add there is nothing i return a msg notifying the user:
// that we can't have an empty command
    console.log(`the command can not be empty.`)
  }
  else{
//else we are removing the spaces from t(the section after add) then we are pushing it to the array of commands
  commands.push(t.trim());
  console.log(`the updated list is: ${commands}`)
  }
}
/**
 * list for some commands
 *
 * @returns {void}
 */
function remove(){
  commands.pop();//since commands is as an array so pop here will remove the last elment added
  console.log(commands);
}
/**
 * list for some commands
 *
 * @returns {void}
 */
function remove1(){
  commands.splice(1,1);
  console.log(commands);
}
/**
 * list for some commands
 *
 * @returns {void}
 */
function remove2(){
  commands.splice(1,3);
  console.log(commands);
}


// The following line starts the application
startApp("Issa Abdulrahman")
