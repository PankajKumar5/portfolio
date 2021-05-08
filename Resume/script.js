var menu_links = document.querySelectorAll(".menu a")
var scroll;
var skillSection = document.getElementById("skills");
var skillBar = document.querySelectorAll(".skill-bar>.skill-50")
var isVisible = false;

for(var i=0;i<menu_links.length;i++){
	menu_links[i].addEventListener('click',function(event){
		event.preventDefault();
		
		var text = this.textContent.toLocaleLowerCase();
		var element =  document.getElementById(text);

		scroll = setInterval(scrollSlow,5,element);

	});
}

function scrollSlow(element){
	var size =  element.getBoundingClientRect();

	if(size.top<=0){
		clearInterval(scroll);
	}

	window.scrollBy(0,10);
}


window.addEventListener("scroll",checkScroll);

function initialize(){
	for(let bar in skillBar){
		bar.style.width="0%";
	}
}

initialize();

function checkScroll(){
	var skillSize =  skillSection.getBoundingClientRect();
	
	if(skillSize.top<=window.innerHeight  && !isVisible){
		fillBars();
		isVisible=true;
	}else if(skillSize.top>window.innerHeight ){
		isVisible=false;
		initialize();
	}else if(skillSize.bottom<0){
		isVisible=false;
		initialize();
	}
}


function fillBars(){
	for(let i=0;i<skillBar.length;i++){
		let size_bar = skillBar[i].getAttribute('data-bar-size');
		let original_size = 0;
		let scroll = setInterval(function(){
			if(original_size>=size_bar){
				clearInterval(scroll);
			}
			original_size+=5;
			skillBar[i].style.width=original_size+"%";
		},50)	
	}
}