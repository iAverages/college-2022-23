<!DOCTYPE html>
<?php
session_start()
?>
<html>
<body>
<link rel="stylesheet" href="styles2.css">

<main class="center">
    <div class="title">
        <h1>Register below!</h1>
    </div>

        <div class="border">
            <div class="inputs">
                <form method="POST" class="thing" action="save_user.php">
                    <div name="username">
                        <h2>Register</h2>                 
                        <p class="anchorleft">Firstname</p>
                        <input type="text" name="firstname" class="wider"/>  
                    </div>

                    <div>                  
                        <p class="anchorleft">Lastname</p>
                        <input type="text" name="lastname" class="wider"/>  
                    </div>

                    <div class="username">
                        <p class="anchorleft">Email or Username</p>
                        <input type="text" name="username" id="userid" class="wider"/>
                    </div>
                    <div>                  
                        <p class="anchorleft">Password</p>
                        <input type="password" name="password" class="wider"/>  
                    </div>
                    <div>                  
                        <p class="anchorleft">Confirm password</p>
                        <input type="password" name="second_password" class="wider"/>  
                    </div>
                    <div class="thing">
                        <button class="submitBtn" type="submit"  id="submitBtn" >Login</button>
                    </div>
                    
                    <?php
                    //checking if the session 'error' is set. Erro session is the message if the 'Username' and 'Password' is not valid.
                    if(ISSET($_SESSION['pass_error'])){
                    ?>
                    <!-- Display Login Error message -->
                    <div class="alert-danger"><?php echo $_SESSION['pass_error']?></div>
                    <?php
                    //Unsetting the 'error' session after displaying the message. 
                    unset($_SESSION['pass_error']);
                    }
                    ?>
                </form>
            </div>            
        </div>
        <div class="empty_field_error">
            <?php
            //checking if the session 'error' is set. Erro session is the message if the 'Username' and 'Password' is not valid.
            if(ISSET($_SESSION['empty'])){
            ?>
            <!-- Display Login Error message -->
            <div class="alert-danger"><?php echo $_SESSION['empty']?></div>
            <?php
            //Unsetting the 'error' session after displaying the message. 
            unset($_SESSION['empty']);
            }
            ?>
        </div>
        <div class="register_button">
            <P>Have an account? Sign in below!</P>
            
            <div>
                <a class="new_button" href="index.php" >Sign in</a>                
            </div>            
        </div> 
</main>
</body>
</html>




