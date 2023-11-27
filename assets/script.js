const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

let index = 0
let arrow_left = document.querySelector("#banner .arrow_left");

arrow_left.addEventListener("click",(e) =>{
	console.log("Vous avez cliqué sur le flèche de gauche")
	index=index-1
	if(index<0){
		index=slides.length-1
	}
	console.log(index)
	changeSlides()
});

let arrow_right = document.querySelector("#banner .arrow_right");

arrow_right.addEventListener("click",(e) =>{
	console.log("Vous avez cliqué sur la flèche de droite")
	index= index+1
	
	if(index>=slides.length){
		index=0
		
	}
	console.log(index)
	changeSlides()
});

slides.forEach((slide,index) => {
	const dot=document.createElement("div")
	dot.classList.add("dot")
	if (index===0){
		dot.classList.add("dot_selected")
	}
	
	document.querySelector(".dots").appendChild(dot)
});

let banner_img = document.querySelector("#banner .banner_img");


function changeSlides() {
	
	const path = "./assets/images/slideshow/";
	banner_img.src = path + slides[index].image;
	banner_img.alt= slides[index].tagLine.toString();
	const description = document.querySelector("#banner p");
	description.innerHTML= slides[index].tagLine;
	const dots = document.querySelectorAll(".dot");
	dots.forEach((dot, indexfor) => {
		dot.classList.remove("dot_selected")
		if (indexfor===index){
			dot.classList.add("dot_selected")
		}
	});
}