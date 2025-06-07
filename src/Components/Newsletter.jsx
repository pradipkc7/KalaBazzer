import React from 'react'

const Newsletter = () => {
  return (
    <section className="newsletter">
    <div>
      <h3>Stay Connected</h3>
      <p >
        Subscribe to our newsletter and be the first to know about new artisan collections and exclusive offers.
      </p>
      <div >
        <input 
          type="email" 
          placeholder="Enter your email"
          className=""
        />
        <button>
          Subscribe
        </button>
      </div>
    </div>
  </section>
  )
}

export default Newsletter