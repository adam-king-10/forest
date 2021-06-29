import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { fetchFloras } from '../actions'

function App (props) {
  useEffect(() => {
    props.dispatch(fetchFloras())
  }, [])

  function renderImage (image) {
    console.log(image)
    var img = new Image()
    img.src = image
    img.className = 'flora'
    document.getElementById('canvas').appendChild(img);
  }

  return (
    <>
      <div className='app'>
        <h1>Show me the Flora!</h1>
        <ul>
          {props.floras.map(flora => (
            <li key={flora.name}>
              <label htmlFor='images'>{flora.name}s</label>
              <select name='images'>
                <option value="">select image</option>
                {/* {flora.map(image => ( */}
                  <option value={flora.images}>{flora.name}</option>
                {/* ))} */}
              </select>
              <input onClick={(() => renderImage(flora.images))} type="submit" value="render image"/>
            </li>
          ))}
        </ul>
      </div>
      <div id="canvas">

      </div>
    </>
  )
}
const mapStateToProps = (globalState) => {
  return {
    floras: globalState.floras
  }
}

export default connect(mapStateToProps)(App)
