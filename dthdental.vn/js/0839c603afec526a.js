var Tooltip=Class.create();Tooltip.prototype={initialize:function(element,tool_tip){var options=Object.extend({default_css:false,margin:"0px",padding:"5px",backgroundColor:"#d6d6fc",min_distance_x:5,min_distance_y:5,delta_x:0,delta_y:0,zindex:1000},arguments[2]||{});this.element=$(element);this.options=options;if($(tool_tip)){this.tool_tip=$(tool_tip);}else{this.tool_tip=$(document.createElement("div"));document.body.appendChild(this.tool_tip);this.tool_tip.addClassName("tooltip");this.tool_tip.appendChild(document.createTextNode(tool_tip));}
this.tool_tip.hide();this.eventMouseOver=this.showTooltip.bindAsEventListener(this);this.eventMouseOut=this.hideTooltip.bindAsEventListener(this);this.eventMouseMove=this.moveTooltip.bindAsEventListener(this);this.registerEvents();},destroy:function(){Event.stopObserving(this.element,"mouseover",this.eventMouseOver);Event.stopObserving(this.element,"mouseout",this.eventMouseOut);Event.stopObserving(this.element,"mousemove",this.eventMouseMove);},registerEvents:function(){Event.observe(this.element,"mouseover",this.eventMouseOver);Event.observe(this.element,"mouseout",this.eventMouseOut);Event.observe(this.element,"mousemove",this.eventMouseMove);},moveTooltip:function(event){Event.stop(event);var mouse_x=Event.pointerX(event);var mouse_y=Event.pointerY(event);var dimensions=Element.getDimensions(this.tool_tip);var element_width=dimensions.width;var element_height=dimensions.height;if((element_width+mouse_x)>=(this.getWindowWidth()-this.options.min_distance_x)){mouse_x=mouse_x-element_width;mouse_x=mouse_x-this.options.min_distance_x;}else{mouse_x=mouse_x+this.options.min_distance_x;}
if((element_height+mouse_y)>=(this.getWindowHeight()-this.options.min_distance_y)){mouse_y=mouse_y-element_height;mouse_y=mouse_y-this.options.min_distance_y;}else{mouse_y=mouse_y+this.options.min_distance_y;}
this.setStyles(mouse_x,mouse_y);},showTooltip:function(event){Event.stop(event);this.moveTooltip(event);new Element.show(this.tool_tip);},setStyles:function(x,y){Element.setStyle(this.tool_tip,{position:'absolute',top:y+this.options.delta_y+"px",left:x+this.options.delta_x+"px",zindex:this.options.zindex});if(this.options.default_css){Element.setStyle(this.tool_tip,{margin:this.options.margin,padding:this.options.padding,backgroundColor:this.options.backgroundColor,zindex:this.options.zindex});}},hideTooltip:function(event){new Element.hide(this.tool_tip);},getWindowHeight:function(){var innerHeight;if(navigator.appVersion.indexOf('MSIE')>0){innerHeight=document.body.clientHeight;}else{innerHeight=window.innerHeight;}
return innerHeight;},getWindowWidth:function(){var innerWidth;if(navigator.appVersion.indexOf('MSIE')>0){innerWidth=document.body.clientWidth;}else{innerWidth=window.innerWidth;}
return innerWidth;}}