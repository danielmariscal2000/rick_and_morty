const regexUser = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const regexPassword=/\d/;
 export function validate(userData){
   let error={};
   if (!regexUser.test(userData.username)) {
    error.username="El usuario debe ser un email"
   }
   else if(!userData.username){
    error.username="El nombre no debe estar vacio";
   }
   else if(userData.username.length>35){
      console.log(userData.username.length);
      error.username="El nombre del usuario no debe tener mas de 35 caracteres";
   }
   else if(!regexPassword.test(userData.password)){
      error.password="debe tener al menos un numero"
   }
   else if(userData.password.length<6 && userData.password.length>10 ){
       error.password="La contraseña debe tener una logitud entre 6 y 10 caracteres"
   }
   return error;
}