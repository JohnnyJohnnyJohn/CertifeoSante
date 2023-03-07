<?php

// echo 'It works';

require_once __DIR__ . '\..\app\autoload.php';

use Certifeo\Controllers\Faq;

$_GP = array_merge($_POST, $_GET);

if (isset($_GP['mod']) && $_GP['mod']==='faq') {
    
    $faq = new Faq;

    echo $faq->display();

    exit;
}