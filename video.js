const videoBox = document.querySelector('.video-box');

const videoArray = [
    { title: '결승', url: 'sHRKL8ZZZbQ', year: '2020', season: '시즌1' },
    { title: '결승', url: 'Arpjtc5F9bU', year: '2020', season: '시즌2' },
];

function appendHtml(videoTag) {
    let div = document.createElement('div');
    div.innerHTML = videoTag;
    videoBox.appendChild(div);
}

function createVideoTag(videoTitle, videoURL, playYear, playSeason){
    let videoTag = 
    `<div class="video"><span>${videoTitle}</span><div class="video-container">
    <iframe width="100%" height="100%" src="${videoURL}" frameborder="0" 
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
    allowfullscreen></iframe></div><div class="video-tags">
    <button>${playYear}${playSeason}</button></div></div>`;
    appendHtml(videoTag); 
}

function createInfo(){
    i = 0 ;
    while (i < videoArray.length){
    const videoTitle = videoArray[i].title;
    const videoURL =  `https://www.youtube.com/embed/${videoArray[i].url}`;
    const playYear = videoArray[i].year;
    const playSeason = videoArray[i].season;

    createVideoTag(videoTitle, videoURL, playYear, playSeason);
    i = i + 1 ;
    }

}

createInfo();