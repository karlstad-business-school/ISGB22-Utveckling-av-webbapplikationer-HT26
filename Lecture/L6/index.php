<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

  echo("Hej index.php");
        echo("<p class='test-name'> Alexander </p>");
        echo("<p class=\"test-name\"> Alexander </p>");
        echo('<p class="test-name"> Alexander </p>');

        define("LANGUAGE", "PHP");
        echo(LANGUAGE);

        $number = 12345;
        settype($number, "string");
        if($number === "12345"){
            echo("<p>Number är en sträng och har värdet 12345</p>");
        }

        if(is_numeric($number)){
            echo("<p>Number är nu en nummer</p>");
        }

        for($i = 1; $i < 7; $i++){
            //echo("<h" . $i . ">Heading</h" . $i . ">");
            echo("<h$i>Heading</h$i>");
        }

        echo("<br>");
        echo("<br>");
        echo("<br>");
        echo("<br>");
        echo("<br>");
        echo("<br>");
        $arr = array(1, 2, 3, 4, 5);

        echo("<pre>");
        print_r($arr);
        echo("</pre>");

        for($i = 0; $i < count($arr); $i++){
            $aCoolNumber = $arr[$i];
            echo("<p>$aCoolNumber</p>");
        }

        foreach($arr as $aCoolNumber){
            echo("<p>$aCoolNumber</p>");
        }

        $arr = array();
        for($i = 0; $i < 10; $i++){
            $r = rand(0, 10);
            array_push($arr, $r);
        }

        echo("<pre>");
        print_r($arr);
        echo("</pre>");

    ?>


    <?php
        echo("<p><b>Detta är ett test!</b></p>  ");

        $testText  = "<p>Detta är en ny paragraf</p>";
        echo($testText);

     



        $arr = array(8, 9, 10, 11, 12, 17, 23);

        /*echo "<pre>";
        print_r($arr);
        echo "</pre>";*/
        printArray($arr);

        function printArray($arr){
            echo "<pre>";
            print_r($arr);
            echo "</pre>";
        }



        $method = "get";
    ?>

    <form method="<?php echo($method) ?>">
        <input type="text" name="theCoolestUsername"/>
        <input type="password" name="password"/>

        <input type="submit" name="aCoolLoginButton" value="login"/>
    </form>


    <?php
        printArray($_GET);


        if(isset($_POST['aCoolLoginButton'])){
            $username = $_POST['theCoolestUsername'];
            $password = $_POST['password'];

           

            if($username == "admin" && $password == "12345"){
                echo("<p>Du är inloggad!</p>");
            }else{
                echo("Fel användarnamn eller lösenord");
            }
        }

    ?>
    
</body>
</html> 