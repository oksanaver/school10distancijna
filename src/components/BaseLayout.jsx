import './BaseLayout.css';
import img from "../image/logo-school.png";

function BaseLayout(props) {
  return (
    <div className="layout">
      <div className="header">
        <img src={img} alt='' />
        <div className="discr">
          <p>
            Комунальний заклад "Маріупольська загальноосвітня школа І-ІІІ ступенів №10 Маріупольської міської ради Донецької області"
          </p>
          <p>
            Дистанційна школа
          </p>
        </div>
      </div>
      <div className="content">
        <div className="nav-content">{props.content}</div>
      </div>
    </div>
  );
}

export default BaseLayout;