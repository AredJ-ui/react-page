import image1 from "../images/Carrucel/s1.jpg";
import image2 from "../images/Carrucel/s2.jpg";
import image3 from "../images/Carrucel/s3.jpg";
import image4 from "../images/Carrucel/s4.jpg";
import "../styles/CarrucelStyle.css";

function Carrucel() {
  return (
    <div className="Carrucel-Container">
      <ul>
        <li>
          <img src={image1} />
        </li>
        <li>
          <img src={image2} />
        </li>
        <li>
          <img src={image3} />
        </li>
        <li>
          <img src={image4} />
        </li>
      </ul>
    </div>
  );
}

export default Carrucel;
