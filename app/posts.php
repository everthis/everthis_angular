 <?php

	 foreach(glob('./images/*.*') as $filename){
	     echo json_encode($filename);
	 }
  ?>