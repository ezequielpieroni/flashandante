const products = [
{
    id:10,
    product:"Labradorita multiflash con cobre",
    description:"Labradorita multiflash con cobre, una combinación impresionante de la misteriosa labradorita con el elegante cobre. La labradorita exhibe una variedad de colores iridiscentes, mientras que el cobre añade calidez y elegancia. Cada pieza es única, con formas y tonos que varían ligeramente.Fabricada con cuidado y artesanía, esta joya captura la belleza de la naturaleza de una manera única. Perfecta para ocasiones especiales o para llevar un pedacito de magia siempre contigo.",
    price:20000,
    image:"../src/assets/Labradorita multiflash.jpg",
    stock:2,
    category: "colgantes"
},
{
    id:11,
    product:"Amatista con acero inoxidable",
    description:"Descubre nuestra amatista con acero inoxidable, una combinación perfecta de belleza y durabilidad. La amatista ofrece un color violeta vívido y propiedades espirituales, mientras que el acero inoxidable le añade un toque moderno y resistente.Cada pieza es única, realzando tu estilo con elegancia y serenidad ¡Explora la belleza natural con nuestra amatista con acero inoxidable!",
    price:15000,
    image:"../src/assets/Amatista con acero inoxidable.jpg",
    stock:3,
    category: "colgantes"
},
{
    id:12,
    product:"Obsidiana tela araña con cobre",
    description:"La Obsidiana tela araña es una piedra natural única conocida por sus intrincados patrones y su profunda conexión con la tierra. Se cree que esta piedra ofrece protección contra energías negativas y ayuda a liberar tensiones emocionales. Combinada con el cobre, que simboliza la energía positiva y la vitalidad, este anillo se convierte en una poderosa declaración de tu fuerza interior y tu conexión con la naturaleza.    Lleva contigo la misteriosa energía de la Obsidiana tela araña con nuestro anillo de cobre.",
    price:10000,
    image:"../src/assets/Obsidiana tela araña con cobre.jpg",
    stock:4,
    category: "colgantes"
},
{
    id:13,
    product:"Ónix cielo con acero inoxidable",
    description:"El Ónix cielo es una variante de Ónix que presenta tonos azules y blancos, evocando la serenidad del cielo y el poder del universo. Se dice que esta piedra promueve la calma y la paz interior, ayudando a aliviar el estrés y la ansiedad. Combinado con el acero inoxidable, que simboliza la fuerza y la durabilidad, este anillo es una poderosa expresión de tu tranquilidad y tu resistencia ante los desafíos.",
    price:10000,
    image:"../src/assets/Ónix cielo con acero inoxidable.jpg",
    stock:4,
    category: "colgantes"
},
{
    id:14,
    product:"Calcedonia azul con acero inoxidable",
    description:"La Calcedonia azul, conocida por su suavidad y serenidad, se asocia con la armonía y la paz interior. Se dice que esta piedra promueve la comunicación efectiva y ayuda a calmar la mente. Combinada con el acero inoxidable, la Calcedonia azul adquiere una fuerza adicional, simbolizando la durabilidad y la resistencia. Añade un toque de sofisticación y tranquilidad a tu estilo con nuestra pieza de Calcedonia azul con acero inoxidable.",
    price:20000,
    image:"../src/assets/Calcedonia azul con acero inoxidable.jpg",
    stock:2,
    category: "colgantes"
},
{
    id:15,
    product:"Labradorita multiflash con acero inoxidable",
    description:"La Labradorita multiflash, con sus deslumbrantes destellos iridiscentes, se considera una piedra de transformación y protección. Se dice que promueve la intuición y la claridad mental, ayudándote a encontrar tu verdadero camino. Al combinarse con el acero inoxidable, la Labradorita multiflash adquiere estabilidad y resistencia adicionales, simbolizando la fortaleza ante los desafíos de la vida. Lleva contigo la magia y la protección de la Labradorita multiflash con nuestra pieza de acero inoxidable.",
    price:15000,
    image:"../src/assets/Labradorita multiflash con acero inoxidable 3.jpg",
    stock:3,
    category: "colgantes"
},
{
    id:16,
    product:"Labradorita multiflash con acero inoxidable",
    description:"La Labradorita multiflash es conocida por sus deslumbrantes destellos de color que cambian según el ángulo de la luz. Se dice que esta piedra promueve la intuición y la claridad mental, ayudando a disipar la negatividad. Al unirse con el acero inoxidable, la Labradorita adquiere un aura de resistencia y estabilidad, simbolizando la fortaleza interior. Lleva contigo la magia y la protección de la Labradorita multiflash con nuestra pieza de acero inoxidable.",
    price:10000,
    image:"../src/assets/Labradorita multiflash con acero inoxidable 2.jpg",
    stock:4,
    category: "colgantes"
},
{
    id:17,
    product:"Labradorita blanca con acero inoxidable",
    description:"La Labradorita blanca es conocida por su brillo perlado y su capacidad para calmar la mente y el espíritu. Se dice que promueve la claridad mental y la paz interior, ayudando a encontrar el equilibrio en momentos de estrés. Al unirse con el acero inoxidable, la Labradorita blanca adquiere un aura de resistencia y durabilidad, simbolizando la fortaleza ante los desafíos. Lleva contigo la serenidad y la protección de la Labradorita blanca con nuestra pieza de acero inoxidable.",
    price:10000,
    image:"../src/assets/Labradorita blanca con acero inoxidable.jpg",
    stock:4,
    category: "colgantes"
},
{
    id:30,
    product:"Labradorita multiflash con acero inoxidable",
    description:"La Labradorita multiflash es conocida por sus deslumbrantes destellos de color que cambian con la luz, simbolizando la transformación y la protección. Se dice que esta piedra promueve la intuición y la claridad mental, ayudándote a navegar por los cambios de la vida con confianza. Al unirse con el acero inoxidable, la Labradorita multiflash adquiere una mayor estabilidad y resistencia, simbolizando la fortaleza en momentos difíciles. Lleva contigo la magia y la protección de la Labradorita multiflash con nuestra pieza de acero inoxidable.",
    price:10000,
    image:"../src/assets/Labradorita multiflash con acero inoxidable.jpg",
    stock:4,
    category: "colgantes"
},
{
    id:18,
    product:"Pulsera de cobre",
    description:"El cobre es conocido por sus propiedades conductoras y curativas. Se dice que llevarlo cerca del cuerpo puede mejorar la circulación sanguínea y aliviar dolores articulares. Además, el cobre se asocia con la energía positiva y la vitalidad. Nuestra pulsera de cobre, diseñada con estilo y cuidado, es más que un accesorio; es una declaración de tu conexión con la fuerza y el bienestar.",
    price:86688,
    image:"../src/assets/Pulsera cobre.jpg",
    stock:3,
    category: "pulceras"
},
{
    id:19,
    product:"Pulsera cuarzo cristal con cobre",
    description:"El cuarzo cristal es conocido por sus propiedades de claridad y purificación. Se dice que ayuda a disipar la energía negativa y a promover la claridad mental. Además, el cobre se asocia con la energía positiva y la vitalidad. Nuestra pulsera combina la belleza natural del cuarzo cristal con la fuerza y la energía del cobre, creando una pieza que no solo es estéticamente hermosa, sino que también te acompaña en tu búsqueda de equilibrio y bienestar.",
    price:62996,
    image:"../src/assets/Pulsera cuarzo cristal con cobre.jpg",
    stock:3,
    category: "pulceras"
},
{
    id:20,
    product:"Anillo de ónix negro con cobre esmaltado",
    description:"El ónix negro se asocia comúnmente con la protección y la fuerza interior. Se dice que esta piedra ayuda a absorber y transformar la energía negativa, brindando estabilidad y equilibrio emocional.    Combinado con el cobre esmaltado, este anillo no solo es una declaración de estilo, sino también un símbolo de tu capacidad para enfrentar los desafíos con determinación y gracia. Lleva contigo la elegancia y el misterio con nuestro anillo de ónix negro con cobre esmaltado.",
    price:117208,
    image:"../src/assets/Anillo de ónix negro con cobre esmaltado.jpg",
    stock:2,
    category: "anillos"
},
{
    id:21,
    product:"Anillo de amatista con acero inoxidable",
    description:"La amatista es conocida por sus propiedades calmantes y protectoras. Se dice que esta piedra promueve la paz interior y la claridad mental, ayudando a disipar el estrés y la negatividad.   Combinada con el acero inoxidable, este anillo adquiere una mayor resistencia y durabilidad, simbolizando la fortaleza interior.",
    price:194796,
    image:"../src/assets/Anillo de amatista con acero inoxidable.jpg",
    stock:3,
    category: "anillos"
},
{
    id:22,
    product:"Anillo de alpaca",
    description:"La alpaca, un metal conocido por su brillo plateado y su durabilidad, es la elección perfecta para quienes buscan un accesorio que combine estilo y calidad. Nuestro anillo de alpaca es más que una simple joya: es una declaración de tu gusto por lo refinado y lo duradero. Con su diseño elegante y su acabado brillante, este anillo añadirá un toque de distinción a cualquier conjunto.",
    price:154597,
    image:"../src/assets/Anillo alpaca.jpg",
    stock:1,
    category: "anillos"
}
]

export const getProducts = () => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products)
        },[500] );
    })
}

export const getItemById = (id) => {

    return new Promise ((resolve, reject) => {               
        const item = products.find((element) => element.id === id)

        if (item) {
            resolve(item)
        } else {
            reject({
                error: "Not found"
            })
        }

    })
}