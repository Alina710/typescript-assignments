//cliking username ;do the following to create a program that simulates how website
//mesure that every one has a unique username,
//make list of five or more usernames called current username

//makee another list of five usernames called new_user make sure one or two or the 
//new user_names are also called current username

//loop through the new_users list to see if  each new usernames has already been used
//if it has print a message thst the person that will need to enter a new username.
//iff a username has not been used, print a meesage saying that username is
//available

// make sure comparison is case insensitives if 'jhon' has been used, 'jhon'
//should not be accepted

let current_users: string[] = ['aniqa','riMsha','areesha','bisma','aleena'];

let new_users: string[] = ['humaira','riMsha','aniqa','sonia','aroosham',];

new_users.forEach(newUsername =>{
    let lowercase: string = newUsername.toLocaleLowerCase();
    if(current_users.map(c_user => c_user.toLocaleLowerCase()).includes(lowercase)){
console.log(`the username ${newUsername} is not avalible. please  write a different username`);
}
else{
    console.log(`the username ${newUsername} is available`)
}
})
