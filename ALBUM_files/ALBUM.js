// Created by iWeb 3.0.4 local-build-20140506

function createMediaStream_id1()
{return IWCreatePhotocast("file://localhost/Users/baoyang/Desktop/omusubi/ALBUM_files/rss.xml",true);}
function initializeMediaStream_id1()
{createMediaStream_id1().load('file://localhost/Users/baoyang/Desktop/omusubi',function(imageStream)
{var entryCount=imageStream.length;var headerView=widgets['widget1'];headerView.setPreferenceForKey(imageStream.length,'entryCount');NotificationCenter.postNotification(new IWNotification('SetPage','id1',{pageIndex:0}));});}
function layoutMediaGrid_id1(range)
{createMediaStream_id1().load('file://localhost/Users/baoyang/Desktop/omusubi',function(imageStream)
{if(range==null)
{range=new IWRange(0,imageStream.length);}
IWLayoutPhotoGrid('id1',new IWPhotoGridLayout(2,new IWSize(254,254),new IWSize(254,30),new IWSize(305,299),27,27,0,new IWSize(40,39)),new IWPhotoFrame([IWCreateImage('ALBUM_files/Rosewood_01.png'),IWCreateImage('ALBUM_files/Rosewood_02.png'),IWCreateImage('ALBUM_files/Rosewood_03.png'),IWCreateImage('ALBUM_files/Rosewood_06.png'),IWCreateImage('ALBUM_files/Rosewood_09.png'),IWCreateImage('ALBUM_files/Rosewood_08.png'),IWCreateImage('ALBUM_files/Rosewood_07.png'),IWCreateImage('ALBUM_files/Rosewood_04.png')],null,2,0.743750,0.000000,0.000000,0.000000,0.000000,26.000000,24.000000,26.000000,27.000000,79.000000,105.000000,79.000000,105.000000,null,null,null,0.400000),imageStream,range,null,null,1.000000,{backgroundColor:'rgb(0, 0, 0)',reflectionHeight:100,reflectionOffset:2,captionHeight:100,fullScreen:0,transitionIndex:2},'Media/slideshow.html','widget1','widget2','widget3')});}
function relayoutMediaGrid_id1(notification)
{var userInfo=notification.userInfo();var range=userInfo['range'];layoutMediaGrid_id1(range);}
function onStubPage()
{var args=window.location.href.toQueryParams();parent.IWMediaStreamPhotoPageSetMediaStream(createMediaStream_id1(),args.id);}
if(window.stubPage)
{onStubPage();}
setTransparentGifURL('Media/transparent.gif');function hostedOnDM()
{return false;}
function onPageLoad()
{IWRegisterNamedImage('comment overlay','Media/Photo-Overlay-Comment.png')
IWRegisterNamedImage('movie overlay','Media/Photo-Overlay-Movie.png')
loadMozillaCSS('ALBUM_files/ALBUMMoz.css')
NotificationCenter.addObserver(null,relayoutMediaGrid_id1,'RangeChanged','id1')
fixAllIEPNGs('Media/transparent.gif');Widget.onload();initializeMediaStream_id1()
performPostEffectsFixups()}
function onPageUnload()
{Widget.onunload();}
