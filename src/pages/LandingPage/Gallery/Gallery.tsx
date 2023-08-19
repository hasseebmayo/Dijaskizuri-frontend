import { ForwardArrow } from "../../../assets/images";
import "./gallery.pages.scss";

const Gallery = () => {
  return (
    <div className="gallery-main-container" id="gallery">
      <div className="gallery-heading">
        <h5>Noči brez limita</h5>
        <p>Najdi se v naših foto albumih iz dogodkov!</p>
      </div>
      <div className="gallery-collection">
        <div
          className="gallery-single bg-img-1"
          onClick={() => {
            window.open("https://flic.kr/s/aHBqjAQnTo");
          }}
        >
          <h5>Največja maturantska zabava</h5>
        </div>
        <div
          className="gallery-single bg-img-2"
          onClick={() => {
            window.open("https://flic.kr/s/aHBqjAQruJ");
          }}
        >
          <h5>UV Party</h5>
        </div>
        <div
          className="gallery-single bg-img-3"
          onClick={() => {
            window.open("https://flic.kr/s/aHBqjAQmjp");
          }}
        >
          <h5>Semafor Party</h5>
        </div>
        <div
          className="gallery-single bg-img-4"
          onClick={() => {
            window.open("https://flic.kr/s/aHBqjAQqXk");
          }}
        >
          <h5>Balkan Party</h5>
        </div>
        <div
          className="gallry-links"
          onClick={() => {
            window.open(
              "https://www.flickr.com/photos/198901610@N07/albums/with/72177720310349522"
            );
          }}
        >
          <p>Več galerij</p>
          <ForwardArrow />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
