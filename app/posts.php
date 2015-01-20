<?php
if ($handle = opendir('./views')) {

    while (false !== ($entry = readdir($handle))) {

        if ($entry != "." && $entry != ".." && $entry != "posts-list.html") {

            echo "$entry\n";

        }
    }

    closedir($handle);
}
?>