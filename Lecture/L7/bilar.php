<?php
    include("databaseFunctions.php");
?>
<!DOCTYPE html>
<html lang="sv">
    <head>
        <meta charset="utf-8">
        <title>PHP F8</title>
    </head>
    <body>
        <main>
        
        <?php
            try {
                //Anslut mot DBHS och DB
                $dbh = connectToDatabase();

                if(isset($_POST["btnDelete"])) {
                   //DELETE
                }

                if(isset($_POST["btnSave"])) {
                    //UPDATE eller INSERT
                }

                if(isset($_POST["btnEdit"])) {
                    //SELECT
                    selectCar($dbh, $_POST["hidId"]);
                } else {
                    createForm();
                }

                listCarsAsForms($dbh);
                
            }catch(PDOException $e) {
                echo($e->getMessage());
            
            } finally{
                //Stäng ner kopplingen mot DBHS och DB
                $dbh = null;
            }
            
        ?>

        </main>
    </body>
</html>