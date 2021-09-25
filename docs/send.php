<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';

$mail = new PHPMailer(true);
$mail->CharSet = 'UTF-8';
$mail->setLanguage('ru', 'phpmailer/language');
$mail->IsHTML(true);

//Письмо от
$mail->setFrom('readmanga8@gmail.com',);
//Кому
$mail->addAddress('askema@mail.ru');
//Тело письма
$mail->Subject = 'Отправка формы';

$body = '<h1>Тада~ Вам прислали форму!</h1>';
$body.='<p>Имя: '.$_POST['name'].'</p>';
$body.='<p>Телефон: '.$_POST['tel'].'</p>';
$body.='<p>E-mail: '.$_POST['email'].'</p>';
$body.='<p>Название продукта: '.$_POST['productName'].'</p>';

$mail->Body = $body;

//Отправка
header('Content-type: application/json');
echo json_encode($response);
?>
