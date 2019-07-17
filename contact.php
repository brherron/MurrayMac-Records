<?php
/* [VERIFY CAPTCHA FIRST] */
$secret = '6Lfm160UAAAAAFvZ9_WRO-FyftAH6Tsi8GttFk82'; // CHANGE THIS TO YOUR OWN!
$url = "https://www.google.com/recaptcha/api/siteverify?secret=$secret&response=".$_POST['g-recaptcha-response'];
$verify = json_decode(file_get_contents($url));

/* [PROCESS YOUR FORM] */
if ($verify->success) {
  if($_POST["submit"]) {
    $recipient = "booking@murraymacrecords.com";
    $subject = "Form to email message";
    $sender = $_POST["sender"];
    $senderEmail = $_POST["senderEmail"];
    $message = $_POST["message"];
  
    if(!empty($_POST['website'])) die();
  
    $mailBody="Name: $sender\nEmail: $senderEmail\n\n$message";
  
    mail($recipient, $subject, $mailBody, "From: $sender <$senderEmail>");
  
    $thankYou="<p>Thank you! Your message has been sent.</p><br>
    <br>
    <a href=\"index.html\">Return</a>";
  }
} else {
  // Invalid captcha
  // @TODO - Show error message, ask user to retry
}
?>

<!DOCTYPE html>

<html>
<head>
    <meta charset="utf-8">
    <title>Form Sent | MurrayMac Records</title>
</head>

<body>

    <?=$thankYou ?>

</body>

</html>