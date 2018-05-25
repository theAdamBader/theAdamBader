<!DOCTYPE html>
<html lang="en">

<head>



<!--start of meta -->
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="Adam Bader" content="">
<!--end of meta -->

    <title>Adam Bader</title>

    <link rel="icon" href="./img/favicon.png">

<!-- Bootstrap Core CSS -->
    <link href="vendor/bootstrap/css/bootstrap.css" rel="stylesheet">

<!-- Plugin CSS -->
    <link href="vendor/magnific-popup/magnific-popup.css" rel="stylesheet">

<!-- Theme CSS -->
    <link href="css/creative.css" rel="stylesheet">
    <link href="css/myCreative.css" rel="stylesheet">
    <link href="css/contactForm.css" rel="stylesheet" type="text/css">

<!--list of scripts -->
    <script src="p5.min.js" type = "text/javascript"></script>
    <script src="addons/p5.dom.min.js" type = "text/javascript"></script>
    <script src="addons/p5.sound.min.js" type = "text/javascript"></script>
    <script src = "./js/animation/sprite.js" type = "text/javascript"></script>
    <script src = "./js/animation/spriteName.js" type = "text/javascript"></script>
    <script src="./js/animation/sketch.js" type = "text/javascript"></script>

   
   

<!--end of scripts -->

    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
        <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->

</head>

<body id="page-top">

    <nav id="mainNav" class="navbar navbar-default navbar-fixed-top">
        <div class="container-fluid">
            <!-- Brand and toggle get grouped for better mobile display -->
            <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                    <span class="sr-only">Adam Bader</span> Menu <i class="fa fa-bars"></i>
                </button>
                <a class="navbar-brand page-scroll" href="#page-top">Adam Bader</a>
            </div>

            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav navbar-right">
                    <li>
                        <a class="page-scroll" href="#page-top">Home</a>
                    </li>
                     <li>
                        <a class="page-scroll" href="#About">About</a>
                    </li>
                    <li>
                        <a class="page-scroll" href="#portfolio">Projects</a>
                    </li>
                    <li>
                        <a class="page-scroll" href="#artwork">Artwork</a>
                    </li>
                    <li>
                        <a class="page-scroll" href="#contact">Contact</a>
                    </li>
                </ul>
            </div>
            <!-- /.navbar-collapse -->
        </div>
        <!-- /.container-fluid -->
    </nav>
<!-- end of nav -->


<br>

<h1 class="title" id="contact">LET'S GET IN TOUCH!</h1>
                    <hr>
<div id="form-main">
  <div id="form-div">
    <form class="form" action="contactForm.php" method="post">
      
      <p class="name">
        <input name="name" type="text" class="validate[required,custom[onlyLetter],length[0,100]] feedback-input" placeholder="Name" id="name" />
      </p>
      
      <p class="email">
        <input name="email" type="text" class="validate[required,custom[email]] feedback-input" id="email" placeholder="Email" />
      </p>

      <p class="subject">
        <input name="subject" type="text" class="validate[required,custom[onlyLetter],length[0,100]] feedback-input" placeholder="Subject" />
      </p>
      
      <p class="text">
        <textarea name="text" class="validate[required,length[6,300]] feedback-input" id="comment" placeholder="Comment"></textarea>
      </p>
      
      
      <div class="submit">
        <button type="submit" value="SEND" id="button-blue">SUBMIT</button> 
       
      </div>
    </form>
  </div>
  </div>

 <!-- jQuery -->
    <script src="vendor/jquery/jquery.min.js"></script>

    <!-- Bootstrap Core JavaScript -->
    <script src="vendor/bootstrap/js/bootstrap.min.js"></script>

    <!-- Plugin JavaScript -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.3/jquery.easing.min.js"></script>
    <script src="vendor/scrollreveal/scrollreveal.min.js"></script>
    <script src="vendor/magnific-popup/jquery.magnific-popup.min.js"></script>

    <!-- Theme JavaScript -->
    <script src="js/creative.js"></script>

</body>

</html>