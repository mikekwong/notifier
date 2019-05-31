import React, { Component } from 'react'
import axios from 'axios'
import Modal from './Modal'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      isLoading: true,
      error: false,
      val: null,
    }
  }

  async backEndAPI() {
    try {
      const { data } = await axios.get('/test')
      this.setState({
        val: data,
        isLoading: false,
      })
    } catch (error) {
      this.setState({ error, isLoading: false })
    }
  }

  componentDidMount() {
    this.backEndAPI()
  }

  render() {
    const { val } = this.state
    return <div>Results from API: {val}</div>
  }
}
