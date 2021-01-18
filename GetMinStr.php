<?php

class GetMinStr {
    
    public function __construct() {
        ;
    }
    
    public function getIt($arr)
    {
        $source = $arr[0];
        $sub = $arr[1];
        $len = strlen($sub);
        
        echo $source . '<br>' . $sub . '<br>';
        
        $hash = $this->makeHash($sub);
        $i = 0;
        $j = $len;
        
        while (true) {
            $test = $this->makeHash(substr($source, $i, $j - $i));
            $found = true;
            
            foreach ($hash as $k => $v) {
                if (!array_key_exists($k, $test)) {
                    $found = false;
                    break;
                }
                if ($test[$k] < $hash[$k]) {
                    $found = false;
                    break;
                }
            }
            if ($found) {
                return substr($source, $i, $j - $i);
            }
            if ($j < strlen($source)) {
                $i++;
                $j++;
            } elseif ($len < strlen($source)) {
                $len++;
                $i = 0;
                $j = $len;
            } else {
                return "Not Found";
            }
        }
        return "not found";
    }
    
    private function makeHash($in) 
    {
        $hash = [];
        
        for ($i = 0; $i < strlen($in); $i++) {
            if (array_key_exists($in[$i], $hash)) {
                $hash[$in[$i]]++;
            } else {
                $hash[$in[$i]] = 1;
            }
        }
        return $hash;
    }
    
    private function dump($in, $die = false)
    {
        echo '<pre>';
        print_r($in);
        echo '</pre>';
        
        if ($die) {
            die('died in dump');
        }
    }
}

$arr1 = ["ahffaksfajeeubsne", "jefaa"];
$arr2 = ["aaffhkksemckelloe", "fhea"];

$a = new GetMinStr();
$answer = $a->getIt($arr1);
echo $answer . '<br>'; 
$answer = $a->getIt($arr2);
echo $answer . '<br>'; 
