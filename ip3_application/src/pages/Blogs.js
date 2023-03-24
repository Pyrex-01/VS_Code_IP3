import React from 'react';
import './Blog.css';
import mainNews from './images/mainNews.png'
import chart from './images/chart.png'
import news from './images/news.png'

const Blogs = () => {
  return (
    <div>
      <div className='filter'>
        <ul className='list'>
          <li className='list-item'><a className='filter-link'>Planes</a></li>
          <li className='list-item'><a className='filter-link'>Destinations</a></li>
          <li className='list-item'><a className='filter-link'>Environment</a></li>
        </ul>
      </div>

      <div className="banner2">
        <div className="welcome2">
          <h1 className="wel-1">Welcome to our Blog</h1>
          <p className="wel-2">Read top news about the world of aviation!</p>
        </div>
      </div>

      <div className='news'>
        <div className='main-news'>
          <div className='picture'>
            <img src={mainNews} />
          </div>
          <div className='info-news'>
            <div>
              <div className='title'>Top 10 Destinations in 2023</div>
              <div className='news-text'>Top destinations this month based on flights.<br></br>
                Information about Zaknthos ...</div>
            </div>
            <div>
              <div className='time'>4.55 pm</div>
              <div className='comment'>15 comments</div>
            </div>
          </div>
        </div>

        <hr className='hr-1'></hr>

        <div className='all-news'>

          <div className='column'>

            <div className='secondary-news'>
              <div className='picture-small'>
                <img className='sn-img' src={chart} />
              </div>
              <div className='info-news-small'>
                <div>
                  <div className='title-small'>Air pollution increased by 4%</div>
                  <div className='text-small'>Information and analysis chart about the CO2 per flight pollution/emission...</div>
                </div>
                <div>
                  <div className='time'>2 pm</div>
                  <div className='comment'>15 comments</div>
                </div>
              </div>
            </div>
            <hr></hr>
            <div className='secondary-news'>
              <div className='picture-small'>
                <img className='sn-img' src={chart}/>
              </div>
              <div className='info-news-small'>
                <div>
                  <div className='title-small'>Air pollution increased by 4%</div>
                  <div className='text-small'>Information and analysis chart about the CO2 per flight pollution/emission...</div>
                </div>
                <div>
                  <div className='time'>2 pm</div>
                  <div className='comment'>15 comments</div>
                </div>
              </div>
            </div>



          </div>

          <hr className='hr-2'></hr>

          <div className='column'>

            <div className='secondary-news'>
              <div className='picture-small'>
                <img className='sn-img' src={news} />
              </div>
              <div className='info-news-small'>
                <div>
                  <div className='title-small'>Air pollution increased by 4%</div>
                  <div className='text-small'>Information and analysis chart about the CO2 per flight pollution/emission...</div>
                </div>
                <div>
                  <div className='time'>2 pm</div>
                  <div className='comment'>15 comments</div>
                </div>
              </div>
            </div>

            <hr></hr>
            <div className='secondary-news'>
              <div className='picture-small'>
                <img className='sn-img' src={news}/>
              </div>
              <div className='info-news-small'>
                <div>
                  <div className='title-small'>Air pollution increased by 4%</div>
                  <div className='text-small'>Information and analysis chart about the CO2 per flight pollution/emission...</div>
                </div>
                <div>
                  <div className='time'>2 pm</div>
                  <div className='comment'>15 comments</div>
                </div>
              </div>
            </div>


          </div>

        </div>

      </div>

      <div className="Footer">
        <p className="foot">This project was created by students of Glasgow Caledonian University</p>
        <p>2023</p>
      </div>

    </div>

  )

}

export default Blogs;
