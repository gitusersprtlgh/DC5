<?php

define('EMAIL_FOR_REPORTS', 'damoncarlstrom@gmail.com');
define('RECAPTCHA_PRIVATE_KEY', '@privatekey@');
define('FINISH_URI', 'http://');
define('FINISH_ACTION', 'message');
define('FINISH_MESSAGE', 'Thanks for filling out my form!');
define('UPLOAD_ALLOWED_FILE_TYPES', 'doc, docx, xls, csv, txt, rtf, html, zip, jpg, jpeg, png, gif');

require_once str_replace('\\', '/', __DIR__) . '/handler.php';

?>

<?php if (frmd_message()): ?>
<link rel="stylesheet" href="<?=dirname($form_path)?>/formoid-metro-cyan.css" type="text/css" />
<span class="alert alert-success"><?=FINISH_MESSAGE;?></span>
<?php else: ?>
<!-- Start Formoid form-->
<link rel="stylesheet" href="<?=dirname($form_path)?>/formoid-metro-cyan.css" type="text/css" />
<form class="formoid-metro-cyan" style="font-size:14px;font-family:'Lato',sans-serif;color:#fff;max-width:310px;min-width:150px" method="post">
	<div class="element-name"  title="Please fill in your full name" <?frmd_add_class("name")?>><label class="title">Name<span class="required">*</span></label><span class="nameFirst"><input  type="text" size="8" name="name[first]" required="required"/><label class="subtitle">First</label></span><span class="nameLast"><input type="text" size="14" name="name[last]" required="required"/><label class="subtitle">Last</label></span></div>
	<div class="element-email"  title="Please fill in your email address" <?frmd_add_class("email")?>><label class="title">Email<span class="required">*</span></label><input class="large" type="email" name="email" value="" required="required"/></div>
	<div class="element-textarea"  <?frmd_add_class("textarea")?>><label class="title">Message</label><textarea class="small" name="textarea" cols="20" rows="4" ></textarea></div>

<div class="submit"><input type="submit" value="Submit"/></div></form>
<script type="text/javascript" src="<?=dirname($form_path)?>/formoid-metro-cyan.js"></script>

<!-- Stop Formoid form-->
<?php endif; ?>

<?php frmd_end_form(); ?>