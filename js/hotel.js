//test object
/*var test = {
    fname: "Emma",
    lname: "Kramer",
    age: 20,
    display: function(){
        console.log("in function")
        return fname + " " + this.lname;
    }

};

console.log(test.display());
*/

//hotel reservation
var guestgroup = new Array();
$('#hotelsubmit').click(reservation);
function reservation(){
    var guest = {
        name: $('#name').val(),
        checkin: $('#checkin').val(),
        checkout: $('#checkout').val(),
        num: $('#num').val(),
        room: $('#room').val()
    };

    alert(guest.name + " Reserve a Room");
    guestgroup.push(guest);
    console.log(guestgroup);
}

