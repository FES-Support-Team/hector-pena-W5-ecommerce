import React from 'react';

const Explore = () => {
    return (
        <section id="explore">
        <div className="container">
          <div className="row row__column">
            <h2 className="section__title">
              Explore more <span className="purple">Books</span>
            </h2>
            <a href="/books">
              <button className="btn__explore">Browse books</button>
            </a>
          </div>
        </div>
      </section>
    )
}

export default Explore;