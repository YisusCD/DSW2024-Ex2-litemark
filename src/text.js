const Component = require('./component')
const Document = require('./document')

class Text extends Component {
  text

  constructor (text = '') {
    super()
    this.text = text
  }

  print () {
    return this.text + Document.linebreak
  }

  countWords () {
    return this.text
  }
}

module.exports = Text
