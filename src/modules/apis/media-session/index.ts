import * as getPlayList from '../media-session/data/data.json';

export const hasSupport = () : boolean => 
    Boolean('mediaSession' in navigator);

var video_idx  = 0;
const totalVideos = Object.keys(getPlayList).length - 2;
var idx = 0;
const defaultSkipSeconds = 10;
let videoSelector = document.querySelector('video');

export function initializingListeners() : any {    
    videoSelector?.addEventListener('ended', function() {
        console.log("song ended");
        video_idx= (video_idx - 1 + totalVideos) % totalVideos;
        playVideo();
      });
}

export function playVideo() : any {
    console.log("Inside play video")
    videoSelector = document.querySelector('video');
    if(hasSupport() && videoSelector!=null){
        videoSelector.src = getPlayList[video_idx].Url
        console.log(getPlayList[video_idx].Url)
        videoSelector?.play().then(_ => updateMetaData())
        .catch( error => console.error(error.message));
    } 
}

function updateMetaData(): any {
if(hasSupport()){
        let song = getPlayList[video_idx];

        videoSelector = document.querySelector('video');
        navigator.mediaSession.metadata = new MediaMetadata({
                title: song.Title,
                artist: song.Artist
        });
       
        if(videoSelector!=null){
            videoSelector.title = song.Title;
            console.log("Playing " + videoSelector.title + "song...");
        }
   }
   updatePositionalData();
}

function deleteFirstEntry(idx : number){
    let specific_tbody = <HTMLTableElement>document.getElementById('logger_events');
    specific_tbody.deleteRow(idx);
    idx=idx+4;
    return idx;
}

function createRowInTable(capturedEvent ?: String) {
    let tbl = <HTMLTableElement> document.getElementById('table_log');
    tbl.style.border = '1px solid black';
    
    let specific_tbody = <HTMLTableElement>document.getElementById('logger_events');
    if(idx>=5){
        idx  = deleteFirstEntry(idx-5);
    } 
    let row = specific_tbody.insertRow(idx++);
    
    row.style.border = '1px solid black';

    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    
    cell1.innerHTML = capturedEvent as string;
    cell2.innerHTML = "" + videoSelector?.currentTime;
    cell3.innerHTML = "" + videoSelector?.title;
    cell1.style.border =  cell2.style.border  = cell3.style.border = '1px solid black';
}

function updatePositionalData(capturedEvent ?: String) {
    if(hasSupport() && 'setPositionState' in navigator.mediaSession) {
        let videoSelector = document.querySelector('video');
        if(capturedEvent!=null && capturedEvent!='undefined'){
            console.log("User selected >>> "+ capturedEvent + " Position updated at :" + videoSelector?.currentTime);
            createRowInTable(capturedEvent);
        }
            navigator.mediaSession.setPositionState(
            {
                duration: videoSelector?.duration,
                playbackRate: videoSelector?.playbackRate,
                position: videoSelector?.currentTime
            }
        );
    }
}

export const actionHandlers = [
    ['play', async () => {
        await videoSelector?.play();
        updateMetaData();
        updatePositionalData('Playing');
    }],

    ['pause' , () => {
        videoSelector?.pause();
        updateMetaData();
        updatePositionalData('Paused');
    }],

    ['stop' , () : any => {
        updateMetaData();
        updatePositionalData('Stopped');
    }],

    ['previoustrack', () : any => {
        if(videoSelector!=null)
            videoSelector.currentTime = 0;
        
        video_idx = (video_idx - 1 + totalVideos) % totalVideos; 
        console.log(video_idx);
        updateMetaData();
        updatePositionalData('Previous Track');
        
        playVideo();
    }],

    ['nexttrack', () : any => {
        if(videoSelector!=null)
            videoSelector.currentTime = 0;
        
        video_idx = (video_idx + 1)% totalVideos;
        updateMetaData();
        updatePositionalData('Next track');
        
        playVideo();
    }],

    ['seekbackward', (event: any) => {
        const skipBy = event.seekOffset || defaultSkipSeconds;
        if(videoSelector!=null)
            videoSelector.currentTime = Math.max(videoSelector.currentTime - skipBy , 0);
        updatePositionalData('Seek backward');
    }],

    ['seekforward', (event: any) => {    
        const ProceedBy = event.seekOffset || defaultSkipSeconds;
        if(videoSelector!=null)
            videoSelector.currentTime = Math.min(videoSelector.currentTime + ProceedBy , videoSelector.duration);
        updatePositionalData('Seek Forward');
    }],

    ['seekto', (event: any)=> {
        if(videoSelector!=null)
            videoSelector.currentTime = event.seekTime;
        updateMetaData();
        updatePositionalData('Seek To');
    }]
];