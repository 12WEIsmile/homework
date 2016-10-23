

window.onload = function(){
				var d = new Drag("drawDiv");
				d.init();
			}

function Drag(id){
				this.oDiv = document.getElementById(id);
				this.disX = 0;
				this.disY = 0;
			}
			
			Drag.prototype.init = function(){
				var _this = this;   //_this保存了原型对象的指针
				_this.oDiv.onmousedown = function(ev){
					var ev = ev || window.event;
					_this.fnDown(ev);
					return false;
				}
			}
			Drag.prototype.fnDown= function(ev){
				var _this = this; //这个thisDrag.prototype
				this.disX = ev.clientX - this.oDiv.offsetLeft; //保持住开始位置
				this.disY = ev.clientY - this.oDiv.offsetTop;
				document.onmousemove = function(ev){
					_this.fnMove(ev);
				}
				document.onmouseup = _this.fnUp;
				return false;
			}
			
			Drag.prototype.fnMove= function(ev){
				var ev = ev || window.event;
				this.oDiv.style.left = ev.clientX - this.disX + 'px';
				this.oDiv.style.top = ev.clientY - this.disY + 'px';
			}	
			
			Drag.prototype.fnUp = function(){
				document.onmousemove = null;
				document.onmouseup = null;
			}
			