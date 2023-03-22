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
            <div className='news'>
                <div className='main-news'>
                    <div className='picture'>
                        <img></img>
                    </div>
                    <div className='info-news'>
                        <div className='title'></div>
                        <div className='news-start'></div>
                        <div className='time'></div>
                    </div>
                </div>
                <div className='all-news'>
                    <div className='col-1'>
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
        </div>
    )

}

export default Blogs;
