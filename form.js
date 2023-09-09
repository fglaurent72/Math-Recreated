/* js file for the form is included */

function validateInputs() {
            //declaration of variables
            var SubmitForm;
            var FormErrors;
            var FormMessage="Thank you for your submission!";

            //Initially set SubmitForm to true. 
            SubmitForm = true;

            //Retrieve variables to be validated and sanitized
            //Assume they are dangerous for now
            var fullname    = new String(document.MyForm.fullname.value);
            var email   = new String(document.MyForm.email.value);
            var phonenumber = new String(document.MyForm.phonenumber.value);
            //Check that the user inputs are not blank
            //JavaScript logical operator for OR : ||
            if ( fullname.length < 1 || email.length < 1 || phonenumber.length < 1){    
                FormErrors = "All fields are mandatory. Please complete the form.";
                SubmitForm = false;
            } else {
                //Set up a filter for the pattern of an email and a phone number

                var filter1 = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
                var filter2 =   /^(?:\d{3}|\(\d{3}\))([-/.])\d{3}\1\d{4}$/;    
                // test@test.com
                
                //Use test() method to check user email and phone number against the filter  
                if (!filter1.test(email) || !filter2.test(phonenumber)){
                    FormErrors = "Your form contains invalid field entries. Please correct your form before submitting";
                    SubmitForm = false;
                }
            }
                    
            if (SubmitForm == false){
                //The form cannot be submitted.
                alert(FormErrors);
                return false; 
            } else {
              //SANITIZE user inputs by allowing only [a-z 0-9 _ - . @] 
                //strip forbidden characters
                fullname = fullname.replace(/[^a-z0-9\s\-]/gim,"");
                fullname = fullname.trim();
                email = email.replace(/[^a-z0-9_@.-]/gim,"");
                email = email.trim();
                phonenumber = phonenumber.replace( /^[\d-]+$/gim,"");
                phonenumber = phonenumber.trim();
  //ready to submit
                document.MyForm.submit();
                
              alert(FormMessage);
            }
         }    
              
