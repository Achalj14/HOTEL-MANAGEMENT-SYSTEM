const firebaseConfig = {
  apiKey: "AIzaSyAohj4dCDgZ_KHvm917ItiiPPLgdM0tauY",
  authDomain: "booking-eb7ee.firebaseapp.com",
  databaseURL: "https://booking-eb7ee-default-rtdb.firebaseio.com",
  projectId: "booking-eb7ee",
  storageBucket: "booking-eb7ee.appspot.com",
  messagingSenderId: "532204136774",
  appId: "1:532204136774:web:1da436e8424d2f605bdd47"
};
  firebase.initializeApp(firebaseConfig);

  var BOOKINGDB = firebase.database().ref("BOOKING");

  document.getElementById("BOOKING").addEventListener("submit",submitfrom);

  function submitfrom(e){
    e.preventDefault();
    var fname = getElementVal('fname');
    var lname = getElementVal('lname');
    var email = getElementVal('email');
    var phoneno = getElementVal('phoneno');
    var typeofroom = getElementVal('typeofroom');
    var noofroom = getElementVal('noofroom');
    var adult = getElementVal('adult');
    var child = getElementVal('child');
    var checkin = getElementVal('checkin');
    var checkout = getElementVal('checkout');

    saveMessages(fname,lname,email,phoneno,typeofroom,noofroom,adult,child,checkin,checkout);

    document.querySelector('.alert').style.display = "block";

    setTimeout(() => {
      document.querySelector('.alert').style.display = 'none';
  }, 3000);

  document.getElementById("BOOKING").reset();
  }

  const saveMessages = (fname,lname,email,phoneno,typeofroom,noofroom,adult,child,checkin,checkout) =>{
    var newbookingform = BOOKINGDB.push();
     newbookingform.set({
      fname : fname,
      lname : lname,
      email : email,
      phoneno : phoneno,
      typeofroom : typeofroom,
      noofroom : noofroom,
      adult : adult,
      child : child,
      checkin : checkin,
      checkout : checkout,
   })
  }

const getElementVal = (id) =>{
    return document.getElementById(id).value;
}