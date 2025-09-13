<?php
class HomeController {
    public function index() {
        $config = require __DIR__ . '/../config/app.php';
        include __DIR__ . '/../views/layouts/header.php';
        include __DIR__ . '/../views/layouts/navigation.php';
        include __DIR__ . '/../views/pages/home.php';
        include __DIR__ . '/../views/layouts/footer.php';
    }
    public function contact() {
        include __DIR__ . '/../views/layouts/header.php';
        include __DIR__ . '/../views/layouts/navigation.php';
        include __DIR__ . '/../views/pages/contact.php';
        include __DIR__ . '/../views/layouts/footer.php';
    }
    public function about() {
        include __DIR__ . '/../views/layouts/header.php';
        include __DIR__ . '/../views/layouts/navigation.php';
        include __DIR__ . '/../views/pages/about.php';
        include __DIR__ . '/../views/layouts/footer.php';
    }
}
