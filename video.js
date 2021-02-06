const videoBox = document.querySelector('.video-box');

const videoArray = [
    { title: 'test1', url: 'test1', year: 'test1', season: 'test1' },
    { title: 'test2', url: 'test2', year: 'test2', season: 'test2' },
];

function appendHtml(videoTag) {
    let div = document.createElement('div');
    div.innerHTML = videoTag;
    videoBox.appendChild(div);
}

function createVideoTag(videoTitle, videoURL){
    let videoTag = 
    `<div class="video"><span>${videoTitle}</span><div class="video-container"><iframe width="100%" height="100%" src="${videoURL}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="video-tags"><button>태그</button></div></div>`;
    appendHtml(videoTag); 
}

function createInfo(){
    i = 0 ;
    while(i < videoArray.length){
    const videoTitle = videoArray[i].title;
    const videoURL =  `https://www.youtube.com/embed/${videoArray[i].url}`;
    createVideoTag(videoTitle, videoURL);
    i = i + 1;
    }
}

videoArray.forEach(createInfo);






// function appendHtml(el, str){
//     const div = document.createElement('div');
//     div.innerHTML = str;
//     while (div.children.length > 0) {
//     el.appendChild(div.children[0]);
//     }
// }