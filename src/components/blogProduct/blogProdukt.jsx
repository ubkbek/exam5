// images
import arrowRightImg from './../../assets/images/arrow-right.svg';
import arrowLeftImg from './../../assets/images/arrow-left.svg';
import twitter from './../../assets/images/twitter.svg';
import linkedin from './../../assets/images/linkedin.svg';
import facebook from './../../assets/images/facebook.svg';
import github from './../../assets/images/gitHub.svg';
import oclock from './../../assets/images/oclock.svg';
import { useContext, useRef } from 'react';
import { SearchContext } from '../context/searchContext';
import { Link } from 'react-router-dom';
import './blogProdukt.scss';
import { useEffect, useState } from 'react';

export function BlogProdukt() {
  const limit = 10;
  const [page, setPage] = useState(1);
  const { searchValue } = useContext(SearchContext);
  const [posts, setPosts] = useState([]);
  const [allPosts, setAllPosts] = useState([]);

  const nextRef = useRef();
  const prevRef = useRef();

  useEffect(() => {
    let filtredPosts = posts.filter((post) => post.title.includes(searchValue));
    setAllPosts(filtredPosts);
  }, [searchValue]);

  useEffect(() => {
    setAllPosts(posts);
  }, [posts]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  useEffect(() => {
    if (page === 1) prevRef.current.disabled = true;
    else prevRef.current.disabled = false;

    if (page === Math.ceil(allPosts.length / limit)) nextRef.current.disabled = true;
    else nextRef.current.disabled = false;
  }, [page]);

  function handlePrevBtn() {
    if (page > 1) setPage(page - 1);
  }

  function handleNextBtn() {
    if (page < posts.length / limit) setPage(page + 1);
  }

  return (
    <main>
      <section className="blog">
        <div className="container blog__container">
          <h2 className="visually-hidden">Lorem, ipsum.</h2>

          <div className="blog__left">
            <h3 className="blog__left-heading">What I do!</h3>

            <p className="blog__left-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer aliquet, orci in bibendum luctus, turpis
              ante pretium velit, eu rutrum augue erat ac eros. Cras ultricies mattis convallis.
            </p>

            <div className="blog__explore">
              <span>EXPLORE ME</span>

              <button>
                <img src={arrowRightImg} alt="arrow" width="4px" height="8px" />
              </button>
            </div>

            <ul className="blog__left-sotsial-list">
              <li className="blog__left_sotsial-item">
                <Link to={'/'} className="blog__left_sotsial-link">
                  <img src={facebook} alt="facebook" width="10px" height="18px" />
                </Link>
              </li>
              <li className="blog__left_sotsial-item">
                <Link to={'/'} className="blog__left_sotsial-link">
                  <img src={github} alt="gitHub" width="20px" height="20px" />
                </Link>
              </li>
              <li className="blog__left_sotsial-item">
                <Link to={'/'} className="blog__left_sotsial-link">
                  <img src={twitter} alt="twitter" width="20px" height="17px" />
                </Link>
              </li>
              <li className="blog__left_sotsial-item">
                <Link to={'/'} className="blog__left_sotsial-link">
                  <img src={linkedin} alt="linkedin" width="17px" height="17px" />
                </Link>
              </li>
            </ul>
          </div>

          <div className="blog__right">
            <h3 className="blog__right-heading">Recent Posts</h3>

            {
              posts.length > 0 && (
                <ul>
                  {allPosts.slice((page - 1) * limit, page * limit).map((post) => (
                    <li key={post.id}>
                      <div className="time">
                        <time>September 24.2020</time>
                        <span>Design theory</span>
                      </div>

                      <p>
                        <Link to={'/posts/' + post.id}>{post.title}</Link>
                      </p>

                      <div className="read-time">
                        <img src={oclock} width="18px" height="18px" alt="clock" />
                        <span>{post.id} minutes read</span>
                      </div>

                      <span className="devider"></span>
                    </li>
                  ))}
                </ul>
              )
              //  || <h1>Internetga ulanmagan</h1>
            }

            <div className="pages-wrapper">
              <ul className="pages">
                <li>
                  <button ref={prevRef} onClick={handlePrevBtn} className="btn-arrow">
                    <img src={arrowLeftImg} alt="left arrow" />
                  </button>
                </li>
                <li>
                  <button>1</button>
                </li>
                <li>
                  <button>2</button>
                </li>
                <li>
                  <button>3</button>
                </li>
                <li>
                  <button>4</button>
                </li>
                <li>
                  <button>5</button>
                </li>
                <li>
                  <button ref={nextRef} onClick={handleNextBtn} className="btn-arrow">
                    <img src={arrowRightImg} alt="arrow" />
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
