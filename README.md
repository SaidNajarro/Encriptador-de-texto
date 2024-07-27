# Uso de REGEX
Algo importante que pueda ser interesante para las nuevas personas que se sumergen en este tema es el uso del REGEX como un conjunto de
caracteres que pueden ser utilizadas para un reconocedor de algún lenguaje o como este caso una cadena de texto. Esto lo utilicé para
discriminar los caracteres especiales y mayúsculas, a excepción del espacio en blanco y los signos de interrogación. Así se evita especificar
cada elemento uno por uno y puedes especificarlo en un conjunto. /^[a-z! ]+$/; Esta fue la cadena que realicé que engloba a los caracteres minúsculas,
espacios en blanco y signos de interrogación. Sin embargo, se puede expandir a cualquier conjunto de caracteres que desees.
