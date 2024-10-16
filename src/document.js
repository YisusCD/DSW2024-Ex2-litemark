class Document {
  title
  #author = 'Anónimo'
  #date

  constructor (title) {
    this.title = title
  }

  get author () {
    return this.#author
  }

  set author (author) {
    if (author) this.#author = author
  }

  get date () {
    const now = new Date()
    const date = now.getDate()
    return date
  }

  static linebreak () {
    return '\n'
  }

  print () {
    return 'Titulo: ' + this.title +
    ' Autor: ' + this.#author + ' Fecha: ' + this.#date
  }
}

module.exports = Document
