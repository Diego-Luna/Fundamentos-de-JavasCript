// prompt  ase una pregunta al usuario.
var signo = prompt('¿Cual es tu signo?')

switch (signo) {
  case 'aries' :
    console.log('Aprenda que nunca hay que olvidarse del pasado, solo tomar distancia de aquellas situaciones o momentos que le quitan el buen ánimo a uno.');
    break
  case 'tauro':
   console.log('Tener la Luna en su signo, le hará recuperar su propia energía. Sepa que podrá ganar mucha más confianza y seguir avanzando en cada uno de los proyectos.');
   break;
  // con cualquiera de las 2 va a funcionar
  case 'géminis':
  case 'geminis':
    console.log('En este día, trate de desplegar en primer lugar sus propios deseos, proyectos y trasmítaselos a su vínculo cercano. Ellos sabrán acompañarlo en todo.');
    break;
  case 'cancer':
  case 'cáncer':
    console.log('Aunque todo cambio le genere inseguridad, ya es el momento para que avance en su vida. No dude en arriesgar por más que tenga obstáculos en el camino.');
    break;
  case 'leo':
    console.log('Sepa que será muy positivo para sus relaciones que modifique esa exigencia que tiene de corregir los detalles sin importancia de las personas.');
    break;
  case 'virgo':
    console.log('Deje de presionarse, ya que el tiempo actuará a su favor. En esta jornada, su tenacidad y optimismo serán puestos a prueba y tendrá muy buenos resultados.');
    break;
  case 'libra':
    console.log('Comprenda que muchas veces la libertad no siempre es peligrosa en la vida. A veces ayuda a asomar lo mejor que uno tiene en su interior y no lo demuestra.');
    break;
  case 'escorpio':
    console.log('Será de suma importancia que empiece a moderar cada uno de sus impulsos y piense dos veces antes de tomar una determinación fundamental en su vida.');
    break;
  case 'saguitario':
    console.log('Deje de ser tan obstinado en la vida. Intente ver más allá de lo que su manía le permite, ya que pronto se dará cuenta de que estaba equivocado.');
    break;
  case 'capricornio':
    console.log('Probablemente será un período de dudas y cierto negativismo con quien se rodea. Momento para conocer gente nueva y cambiar el entorno afectivo.');
    break;
  case 'acuario':
    console.log('Sería bueno que no se empecine y escuche a su entorno. De esta forma, aprenderá de los demás y podrá cambiar de manera positiva su punto de vista.');
    break;
  case 'picis':
    console.log('Esta jornada deberá dedicarla a aprender de las experiencias negativas y positivas que viva. De esta forma, mañana podrá enseñarle a otros lo vivido.');
    break;
  default:
    console.log('no es un signo zodiacal');
}
