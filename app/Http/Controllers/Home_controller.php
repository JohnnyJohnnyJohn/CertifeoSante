<?php

namespace Certifeo\Controllers;

use Certifeo\Controllers\Controller;
use Certifeo\Utils\Db\Database;

class Home extends Controller{

    public function display() {

        return $this->render('layouts.Default', 'templates.Home');

    }

}