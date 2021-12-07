var amSocialPromo=new Class.create();amSocialPromo.prototype={initialize:function(codePlaceholderId,codeLoadingTextId,couponUrl,saveUrl,isFirst)
{this.codePlaceholderId=codePlaceholderId;this.couponUrl=couponUrl;this.codeLoadingTextId=codeLoadingTextId;this.saveUrl=saveUrl;this.isFirst=isFirst;},doGoogle:function()
{this.loadCouponCode('platform_gplus');},doFacebook:function()
{this.loadCouponCode('platform_fb');},doTwitter:function()
{this.loadCouponCode('platform_twitter');},doPinterest:function()
{this.loadCouponCode('platform_pin');},loadCouponCode:function(platform)
{postData='platform='+platform;$(this.codePlaceholderId).innerHTML=$(this.codeLoadingTextId).innerHTML;new Ajax.Request(this.couponUrl,{method:'post',postBody:postData,onSuccess:function(transport){var couponCode=transport.responseText;if(couponCode)
{$(this.codePlaceholderId).innerHTML=couponCode;$(this.codePlaceholderId).removeClassName('amsocial-nocode')}}.bind(this),onFailure:function()
{alert("Something gone wrong. Please try one more time.")}});this.sendSaveAjaxRequest();},sendSaveAjaxRequest:function()
{if(this.isFirst){postData='save=true';new Ajax.Request(this.saveUrl,{method:'post',postBody:postData,onFailure:function()
{alert("Something gone wrong. Please try one more time.")}});}}};function amsocialPopupShow()
{if($('amsocial_iframe'))
{if('undefined'!=typeof(amSocialPopupDark)&&amSocialPopupDark&&$('amsocial_dark')){$('amsocial_dark').style.width="100%";$('amsocial_dark').style.height="100%";}
if(amSocialIframeUrl)
{$('amsocial_iframe_id').src=amSocialIframeUrl;amSocialIframeUrl='';}
if(parseInt($('amsocial_iframe').getStyle('top'))<0)
{var IE='\v'=='v';var left=$('amsocial_iframe').style.offsetLeft;if(IE){left=0;document.getElementById("amsocial_iframe").style["marginLeft"]="30%";}
$('amsocial_dark').show();new Effect.Opacity($('amsocial_dark'),{from:0,to:1,duration:0.5});$('amsocial_iframe').show();new Effect.Move($('amsocial_iframe'),{x:left,y:500,mode:'relative'});}}}
function amsocialPopupHide()
{var IE='\v'=='v';if($('amsocial_iframe'))
{if(parseInt($('amsocial_iframe').getStyle('top'))>0)
{var left=$('amsocial_iframe').style.offsetLeft;if(IE){left=0;}
new Effect.Move($('amsocial_iframe'),{x:left,y:-600,mode:'relative',afterFinish:function(){$('amsocial_iframe').hide();$('amsocial_dark').hide();}});new Effect.Opacity($('amsocial_dark'),{from:1,to:0,duration:0.9});}}
if(parent.document.getElementById('amsocial_iframe'))
{if(parseInt(parent.document.getElementById('amsocial_iframe').getStyle('top'))>0)
{var left=parent.document.getElementById('amsocial_iframe').style.offsetLeft;if(IE){left=0;}
new Effect.Move(parent.document.getElementById('amsocial_iframe'),{x:left,y:-500,mode:'relative',afterFinish:function(){parent.document.getElementById('amsocial_iframe').hide();parent.document.getElementById('amsocial_dark').hide();}});new Effect.Opacity(parent.document.getElementById('amsocial_dark'),{from:1,to:0,duration:0.9});}}
if('undefined'!=typeof(amSocial)){amSocial.sendSaveAjaxRequest();}}