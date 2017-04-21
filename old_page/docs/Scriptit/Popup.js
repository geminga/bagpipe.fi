
/* 
Valokuva-albumin kuvat avataan erilliseen popupikkunaan t‰ll‰ funktiolla.
Kuva -parametrilla v‰litet‰‰n halutun kuvan (suhteellinen) linkki.
*/

function avaaIkkuna(kuva) {
	
	uusi_ikkuna = window.open("", "kuik", "scrollbars, width=600, height=600, left=0, top=0");
	ik = uusi_ikkuna.document;
	
	ik.write('<html><head><title>Valokuvaikkuna</title></head>')
	ik.write('<body link=#273667 alink=#273667 vlink=#273667 style="background-color: #CED6EF; margin-left: 15px; margin-top: 15px">');
	ik.write('<table width="360"><tr><td style="font-family: Arial; font-size: 12px; color: #273667">')
	ik.write('<img style="border: 1px solid #B3BEDF" src="' + kuva + '">');
	ik.write('</td></tr><tr><td style="font-family: Tahoma; font-size: 12px; color: #273667; text-align: right">')
	ik.write('<a style="font-size: 11px; font-weight: bold" href="#" onClick="self.close();">[Sulje ikkuna]</a><br>');
	ik.write('</td></tr></table>');
	ik.write('</html>');
	ik.close();
	uusi_ikkuna.focus();
}
