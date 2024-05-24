"use strict";
//large shirts: modify the make_shirt() function so that shirts are large by defult with a
//message that reads I love typescript  make a large shirt and a medium shirt with the defult
//message and a shirt of any size with a different message
function make_shirt(size = 'large', text = 'I love typescript.') {
    console.log(`creating a ${size} shirt with the message: ${text}`);
}
make_shirt();
make_shirt('medium');
make_shirt('small', 'I love python');
