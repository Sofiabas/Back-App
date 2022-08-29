class User {
    constructor(nombre, apellido, libros = [], mascotas = []) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
    }
    getFullName() {
        return `${this.nombre} ${this.apellido}`
    }
    addMascotas(nombre) {
        this.mascotas.push(nombre)
    }
    countMascotas() {
        return `${this.getFullName()} tiene ${this.mascotas.length} Mascotas`
    }
    addBook(nombre, autor) {
        let book = { nombre: nombre, autor: autor }
        return this.libros.push(book)
    }
    getBookNames() {
        let bookNames = this.libros.map((libro) => {
            return libro.nombre
        })
        return `Los libros de ${this.getFullName()} son: ${bookNames}`
    }
}
const usuario1 = new User("Sofia", "Basile")
usuario1.addMascotas("Brisa")
usuario1.addMascotas("Mateo")
usuario1.addMascotas("Lili")
usuario1.addMascotas("Tita")
usuario1.addBook("La hija del campeón", "Florencia Etcheves")
usuario1.addBook("Crímenes sorprendentes de asesinos en serie", "Ricardo Canaletti")
usuario1.addBook("Claroscuro", "Luz Larenn")
usuario1.addBook("Messi,el genio completo", "Ariel Senosiain")
usuario1.addBook("Open Memorias", "Agassi Andre")
console.log(usuario1)
console.log(usuario1.countMascotas());
console.log(usuario1.getBookNames());