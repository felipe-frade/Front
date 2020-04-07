<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta http-equiv="Content-Type" content="text/html;charset=utf-8" />
	<title>Teste de estilo</title>
	<link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>

<div style="display: flex; align-items: center; justify-content: center; flex-wrap: wrap; padding: 40vh 0vw; background: #3e3e3e;">
	<?php for ($i=0; $i < 10; $i++) { ?>
	<div id="oi<?php echo $i;?>" class="div"></div>
	<?php }; ?>
</div>

<div style="padding: 20vw 0vw;">
	<div class="inside">
		<div class="fundo"></div>
		<input type="text" name="ok" class="ok">
	</div>
</div>

<div style="background-color: #000; display: flex; justify-content: center; 
align-items: center; flex-wrap: wrap; font-size: 20px; padding: 30px 10px;">
	<?php
		$texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse cursus, sapien vel consectetur pellentesque, enim eros pharetra diam, condimentum ultricies felis nunc quis metus. Nam quis suscipit elit. Pellentesque iaculis eleifend velit in fermentum. Pellentesque ut felis a eros auctor faucibus. Maecenas sit amet semper risus, ac varius tortor. Donec tincidunt, urna ut accumsan ultricies, quam urna elementum quam, a eleifend erat felis sed mi. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed consequat accumsan fermentum. Etiam at odio at massa maximus condimentum. In imperdiet ligula eu lorem sollicitudin, lobortis ultrices libero aliquam. Integer facilisis dui sed convallis aliquet. Aliquam ac lorem sit amet diam ornare iaculis. Fusce est sem, viverra id pretium a, sodales suscipit lacus. Mauris eget elementum mauris.";
		$palavras = explode(" ", $texto);
		$letras = str_split($texto);
		foreach($palavras as $letra){
	;?>
	<div class="letter"><?php echo $letra;?></div>
	<?php
		}
	;?>
</div>
<div class="grade-circulo">
	<div style="width: 100%; text-align: center;">
		<div class="pequeno" id="pequeno-4"></div>
	</div>
	<div class="pequeno" id="pequeno-3"></div>
	<div class="circulo-grande">
		<div class="circulo-grande circulo1"></div>
		<div class="circulo-grande circulo2"></div>
		<div class="circulo-grande circulo3"></div>
		<div class="circulo-grande circulo4"></div>
	</div>
	<div class="pequeno" id="pequeno-1"></div>
	<div style="width: 100%; text-align: center;">
		<div class="pequeno" id="pequeno-2"></div>
	</div>
</div>
<div class="grade-circulo2">
	<div style="width: 100%; text-align: center;">
		<div class="pequeno2" id="pequeno-42"></div>
	</div>
	<div class="pequeno2" id="pequeno-32"></div>
	<div class="circulo-grande2 central">
		<div class="circulo-grande2 circulo12"></div>
		<div class="circulo-grande2 circulo22"></div>
		<div class="circulo-grande2 circulo32"></div>
		<div class="circulo-grande2 circulo42"></div>
	</div>
	<div class="pequeno2" id="pequeno-12"></div>
	<div style="width: 100%; text-align: center;">
		<div class="pequeno2" id="pequeno-22"></div>
	</div>
</div>

<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>
<script type="text/javascript" src="script.js"></script>
</body>
</html>