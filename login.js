var userlogin = document.getElementById('login');
var regsiter = document.getElementById('register');
var btn = document.getElementById('btn');

function register(){
	userlogin.style.left="-400px";
	regsiter.style.left="50px";
	btn.style.left="110px";
}

function login(){
	userlogin.style.left="50px";
	regsiter.style.left="450px";
	btn.style.left="0";
}