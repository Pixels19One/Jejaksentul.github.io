<?php
// Simple route definitions
return [
    '/' => ['controller' => 'HomeController', 'action' => 'index'],
    '/jalur-trekking' => ['controller' => 'TrekkingController', 'action' => 'list'],
    '/jalur' => ['controller' => 'TrekkingController', 'action' => 'detail'],
    '/booking' => ['controller' => 'BookingController', 'action' => 'create'],
    '/contact' => ['controller' => 'HomeController', 'action' => 'contact'],
    '/about' => ['controller' => 'HomeController', 'action' => 'about'],
    '/admin' => ['controller' => 'AdminController', 'action' => 'login'],
];
