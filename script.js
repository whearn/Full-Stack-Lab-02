// Sets an array of friends' names
var friends = ['Jay', 'Fish', 'Josh', 'Bri', 'Billy'];

// Loops through all items in the array
for (var i = 0; i < friends.length; i++) {
    //Adds spacing for readability
    if (i > 0) {
        console.log('');
    }

    //Adds friend's name to show who's turn it is to sing about!
    console.log(friends[i] + ':');
    
    //Loops through and prints out each line of the song with one less "line of code" each time
    for (var j = 99; j > 0; j--) {
        if (j === 1) {
            console.log(j + ' line of code in the file, ' + j + ' line of code; ' + friends[i] + ' strikes one out, clears it all out, no more lines of code in the file');
        } else {
            console.log(j + ' lines of code in the file, ' + j + ' lines of code; ' + friends[i] + ' strikes one out, clears it all out, ' + (j - 1) + ' lines of code in the file');
        }
    }
}