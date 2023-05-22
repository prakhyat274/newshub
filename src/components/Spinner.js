import React, { Component } from 'react'
import loading from './Search.gif'

export default class Spinner extends Component {
  render() {
    return (
        <div className="text-center"><img src={loading} alt="Loading gif" width={"100px"}/></div>
    )
  }
}
