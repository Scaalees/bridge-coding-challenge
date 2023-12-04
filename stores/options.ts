interface State {
  options: IOption[]
}

export const useOptionsStore = defineStore("options", {
  state: (): State => {
    return {
      options: [
        { label: 'Identify requirements', estimate: '6.00', name: 'ir', checked: true },
        { label: 'Request a quotation', estimate: '3.00', name: 'raq', checked: true },
        { label: 'Find products', estimate: '16.00', name: 'fp', checked: true },
        { label: 'Raise an order', estimate: '6.00', name: 'rao', checked: true },
        { label: 'Authorise sale', estimate: '21.55', name: 'as', checked: true },
        { label: 'Pay provider', estimate: '13.00', name: 'pp', checked: true },
        { label: 'Deliver product', estimate: '4.30', name: 'dp', checked: true },
        { label: 'Invoice check', estimate: '6.00', name: 'ic', checked: true },
        { label: 'Place order', estimate: '6.50', name: 'po', checked: true },
      ]
    }
  },
  getters: {
    getTotalEstimate(state) {
      let total = 0
      state.options.map((x: IOption) => {
        if (x.checked) total += parseFloat(x.estimate)
      })
      return total
    }
  }
})