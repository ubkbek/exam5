import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './single-post.scss';

// images
import eplauseImg from './../../assets/images/eplouse.svg';
import shareImg from './../../assets/images/share.svg';
import oclockImg from './../../assets/images/oclock.svg';
import singleImg from './../../assets/images/single-img.png';

export function SinglePost() {
  const { id } = useParams();

  const [post, setPost] = useState({});

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/' + id)
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, [id]);

  return (
    <div className="single-page">
      <div className="single-page single-page__container">
        <div className="single-page__info">
          <div>
            <img src={eplauseImg} alt="eplause img" />
            <span>125</span>
          </div>
          <div>
            <img src={shareImg} alt="share" />
            <span>70</span>
          </div>
        </div>
        <p className="user-interface">User interface</p>

        <h2 className="single-page__heading">{post.title}</h2>

        <div className="single-page__post-time">
          <span>October 24, 2020 </span>
          <img src={oclockImg} alt="oclock" />
          <span> | 3 minutes read</span>
        </div>

        <img className="single-page__page-img" src={singleImg} alt="single" />

        <p className="single-page__img-comment">{post.body}</p>

        <h3 className="single-page__overload-heading">Information overload</h3>

        <p className="p1">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed impedit consequatur at, adipisci veritatis quo
          enim voluptate officiis ab id.
        </p>

        <div className="single-page__span-p">
          <span></span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum accusamus expedita inventore consequuntur
            facilis obcaecati rem commodi molestiae, deserunt voluptatibus fugit atque et maiores? At esse impedit quia
            nobis omnis.
          </p>
        </div>

        <h3>Lessons Learnt: Best Practice</h3>

        <ul className="best-practise">
          <li>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id repellat, eligendi doloremque iste fuga velit
            modi.
          </li>
          <li>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id repellat, eligendi doloremque iste fuga velit
            modi.
          </li>
        </ul>
        <h2>More like this</h2>
        <ul className="single-page__more-list">
          <li>
            <div className="time">
              <time>September 24.2020</time>
              <span>Figma</span>
            </div>
            <p>How to choose the right colors when creating a website?</p>
            <div className="read-time">
              <img className="img" src={oclockImg} alt="oclock" />
              <span>3 minutes read</span>
            </div>
            <span className="list-devider"></span>
          </li>
          <li>
            <div className="time">
              <time>September 24.2020</time>
              <span>Figma</span>
            </div>
            <p>How to choose the right colors when creating a website?</p>
            <div className="read-time">
              <img src={oclockImg} alt="oclock" />
              <span>3 minutes read</span>
            </div>
            <span className="list-devider"></span>
          </li>
          <li>
            <div className="time">
              <time>September 24.2020</time>
              <span>Figma</span>
            </div>
            <p>How to choose the right colors when creating a website?</p>
            <div className="read-time">
              <img src={oclockImg} alt="oclock" />
              <span>3 minutes read</span>
            </div>
            <span className="list-devider"></span>
          </li>
        </ul>
      </div>
    </div>
  );
}
