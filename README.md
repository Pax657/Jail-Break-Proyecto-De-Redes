# *AAA — Game Design Document* 

Grupo G · Pablo Cordero Vidigal, Javier Vázquez Marinas, Daniel Álvarez , Patricia

Índice
Introducción
Especificaciones básicas
Jugabilidad
Narrativa
Imagen y diseño visual
Sonido
Interfaz y diagrama de flujo
Comunicación y marketing
Referencias
> \*\*Nota para el alumnado:\*\* este documento es una \*\*plantilla de ejemplo\*\*. Sustituid todos los textos `AAA`, `BBB`, `CCC`... y las imágenes de `img/` por vuestro contenido. Los bloques como este, que empiezan por \*Rúbrica\*, indican qué criterio de evaluación cubre cada apartado: \*\*borradlos antes de entregar\*\*. Límite orientativo: \*\*3500 palabras\*\*. Todo el documento debe estar en castellano (mezclar idiomas penaliza).
---
1. Introducción
1.1. Concepto del juego
AAA es un juego de AAA para dos jugadores en el que AAA AAA AAA. La idea principal es AAA AAA AAA AAA AAA AAA AAA AAA.
1.2. Propuesta de valor
¿Qué hace diferente a vuestro juego? AAA AAA AAA AAA AAA AAA AAA AAA AAA AAA AAA AAA.
Característica diferencial 1: AAA.
Característica diferencial 2: BBB.
Característica diferencial 3: CCC.

![Imagen promocional / key art del juego](img/portada_presentacion.png)
Figura 1. Imagen promocional del juego.

---
2. Especificaciones básicas
> \*Rúbrica — Documento / Especificaciones básicas:\* género, público objetivo/edad y plataforma.
Aspecto	Descripción
Título	AAA
Género	AAA (p. ej. plataformas competitivo, party game, arena shooter...)
Número de jugadores	2 (en red, tiempo real)
Público objetivo	AAA (p. ej. jugadores casuales de 12 a 30 años)
Clasificación PEGI	PEGI AAA (justificar)
Plataforma	Navegador web (PC), desarrollado con Phaser 3
Duración de una partida	AAA minutos
Representación	2D
Licencia	Apache 2.0
---
3. Jugabilidad
3.1. Objetivo del juego
> \*Rúbrica — Jugabilidad / Objetivo del juego:\* debe estar claramente definido.
El objetivo de cada jugador es AAA AAA AAA. La partida termina cuando AAA AAA. Gana el jugador que AAA AAA.
3.2. Controles
> \*Rúbrica — Jugabilidad / Controles.\* Indicad teclado y ratón.
Acción	Jugador 1	Jugador 2
Moverse a la izquierda	`A`	`←`
Moverse a la derecha	`D`	`→`
Saltar	`W`	`↑`
Acción especial AAA	`Espacio`	`Enter`
Apuntar / disparar	Ratón (clic izquierdo)	Ratón (clic izquierdo)
Pausa	`Esc`	`Esc`
3.3. Mecánicas
> \*Rúbrica — Jugabilidad / Mecánicas.\*
3.3.1. Mecánicas principales
AAA: AAA AAA AAA AAA AAA AAA.
BBB: BBB BBB BBB BBB BBB BBB.
CCC: CCC CCC CCC CCC CCC CCC.
3.3.2. Objetos y power-ups
Objeto	Efecto	Duración	Aparición
AAA	AAA AAA AAA	5 s	Aleatoria cada 15 s
BBB	BBB BBB BBB	10 s	Zona central del mapa
CCC	CCC CCC CCC	Instantáneo	Al derrotar a un enemigo
3.3.3. Sistema de puntuación
AAA AAA AAA AAA (p. ej. +10 puntos por AAA, −5 por BBB).
3.4. Físicas y dificultad
> \*Rúbrica — Jugabilidad / Físicas:\* físicas variadas con elementos de dificultad.
Gravedad y salto: AAA AAA AAA.
Colisiones: AAA AAA AAA (con plataformas, entre jugadores, con proyectiles...).
Rebotes / fricción / empujes: AAA AAA AAA.
Plataformas móviles o superficies especiales (hielo, rebote...): AAA AAA AAA.
Progresión de la dificultad: a medida que avanza la partida AAA AAA AAA.
3.5. Escenario
> \*Rúbrica — Jugabilidad / Calidad del escenario.\*
El escenario representa AAA AAA AAA. Se compone de AAA zonas:
Zona AAA: AAA AAA AAA.
Zona BBB: BBB BBB BBB.
Zona CCC: CCC CCC CCC.
![Mapa del escenario](img/mapa_escenario.png)
Figura 2. Mapa del escenario con zonas de aparición, plataformas y obstáculos.
---
4. Narrativa
> \*Rúbrica — Narrativa:\* riqueza de la historia principal y de los personajes.
4.1. Historia
AAA AAA AAA AAA AAA AAA AAA AAA AAA AAA AAA AAA AAA AAA AAA AAA AAA AAA AAA AAA AAA AAA AAA AAA AAA AAA AAA AAA.
AAA AAA AAA AAA AAA AAA AAA AAA AAA AAA AAA AAA AAA AAA AAA AAA AAA AAA AAA AAA.
4.2. Personajes
AAA (Jugador 1)
<img src="img/personaje\_1.png" alt="Boceto del personaje AAA" width="250">
Edad / origen: AAA.
Personalidad: AAA AAA AAA.
Motivación: AAA AAA AAA.
Habilidad especial: AAA AAA AAA.
Trasfondo: AAA AAA AAA AAA AAA AAA AAA AAA AAA.
BBB (Jugador 2)
<img src="img/personaje\_2.png" alt="Boceto del personaje BBB" width="250">
Edad / origen: BBB.
Personalidad: BBB BBB BBB.
Motivación: BBB BBB BBB.
Habilidad especial: BBB BBB BBB.
Trasfondo: BBB BBB BBB BBB BBB BBB BBB BBB BBB.
CCC (enemigo / personaje no jugable)
<img src="img/enemigo\_1.png" alt="Boceto del enemigo CCC" width="250">
CCC CCC CCC CCC CCC CCC CCC CCC.
---
5. Imagen y diseño visual
5.1. Logotipo
> \*Rúbrica — Imagen / Logotipo.\*
![Logotipo del juego](img/logo.png)
Figura 3. Logotipo del juego. Tipografía: AAA. Concepto: AAA AAA AAA.
5.2. Estilo visual
> \*Rúbrica — Imagen / Estilo visual:\* pixel art, cartoon, vectorial, etc.
El juego utiliza un estilo AAA (p. ej. pixel art de 32×32 píxeles) porque AAA AAA AAA.
5.3. Uso de colores
> \*Rúbrica — Imagen / Descripción visual:\* uso de colores.
![Paleta de colores](img/paleta_colores.png)
Figura 4. Paleta de colores del juego.
Fondo (`#1B1F3B`): AAA AAA AAA.
Jugador 1 (`#E94560`) / Jugador 2 (`#0F9BD7`): colores complementarios para distinguir fácilmente a cada jugador.
Objetos (`#F5C518`): AAA AAA AAA.
5.4. Aspectos técnicos: cámara y representación
> \*Rúbrica — Imagen / Aspectos técnicos:\* uso de cámara y 2D/3D.
Representación: 2D, vista AAA (lateral / cenital / isométrica).
Cámara: AAA (fija mostrando todo el escenario / sigue a ambos jugadores con zoom dinámico / pantalla dividida...).
Resolución base: AAA × AAA píxeles.
5.5. Inspiración artística y cultural
> \*Rúbrica — Imagen / Inspiración:\* referentes artísticos y culturales y vínculo con otros trabajos.
![Moodboard de inspiración](img/moodboard_inspiracion.png)
Figura 5. Moodboard con las referencias visuales.
AAA (videojuego, año): tomamos AAA AAA AAA [1].
BBB (película / cómic / movimiento artístico): BBB BBB BBB [2].
CCC (referencia cultural): CCC CCC CCC.
5.6. Bocetos de personajes y pantallas
> \*Rúbrica — Imagen / Bocetos:\* interfaz de menú, pantallas y personajes.
Los bocetos de los personajes se encuentran en el apartado 4.2 y los de las pantallas en el apartado 7.1.
---
6. Sonido
> \*Rúbrica — Sonido:\* música y efectos.
6.1. Banda sonora
Pista	Escena	Estilo / ambiente	Fuente / licencia
AAA	Menú principal	AAA (p. ej. chiptune relajado)	AAA (propia / CC-BY...)
BBB	Partida	BBB (p. ej. ritmo rápido, 140 BPM)	BBB
CCC	Victoria / derrota	CCC	CCC
6.2. Efectos de sonido
Efecto	Momento en que se reproduce
Salto	Al pulsar la tecla de salto
Golpe / impacto	AAA
Recoger objeto	AAA
Botones de la interfaz	Al pasar el ratón y al hacer clic
Cuenta atrás	AAA
---
7. Interfaz y diagrama de flujo
7.1. Pantallas
Menú principal
![Boceto del menú principal](img/boceto_menu_principal.png)
Figura 6. Menú principal: AAA AAA AAA.
Pantalla de juego (HUD)
![Boceto de la pantalla de juego](img/boceto_pantalla_juego.png)
Figura 7. Pantalla de juego: AAA AAA AAA.
Ajustes y fin de partida
<p align="center">
  <img src="img/boceto\_ajustes.png" alt="Boceto de ajustes" width="45%">
  <img src="img/boceto\_fin\_partida.png" alt="Boceto de fin de partida" width="45%">
</p>
Figura 8. Pantalla de ajustes (izquierda) y fin de partida (derecha).
7.2. Diagrama de flujo
> \*Rúbrica — Documento / Diagrama de flujo.\* Podéis usar Mermaid (GitHub lo renderiza directamente) o una imagen exportada.
Opción 1 — Mermaid (se dibuja automáticamente en GitHub):
```mermaid
flowchart TD
    A\[Pantalla de carga] --> B\[Menú principal]
    B --> C\[Jugar]
    B --> D\[Ajustes]
    B --> E\[Ayuda]
    B --> F\[Créditos]
    D --> B
    E --> B
    F --> B
    C --> G\[Partida]
    G -->|Esc| H\[Pausa]
    H -->|Reanudar| G
    H -->|Salir| B
    G -->|Condición de victoria| I\[Fin de partida]
    I -->|Revancha| G
    I -->|Volver| B
```
Opción 2 — Imagen exportada desde draw.io, Excalidraw, Figma...:
![Diagrama de flujo del juego](img/diagrama_flujo.png)
Figura 9. Diagrama de flujo entre pantallas.
---
8. Comunicación y marketing
> \*Rúbrica — Comunicación / Marketing.\*
Público y mensaje clave: AAA AAA AAA.
Canales: redes sociales (AAA, BBB), itch.io, Newgrounds, Game Jolt...
Calendario: teaser en AAA, devlog semanal en AAA, lanzamiento en AAA.
Material: tráiler, capturas, GIF de jugabilidad, press kit.
Eslogan: «AAA AAA AAA».
---
9. Referencias
> \*Rúbrica — Documento / Referencias.\* Usad un formato consistente (p. ej. APA) y citadlas en el texto con \[1], \[2]...
[1] AAA, A. (Año). Título de la obra. Editorial / Estudio. URL
[2] BBB, B. (Año). Título del artículo. Revista, volumen(número), páginas. https://doi.org/AAA
[3] Schell, J. (2019). The Art of Game Design: A Book of Lenses (3.ª ed.). CRC Press.
[4] Phaser Studio. (s. f.). Phaser 3 Documentation. https://docs.phaser.io
[5] Recursos de terceros utilizados (sprites, música, fuentes): AAA — autor — licencia — URL.
