# TP FINAL RODRIGO FARRÉ TURNO NOCHE LUN-MIE
El trabajo consiste en un e-commerce en el que se visualizan distintos productos. Se encuentra dividido en dos secciones: una avocada al desarrollo back-end (server) y otra al desarrollo front-end (front).

En lo que respecta al back-end, el proyecto se encuentra organizado de la siguiente manera:
- El archivo app.js, que representa la configuración principal de la aplicación. Es importante destacar aquí la utilización de la tecnología CORS, lo que permite que las solicitudes de origen cruzado se manejen correctamente.
- Una carpeta config, en la que se realiza la conexión con la base de datos (mongoDB)
- Una carpeta llamada dao (data Access object). En esta se detalla, por un lado, el modelo utilizado para representar a nuestros productos, y, por el otro, el conjunto de funciones que interactúan con dicho modelo.
Estas funciones proporcionan operaciones básicas de CRUD (crear, leer, actualizar y eliminar) para los productos en cuestión.
- La carpeta routers, en la que se define el enrutador productRouter que gestiona las rutas relacionadas con los productos

Con respecto al front-end, se incluyen las siguientes funcionalidades:
- Se puede visualizar el detalle de cada uno de los productos
- Se pueden agregar productos al carrito de compras
- Se puede acceder a un formulario para realizar cualquier tipo de consulta
El programa está compuesto por cuatro screens con sus respectivos componentes:
- HomePage: página principal, donde aparecen los distintos productos que se pueden adquirir.
- ContactPage: página de contacto, donde se visualiza el formulario
- DetailPage: es la página en la que se pueden visualizar los detalles de los productos
- CartPage: página del carrito de compras, en la que se pueden ver los productos agregados y confirmar la compra
Por otro lado, también se incluyen los siguientes componentes:
- Main.jsx: componente principal
- App.jsx: se incluyen los elementos del navegador y las distintas Routes
- ContextProvider.jsx, el cual provee los disntintos valores de estado utilizados en el proyecto
- Counter.jsx: componente creado para utilizarlo en la screen DetailPage, y así poder seleccionar la cantidad de unidades que quiero añadir al carrito
- Footer.jsx: componente que contiene los elementos del pie de página de mi HomePage
- ProductCard.jsx: se detalla la composición de las cartas de productos que aparecen en HomePage
- ProductCardCart.jsx: se detalla la composición de las cartas de productos que aparecen en CartPage

El proyecto fue desarrollado con las siguientes tecnologías: MongoDB, Express.js, React y Node.js (proyecto MERN STACK), integrando los conocimientos aprendidos durante la cursada. Se utilizó CSS para poder dar estilo a la página web
