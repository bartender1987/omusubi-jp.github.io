// Created by iWeb 3.0.4 local-build-20140506

setTransparentGifURL('../Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_0:new IWStrokeParts([{rect:new IWRect(-4,4,8,170),url:'ACTIVITIES_files/stroke.png'},{rect:new IWRect(-4,-4,8,8),url:'ACTIVITIES_files/stroke_1.png'},{rect:new IWRect(4,-4,170,8),url:'ACTIVITIES_files/stroke_2.png'},{rect:new IWRect(174,-4,8,8),url:'ACTIVITIES_files/stroke_3.png'},{rect:new IWRect(174,4,8,170),url:'ACTIVITIES_files/stroke_4.png'},{rect:new IWRect(174,174,8,8),url:'ACTIVITIES_files/stroke_5.png'},{rect:new IWRect(4,174,170,8),url:'ACTIVITIES_files/stroke_6.png'},{rect:new IWRect(-4,174,8,8),url:'ACTIVITIES_files/stroke_7.png'}],new IWSize(178,178)),shadow_0:new IWShadow({blurRadius:1,offset:new IWPoint(1.4142,1.4142),color:'#000000',opacity:0.440000})});registry.applyEffects();}
function hostedOnDM()
{return false;}
function photocastSubscribe()
{photocastHelper("file://localhost/Users/baoyang/Desktop/omusubi/ACTIVITIES/rss.xml");}
function onPageLoad()
{loadMozillaCSS('ACTIVITIES_files/ACTIVITIESMoz.css')
detectBrowser();fixAllIEPNGs('../Media/transparent.gif');Widget.onload();fixupAllIEPNGBGs();IMpreload('ACTIVITIES_files','shapeimage_5','0');applyEffects()}
function onPageUnload()
{Widget.onunload();}
