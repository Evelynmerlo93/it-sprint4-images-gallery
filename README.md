# 🖼️ Galería de Imágenes en Angular 

Aplicación web desarrollada en Angular (versión moderna con componentes *standalone*) que implementa una galería interactiva utilizando una arquitectura de componentes padre-hijo, paso de datos mediante `@Input()` y comunicación de eventos con `@Output()` y `EventEmitter()`.

---

## 🚀 Tecnologías y Herramientas

* **Angular (Standalone Components)**
* **TypeScript / HTML5 / CSS3**
* **Git & GitHub** para el control de versiones

---

## 📁 Estructura del Proyecto

El proyecto está organizado siguiendo buenas prácticas de componentes reutilizables:

```text
src/
└── app/
    ├── galeria/              # Componente Padre (Gestiona la lista de datos)
    ├── interfaces/           # Contratos de tipos de datos (imagen.interface.ts)
    ├── tarjeta-img/          # Componente Hijo (Renderiza cada tarjeta individual)
    ├── app.component.ts      # Componente raíz principal
    ├── app.component.html    # Plantilla principal
    └── app.routes.ts         # Rutas de la aplicación

💡 Funcionamiento y Conceptos Clave
Comunicación Padre a Hijo (@Input): El componente GaleriaComponent almacena un listado de imágenes (listaImagenes) y se las pasa de forma individual al componente hijo TarjetaImgComponent utilizando la directiva @Input() imagenTarjeta.

Renderizado Dinámico (@for): Se utiliza el bucle moderno de Angular (@for con track) para recorrer la colección de imágenes y pintar de forma automática una tarjeta por cada elemento.

Comunicación Hijo a Padre (@Output y EventEmitter): Cuando el usuario hace clic en una tarjeta específica, el componente hijo emite un evento personalizado (@Output() alSeleccionar) enviando los datos de la imagen seleccionada hacia el componente padre.

⚙️ Cómo ejecutar el proyecto localmente
Clona este repositorio en tu equipo:

Bash
git clone <url-del-repositorio>
Entra a la carpeta del proyecto:

Bash
cd it-sprint4-images-gallery
Instala las dependencias:

Bash
npm install
Ejecuta el servidor de desarrollo:

Bash
ng serve
Abre tu navegador en http://localhost:4200/.
