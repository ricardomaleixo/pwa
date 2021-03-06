import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Marker, InfoWindow } from 'react-google-maps'
import { InfoBox } from 'react-google-maps/lib/components/addons/InfoBox'

class SpotMarker extends Component {
  constructor() {
    super()

    this.openDialogInformation = this.openDialogInformation.bind(this)
  }

  openDialogInformation() {
    this.setState({
      ...this.props,
      showInfoBox: true
    })
  }

  render() {
    const {
      name,
      isFree,
      images,
      hasStreet,
      hasLongboard,
      latitude,
      longitude,
      showInfoBox
    } = this.props

    return (
      <div className="spot-marker">
        {!showInfoBox && <div className="spot-marker__modal">
          {name}
          {images.map(image => <img key={Math.random()} src={image} />)}
        </div>}

        <Marker
          className="spot-marker__marker"
          icon="../statics/images/skateboarder.png"
          onClick={this.openDialogInformation}
          position={{ lat: latitude, lng: longitude }} />
      </div>
    )
  }
}

const mapStateToProps = state => state

export default connect(mapStateToProps, null)(SpotMarker)
