import "../styles/PlaceStyles.css";

function fin() {
  document.location = "https://www.youtube.com/";
}

function Place({ img, subTitle, description, textButton, link }) {
  return (
    <div className="Place-Cointainer">
      <img className="img1" src={img} />
      <h2 className="Subtitle1">{subTitle}</h2>
      <label className="description-1">{description}</label>
      <br></br>
      <button
        className="Sub-Button-1"
        type="button"
        onClick={() => {
          {
            document.location = link;
          }
        }}
      >
        {textButton}
      </button>
    </div>
  );
}

export default Place;
