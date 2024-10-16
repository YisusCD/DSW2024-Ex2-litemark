const Component = require('./component')

class SeparatorLine extends Component {
  separator
  length

  constructor (separator = '-', length = 40) {
    super()
    this.separator = separator
    this.length = length
  }

  print () {
    return this.separator
  }
}

module.exports = SeparatorLine
