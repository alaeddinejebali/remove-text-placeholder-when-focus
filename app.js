
document.getElementById('firstname').addEventListener('focus', function(){
	this.removeAttribute('placeholder');
});
document.getElementById('lastname').addEventListener('focus', function(){
	this.removeAttribute('placeholder');
});
document.getElementById('mail').addEventListener('focus', function(){
	this.removeAttribute('placeholder');
});
document.getElementById('tel').addEventListener('focus', function(){
	this.removeAttribute('placeholder');
});
document.getElementById('company').addEventListener('focus', function(){
	this.removeAttribute('placeholder');
});
document.getElementById('position').addEventListener('focus', function(){
	this.removeAttribute('placeholder');
});

document.getElementById('firstname').addEventListener('blur', function(){
	this.setAttribute('placeholder', 'Martin');
});
document.getElementById('lastname').addEventListener('blur', function(){
	this.setAttribute('placeholder', 'Dupont');
});
document.getElementById('mail').addEventListener('blur', function(){
	this.setAttribute('placeholder', 'martin.dupont@societe.com');
});
document.getElementById('tel').addEventListener('blur', function(){
	this.setAttribute('placeholder', '+33');
});
document.getElementById('company').addEventListener('blur', function(){
	this.setAttribute('placeholder', 'Entreprise');
});
document.getElementById('position').addEventListener('blur', function(){
	this.setAttribute('placeholder', 'ex : DRH');
});
