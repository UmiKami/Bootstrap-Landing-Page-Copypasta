const cardSection = ({ img, cardDescription }) => {
  return (
    <div className="col-3">
      <div className="card text-center">
        <img className="card-img-top" src={img} alt="" />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            {cardDescription}
          </p>
        </div>
          <div className="card-footer">
            <a href="\#" className="btn btn-primary">
              Find out more!
            </a>
          </div>
      </div>
    </div>
  );
};

export default cardSection;
