// import { range } from './utils';

function StarRating({ rating }) {
  /*
    Here's the markup for a single star:
    
    <img
      alt=""
      className="gold-star"
      src="https://sandpack-bundler.vercel.app/img/gold-star.svg"
    />
    
    Your job is to repeat this element
    based on the `rating` prop.
    If the rating is 4, we need 4 copies.
  */
    const src = "https://sandpack-bundler.vercel.app/img/gold-star.svg";
    const starElements = [];
  
    for (let i = 0; i < rating; i++) {
      starElements.push(<img key={i} alt="" className="gold-star" src={src} />);
    }
  
    return <div className="star-wrapper">{starElements}</div>;
}

export default StarRating;
