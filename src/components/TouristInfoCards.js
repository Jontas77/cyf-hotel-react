import React from "react";

const TouristInfoCards = () => {
  return (
    <div className="card-container">
      <div
        className="card mb-3 border border-info rounded"
        style={{ width: 40 + "rem" }}
      >
        <img
          src="data:image/jpeg;base64,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"
          className="card-img-top"
          alt="Glasgow"
        />
        <div className="card-body">
          <h2 className="card-title">Glasgow</h2>
          <p className="card-text">
            Glasgow, Gaelic Glaschu, city, west-central Scotland. It is situated
            along both banks of the River Clyde 20 miles (32 km) from that
            river’s mouth on the western, or Atlantic, coast. Glasgow is
            Scotland’s largest city, and it forms an independent council area
            that lies entirely within the historic county of Lanarkshire.
          </p>
          <a
            href="https://peoplemakeglasgow.com"
            className="btn btn-primary text-center"
          >
            More Information
          </a>
        </div>
      </div>

      <div
        className="card mb-3 border border-danger rounded"
        style={{ width: 40 + "rem" }}
      >
        <img
          src="https://www.pcma.org/wp-content/uploads/2020/01/Manchester-hero.jpg"
          className="card-img-top"
          alt="Manchester"
        />
        <div className="card-body">
          <h2 className="card-title">Manchester</h2>
          <p className="card-text">
            Home to two of England’s most popular football teams – Manchester
            United and Manchester City – don’t miss the chance to get closer to
            the history and the legends of these iconic clubs with a stadium
            tour. Experience the atmosphere of Canal Street - one of Britain’s
            most famous gay villages.
          </p>
          <a href="https://visitmanchester.com" className="btn btn-primary">
            More Information
          </a>
        </div>
      </div>

      <div
        className="card border border-success rounded"
        style={{ width: 40 + "rem" }}
      >
        <img
          src="https://www.history.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTYyNDg1MjE3MTI1Mjc5Mzk4/topic-london-gettyimages-760251843-promo.jpg"
          className="card-img-top"
          alt="London"
        />
        <div className="card-body">
          <h2 className="card-title">London</h2>
          <p className="card-text">
            London is a common stop on most backpacking trips, European
            vacations, or two-week holidays. Everyone wants to come to London!
            People are drawn to it by images of pubs, museums, history,
            attractions, theater, and diverse culture. I mean it’s London. It’s
            a big name. How can you not go, right? I love visiting London. I’ve
            been visiting since 2008 and, with every subsequent visit, the city
            has grown on me. The more I go, the more wonder I see. There’s
            always something new to do here.
          </p>
          <a href="https://visitlondon.com" className="btn btn-primary">
            More Information
          </a>
        </div>
      </div>
    </div>
  );
};

export default TouristInfoCards;
