<!-- results.php -->
<?php
  // reCaptcha info
  $secret = "6Lfm160UAAAAAFvZ9_WRO-FyftAH6Tsi8GttFk82";
  $remoteip = $_SERVER["REMOTE_ADDR"];
  $url = "https://www.google.com/recaptcha/api/siteverify";

  // Form info
  $first = $_POST["first"];
  $last = $_POST["last"];
  $response = $_POST["g-recaptcha-response"];

  // Curl Request
  $curl = curl_init();
  curl_setopt($curl, CURLOPT_URL, $url);
  curl_setopt($curl, CURLOPT_POST, true);
  curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
  curl_setopt($curl, CURLOPT_POSTFIELDS, array(
    'secret' => $secret,
    'response' => $response,
    'remoteip' => $remoteip
    ));
  $curlData = curl_exec($curl);
  curl_close($curl);

  // Parse data
  $recaptcha = json_decode($curlData, true);
  if ($recaptcha["success"]) {
    $recipient = "booking@murraymacrecords.com";
    $subject = "Contact form submission";
    $sender = $_POST["sender"];
    $senderEmail = $_POST["senderEmail"];
    $message = $_POST["message"];
  
    $mailBody="Name: $sender\nEmail: $senderEmail\n\n$message";
  
    mail($recipient, $subject, $mailBody, "From: $sender <$senderEmail>");
  
    $thankYou="<h2 style=\"padding:3rem 0 0 3rem;font-family:'Verdana';font-size:2vw;letter-spacing:-2px;\">
    Thank you! Your message has been sent.</h2><br>
    <br>
    <a href=\"index.html\" style=\"padding-left:3rem;font-family:'Verdana';text-decoration:none;\">Return to Site</a>";
  }
  else
    echo "Failure!";
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