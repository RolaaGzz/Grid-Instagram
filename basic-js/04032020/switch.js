let signo = prompt('Cual es tu signo?');

switch(signo.toLowerCase()){
    case"aries":
    console.log('Tendras un lindo dia hoy');
    break;
    
    case 'tauro':
    console.log('Seras muy rico');
    break;

    case 'sagitario':
    console.log('Tendras un nuevo trabajo');
    break;
    default:
    console.log('Ingrese un signo correcto');
}