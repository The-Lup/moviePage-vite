# 🎬 Movie Page

Movie Page es una aplicación web que permite explorar películas y series de TV utilizando la API de **The Movie Database (TMDb)**.  
Los usuarios pueden filtrar por tipo (películas o series), género, año de estreno y buscar títulos específicos.

---

## 🚀 Características
- Listado de películas y series populares.
- Filtro por género, tipo (película/serie) y rango de años.
- Búsqueda por título.
- Paginación para explorar más resultados.
- Vista de detalles con información de la película/serie seleccionada.
- Interfaz responsive y diseño minimalista.

---

## 🛠️ Tecnologías utilizadas
- [JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript)
- [Vite](https://vitejs.dev/)
- [TMDb API](https://www.themoviedb.org/documentation/api)

---

## 📂 Estructura del proyecto
```
movie-page/
│── index.html        # Estructura principal
│── style.css         # Estilos principales
│── src/              # Código fuente
│   ├── api/          # Llamadas a la API
│   ├── ui/           # Renderizado y templates
│   ├── events/       # Listeners y eventos
│   └── main.js       # Punto de entrada
│── vite.config.js    # Configuración de Vite
│── package.json      # Dependencias y scripts
│── README.md         # Documentación
```

---

## ⚡ Instalación y uso

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/tu-usuario/movie-page.git
   ```

2. Instalar dependencias:
   ```bash
   npm install
   ```

3. Ejecutar en modo desarrollo:
   ```bash
   npm run dev
   ```

4. Construir para producción:
   ```bash
   npm run build
   ```

---

## 🔑 API Key
Este proyecto usa la API de TMDb. Para hacerlo funcionar necesitas una **API Key** válida.  
Crea un archivo `.env` en la raíz del proyecto con lo siguiente:

```
VITE_TMDB_API_KEY=tu_api_key_aqui
```

---

## 📸 Capturas
### Página principal
<img width="1920" height="923" alt="image" src="https://github.com/user-attachments/assets/5a3afe47-0523-43f6-b2e1-b25d4d6f3901" />
<img width="1920" height="922" alt="image" src="https://github.com/user-attachments/assets/7a9094db-2b47-40e1-8bc5-c39bf447f3a8" />

---

## 📜 Licencia
Este proyecto está bajo la licencia **MIT**.  
Puedes usarlo, modificarlo y distribuirlo libremente.

---

## ✨ Autor
Creado por **[The-Lup](https://github.com/The-Lup)** 🚀
