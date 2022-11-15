// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

//     HH = hours, padded to 2 digits, range: 00 - 99
//     MM = minutes, padded to 2 digits, range: 00 - 59
//     SS = seconds, padded to 2 digits, range: 00 - 59

// The maximum time never exceeds 359999 (99:59:59)

// You can find some examples in the test fixtures.


// My Solution

function humanReadable (seconds) {
    let hours = Math.floor(seconds/3600).toString().padStart(2,'0')
    let minutes = Math.floor(seconds/60 - hours * 60).toString().padStart(2,'0')
    let ss = (seconds - minutes*60 - hours * 3600).toString().padStart(2,'0')
    
    return hours + ':' + minutes + ':' + ss;
}

/*
input positive integer
output HH: MM: SS

find hours
round down answer to input divided by 60
store in hours
find minutes
remainder of the remainder of input by 60, by 60

*/