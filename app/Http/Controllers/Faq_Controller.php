<?php

namespace Certifeo\Controllers;

use Certifeo\Controllers\Controller;

class Faq extends Controller{

    public function display() {

        return $this->render('layouts.Default', 'templates.Faq');

    }

}