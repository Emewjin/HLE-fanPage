const videoBox = document.querySelector('.video-box');

const reviewArray = [
    { genre:'movie', title: '문호준 은퇴 헌정 영상', url: 'BUOkxkuZ3Zo', year: '2020', season: '시즌2' },
    { genre:'movie', title: '2020 시즌2 우승 매드무비', url: 'P1YNgHWkXyA', year: '2020', season: '시즌2' },
    { genre:'movie', title: '2020 시즌2 후기 매드무비', url: 'HN0fdNmmcvw', year: '2020', season: '시즌2' },
    { genre:'movie', title: '2020 시즌2 초기 매드무비', url: 'D6SX08nSfxc', year: '2020', season: '시즌2' },
    { genre:'백스테이지', title: '2020 시즌2 결승 백스테이지', url: 'i815CyHq7W0', year: '2020', season: '시즌2' },
    { genre:'백스테이지', title: '2020 시즌2 준플옵 (vs AF) 백스테이지', url: 'qprCvm3ga18', year: '2020', season: '시즌2' },
    { genre:'백스테이지', title: '2020 시즌2 패부 & 16강 백스테이지', url: 'tSsQs8RCrO0', year: '2020', season: '시즌2' },
    { genre:'예능', title: '문호준 중대 발표', url: 'S-unKwprndc', year: '2020', season: '시즌2' },
    { genre:'예능', title: '2020 시즌2 문호준 VLOG', url: 'YyWfOJ3UDn4', year: '2020', season: '시즌2' },
    { genre:'예능', title: '2020 시즌2 배성빈 VLOG', url: 'ZRMtV8gHyzs', year: '2020', season: '시즌2' },
    { genre:'예능', title: '2020 시즌2 최영훈 VLOG', url: 'gO80cyFC5EU', year: '2020', season: '시즌2' },
    { genre:'예능', title: '2020 시즌2 박도현 VLOG', url: '3jMgdrvFyss', year: '2020', season: '시즌2' },
    { genre:'예능', title: '2020 시즌2 강석인 VLOG', url: 'rlcsTbCGQ1E', year: '2020', season: '시즌2' },
    { genre:'예능', title: '카트라이더팀 구해줘 숙소 1부', url: 'PNrem6n07AA', year: '2020', season: '시즌2' },
    { genre:'예능', title: '카트라이더팀 구해줘 숙소 2부', url: 'FdT1hB52J9A', year: '2020', season: '시즌2' },
    { genre:'LIVE', title: '2020 시즌2 우승 라이브', url: 'cf27dp2mImE', year: '2020', season: '시즌2'},
    { genre:'LIVE', title: '2020 시즌2 플옵 승리 라이브', url: 'ji0DI2KsVAY', year: '2020', season: '시즌2' },
    { genre:'LIVE', title: '2020 시즌2 준플옵 (vs AF) 승리 라이브', url: '-jUz75EXFdo', year: '2020', season: '시즌2' },
    { genre:'LIVE', title: '2020 시즌2 vs EST 승리 라이브', url: 'uz9TNfKSOlQ', year: '2020', season: '시즌2' },
    { genre:'LIVE', title: '2020 시즌2 vs MOTO 승리 라이브', url: 'EGEmvyh4swQ', year: '2020', season: '시즌2' },
    { genre:'LIVE', title: '2020 시즌2 vs SGA 승리 라이브', url: 'tnuftsljPSQ', year: '2020', season: '시즌2' },
    { genre:'LIVE', title: '2020 시즌2 vs STL 승리 라이브', url: '1iBHKpuuHEM', year: '2020', season: '시즌2' },
    { genre:'LIVE', title: '2020 시즌2 vs AF 승리 라이브', url: 'IOHvwhPeumY', year: '2020', season: '시즌2' },
    { genre:'예능', title: '최영훈 - 이번에는 개인전 결승 가보겠습니다', url: 'nO_m61g8mUw', year: '2020', season: '시즌2' },
    { genre:'예능', title: 'Let 싸人', url: 'mFgODBxWB_s', year: '2020', season: '시즌2' },
    { genre:'예능', title: '뉴멤 강석인 환영회', url: 'LDI88ufjrAQ', year: '2020', season: '시즌2' },
    { genre:'예능', title: '최고의 겁쟁이를 찾아라', url: 'z9MN81FA1Vg', year: '2020', season: '시즌2' },
];

function appendHtml(videoTag) {
    let div = document.createElement('div');
    div.innerHTML = videoTag;
    videoBox.appendChild(div);
}

function createVideoTag(videoTitle, videoURL, playYear, playSeason, genre){
    let videoTag = 
    `<div class="video"><span>${videoTitle}</span><div class="video-container"><iframe width="100%" height="100%" src="${videoURL}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; 
    gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="video-tags"><button>${playYear}${playSeason}</button><button>${genre}</button></div></div>`;
    appendHtml(videoTag); 
}

function createInfo(){
    i = 0 ;
    while (i < reviewArray.length){
    const videoTitle = reviewArray[i].title;
    const videoURL =  `https://www.youtube.com/embed/${reviewArray[i].url}`;
    const playYear = reviewArray[i].year;
    const playSeason = reviewArray[i].season;
    const genre = reviewArray[i].genre;

    createVideoTag(videoTitle, videoURL, playYear, playSeason, genre);
    i = i + 1 ;
    }

}

createInfo();