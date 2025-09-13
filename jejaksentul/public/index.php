<?php
// Front controller
session_start();
require_once __DIR__ . '/../config/app.php';
require_once __DIR__ . '/../config/routes.php';
require_once __DIR__ . '/../includes/functions.php';
require_once __DIR__ . '/../includes/helpers.php';

$appConfig = require __DIR__ . '/../config/app.php';
$routes = require __DIR__ . '/../config/routes.php';

// Simple router
$requestUri = strtok($_SERVER['REQUEST_URI'], '?');
$route = $routes[$requestUri] ?? $routes['/'];
$controllerName = $route['controller'];
$action = $route['action'];

require_once __DIR__ . '/../controllers/' . $controllerName . '.php';
$controller = new $controllerName();
$controller->$action();
