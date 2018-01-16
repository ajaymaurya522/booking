<?php

use Slim\Http\Request;
use Slim\Http\Response;

// Routes

require __DIR__ . '/services/item.php';

$container = $app->getContainer();

$container['item'] = function ($container) {
    $itemService = new ItemService();
    return $itemService;
};

$app->get('/[{controller}]', function (Request $request, Response $response, array $args) {
    // Sample log message
    $this->logger->info("Slim-Skeleton '/' route");

    //$response->getBody()->write("Error - RestFull API controller does not exist!!!");

    $controller = $request->getAttribute('controller');

    $data = array();

    if( !is_null($controller) ) {
      if( $this->has($controller) ) {
        $data = $this->get($controller)->fetchData();
      } else {
        $data = array('error' => 'controller is not defined', 'controller' => $controller);
      }
    } else {
      $data = array('error' => 'controller name is not ptovided');
    }

    return $response->withStatus(200)->withJson($data);
});
