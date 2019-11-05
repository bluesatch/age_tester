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
    var granted = "Access Granted";
    var denied = "Access Denied!";

    var validate = document.getElementById('checked');
    if (validate.checked) {

        if(yearTest > 21) {
            output.innerText = granted;
        } else if (yearTest === 21) {
            if (monthTest > 0) {
                output.innerText = granted;
            } else if (monthTest === 0) {
                if(dayTest >= 0) {
                    output.innerText = granted;
                } else {
                    output.innerText = denied;
                }
            } else {
                output.innerText = denied;
            }
        } else {
            output.innerText = denied;
        }
    } else {
        output.innerText = "Please check box!"
    }
}