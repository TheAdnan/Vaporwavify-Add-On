function widen(){
	var wide = ["Ａ","Ｂ","Ｃ","Ｄ","Ｅ","Ｆ","Ｇ","Ｈ","Ｉ","Ｊ","Ｋ","Ｌ","Ｍ","Ｎ","Ｏ","Ｐ","Ｑ","Ｒ","Ｓ","Ｔ","Ｕ","Ｖ","Ｗ","Ｘ","Ｙ","Ｚ"];
	var normal = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

	$("body").find("p, li, ul, h1, h2, h3, h4, h5, span").each(function() {
	  
			var str = $(this).text();
			str = str.toLowerCase();
			for(var i=0; i<normal.length; i++){
				for(var j=0; j < str.length; j++)
					str = str.replace(normal[i], wide[i]);
			}
			$(this).text(str);

	});
}

widen();
