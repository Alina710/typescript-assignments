//hello admin; make aaaray of five or more usernames. including the name of"admin"imagin
//you are writting code that will print a greeting to ech other user they log in to awebsite
//loop through the array and print agreeting to each user ;
//. if the user is "admin", print a speacial greeting ,such as whould you like 
//to see a some status report?

//.otherwise print a generic greeting such as hello eric thankyou for logging again.
const userNames: string[] = ['admin','rimsha','amiqa','areesha','bisma'];
for(let i=0; i<userNames.length; i++){
    if(userNames[i] === 'admin')
    {
        console.log('Hello admin, whould you like to see a status report?');
    }
    else{
        console.log(`Hello ${userNames[i]}. , thankyou for logging again`)
    }
}