🖼️ Galería de Imágenes en Angular (Sprint 4)
Aplicación web desarrollada en Angular (versión moderna con componentes standalone) que implementa una galería interactiva utilizando una arquitectura de componentes padre-hijo, paso de datos mediante @Input y comunicación de eventos con @Output y EventEmitter.

🚀 Tecnologías y Herramientas
Angular (Arquitectura Standalone / TypeScript)

HTML5 / CSS3

Git & GitHub para el control de versiones

📂 Estructura del Proyecto
El proyecto está organizado siguiendo buenas prácticas de componentes reutilizables:

Plaintext
src/
 └─ app/
     ├─ galeria/                # Componente Padre (Gestiona la lista de datos)
     │   ├─ galeria.css
     │   ├─ galeria.html
     │   └─ galeria.ts
     │
     ├─ tarjeta-img/            # Componente Hijo (Renderiza cada tarjeta individual)
     │   ├─ tarjeta-img.css
     │   ├─ tarjeta-img.html
     │   └─ tarjeta-img.ts
     │
     ├─ interfaces/             # Contratos de tipos de datos
     │   └─ imagen.interface.ts
     │
     ├─ app.ts                  # Componente raíz principal
     ├─ app.html                # Plantilla principal con la app-galeria
     └─ app.routes.ts           # Rutas de la aplicación
💡 Funcionamiento y Conceptos Clave
Comunicación Padre a Hijo (@Input):
El componente GaleriaComponent almacena un listado de imágenes (listaImagenes) y se los pasa de forma individual al componente hijo TarjetaImgComponent utilizando la directiva @Input() imagenTarjeta.

Renderizado Dinámico (@for):
Se utiliza el bucle moderno de Angular (@for con track) para recorrer la colección de imágenes y pintar de forma automática una tarjeta por cada elemento.

Comunicación Hijo a Padre (@Output y EventEmitter):
Cuando el usuario hace clic en una tarjeta específica, el componente hijo emite un evento personalizado (@Output() alSeleccionar) enviando los datos de la imagen seleccionada hacia el componente padre para desencadenar una acción (como mostrar una alerta con el título de la imagen).

⚙️ Cómo ejecutar el proyecto localmente
Clona este repositorio en tu equipo:

Bash
git clone <URL-DE-TU-REPOSITORIO>
Instala las dependencias necesarias:

Bash
npm install
Arranca el servidor de desarrollo local:

Bash
ng serve
Abre tu navegador web y entra en la dirección:

Plaintext
http://localhost:4200/
¿Cómo usarlo?