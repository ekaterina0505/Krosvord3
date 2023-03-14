		var dliny = [10,7,7,11,12,5,6,7];
		var arrayA=["a","b","c","d","e","j","k","l"];
		document.write('<div id="all">'+'<form id="myCros">');
		for (t=0;t<8;t++){
		var so=String(arrayA[t]);
			document.write('<div id="word'+(t+1)+'">'+(t+1));
		for(i=1;i<=dliny[t];i++){
  
			document.write('<input id="'+arrayA[t]+i+'" type="text" maxlength="1" pattern="[А-Яа-яЁё]" onkeyup="f(),chekWord('+(t+1)+')"/>');
			}
			document.write('<span id="otvet'+(t+1)+'"></span>'+'<br>'+'</div>');
		}
	function f(){
		var newid;
		var letters = "abcdejkl";
		var key=window.event;
		var charCode = key.keyCode;
		var pole=document.activeElement;
		var id=pole.id;	
		var pos = letters.indexOf(id.charAt(0));
		if(charCode==116||charCode==16||charCode==18||charCode==17||charCode==8||charCode==123){
			newid=id;
		}else if(charCode==40){
			 newid = letters[(pos + 1)%letters.length] + '1';	
		}		
		else if(charCode==37){
			newid=letters[pos]+(parseInt(id.charAt(1)+id.charAt(2))-1);
			if(newid==letters[pos]+'0'){
				pos=(letters.length - 1 + pos)%letters.length;
				newid=letters[pos]+dliny[pos];
			}
			}
			else if(charCode==39){
				newid=letters[pos]+(parseInt(id.charAt(1)+id.charAt(2))+1);
				if((parseInt(id.charAt(1)+id.charAt(2))+1)==dliny[pos]+1){
					pos=(pos + 1)%letters.length;
					newid=letters[pos]+'1';
				}
		}
		else if(charCode==38){
			newid=letters[(letters.length - 1 + pos)%letters.length]+'1';
		}		
		else{
			 
		 newid=id.charAt(0)+(parseInt(id.charAt(1)+id.charAt(2))+1);	
		if((parseInt(id.charAt(1)+id.charAt(2))+1)==dliny[pos]+1){
					pos=(pos + 1)%letters.length;
					newid=letters[pos]+'1';

				}
			}
		document.getElementById(newid).focus();		
		}
		var answer = ["863373050ba2e0c2382bb1731643f5dfd8a2052faed519c97b2ede41908666c4","e452f8c53a5858b35c89ce4d99d19a594838a14f28028b90f130066a575a0400",
		"e98b7d5e2b781c8e30790eff6386fbbbb4e99bf16dc33b1430d33651ae91520a","d9d872c0954cfcad06ebeb2537a94506dda66c44e7c0bce06d0edbf2e027d85d",
		"d99acd506a408bb1758002411d566a23673c67d2c9097c03be3b095b21197228","0928f12a779d97e81d86364dcb680002ba4a05ce42a8e0bca675bd1f66edb9fe",
		"78aafb41707037a80281f1b707c71b22245ad99a00f510b51c6b7c7b6c4aeb10","76eac8645dd6e1765e8aec89945e7c4b99d8ee80b1b3f63921fab6ddcbc1378a"];
	function check(){
		var word=["","","","","","","",""],kol=0;
		for (q=0;q<8;q++){
			for (y=1;y<=dliny[q];y++){
				word[q]=word[q]+document.getElementById(arrayA[q]+y).value;
			}	
			if(CryptoJS.SHA256(word[q].toLowerCase()).toString() == answer[q]){
				kol++;
			}
		}
		if(kol==8){
			alert("Кросворд решен верно");
		}
		else{
			alert("Кросворд решен не верно");
		}
	   }	
	function chekWord(nomer) {
	 var word="";
	  for (j=1;j<=dliny[nomer-1];j++){
	   var wor=document.getElementById(arrayA[nomer-1]+j).value;
	   word=word+wor;
		    if(CryptoJS.SHA256(word.toLowerCase()).toString() == answer[nomer-1]||CryptoJS.SHA256(word.toLowerCase()).toString() == answer[8]){
			document.getElementById("otvet" + nomer).innerHTML="правильно";
			}else{
			document.getElementById("otvet" + nomer).innerHTML="не правильно";
					}
				}
			}