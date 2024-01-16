import { Link } from "react-router-dom";

const GuaranteeItem = ({ linkHref, imgSrc, title }) => {
  return (
    <li className="guarantee__item">
      <Link to={linkHref} className="guarantee__link">
        <img src={imgSrc} alt="guarantee" />
      </Link>
      <h3 className="guarantee__item-title">{title}</h3>
    </li>
  );
};

export default GuaranteeItem;
