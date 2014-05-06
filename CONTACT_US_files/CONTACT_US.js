// Created by iWeb 3.0.4 local-build-20140506

function writeMovie1()
{detectBrowser();if(windowsInternetExplorer)
{document.write('<object id="id2" classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="http://www.apple.com/qtactivex/qtplugin.cab" width="320" height="256" style="height: 256px; left: 190px; position: absolute; top: 180px; width: 320px; z-index: 1; "><param name="src" value="Media/movie_320x240-54.mov" /><param name="controller" value="true" /><param name="autoplay" value="false" /><param name="scale" value="tofit" /><param name="volume" value="100" /><param name="loop" value="false" /></object>');}
else if(isiPhone)
{document.write('<object id="id2" type="video/quicktime" width="320" height="256" style="height: 256px; left: 190px; position: absolute; top: 180px; width: 320px; z-index: 1; "><param name="src" value="CONTACT_US_files/movie_320x240-3.jpg"/><param name="target" value="myself"/><param name="href" value="../Media/movie_320x240-54.mov"/><param name="controller" value="true"/><param name="scale" value="tofit"/></object>');}
else
{document.write('<object id="id2" type="video/quicktime" width="320" height="256" data="Media/movie_320x240-54.mov" style="height: 256px; left: 190px; position: absolute; top: 180px; width: 320px; z-index: 1; "><param name="src" value="Media/movie_320x240-54.mov"/><param name="controller" value="true"/><param name="autoplay" value="false"/><param name="scale" value="tofit"/><param name="volume" value="100"/><param name="loop" value="false"/></object>');}}
setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({shadow_1:new IWShadow({blurRadius:1,offset:new IWPoint(1.4142,1.4142),color:'#000000',opacity:0.440000}),shadow_2:new IWShadow({blurRadius:4,offset:new IWPoint(-0.0000,2.0000),color:'#000000',opacity:0.440000}),shadow_0:new IWShadow({blurRadius:1,offset:new IWPoint(1.4142,1.4142),color:'#000000',opacity:0.440000})});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('CONTACT_US_files/CONTACT_USMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');fixAllIEPNGs('Media/transparent.gif');Widget.onload();applyEffects()}
function onPageUnload()
{Widget.onunload();}
