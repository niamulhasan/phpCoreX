<?php

$admin = new User();
if ($admin->isLoggedIn() != true) {
    Redirect::to("http://localhost/" . Config::get('app_variables/root_url') . '/admin/login');
    die("You Don't have the permission to access this page");
}

if ($admin->hasPermission('admin') == false) {
    Redirect::to("http://localhost/" . Config::get('app_variables/root_url') . '/admin/login');
    die("You Don't have the permission to access this page");
}

?>
<?php require_once 'partials/head.php'; ?>
<!-- partial -->


<div class="container-scroller">
    <!-- partial:partials/_navbar.html -->
    <?php require_once 'partials/navbar.php' ?>
    <!-- partial -->
    <div class="container-fluid page-body-wrapper">
        <!-- partial:partials/_settings-panel.html -->
        <?php require_once 'components/themesettings.php'; ?>
        <!-- partial -->
        <!-- partial:partials/_sidebar.html -->
        <?php require_once 'partials/sidebar.php'; ?>
        <div class="main-panel">
            <div class="content-wrapper">
                dfsadf
            </div>
            <!-- content-wrapper ends -->
            <!-- partial:partials/_footer.html -->
            <footer class="footer">
                <div class="d-sm-flex justify-content-center justify-content-sm-between">
                    <span class="text-muted text-center text-sm-left d-block d-sm-inline-block">Copyright © 2020 All rights
                        reserved.</span>
                    <span class="float-none float-sm-right d-block mt-1 mt-sm-0 text-center">Made with phpCoreX</span>
                </div>
            </footer>
            <!-- partial -->
        </div>
        <?php require_once 'partials/foot.php'; ?>