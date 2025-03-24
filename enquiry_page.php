<html>
    <body>
        <?php
        $connection=mysqli_connect("localhost", "root","")
                 or die("Couldn't connect the Server <br>".mysqli_error($connection));
        $db=mysqli_select_db($connection, "customerinformation")
                or die("Couldn't Find the Database<br>".mysqli_error($connection));
        $name=$_POST['name'];
        $phoneno=$_POST['phoneno'];
        $email=$_POST['email'];
        $location=$_POST['location'];
        $date=$_POST['date'];
        $other=$_POST['other'];

        $query="insert into information(name, number, email, location, date, other)
                             values('$name', $phoneno, '$email', '$location', '$date', '$other')";
        $result=mysqli_query($connection, $query)
                    or die("Query Failed".mysqli_error($connection));
        mysqli_close($connection);
        header("Location: enquiry_page_f.html");
        exit();
        ?>
    </body>
</html>