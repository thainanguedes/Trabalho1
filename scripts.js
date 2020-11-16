

	var cadastro = localStorage.getItem("cadastro_db");// Recupera os dados armazenados

	cadastro = JSON.parse(cadastro); // Converte string para objeto

	if(cadastro == null) // Caso não haja conteúdo, inicia um vetor vazio
	cadastro = [];


	
	function Listar(){

		$("#tabela").html("");
		$("#tabela").html(
			"<thead>"+
			"	<tr>"+	
			"	<th>AÇÕES</th>"+
			"	<th>NOME</th>"+
			"	<th>EMAIL</th>"+
			"	</tr>"+
			"</thead>"+
			"<tbody>"+
			"</tbody>"
			);

		 for(var i in cadastro){
			var cli = JSON.parse(cadastro[i]);
			  	$("#tabela tbody").append("<tr>"+
										  "	<td><img src='img/delete.png' alt='"+i+"' class='btnExcluir'/></td>" + 
										 "	<td>"+cli.nome+"</td>" + 
										 "	<td>"+cli.email+"</td>" + 
		  								 "</tr>");
										 
		 }
	}



	Listar();





	btn.addEventListener('click',function(){
	
	var btn = document.getElementById('btn');

	var nome  = document.getElementById('nome').value;	
	var email  = document.getElementById('email').value;

	var cli = GetCliente("Codigo", "");

	var cliente = JSON.stringify({

		nome    : nome,
		email    : email


	});

	cadastro.push(cliente);

	localStorage.setItem("cadastro_db", JSON.stringify(cadastro));

	Listar();

	});




	
	function GetCliente(propriedade, valor){
		var cli = null;
        for (var item in cadastro) {
            var i = JSON.parse(cadastro[item]);
            if (i[propriedade] == valor)
                cli = i;
        }
        return cli;
	}






	function Excluir(){
		cadastro.splice(indice_selecionado, 1);
		localStorage.setItem("cadastro_db", JSON.stringify(cadastro));
		alert("Registro excluído.");
		return true;
	}



	$("#tabela").on("click", ".btnExcluir", function(){
		indice_selecionado = parseInt($(this).attr("alt"));
		Excluir();
		Listar();
	});

	