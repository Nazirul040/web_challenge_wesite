<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $user = $_POST['username'];
    $pass = $_POST['password'];

    if ($user === 'admin' &&
        md5($pass) === '21232f297a57a5a743894a0e4a801fc3') {
        echo "intake{weak_hashes_are_dangerous}";
    } else {
        echo "Invalid credentials";
    }
}
?>

<form method="POST">
<input name="username" placeholder="Username">
<input name="password" placeholder="Password">
<button>Login</button>
</form>