<?php
// Configuration
 $to = 'inklistnz@gmail.com';
 $subject_prefix = '[THE INKLIST Contact Form] ';

// Initialize variables
 $name = $email = $form_subject = $message = '';
 $errors = array();
 $success = false;

// Check if form was submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    // Validate and sanitize name
    if (empty($_POST['name'])) {
        $errors['name'] = 'Name is required';
    } else {
        $name = filter_var($_POST['name'], FILTER_SANITIZE_STRING);
    }
    
    // Validate and sanitize email
    if (empty($_POST['email'])) {
        $errors['email'] = 'Email is required';
    } else {
        $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            $errors['email'] = 'Invalid email format';
        }
    }
    
    // Validate and sanitize subject
    if (empty($_POST['subject'])) {
        $errors['subject'] = 'Subject is required';
    } else {
        $form_subject = filter_var($_POST['subject'], FILTER_SANITIZE_STRING);
    }
    
    // Validate and sanitize message
    if (empty($_POST['message'])) {
        $errors['message'] = 'Message is required';
    } else {
        $message = filter_var($_POST['message'], FILTER_SANITIZE_STRING);
    }
    
    // If no errors, send email
    if (empty($errors)) {
        $email_subject = $subject_prefix . $form_subject;
        $email_body = "You have received a new message from your website contact form.\n\n";
        $email_body .= "Name: $name\n";
        $email_body .= "Email: $email\n\n";
        $email_body .= "Message:\n$message\n";
        
        $headers = "From: $name <$email>\r\n";
        $headers .= "Reply-To: $email\r\n";
        $headers .= "X-Mailer: PHP/" . phpversion();
        
        // Send email
        if (mail($to, $email_subject, $email_body, $headers)) {
            $success = true;
        } else {
            $errors['general'] = 'Sorry, there was an error sending your message. Please try again later.';
        }
    }
    
    // Redirect back to contact page with success or error message
    session_start();
    if ($success) {
        $_SESSION['contact_success'] = true;
        $_SESSION['contact_message'] = 'Your message has been sent successfully. We\'ll get back to you soon!';
    } else {
        $_SESSION['contact_success'] = false;
        $_SESSION['contact_errors'] = $errors;
        $_SESSION['contact_form_data'] = array(
            'name' => $name,
            'email' => $email,
            'subject' => $form_subject,
            'message' => $message
        );
    }
    
    header('Location: contact.html');
    exit;
}
?>