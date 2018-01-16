<?php

class ItemService {

    public function msg() {
        return "It's a beautiful day chris, come out and play! " .
               "NO!  *SLAM!*  taka taka taka taka.";
    }

    public function fetchData() {
      return array('name' => 'Bob', 'age' => 40, 'service' => 'fetchData');
    }
}
