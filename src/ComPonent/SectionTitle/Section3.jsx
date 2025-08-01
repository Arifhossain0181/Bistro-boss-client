import React from "react";
import SectionTilte from "../../ComPonent/SectionTitle/SectionTilte";
import img from '../../assets/home/slide1.jpg';

const Section3 = () => {
  return (
    <section className="max-w-screen-xl mx-auto px-4">
      <SectionTilte
        heading="Should Try"
        subheading="Chif recommends"
      />

      <div className="grid md:grid-cols-3 gap-6 mt-8">
        {[1, 2, 3].map((_, index) => (
          <div key={index} className="card bg-base-100 shadow-sm border">
            <figure>
              <img
                src={img}
                alt="Caeser Salad"
                className="w-full h-64 object-cover"
              />
            </figure>
            <div className="card-body text-center">
              <h2 className="card-title justify-center">Caeser Salad</h2>
              <p>Lettuce, Eggs, Parmesan Cheese</p>
              <div className="card-actions justify-center mt-4">
                <button className="btn btn-primary uppercase">Add To Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Section3;
