$(document).ready(function()
{
	//Napis powitania wyswietla sie po 2 sek
	//$(".powitanie").fadeIn(2000);

	//Otwieranie się menu po kliknieciu w logo lotos lub napis "Menu"
	$("#menuLotos, .napisMenu").click(function()
	{
		$(".elementyNawigacji").slideToggle(500);//nie wiadomo czemu slideToggle itp nie działaja
		//RE: przez wersję slim JQ nie działy funkcje slideToggle itp
	});
	//klikniecie w ikony masazu i odczulania otwieraja tekst oraz daja obramowanie szare
	$(".ikonaMasaz").click(function()
	{
		$(".opisUslugiMasaz").slideToggle(500)
		$(".ikonaMasaz").toggleClass("activeClass");
	});

	$(".ikonaAlergia").click(function()
	{
		$(".opisUslugiOdczulanie").slideToggle(500)
		$(".ikonaAlergia").toggleClass("activeClass");

	});

	//klikniecie na div cennik otwiera elementy cennika
	$("#cennik").click(function()
	{
		$(".masazeCennik, .alergiaCennik, .odczulanieCennik").slideToggle(500)
		$("#strzalkaDol").toggleClass("obrotStrzalki");
	});

	//Klikniecie przycisku "do gory" przewija strone z animacja 800ms
	$("#przyciskDoGory").click(function()
	{
		//window.scrollBy(0, -1*pageYOffset)
			$('body,html').animate({
				scrollTop: 0
			}, 800);
	});

	//Przewiniecie strony pokazuje przycisk "do gory"
	$(window).scroll(function()
	{
		var przesuniecie = window.pageYOffset;
		var przycisk = $("#przyciskDoGory");

		if(przesuniecie>300)
		{
			przycisk.css("display", "block");
		}
		else
		{
			przycisk.css("display", "none");
		}
	});


});
