"use strict";
//no users:add in if test to exercise 28 to make sure the lsit of users is not empty 
//.if this list is empty , print the message we need to find  some users!
// . remove all of the usernames from your aaray and make sure the correct message is 
//printed
let userNames = ['admin', 'amir', 'atif', 'noor', 'rafay'];
if (userNames.length === 0) {
    console.log('we need to find some users!');
}
else {
    userNames = [];
    console.log('all user names have been removed. ' + userNames.length);
}
