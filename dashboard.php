<?php
session_start();
if (@$auth != "yes") {
    header("Location: login.php");
    exit();
}
/*include() To include mysql connection, db, sql, result */
extract($row);
echo "<html>
      <head>
      <title>New Member Welcome</title>
      </head>
      <body>
      <h2>Welcome $firstName $lastName</h2>\n";
?>
<p>Your new Member Account gives you access to the Assets and Liabilities Entry Page. You will enter the current values of cash and cash equivalents assets, invested assets, use assets, current and long-term liabilities.</p>
<p>Your username and password have been sent to your email</p>

<div>
<p><strong>Glad you could join us!</strong></p>
<form action="data_entry.php" method="post">
    <input type="submit" value="Data Entry Page">
</form>
<form action="index.php" method="post">
    <input type="submit" value="Home Page">
</form>
</div>
</body>
</html>