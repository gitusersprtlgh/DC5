<? ob_start(); ?>
<?PHP
/*
    Contact Form from HTML Form Guide
    This program is free software published under the
    terms of the GNU Lesser General Public License.
    See this page for more info:
    http://www.html-form-guide.com/php-form/php-form-validation.html
*/
require_once("./include/fgcontactform.php"); 
require_once("./include/formvalidator.php");

$formproc = new FGContactForm();

//Initialize the contact form
$formproc->AddRecipient('damon.j.c9@gmail.com'); //<<---Put your email address here
$formproc->SetFormRandomKey('CnRrspl1FyEylUj');

$validation_errors='';
if(isset($_POST['submitted']))
{// We need to validate only after the form is submitted

    //Setup Server side Validations
    //Please note that the element name is case sensitive 
    $validator = new FormValidator();
    $validator->addValidation("name","req","Please fill in Name");
    $validator->addValidation("email","email","The input for Email should be a valid email value");
    $validator->addValidation("email","req","Please fill in Email");
    
    //Then validate the form
    if($validator->ValidateForm())
    {
        //If the validations succeeded, proceed with form processing
        if($formproc->ProcessForm())
        {
            $formproc->RedirectToURL("thank-you2.php");
        }
    }
    else
    {
        //Validations failed. Display Errors.
        $error_hash = $validator->GetErrors();
        foreach($error_hash as $inpname => $inp_err)
        {
           $validation_errors .= "<p>$inpname : $inp_err</p>\n";
        }        
    }
}//if
$disp_name  = isset($_POST['name'])?$_POST['name']:'';
$disp_email = isset($_POST['email'])?$_POST['email']:'';
$disp_message = isset($_POST['message'])?$_POST['message']:'';
?>

 <!-- Form Code Start -->
<form id='contactus' action='<?php echo $formproc->GetSelfScript(); ?>' method='post' accept-charset='UTF-8'>
<fieldset >
<legend>How can I help you?</legend>

<input type='hidden' name='submitted' id='submitted' value='1'/>
<input type='hidden' name='<?php echo $formproc->GetFormIDInputName(); ?>' value='<?php echo $formproc->GetFormIDInputValue(); ?>'/>
<input type='text'  class='spmhidip' name='<?php echo $formproc->GetSpamTrapInputName(); ?>' />

<div class='short_explanation'>* required fields</div>

<div>
<span class='error'><?php echo $formproc->GetErrorMessage(); ?></span>
<span class='error'><?php echo $validation_errors; ?></span>
</div>
<div>
    <label for='name' >Your Full Name*: </label><br/>
    <input type='text' name='name' id='name' value='<?php echo htmlentities($disp_name) ?>' maxlength="50" /><br/>
    <span id='contactus_name_errorloc' class='error'></span>
</div>
<div>
    <label for='email' >Email Address*:</label><br/>
    <input type='text' name='email' id='email' value='<?php echo htmlentities($disp_email) ?>' maxlength="50" /><br/>
    <span id='contactus_email_errorloc' class='error'></span>
</div>

<div>
    <label for='message' >Message:</label><br/>
    <span id='contactus_message_errorloc' class='error'></span>
    <textarea rows="10" cols="50" name='message' id='message'><?php echo htmlentities($disp_message) ?></textarea>
</div>


<div>
    <input class="submit-btn" type='submit' name='Submit' value='Submit' />
</div>

</fieldset>
</form>
<!--
Form Code End
Visit html-form-guide.com for more info.
-->
     

