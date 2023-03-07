<?php

namespace Certifeo\Utils\Db;

use PDO,PDOException;

// Singleton
class Database {

    private PDO $cnx;

    private static $connect = null;

    private function __construct() {

        global $conf;

        // DNS : Data Source Name
        // 'mysql:host=localhost;dbname=oop'

        try {

            $this->cnx = new PDO(
                'mysql:host=' . $conf['db']['host'] .
                ';dbname=' . $conf['db']['database'],
                $conf['db']['user'],$conf['db']['password'],
                [PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8']
            );

            $this->cnx->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        
        } catch(PDOException $e){

            $message = 'Erreur !' . $e->getMessage() . '<hr>';
            die($message);

        }

    }

    public static function getInstance() {

        if( is_null (self::$connect)){

            self::$connect = new Database;

        }

        return self::$connect;
    }

    public function requete($sql, $fetchmode='fetchAll') {

        try {

            $result = $this->cnx->query($sql, PDO::FETCH_ASSOC)->$fetchmode();
        
        } catch(PDOException $e) {

            $message = 'Erreur !' . $e->getMessage() . '<hr>';
            die($message);

        }

        return $result;
    }

    public function inserer($table, $data){

        $fields = array_keys($data);
        $values = array_values($data);
        $count = count($values);

        $sql = 'INSERT INTO ' . $table . '(' . implode(', ', $fields) . ') VALUES (:' .implode(', :', $fields) . ')';

        $result = $this->cnx->prepare($sql);

        for ($i=0; $i < $count ; $i++) {
            $format = match (gettype($values[$i])){
                'NULL' => PDO::PARAM_NULL,
                'integer' => PDO::PARAM_INT,
                'string' => PDO::PARAM_STR,
                'bool' => PDO::PARAM_BOOL,
                default => PDO::PARAM_STR,
            };
            $result->bindParam(':' . $fields[$i], $values[$i], $format);
        }

        return $result->execute();

    }

}