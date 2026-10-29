<!DOCTYPE html>
<html lang="sv">
    <head>
        <meta charset="utf-8">
        <title>PHP F8 - Modifierad url</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <style> 
            img {
                width: 15%;
                height: 15%;
                padding-right: 5px;
                padding-bottom: 10px;
            }
        </style>
    </head>

    <body class="container p-2">
        <header class="jumbotron text-center">
            <h1>PHP F8 - Först till 100 med modifierad url</h1>
        </header>

        <main>    
            <?php

                define("IMG", "<img src='http://localhost/ISGB22_2026/L8/bilder/");

                $summa = 0;
                $antal = 0;

                if( isset( $_GET["skicka"] ) ) {

                    //Här skriver du din kod!
                    $summa = $_GET["summa"];

                    for($i=0;$i<6;$i++) {
                        $slumptal = rand(1,6);
                        echo(IMG . $slumptal . ".png' alt='" .$slumptal."' />");
                        //$summa = $summa + $slumptal;
                        $summa += $slumptal;
                    }

                    $antal = $_GET["antal"];
                    $antal++;

                    if($summa >= 100) {
                        echo("<h2> Grattis du har nått 100! Antal omgångar det tog: " .$antal. "</h2>" );
                    } else {
                        echo("<h2> Summa: ".$summa." Antal omgångar: " .$antal. "</h2>" );
                    }


                }

            ?>

            <a href="<?php echo($_SERVER["PHP_SELF"] . "?skicka=skicka&summa=$summa&antal=$antal"); ?>" class="btn btn-primary <?php if ($summa >= 100) echo "disabled" ?>">Skicka</a>
            <a href="<?php echo($_SERVER["PHP_SELF"]); ?>" class="btn btn-secondary ">Rensa</a>
        </main>

    </body>

</html>