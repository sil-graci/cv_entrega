document.write('<style >div.ocultalo{display: none;}</style>');

function MostrarOcultar(texto)

{

    if (document.getElementById)

    {

        var aux = document.getElementById(texto).style;

        aux.display = aux.display ? "" : "block";

        document.getElementById("enlace").text = aux.display ? "Ocultar Perfil" : "Ver Perfil";

    }

}