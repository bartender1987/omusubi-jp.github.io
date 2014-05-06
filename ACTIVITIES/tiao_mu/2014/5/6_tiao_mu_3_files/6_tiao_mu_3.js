// Created by iWeb 3.0.4 local-build-20140506

function writeMovie1()
{detectBrowser();if(windowsInternetExplorer)
{document.write('<object id="id4" classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="http://www.apple.com/qtactivex/qtplugin.cab" width="300" height="316" style="height: 316px; left: 200px; position: absolute; top: 86px; width: 300px; z-index: 1; "><param name="src" value="../../../../Media/podcast_entry_300x300.mp4" /><param name="controller" value="true" /><param name="autoplay" value="false" /><param name="scale" value="tofit" /><param name="volume" value="100" /><param name="loop" value="false" /></object>');}
else if(isiPhone)
{document.write('<object id="id4" type="video/quicktime" width="300" height="316" style="height: 316px; left: 200px; position: absolute; top: 86px; width: 300px; z-index: 1; "><param name="src" value="6_tiao_mu_3_files/podcast_entry_300x300-13.jpg"/><param name="target" value="myself"/><param name="href" value="../../../../../Media/podcast_entry_300x300.mp4"/><param name="controller" value="true"/><param name="scale" value="tofit"/></object>');}
else
{document.write('<object id="id4" type="video/quicktime" width="300" height="316" data="../../../../Media/podcast_entry_300x300.mp4" style="height: 316px; left: 200px; position: absolute; top: 86px; width: 300px; z-index: 1; "><param name="src" value="../../../../Media/podcast_entry_300x300.mp4"/><param name="controller" value="true"/><param name="autoplay" value="false"/><param name="scale" value="tofit"/><param name="volume" value="100"/><param name="loop" value="false"/></object>');}}
setTransparentGifURL('../../../../Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({shadow_0:new IWShadow({blurRadius:2,offset:new IWPoint(1.4142,1.4142),color:'#000000',opacity:0.500000})});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{dynamicallyPopulate();loadMozillaCSS('6_tiao_mu_3_files/6_tiao_mu_3Moz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');adjustLineHeightIfTooBig('id5');adjustFontSizeIfTooBig('id5');adjustLineHeightIfTooBig('id6');adjustFontSizeIfTooBig('id6');adjustLineHeightIfTooBig('id7');adjustFontSizeIfTooBig('id7');fixAllIEPNGs('../../../../Media/transparent.gif');Widget.onload();fixupAllIEPNGBGs();BlogFixupPreviousNext();applyEffects()}
function onPageUnload()
{Widget.onunload();}
