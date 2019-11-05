function ageTest() {
    event.preventDefault();
    var currDate = new Date();
    // gets the current date
    console.log(currDate);

    var dob = document.getElementById('dob').value;
    // dob is a string

    console.log(dob);
    currMonth = currDate.getMonth() + 1;
    // current month ** add 1; months are 0-based by UTC
    
    var currDay = currDate.getDate();
    
    var currYear = currDate.getFullYear();
    
    var birthYear = parseInt(dob.slice(0, 4));
    var birthMonth = parseInt(dob.slice(5, 7));
    var birthDay = parseInt(dob.slice(8,10));
    
    var yearTest = currYear - birthYear;
    var monthTest = currMonth - birthMonth;
    var dayTest = currDay - birthDay;

    console.log(monthTest);
    console.log(dayTest);


    var output = document.getElementById('output');
    var access;
    var granted = "Access Granted";
    var denied = "Access Denied!";

    const accessGranted = (access)=> {
        if(access === 'denied') {
            document.getElementById("output").classList.remove('granted');
            document.getElementById("output").classList.add(access);
            output.innerText = denied;
        } else if(access === 'granted') {
            document.getElementById("output").classList.remove('denied');
            document.getElementById("output").classList.add(access);
            output.innerText = granted;
        }
    }

    var validate = document.getElementById('checked');
    if (validate.checked) {

        if(yearTest > 21) {
            accessGranted('granted');
            
        } else if (yearTest === 21) {
            if (monthTest > 0) {
                accessGranted('granted');
            } else if (monthTest === 0) {
                if(dayTest >= 0) {
                    accessGranted('granted');
                } else {
                    accessGranted('denied');
                }
            } else {
                accessGranted('denied');
            }
        } else {
            accessGranted('denied');
        }
    } else {
        output.innerText = "Please check box!"
    }
}