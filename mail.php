<?php
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    $from = 'From: TangledDemo'; 
    $to = 'luq1@o2.pl'; 
    $subject = 'Message from Portfolio-site';
			
    $body = "From: $name\n E-Mail: $email\n Message:\n $message";
				
    if ($_POST['submit']) {				 
        if (mail ($to, $subject, $body, $from)) { 
	    echo '<script language="javascript">';
		echo 'alert("message successfully sent")';
		echo '</script>';
		} 
		else { 
		    echo '<p>Something went wrong, go back and try again!</p>'; 
		} 
    }
?>