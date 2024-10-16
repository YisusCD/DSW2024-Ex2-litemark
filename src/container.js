const Component = require('./component')

class Container extends Component {
  #components = []

  getComponents () {
    return this.#components
  }

  addComponents (component) {
    if (component instanceof Component) {
      this.#components.push(component)
    }
  }

  countWords () {
    return 0
  }
}

module.exports = Container
