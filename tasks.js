
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
 else if(text==='remove 1\n'){
    remove1();
  }
  else if(text==='remove 2\n'){
    remove2();
  }
  //here after triming the spaces ant the beginning and the end i splited the string into and array 
  //and i am checking if the first index is equal to remove
  else if(text.trim().split(" ")[0] == 'remove'){
    //if it is equal (condition true) the newremove function will run with the second element of the array 
    //as you see here [1] which means the second element
    newremove(text.trim().split(" ")[1]);

  }
  else if(text.trim().split(" ")[0]==="edit"){
    editelements(text);

  }
  else if(text.trim().split(" ")[0]==="check"){
    listTasks(text);

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
  "\nremove2: remove the second elment"+
  "\nnewremove: return an message says that you enter a number not exist")
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
 * remove the 1st element
 *
 * @returns {void}
 */
function remove1(){
  commands.splice(1,1);
  console.log(commands);
}
/**
 * remove the 2nd element
 *
 * @returns {void}
 */
function remove2(){
  commands.splice(1,2);
  console.log(commands);
}
/**
 * it notify me that i entered a wrong function number 
 *
 * @returns {void}
 */
// function newremove(text){
//   let nremove=text.slice(5)
//   if(nremove!==""||nremove!==1||nremove==2){
//     console.log("you enter a number that does not exist")
//   }
 
// }
function newremove(text){
  //here we are cheching each element in the text element 
  for(let i=0; i<commands.length; i++){
    if(text == commands[i]){ //here if text equal to the index mentioned [i] 
      commands.splice(i, 1);//then here delete ore remove the mentioned index element using splice method 
      console.log(commands);
      return; // Exit the function after removing the element
    }
  }
  console.log('Element Not Found');
}
/**
 * return the array with the new elements
 *
 * @returns {void}
 */
function editcommands(commands, oldcommand, newcommand) {//here i am taking the array with two other parameter 
  if (!oldcommand || !newcommand) {// here  i am checking if both oldcommand and newcommand are provide
      console.log("Error: Please provide both old and new tasks.");
      return commands;
  }
  // I am finding the index of the oldcommand in the commands array
  const index = commands.indexOf(oldcommand);
  // here if the oldcommand is not found i have to log an error and return the original commands array
  if (index === -1) {
      console.log("Error: Old task not found.");
      return commands;
  }

  const updatedcommand = [...commands]; // her I am Creating a copy of the tasks array
  updatedcommand[index] = newcommand;// here I am Updating the commands at the found index with the newcommand
  //
  console.log("Updated tasks:", updatedcommand);

  return updatedcommand;
}
// Array of tasks, each represented as an object with a description and done status which is boolean(true or flase)
let tasks = [
  { description: "Get milk", done: false },
  { description: "Read a book", done: true },
  { description: "Write code", done: false }
];
// here the function is to list all tasks, indicating their status and I am using check marks to add it next to the task is done 
function listTasks() {
  tasks.forEach((task, index) => {
      const status = task.done ? "[✓]" : "[ ]";
      console.log(`${status} Task ${index + 1}: ${task.description}`);
  });
}
// the function here is to mark a task as done by its index
function markTaskDone(index) {
  if (index >= 0 && index < tasks.length) {
      tasks[index].done = true;
  }
}
//the function here is to mark a task as undone by its index
function markTaskUndone(index) {
  if (index >= 0 && index < tasks.length) {
      tasks[index].done = false;
  }
}


// The following line starts the application
startApp("Issa Abdulrahman")
