<?php

;?>
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta http-equiv="Content-Type" content="text/html;charset=utf-8" />
	<title>
		arrastar elemento
	</title>
	<script>
	function sliderChange(val) {
		// Use Ajax post to send the adjusted value to PHP or MySQL storage
		document.getElementById('sliderStatus').innerHTML = val;
	}
	</script>
	<script src="https://code.jquery.com/jquery-1.9.1.js"></script>
	<script type="text/javascript" src="ola.js"></script>
	<link rel="stylesheet" type="text/css" href="arrastar.css">

	<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
	<link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">


	<style type="text/css">
		.slider {
		  -webkit-appearance: none;
		  height: 10px;
		  background: green;
		}

		.slider:hover {
		  opacity: 1;
		}

		.slider::-webkit-slider-thumb {
		  -webkit-appearance: none;
		  appearance: none;
		  width: 15px;
		  height: 15px;
		  background: black;
		  cursor: pointer;
		}

		.holenew {
			margin-top: 500px;
			width: 500px;
			height: 100px;
			background-color: red;
		}

		.circulo-teste {
			height: 600px;
			width: 600px;
			border: 1px solid black;
			border-radius: 50%;
			overflow: hidden;
		}

		.box-fala {
			display: flex;
			position: relative;
			justify-content: center;
			align-items: center;
			width: 300px;
			height: 150px;
			margin: 20px;
			background-color: grey;
		}

		.box-fala::before {
			content: '';
			position: absolute;
			background-color: rgb(0,0,0,.3);
			display: inline-block;
			height: 30px;
			width: 30px;
			border-radius: 50%;
		}

		.before {
			display: flex;
			position: relative;
			justify-content: center;
			align-items: center;
			width: 300px;
			height: 150px;
			margin: 20px;
			background-color: grey;
		}

		.before::before {
			content: '';
			position: absolute;
			background-color: rgb(0,0,0,.3);
			display: inline-block;
			height: 30px;
			width: 30px;
			border-radius: 50%;
		}

		.active {
			height: 30px !important;
		}
	</style>
</head>
<body>

<div class="empty">
	<div class="fill" draggable="true"></div>
</div>
<div class="empty"></div>
<div class="empty"></div>
<div class="empty"></div>
<div class="empty"></div>

<div class="new">
	<input type="range" min="0" max="100" value="50" step="5" onchange="sliderChange(this.value)" class="slider">
	<br /><br />
	Slider Value = <span id="sliderStatus">50</span>
</div>

<div class="holenew" data-aos="fade-right">oi</div>

<div style="border: 1px solid green; margin-top: 100px; display: flex; justify-content: center; align-items: center; height: 1000px;">

<div class="box-fala" style="background-color: darkred">
	<img src="https://img.icons8.com/material/24/000000/menu.png">
</div>
<div class="box-fala" style="background-color: darkgrey">
	<img src="https://img.icons8.com/material/24/000000/home.png">	
</div>
<div class="box-fala" style="background-color: darkblue">
	<img src="https://img.icons8.com/material/24/000000/folder-invoices.png">
</div>

</div>

<script src="https://code.jquery.com/jquery-1.9.1.js"></script>
<script type="text/javascript" src="ola.js"></script>
<script>
	  AOS.init();
	</script>
</body>
</html>