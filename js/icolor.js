




cores=new Array();
cores[0]="#ffa726";
cores[1]="#b2dfdb";
cores[2]="#e53935";
cores[3]= "#e91e63";
cores[4]= "#2196f3";
cores[5]= "#d4e157";
cores[6]= "#9e9e9e";
cores[7]= "#cfd8dc";
cores[8]= "#e1bee7";







$(document).ready(function(){




	fator = 8;

 	/* ao clicar na div com id="box" executa a função */
	$("#download-button").click(function(){

		x=Math.random()*fator; // random da n d 0 ate 1, entao multiplica pelo n de casas no vetor
		x=Math.round(x); // como x deve ser interio usar round para arredondar 
		y = cores[x]; 
			


		$("#index-banner").animate({backgroundColor:y}, 1000, function(){

			index = cores.indexOf(y);
			cores.splice(index,1);
			fator--;

			

			if (cores.length == 0){

				fator = 8;


				cores[0]="#ffa726";
				cores[1]="#b2dfdb";
				cores[2]="#e53935";
				cores[3]= "#e91e63";
				cores[4]= "#2196f3";
				cores[5]= "#d4e157";
				cores[6]= "#9e9e9e";
				cores[7]= "#cfd8dc";
				cores[8]= "#e1bee7";}


		})


		/* a função muda o background da div com id="box" */

		/*	
		$("#index-banner").animate({backgroundColor:"cores[x]"}, 3000,
			function(){

			$("#index-banner").animate({backgroundColor:"#b2dfdb"},3000)
			$("#index-banner").animate({backgroundColor:"##01579b"},3000)
			$("#index-banner").animate({backgroundColor:"#ffffff"},3000)


  			});
*/
		
	}); 
	
});




