<?php

    function justToShow($indata) {
        echo("<pre>" . PHP_EOL);
        print_r($inData);
        echo("</pre>" . PHP_EOL);
    }
    function connectToDatabase() {

        try {
           
            $dsn = "mysql:host=localhost:3306;dbname=bilar;charset=utf8;";
            $username = "mysqluser";
            $password= "mysqlpassword";

            $dbhsOptions = array(
                PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
                PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC
            );

            $dbh = new PDO($dsn, $username, $password, $dbhsOptions);

            return $dbh;


        }catch(PDOException $e) {
            throw $e;
        }
    }

    function listCarsAsForms($dbh) {

        //SELECT
    
        $sql = "SELECT * FROM cars ORDER BY id DESC;";
        $stmt = $dbh->prepare($sql);
        $stmt->execute();

        /*
        $dummy = $stmt->fetchAll();

        echo("<pre>");
        print_r($dummy);
        echo("</pre>");
        */
        

        while( $row = $stmt->fetch() ) {

                $farg = $row["farg"];
                $fabrikat = $row["fabrikat"];
                $modell = $row["modell"];
                $id = $row["id"];
                $regnr = $row["regnr"];
                $mil = $row["mil"];


                ?>

                <div style='background-color: <?php echo( $farg ); ?>'>
                    <form action='<?php echo( $_SERVER["PHP_SELF"] ); ?>' method='post'>
                
                        <p>Fabrikat: <?php echo( $fabrikat ); ?></p>
                        <p>Modell: <?php echo( $modell ) ?></p>
                        <p>Regnr: <?php echo( $regnr ) ?></p>
                        <p>Färg: <?php echo( $farg ) ?></p>
                        <p>Mil: <?php echo( $mil ) ?></p>
                        <input type='hidden' name='hidId' value='<?php  echo( $id ); ?>'>
                        <input type='submit' name='btnEdit' value='Edit'>
                        <input type='submit' name='btnDelete' value='Delete'>

                    </form>
                </div>

                <?php
            
            }

        try {

        }catch(PDOException $e) {
            throw $e;

        }finally {
            $stmt = null;
        }

    }

    function listCarsAsLinks($dbh) {
        //SELECT
         try {

        }catch(PDOException $e) {
            throw $e;

        }finally {
            $stmt = null;
        }
    }

    function deleteCar($dbh, $id) {
        //DELETE
        echo("DELETE med id: $id");

        try {

            $sql = "DELETE FROM cars WHERE id = :id;";

            $stmt = $dbh->prepare($sql);

            $stmt->bindValue(":id", $id);

            $stmt->execute();


        }catch(PDOException $e) {
            throw $e;

        }finally {
            $stmt = null;
        }
    }

    function updateCar($dbh, $id, $fabrikat, $modell, $regnr, $farg, $mil) {
        //UPDATE
         try {

            $sql = "UPDATE cars set fabrikat=:fabrikat, modell=:modell, 
                regnr=:regnr, farg=:farg, mil=:mil WHERE id = :id;";

            $stmt = $dbh->prepare($sql);

            $stmt->bindValue(":id", $id);
            $stmt->bindValue(":fabrikat", $fabrikat);
            $stmt->bindValue(":modell", $modell);
            $stmt->bindValue(":regnr", $regnr);
            $stmt->bindValue(":farg", $farg);
            $stmt->bindValue(":mil", $mil);

            $stmt->execute();

        }catch(PDOException $e) {
            throw $e;

        }finally {
            $stmt = null;
        }
    } 

    function insertCar($dbh, $fabrikat, $modell, $regnr, $farg, $mil) {
        //INSERT

        try {

            $sql = "INSERT INTO cars(fabrikat, modell, regnr, farg, mil) 
                VALUES(:fabrikat, :modell, :regnr, :farg, :mil);";

            $stmt = $dbh->prepare($sql);

            $stmt->bindValue(":fabrikat", $fabrikat);
            $stmt->bindValue(":modell", $modell);
            $stmt->bindValue(":regnr", $regnr);
            $stmt->bindValue(":farg", $farg);
            $stmt->bindValue(":mil", $mil);

            $stmt->execute();

        }catch(PDOException $e) {
            throw $e;

        }finally {
            $stmt = null;
        }
    }

    function selectCar($dbh, $id) {
        //SELECT
         try {

            $sql = "SELECT * FROM cars WHERE id=:id;";
            $stmt = $dbh->prepare($sql);
            $stmt->bindValue(":id", $id);
            $stmt->execute();
            createForm($stmt->fetch());

        }catch(PDOException $e) {
            throw $e;

        }finally {
            $stmt = null;
        }
    }

    function createForm($row = null) {

        $id ="";
        $fabrikat = "";
        $modell = "";
        $regnr = "";
        $mil = "";
        $farg = "#00ff00";

        if($row !== null) {
            $id = $row["id"];
            $fabrikat = $row["fabrikat"];
            $modell = $row["modell"];
            $regnr = $row["regnr"];
            $mil = $row["mil"];
            $farg = $row["farg"];
        }

        echo("<div><form action='" . $_SERVER["PHP_SELF"]  . "' method='post'>" . PHP_EOL);
        
        if($row !== null) {
            ?>
            <input type='hidden' name='hidId' value='<?php echo($id); ?>'>
            <span style='padding-right: 10px; border: 1px solid black;'>Id: <?php echo($id); ?></span>
            <?php
        }
        
        ?>
        <input type='text' name='txtFabrikat' value='<?php echo($fabrikat); ?>' placeholder='Fabrikat'>
        <input type='text' name='txtModell' value='<?php echo($modell) ?>' placeholder='Modell'>
        <input type='text' name='txtRegnr' value='<?php echo($regnr) ?>' placeholder='Regnr'>
        <input type='number' name='nbrMil' value='<?php echo($mil) ?>' min='0' placeholder='Mil'>
        <input type='color' name='nbrFarg' value='<?php echo($farg) ?>'>
        <input type='submit' name='btnSave' value='Save'>
        <input type='submit' name='btnRensa' value='Reset'>

        </form></div>
        <?php
    }
