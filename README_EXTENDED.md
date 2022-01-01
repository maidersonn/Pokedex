## Ejercicio pokédex extendida

En este ejercicio vamos a continuar trabajando con el ejercicio de la pokédex que ya hicimos

[Repo ejercicio Pokédex](https://github.com/TheBridge-FullStackDeveloper/fs-pt2104-react/tree/main/exercise-advanced-pokedex)

### Pasos

En el ejercicio previo teníamos dos rutas:

- `/`
- `/details/:pokemon`

Ahora, tendremos algunas rutas más:

- `/home`
- `/login`
- `/user`
- `/register`
  Y cambiaremos las existentes por las siguientes:
- `/`(actual) => `/pokedex`(nueva)
- `/details/:pokemon`(actual) => `/pokedex/:pokemon`(nueva)

Usando el [back-dummy](https://github.com/Riftland/back-dummy), crea la autenticación y autorización en este ejercicio:

- `/home`
  - Ruta pública
- `/login`
  - Ruta pública
  - Después de login satisfactorio, se redirigirá a `/user`
  - Tendremos un link en esta página para llevarnos a `/register` por si no tenemos ninguna cuenta creada
- `/register`
  - Ruta pública
  - Tendremos un link en esta página para llevarnos a `/login` por si tenemos una cuenta ya creada
- `/user`
  - Ruta privada
  - Si intentamos acceder y no estamos logeados, la aplicación nos redirigirá a `/login`
  - Si intentamos acceder y tenemos token, haremos la petición pertinente para obtener el usuario y, si el token es válido, podremos acceder a la página
- `/pokedex`
  - Ruta privada
  - Mismo comportamiento que en el ejercicio anterior
- `/pokedex/:pokemon`
  - Ruta privada
  - Mismo comportamiento que en el ejercicio anterior

### Extras

- Los botones de submit de los formularios deberán estar desactivados si los campos obligatorios no están rellenados
- Los campos de los formularios deberán llevar validaciones (que sea un email, que sea requerido el campo, etc)
- Cuando se haga click en el botón de submit y las validaciones no son correctas, el botón de submit no debe estar activo o no debe dejar enviar el objeto al back
- Usa SCSS para maquetar
