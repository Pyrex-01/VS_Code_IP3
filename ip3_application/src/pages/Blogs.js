import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div className='filter'>
                <ul className='list'>
                    <li className='list-item'><a className='filter-link'>News</a></li>
                    <li className='list-item'><a className='filter-link'>Destinations</a></li>
                    <li className='list-item'><a className='filter-link'>Environment</a></li>
                </ul>
            </div>
           

             <div>
               <div className="banner2">
                <div className="welcome2">
                  <h1 className="wel-1">Welcome to our Blog</h1>
                   <p className="wel-2">Something about the page and what the blog page includes</p>
                </div>
               </div>

                <div className='news-title'>
                  <div className='title-top-news'></div>
                    <h className='top-news'>Top News</h>
                </div>

                <div className='news'>
                  <div className='main-news'>
                    <div className='picture'>
                        <img></img>
                    </div>
                   <div className='info-news'>
                      <div className='title'></div>
                        <h class="card-news-title">Top 10 Destinations in 2023</h>
                        <p class="card-news-text">Top destinations this month based on flights.<br></br>
                                            Information about Zaknthos ...                        
                        </p>
                      <div className='news-start'></div>
                   <div className='time'></div>
                    </div>
                  </div>
             
           <br></br>
           <hr className='hr-1'></hr>

           <div className='all-news'>        
              <div className='secondary-news'>
                  <div className='picture-small'>
                       <img></img>
                  </div>
        
              <div className='info-news'>
                  <div className='title-small'></div>
                   <h className='title-small-1'> Air pollution increased by 4%</h>
                    <p className='text-small-1 '>Information and analysis chart about the CO2 <br>
                                                        </br>per flight pollution/emission...</p>  
                  <div className='time'></div>                 
               </div>           
               </div>

               <div className='col-2'>
                    <div className='secondary-news'>
                         <div className='picture-small'>
                            <img></img>
                          </div>
                     <div className='info-news'>
                          <div className='title-small'></div>
                            <div className='news-start'></div>
                             <div className='time'></div>    
                            </div>
                          </div>
                     </div>
                   </div>
                 </div>

            <br></br>
           <hr className=' horizontal-line hr-2 '></hr>
           <hr className='horizontal-line hr-3'></hr>


            <div className="Footer">
              <p className="foot">This project was created by students of Glasgow Caledonian University</p>
              <p>2023</p>
            </div>
               
             </div>
           </div>
        
    )

}

export default Blogs;
