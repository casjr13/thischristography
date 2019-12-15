import * as React from 'react';
import Footer from 'src/components/Footer';
import Gallery from 'src/components/Gallery';
import Header from 'src/components/Header';
import { automotive } from '../data/Photos';

class Automotive extends React.Component {
  public render() {
    return (
      <div className="automotive">
        <Header />
        <main>
          <section className="container">
            <div className="row">
              <div className="col-md-8">
                <h1>Automotive</h1>
                <h3>$75 Per Hour</h3>
                <p>You've put a lot of effort into getting your vehicle where it is today. Show the world how far you've come!</p>
              </div>
              <div className="col-md-4">
                <img src="/assets/gallery/automotive/ThisChristography-20190416-001.jpg" alt="Photo of a Ruby Red 2016 Ford Mustang GT"/>
              </div>
            </div>
          </section>
          <section className="container">
            <h1>Gallery</h1>
            <Gallery photos={automotive} />
          </section>
        </main>
        <Footer />
      </div>
    )
  }
}

export default Automotive;