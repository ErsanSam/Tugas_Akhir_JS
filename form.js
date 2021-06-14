function buat_login(){
  var elem = document.getElementById("X");
  elem .parentElement.removeChild(elem);
  var p = document.createElement ("p");
  p.className = "tulisan_login";
  p.innerHTML = "SILAHKAN MENDAFTAR";
  var element = document.getElementsByTagName("div")[0];
  element.appendChild(p);
  var form = document.createElement("FORM");
  element.appendChild(form);
  var label = document.createElement("label");
  label.innerHTML="Nama User";
  form.appendChild(label);
  var input_name = document.createElement("input");
  input_name.type = "text";
  input_name.name = "name";
  input_name.placeholder = "Nama user.."
  input_name.className = "form_login";
  form.appendChild(input_name);
  var label = document.createElement("label");
  label.innerHTML="Nomor Handphone ";
  form.appendChild(label);
  var input_tel = document.createElement("input");
  input_tel.type = "tel";
  input_tel.name = "number";
  input_tel.placeholder = "Nomor Handphone."
  input_tel.className = "form_login";
  form.appendChild(input_tel);
  var label = document.createElement("label");
  label.innerHTML="Username";
  form.appendChild(label);
  var input_username = document.createElement("input");
  input_username.type = "text";
  input_username.name = "username";
  input_username.placeholder = "Username atau email.."
  input_username.className = "form_login";
  form.appendChild(input_username);
  var label = document.createElement("label");
  label.innerHTML="Pasword";
  form.appendChild(label);
  var input_password = document.createElement("input");
  input_password.type = "password";
  input_password.name = "password";
  input_password.placeholder = "Password.."
  input_password.className = "form_login";
  form.appendChild(input_password);
  var tombol = document.createElement("input");
  tombol.type = "submit";
  tombol.value = "DAFTAR SEKARANG";
  tombol.className = "tombol_login";
  form.appendChild(tombol)


}
