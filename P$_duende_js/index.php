
<?php 
    $imagesInDirectory = scandir('img');
    $allimages = array_diff( $imagesInDirectory, array('.', '..'));
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="css/fonts.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Signika+Negative:wght@500&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="css/style.css">
    <script src="js/funk.js" defer></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/lottie-web/5.10.2/lottie.min.js"></script>
</head>
<body>
    
    <div class="container">
        <div class="subcontainer">
            <div class="title">
                <div class="title__in">
                    <div class="title__fire"></div>
                    <p class="title__txt">La Ruleta del Afortunade</p></div>
                </div>
                
            <div class="foto-tambor">  
                <div class="tambor">
                    <div class="tambor__in">
    
                    </div>
                </div>
                <div class="foto-alumno">
                    <div class="foto-alumno__in">
                        <img class="foto-alumno__img" src="x_hello.jpg" alt="">
                    </div>
                </div>
            </div>
            <div class="controls">
                <button class=" btn play">PLAY</button>
                <button class=" btn stop">STOP</button>
                <button class=" btn predilect">PREDILECT</button>
            </div>
        </div>
    </div>
    <script>
        window.allimages = <?php echo json_encode($allimages); ?>
    </script>
</body>
</html>