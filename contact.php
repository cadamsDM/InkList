<?php
session_start();
 $success = isset($_SESSION['contact_success']) ? $_SESSION['contact_success'] : false;
 $message = isset($_SESSION['contact_message']) ? $_SESSION['contact_message'] : '';
 $errors = isset($_SESSION['contact_errors']) ? $_SESSION['contact_errors'] : array();
 $form_data = isset($_SESSION['contact_form_data']) ? $_SESSION['contact_form_data'] : array();

// Clear session variables
unset($_SESSION['contact_success']);
unset($_SESSION['contact_message']);
unset($_SESSION['contact_errors']);
unset($_SESSION['contact_form_data']);
?>
