import VanillaTilt from 'vanilla-tilt'

import './style.css'
import styles from "./component.module.css"

const apiURL = `https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&id=${import.meta.env.VITE_CHANNELID}&key=${import.meta.env.VITE_API_KEY}`;


function fetchChannelStatistics() {
  fetch(apiURL)
    .then(response => response.json())
    .then(data => {
      const channel = data.items[0];

      const ul = document.getElementById('channel-stats');
      const subscribersTitle = document.getElementById('subscribers');

      const channelTitle = document.createElement('li');
      channelTitle.textContent = `Channel Title: ${channel.snippet.title}`;
      ul.appendChild(channelTitle);

      const subscribers = document.createElement('li');
      subscribers.textContent = `Subscribers: ${channel.statistics.subscriberCount}`;
      ul.appendChild(subscribers);
      subscribersTitle.innerHTML = `<span id="subscribersSpan" class="${styles.font}">${channel.statistics.subscriberCount}</span>`;

      const totalViews = document.createElement('li');
      totalViews.textContent = `Total Views: ${channel.statistics.viewCount}`;
      ul.appendChild(totalViews);

      const totalVideos = document.createElement('li');
      totalVideos.textContent = `Total Videos: ${channel.statistics.videoCount}`;
      ul.appendChild(totalVideos);

      VanillaTilt.init(document.querySelector('#subscribersSpan'), {
        max: 2,
        speed: 400,
        "full-page-listening": true,
      });
    })
    .catch(error => {
      console.error('Error fetching channel details:', error);
    });
}

fetchChannelStatistics();

document.querySelector('#app').innerHTML = `
    <div id="subscribers" class="${styles.subscribersCount}"></div>
    <div class="${styles.container}">
      <spline-viewer
        loading-anim-type="spinner-small-light"
        url="https://prod.spline.design/bhNM-ifQzRrBwGPi/scene.splinecode"
        ><img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAATCAYAAADxlA/3AAAJ+ElEQVR4AQCBAH7/AJZRwBGWUcARllHAEZZRwBGWUcARllHAEZZRwBGWUcARllHAEZZRwBGWUcARllHAEZZRwBGWUcARllHAEZZRwBGWUcARllHAEZZRwBGWUcARllHAEZZRwBGWUcARllHAEZZRwBGWUcARllHAEZZRwBGWUcARllHAEZZRwBGWUcARAIEAfv8AllHAEZZRwBGWUcARllHAEZZRwBGWUcARllHAEZZRwBGWUcARllHAEZZRwBGWUcARllHAEZZRwBGWUcARllHAEZZRwBGWUcARllHAEZZRwBGWUcARllHAEZZRwBGWUcARllHAEZZRwBGWUcARllHAEZZRwBGWUcARllHAEZZRwBEAgQB+/wCWUcARllHAEZZRwBGWUcARllHAEZZRwBGWUcARllHAEZZRwBGWUcARllHAEZZRwBGWUcARllHAEZZRwBGWUcARllHAEZZRwBGWUcARllHAEZZRwBGWUcARllHAEZZRwBGWUcARllHAEZZRwBGWUcARllHAEZZRwBGWUcARllHAEQCBAH7/AJZRwBGWUcARllHAEZZRwBGWUcARllHAEZZRwBGWUcARllHAEZZRwBGWUcARllHAEZZRwBGWUcARllHAEZZRwBGWUcARllHAEZZRwBGWUcARllHAEZZRwBGWUcARllHAEZZRwBGWUcARllHAEZZRwBGWUcARllHAEZZRwBGWUcARAIEAfv8AllHAEZZRwBGWUcARllHAEZZRwBGWUcARllHAEZZRwBGWUcARllHAEZZRwBGWUcARllHAEZZRwBGWUcARllHAEZZRwBGWUcARllHAEZZRwBGWUcARllHAEZZRwBGWUcARllHAEZZRwBGWUcARllHAEZZRwBGWUcARllHAEZZRwBEAgQB+/wCWUcARllHAEZZRwBGWUcARllHAEZZRwBGWUcARllHAEZZRwBGWUcARllHAEZZRwBGWUcARllHAEZZRwBGWUcARllHAEZZRwBGWUcARllHAEZZRwBGWUcARllHAEZZRwBGWUcARllHAEZZRwBGWUcARllHAEZZRwBGWUcARllHAEQCBAH7/AJZRwBGWUcARllHAEZZRwBGWUcARllHAEZZRwBGWUcARllHAEZZRwBGWUcARllHAEZZRwBGWUcARllHAEZZRwBGWUcARllHAEZZRwBGWUcARllHAEZZRwBGWUcARllHAEZZRwBGWUcARllHAEZZRwBGWUcARllHAEZZRwBGWUcARAIEAfv8AllHAEZZRwBGWUcARllHAEZZRwBGWUcARllHAEZZRwBGWUcARllHAEZZRwBGWUcARllHAEZZRwBGWUcARllHAEZZRwBGWUcARllHAEZZRwBGWUcARllHAEZZRwBGWUcARllHAEZZRwBGWUcARllHAEZZRwBGWUcARllHAEZZRwBEAgQB+/wCWUcARllHAEZZRwBGWUcARllHAEZZRwBGWUcARllHAEZZRwBGWUcARllHAEZZRwBGWUcARllHAEZZRwBGWUcARllHAEZZRwBGWUcARllHAEZZRwBGWUcARllHAEZZRwBGWUcARllHAEZZRwBGWUcARllHAEZZRwBGWUcARllHAEQCBAH7/AJZRwBGWUcARllHAEZZRwBGWUcARllHAEZZRwBGWUcARllHAEZZRwBGWUcARllHAEZZRwBGWUcARllHAEZZRwBGWUcARllHAEZZRwBGWUcARllHAEZZRwBGWUcARllHAEZZRwBGWUcARllHAEZZRwBGWUcARllHAEZZRwBGWUcARAIEAfv8AllHAEZZRwBGWUcARllHAEZZRwBGWUcARllHAEZZRwBGWUcARllHAEZZRwBGWUcARllHAEZZRwBGWUcARllHAEZZRwBGWUcARllHAEZZRwBGWUcARllHAEZZRwBGWUcARllHAEZZRwBGWUcARllHAEZZRwBGWUcARllHAEZZRwBEAgQB+/wCWUcARllHAEZZRwBGWUcARllHAEZZRwBGWUcARllHAEZZRwBGWUcARllHAEZZRwBGWUcARllHAEZZRwBGWUcARllHAEZZRwBGWUcARllHAEZZRwBGWUcARllHAEZZRwBGWUcARllHAEZZRwBGWUcARllHAEZZRwBGWUcARllHAEQCBAH7/AJZRwBGWUcARllHAEZZRwBGWUcARllHAEZZRwBGWUcARllHAEZZRwBGWUcARllHAEZZRwBGWUcARllHAEZZRwBGWUcARllHAEZZRwBGWUcARllHAEZZRwBGWUcARllHAEZZRwBGWUcARllHAEZZRwBGWUcARllHAEZZRwBGWUcARAIEAfv8AllHAEZZRwBGWUcARllHAEZZRwBGWUcARllHAEZZRwBGWUcARllHAEZZRwBGWUcARllHAEZZRwBGWUcARllHAEZZRwBGWUcARllHAEZZRwBGWUcARllHAEZZRwBGWUcARllHAEZZRwBGWUcARllHAEZZRwBGWUcARllHAEZZRwBEAgQB+/wCWUcARllHAEZZRwBGWUcARllHAEZZRwBGWUcARllHAEZZRwBGWUcARllHAEZZRwBGWUcARllHAEZZRwBGWUcARllHAEZZRwBGWUcARllHAEZZRwBGWUcARllHAEZZRwBGWUcARllHAEZZRwBGWUcARllHAEZZRwBGWUcARllHAEQCBAH7/AJZRwBGWUcARllHAEZZRwBGWUcARllHAEZZRwBGWUcARllHAEZZRwBGWUcARllHAEZZRwBGWUcARllHAEZZRwBGWUcARllHAEZZRwBGWUcARllHAEZZRwBGWUcARllHAEZZRwBGWUcARllHAEZZRwBGWUcARllHAEZZRwBGWUcARAIEAfv8AllHAEZZRwBGWUcARllHAEZZRwBGWUcARllHAEZZRwBGWUcARllHAEZZRwBGWUcARllHAEZZRwBGWUcARllHAEZZRwBGWUcARllHAEZZRwBGWUcARllHAEZZRwBGWUcARllHAEZZRwBGWUcARllHAEZZRwBGWUcARllHAEZZRwBEAgQB+/wCWUcARllHAEZZRwBGWUcARllHAEZZRwBGWUcARllHAEZZRwBGWUcARllHAEZZRwBGWUcARllHAEZZRwBGWUcARllHAEZZRwBGWUcARllHAEZZRwBGWUcARllHAEZZRwBGWUcARllHAEZZRwBGWUcARllHAEZZRwBGWUcARllHAEQGBAH7/AJZRwBGWUcARllHAEZZRwBGWUcARllHAEZZRwBGWUcARllHAEZZRwBGWUcARllHAEZZRwBGWUcARllHAEZZRwBGWUcARllHAEZZRwBGWUcARllHAEZZRwBGWUcARllHAEZZRwBGWUcARllHAEZZRwBGWUcARllHAEZZRwBGWUcARDFYVPachJz4AAAAASUVORK5CYII="
          alt="Spline preview"
          style="width: 100%; height: 100%"
      /></spline-viewer>
    </div>
    <ul id="channel-stats" class="${styles.list}"></ul>
`
