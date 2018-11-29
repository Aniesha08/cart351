<?php
//check if there has been something posted to the server to be processed
class MyDB extends SQLite3
{
 function __construct()
 {
    $this->open('../db/quizResults.db');
 }
}
try
{
 $db = new MyDB();
}
catch(Exception $e)
{
  die($e);
}

if($_SERVER['REQUEST_METHOD'] == 'POST')
{
  $answer1 =$db->escapeString($_POST['Answer1']);
  $answer2 =$db->escapeString($_POST['Answer2']);
  $answer3 =$db->escapeString($_POST['Answer3']);
  $answer4 =$db->escapeString($_POST['Answer4']);
  $answer5 =$db->escapeString($_POST['Answer5']);
  $answer6 =$db->escapeString($_POST['Answer6']);
  $answer7 =$db->escapeString($_POST['Answer7']);
  $answer8 =$db->escapeString($_POST['Answer8']);
  $answer9 =$db->escapeString($_POST['Answer9']);
  $answer10 =$db->escapeString($_POST['Answer10']);



 $queryInsert ="INSERT INTO userImpression(Answer1, Answer2, Answer3, Answer4, Answer5, Answer6, Answer7, Answer8, Answer9, Answer10)VALUES ('$answer1', '$answer2', '$answer3', '$answer4', '$answer5', '$answer6', '$answer7', '$answer8', '$answer9', '$answer10')";
  //  // again we do error checking when we try to execute our SQL statement on the db
 	$ok1 = $db->exec($queryInsert);
  //  // NOTE:: error messages WILL be sent back to JQUERY success function .....
 	if (!$ok1) {
    die("Cannot execute statement.");
    exit;
    }
  //    //send back success...
     echo "success";
    exit;
}//POST
?>
