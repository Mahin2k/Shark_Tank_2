//Calls for all the other function
  function funcCall() {
    nameFirst();
    nameLast();
    inputPhone();
    validFormCCN();
    validFormZip();
    emailVal();
  }
		//function to validate the zip code
  function validFormZip() {
    var zip, text;
    zip = document.getElementById('inputZip').value;
    if (isNaN(zip) || zip < 00501 || zip > 99950) {
      text = "Invalid Zip Code";
    } else if (zip > 00501 || zip < 99950 && zip.length == 5) {
      text = "&#10004;";
    }
    document.getElementById('zip').innerHTML = text;
  }
		
	/*function validFormZip() {
	var zip, text;
	zip = document.getElementById('inputZip').value;
	if (isNaN(zip)) {
		text = "Don't Leave Blank";
	} else if (zip.length == 5) {
		text = "&#10004;";
	} else if (zip > 00501 || zip < 99950) {
		text = "Invalid Zip Code";
	}
		document.getElementById('zip').innerHTML = text;
	}*/

  /*function validFormCCN() {
    var ccn, textC;
    ccn = document.getElementById('ccn').value;
    if (isNaN(ccn) || ccn < 4000000000000000 || ccn > 5999999999999999) {
      textC = "Enter correct card number";
    } else {
        textC = "&#10004;";
      }
    document.getElementById("CCNSpan").innerHTML = textC;
  }*/
		
		//function for validating Credit Card Numbers
	function validFormCCN() {
		var ccn, text;
		ccn = document.getElementById('ccn').value;
		if (ccn % 2 == 0 && ccn.length == 16) {
			document.getElementById('CCNSpan').innerHTML = "&#10004;";
		} else if (isNaN(ccn) || ccn.length > 16 || ccn.length < 16 && ccn % 2 !== 0) {
			document.getElementById('CCNSpan').innerHTML = "Invalid Card Number";
		} else {
			document.getElementById('CCNSpan').innerHTML = "Invalid Card Number";
		}
	}
		
		//function for validating Email
  function emailVal() {
    if (addressForm.inputEmail.value == "") {
      document.getElementById('email').innerHTML = "Email Unspecified";
      //alert("Please Enter Email Address!");
      addressForm.inputEmail.value();
      return false;
    }
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (reg.test(addressForm.inputEmail.value) == false ) {
      document.getElementById('email').innerHTML = "Invalid";
      //alert("Invalid Email Address");
      addressForm.inputEmail.focus();
      return false;
    } else {
      document.getElementById('email').innerHTML = "&#10004;"
    }
    return true;
  }
		
		//Function for registering First name
  function nameFirst() {
    if (addressForm.inputFName.value == ""){
      document.getElementById('firstName').innerHTML = "Don't leave blank";
    } else {
      document.getElementById('firstName').innerHTML = "&#10004;";
    }
  }

		//Function to register last name
  function nameLast() {
    if (addressForm.inputLName.value == ""){
      document.getElementById('lastName').innerHTML = "Don't leave blank";
    } else {
      document.getElementById('lastName').innerHTML = "&#10004;";
    }
  }

		//Function for registering phone number
  function inputPhone() {
    var phone = addressForm.inputPhone.value
    var n = phone.length;
    if (addressForm.inputPhone.value == ""){
      document.getElementById('phoneNum').innerHTML = "Enter Phone Number";
    } else if (n > 9 && n < 11) {
      document.getElementById('phoneNum').innerHTML = "&#10004;";
    }
  }

		/*function phoneNumber(inputTxt){
			var phoneNum = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
			if ((inputTxt.value.match(phoneNum))) {
				return true;
			} else {
				alert("Phone Number False");
				return false;
			}
		}*/