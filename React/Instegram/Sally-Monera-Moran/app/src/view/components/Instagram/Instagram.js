import React from 'react';
import './Instagram.css';
import { useHistory } from 'react-router-dom';


const stories = [
    { url: 'https://i.pinimg.com/736x/3d/b7/7d/3db77df2a496f33b09c1861acc7a7b1c.jpg', name: 'Moran' },
    { url: 'https://bidunart.com/wp-content/uploads/2019/12/Portrait197a-1280x640.jpg', name: 'Sally' },
    { url: 'https://www.adobe.com/content/dam/cc/us/en/creativecloud/photography/discover/portrait-photography/CODERED_B1_portrait_photography-P4a_438x447.jpg.img.jpg', name: 'Mickey' }

]

const feeds = [
    { url: 'https://i.ytimg.com/vi/OtHrDCox_kI/maxresdefault.jpg', name: 'Moran' },
    { url: 'https://bidunart.com/wp-content/uploads/2019/12/Portrait197a-1280x640.jpg', name: 'Sally' },
    { url: 'https://c4.wallpaperflare.com/wallpaper/45/913/269/women-face-green-eyes-portrait-wallpaper-preview.jpg', name: 'Mickey' },
    { url: 'https://www.adobe.com/content/dam/cc/us/en/creative-cloud/photography/discover/portrait-photography/CODERED_B1_portrait-photography_hero-img_900x420.jpg.img.jpg', name: 'Saraa' },
    { url: 'https://img.snappr.com/ZsP8L1xlW_wFTrz3jnEKOb11K4c=/fit-in/2048x0/3b597370-a8b5-4346-822e-66fb909610fc', name: 'Roba' }
]

export function Instagram() {
    let history = useHistory();
    return (
        <div className="container">
            <div className="stories">
                {
                    stories.map((story, index) => {
                        return (<InstStory key={index} story={story} />)
                    })
                }
            </div>

            <div className="feeds">
                {
                    feeds.map((feed, index) => {
                        return (<InstaFeed key={index} feed={feed} />)
                    })
                }
            </div>


        </div>
    )

    function InstStory(props) {
        const { story } = props;
        
        return (
            <div className="instastories">
                <img src={story.url} alt={story.name} onClick={openStory} />
                <h6>{story.name}</h6>
            </div>


        )
    }


    function InstaFeed(props) {
        const { feed } = props;
        return (
            <div className="instafeeds">
                <img src={feed.url} alt={feed.name} />
                <p>{feed.name}</p>
            </div>

        )
    }

    function openStory() {
        history.push('/Story');

    }
}






