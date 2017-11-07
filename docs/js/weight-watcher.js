class WeightWatcher {
  constructor() {
    this.currentWeight = 0
    this.parent = document.getElementById('interface')
    this.target = document.getElementById('characters')

    this.container = document.createElement('div')
    this.container.classList.add('widget')
    this.container.classList.add('weight-watcher')
    this.parent.appendChild(this.container)

    this.list = document.createElement('ul')
    this.container.appendChild(this.list)

    const weights = [100, 200, 300, 400, 500, 600, 700]
    weights.forEach(weight => {
      const id = 'weight-' + weight
      const li = document.createElement('li')
      const label = document.createElement('label')
      label.setAttribute('for', id)
      const radioButton = document.createElement('input')
      radioButton.setAttribute('type', 'radio')
      radioButton.setAttribute('id', id)
      radioButton.setAttribute('name', 'weight')
      radioButton.setAttribute('value', weight)
      if (weight === 400) {
        radioButton.setAttribute('checked', true)
      }
      radioButton.addEventListener('change', () => this.onChange())
      const textContent = document.createTextNode(weight)
      label.appendChild(radioButton)
      label.appendChild(textContent)
      li.appendChild(label)
      this.list.appendChild(li)
    })

    this.onChange()
  }

  // Triggered when the selected radiobutton changes
  onChange() {
    this.update()
  }

  update() {
    const currentWeight = this.currentWeight
    const newWeight = this.getWeightFromInput()
    if (currentWeight !== newWeight) {
      this.setWeight(newWeight)
    }
  }

  setWeight(newWeight = 400) {
    const currentClass = 'weight-' + this.currentWeight
    const newClass = 'weight-' + newWeight
    if (currentClass !== newClass) {
      this.target.classList.remove(currentClass)
      this.target.classList.add(newClass)
      this.currentWeight = newWeight
    }
  }

  // Returns the currently selected weight from the radiobuttons
  getWeightFromInput() {
    const radioButton = this.list.querySelectorAll('input[name=weight]:checked')
    if (radioButton.length !== 1) {
      return false
    } else {
      return radioButton[0].getAttribute('value')
    }
  }
}
