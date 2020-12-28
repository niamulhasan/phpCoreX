<?php require_once 'partials/head.php'; ?>
<!-- partial -->



<div class="container-scroller">

    <!-- partial -->
    <div class="container-fluid page-body-wrapper">
        <!-- partial -->
        <div class="main-panel">
            <div class="content-wrapper">
                <div class="col-md-6 stretch-card login-fix">
                    <div class="card" style="margin-top: 80px;">
                        <div class="card-body">
                            <h4 class="card-title">Admin Login</h4>
                            <p class="card-description">

                            </p>
                            <form action="adminLoginAction" method="POST">
                                <div class="form-group">
                                    <label>E-mail:</label>
                                    <input type="text" class="form-control" placeholder="E-mail" name="username" aria-label="email">
                                </div>
                                <div class="form-group">
                                    <label>Password</label>
                                    <input type="password" class="form-control" placeholder="Password" aria-label="password" name="password">
                                </div>
                                <div class="form-group">
                                    <label for="">
                                        <input type="checkbox" name="remember" id="remember">Remember Login</label>
                                </div>
                                <input type="hidden" name="token" value="<?php echo Token::generate(); ?>">
                                <div class="template-demo">

                                    <input type="submit" class="btn btn-primary btn-rounded btn-fw float-right" value="Login">
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
            <!-- content-wrapper ends -->
            <!-- partial:partials/_footer.html -->

            <!-- partial -->
        </div>
        <?php require_once 'partials/foot.php'; ?>