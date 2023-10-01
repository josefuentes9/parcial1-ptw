# parcial1-ptw
Agregue a su repositorio un archivo README que contenga un paso a paso para la ejecución 
de su parcial junto con un reporte de las decisiones y explicando el proceso de desarrollo 
de su parcial. Debe mencionar  los componentes y elementos pertenecientes al ambiente 
de desarrollo de REACT que haya utilizado dentro de su solución.

# 1. Paso a paso para Correr el Proyecto:
Para correr el proyecto, es necesario tener instalado node, una vez descargado el zip del proyecto,
se abre usando la herramienta de visual studio code o el editor de codigo de su preferencia, Luego
se procede a instalar las dependecias usando la terminal propuesta con el comando npm -i, despues, 
se tienen que instalar las librerias de React Dom, React bootsrap, Wepack, React router y React Intl,
Por ultimo se corre el proyecto con el comando npm run start

# 2. Decisiones de desarrollo:
Para el desarrollo del parcial se crearon 3 componentes (Home, Login y LoginPassword) de los cuales 2 
estan en funcionamiento (Home y Login) el componente de Login el cual es un componente el cual contiene
la pagina de bienvenida con su respectivo email y contraseña, al principio se diseño un login de 2 pasos
sin embargo por temas de tiempo no se pudo finalizar el componente de loginPassword a tiempo el cual se hubiera 
hecho para hacer un useeffect el cual nos permitiria manejar la autenticacion en 2 pasos, por lo que me toco
recurrir a un login en 1 solo paso ya que este es mas basico y es mejor que una implementacion a 2 pasos
puesto que a mayor numero de pasos es mas posible que un usuario salga de la pagina web por no poder acceder,
ademas que si hay  un error en algun paso sabria en que paso hay un error por lo que le reduciria las posibles
opciones a un posible atacante. 
En el login se logro poner las restricciones indicadas en el parcial sin embargo al no poder generar fetch 
exitoso toco que el boton redirigiera de una vez home por temas de navegabilidady para poder ver el resto 
de la pagina, para el home se crearon las tarjetas usando bootstrap, guardando las dimensiones mencionadas 
en el parcial sin empargo tienen textos default ya no hay una conexion por mockaroo. Por ultimo Se agrego
la internacionalizacion y segun el idioma que tenga de default el browser la aplicacion cambia de idioma,
soporta apenas 2 idiomas si es español cambia los textos a español, en caso contrario ingles. 
