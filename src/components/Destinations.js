import React from 'react'

const Destinations = () => {
  return (
    <section className='destinations'>
      <h3>Now available in India</h3>
      <div className='grid'>
        <div>
          <img src ={require('./../asserts/image-1.jpg')} class="destination-1" />
          <h3>Mountain Trecking</h3>
          <p>
            Trecking in the MOUNTAINS
          </p>
        </div>

        <div>
        <img src ={require('./../asserts/image-2.jpg')} class="destination-2" />
          <h3>Scuba Diving</h3>
          <p>
            See the New Environment Under the Water
          </p>
        </div>

        <div>
        <img src ={require('./../asserts/image-3.jpg')} class="destination-3" />
          <h3>Jumping</h3>
          <p>
            Be in the Sky And Enjoy the Moment
          </p>
        </div>
      </div>
    </section>
  )
}

export default Destinations