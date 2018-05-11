function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}
function check_username(name){

	var s = name.toLowerCase();
	if(/^[a-zA-Z0-9]*$/.test(s) == false) {
   			return 0;
	}
	return name.length == 0?0:1;
}
function check_dangki(){
	var dk_password = document.getElementById('dk_password').value;
	var dk_password2 = document.getElementById('dk_password2').value;
	var dk_hoten = document.getElementById('dk_hoten').value;
	var dk_email = document.getElementById('dk_email').value;

	if(dk_password.length<6){
		document.getElementById('cb_password').innerHTML = 'Enter a combination of a least six character'
	}
	else{
		document.getElementById('cb_password').innerHTML = "";
	}
	if(dk_hoten.length<=0){
		document.getElementById('cb_hoten').innerHTML = 'What is your name?'
	}
	else{
		document.getElementById('cb_hoten').innerHTML = "";
	}
	if(dk_email.length<=0){
		document.getElementById('cb_email').innerHTML = 'What is your email?';
	}
	else{
		document.getElementById('cb_email').innerHTML = "";
	}
	if(!validateEmail(dk_email)){
		document.getElementById('cb_email').innerHTML = 'What is your email?';
	}
	else{
		document.getElementById('cb_email').innerHTML = "";
	}
	if(dk_password!=dk_password2){
		document.getElementById('cb_password2').innerHTML = "Confirm password is false";
	}
	else{
		document.getElementById('cb_password2').innerHTML = "";
	}
	if(dk_password==dk_password&&dk_password.length>=6&&dk_hoten.length>0&&dk_email.length>0&&validateEmail(dk_email)){
		document.getElementById('cb_password').innerHTML = "";
		document.getElementById('cb_hoten').innerHTML = "";
		document.getElementById('cb_email').innerHTML = "";
		return true;
	}
	return false;	
}