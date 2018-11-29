<?php

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
   echo ("Opened or created quiz results database successfully<br \>");

   $theQuery = 'CREATE TABLE userImpression (ParticipantID INTEGER PRIMARY KEY NOT NULL, Answer1 TEXT, Answer2 TEXT, Answer3 TEXT, Answer4 TEXT, Answer5 TEXT, Answer6 TEXT, Answer7 TEXT, Answer8 TEXT, Answer9 TEXT, Answer10 TEXT)';
   $ok = $db ->exec($theQuery);
	// make sure the query executed
	if (!$ok)
	die($db->lastErrorMsg());
	// if everything executed error less we will arrive at this statement
	echo "Table quiz results created successfully<br \>";
}
catch(Exception $e)
{
   die($e);
}
?>
