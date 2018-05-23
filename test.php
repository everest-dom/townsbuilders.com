<?php
session_start();

$roistatData = array(
    'roistat' => isset($_COOKIE['roistat_visit']) ? $_COOKIE['roistat_visit'] : null,
    'key'     => 'MTM4OTg6MzM5ODA6Nzg5MWMyYjgyYTUzMTY0YzY5ODdlYTEyMzBmOGRiYmE=',
    'title'   => 'Сделка с сайта ' . $_POST['location_c'],
    'comment' => 'Форма: ' . $_POST['hidden'],
    'name'    => isset($_POST['last_name']) ? $_POST['last_name'] : null,
    'email'   => null,
    'phone'   => isset($_POST['phone_mobile']) ? $_POST['phone_mobile'] : null,    
    'fields'  => array(),
);
 
file_get_contents("https://cloud.roistat.com/api/proxy/1.0/leads/add?" . http_build_query($roistatData));
@include $_SERVER["DOCUMENT_ROOT"] . '/r7k12_r.php';
?>
<html>
<head>
<meta charset="UTF-8">

<!-- Google Tag Manager -->
		<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
			new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
		j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
		'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
		})(window,document,'script','dataLayer','GTM-M25KQT');</script>
	<!-- End Google Tag Manager -->



<meta charset="UTF-8" />
<title>Поздравляем - Вы сделали первый шаг к собственному дому!</title>
<meta name="description" content="Дома по цене квартир в черте столице золотого кольца России - Ярославле!">
<meta name="viewport" content="width=device-width, initial-scale=1 maximum-scale=1, user-scalable=no">
<meta name="format-detection" content="telephone=no">
<link href="images/favicon.ico" rel="icon"          type="image/x-icon"/>
<link href="images/favicon.ico" rel="shortcut icon" type="image/x-icon"/>
<link rel="stylesheet" href="css/reset.css"/>
<link rel="stylesheet" href="css/grid.css"/>
<link rel="stylesheet" href="css/ui.css"/>
<link rel="stylesheet" href="css/style.css"/>
<link rel="stylesheet" href="css/responsive.css"/>
</head>
<body>

	<!-- Google Tag Manager (noscript) -->
		<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-M25KQT"
		height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
	<!-- End Google Tag Manager (noscript) -->
		<section class="section_intro relative section" style="height: 100vh; padding-top: 30px;">

		<header class="section_header_test">
			<h2 class="title_highlight_container uppercase">
				<span class="title_highlight">
					<span class="text_bold2">Введите ваш Email</span><br><br>
				</h2>


				<form action="https://app.getresponse.com/add_subscriber.html" accept-charset="utf-8" method="post" class="validate">
					<!-- Поле Email (обязательно) -->
					<input type="text" class="form_input required" style="max-width: 250px;" placeholder="Ваш email" name="email"/><br/>
					<!-- API ID -->
					<!-- Получить API ID на: https://app.getresponse.com/campaign_list.html -->
					<div class="form_group">
						<input type="hidden" name="campaign_token" value="VS39g" />
					</div>
					<!-- Кнопка подписаться -->
					<input class="button button_success" type="submit" value="Отправить"/>
				</form>





				

				
			</header>

		</section>
		<script src="js/script.js"></script>
		<script src="js/validate.js"></script>
</body>
</html>
