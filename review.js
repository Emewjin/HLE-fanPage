const videoBox = document.querySelector('.video-box');

const reviewArray = [
    {team: 'ROX', who: '김대겸', title: '김대겸 | 2020 시즌2 결승 (vs ROX) 리뷰', url: '5pNg85smLMs', year: '2020', season: '시즌2' },
    {team: 'SB', who: '김대겸', title: '김대겸 | 2020 시즌2 준결승 (vs SB) 에결 리뷰', url: 'EQgDawn4248', year: '2020', season: '시즌2' },
    {team: 'EST', who: '김대겸', title: '김대겸 | 2020 시즌2 vs EST 리뷰 - 골목길', url: '3gQ1lo7cA6Q', year: '2020', season: '시즌2' },
    {team: 'EST', who: '김대겸', title: '김대겸 | 2020 시즌2 vs EST 리뷰 - 순찰로', url: '5MLwx9-VppM', year: '2020', season: '시즌2' },
    {team: 'SB', who: '김대겸', title: '김대겸 | 2020 시즌2 vs SB 개막전 리뷰', url: 'PPfs6xijbl8', year: '2020', season: '시즌2' },
    {team: 'ROX', who: '문호준', title: '문호준 | 2020 시즌2 결승 리뷰 1', url: 'PXrQKIY8eA4', year: '2020', season: '시즌2' },
    {team: 'ROX', who: '문호준', title: '문호준 | 2020 시즌2 결승 리뷰 2', url: 'CN8u-ycvong', year: '2020', season: '시즌2' },
    {team: 'ROX', who: '최영훈', title: '최영훈 | 2020 시즌2 결승 리뷰', url: '2ACCHmtD7Xw', year: '2020', season: '시즌2' },
    {team: 'EST', who: '최영훈', title: '최영훈 | 2020 시즌2 vs EST 리뷰', url: 'FYPCukntJ9g', year: '2020', season: '시즌2' },
    {team: 'MOTO', who: '최영훈', title: '최영훈 | 2020 시즌2 vs MOTO 리뷰', url: 'Crw97DMdq_U', year: '2020', season: '시즌2' },
    {team: 'STL', who: '최영훈', title: '최영훈 | 2020 시즌2 vs STL 리뷰', url: '9lrBcV69Plo', year: '2020', season: '시즌2' },
    {team: '개인전', who: '최영훈', title: '최영훈 | 2020 시즌2 개인전 16강 리뷰', url: 'QN8ALqSH4IQ', year: '2020', season: '시즌2' },
    {team: '개인전', who: '최영훈', title: '최영훈 | 2020 시즌2 개인전 패부전 리뷰', url: '6kSyI2CvNS0', year: '2020', season: '시즌2' },
    {team: 'ROX', who: '박도현', title: '박도현 | 2020 시즌2 결승 리뷰', url: 'ReMic7pOQlU', year: '2020', season: '시즌2' },
    {team: 'ROX', who: '박도현', title: '박도현 | 2020 시즌2 결승 리뷰1', url: '2F7c1WTv7O0', year: '2020', season: '시즌2' },

];

function appendHtml(videoTag) {
    let div = document.createElement('div');
    div.innerHTML = videoTag;
    videoBox.appendChild(div);
}

function createVideoTag(videoTitle, videoURL, playYear, playSeason, who, team){
    let videoTag = 
    `<div class="video"><span>${videoTitle}</span><div class="video-container">
    <iframe width="100%" height="100%" src="${videoURL}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div><div class="video-tags"><button>${playYear}${playSeason}</button><button>${who}</button><button>${team}</button></div></div>`;
    appendHtml(videoTag); 
}

function createInfo(){
    i = 0 ;
    while (i < reviewArray.length){
    const videoTitle = reviewArray[i].title;
    const videoURL =  `https://www.youtube.com/embed/${reviewArray[i].url}`;
    const playYear = reviewArray[i].year;
    const playSeason = reviewArray[i].season;
    const who = reviewArray[i].who;
    const team = reviewArray[i].team;
    createVideoTag(videoTitle, videoURL, playYear, playSeason, who, team);
    i = i + 1 ;
    }

}

createInfo();