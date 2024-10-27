interface User {
    id : number;
    correo : string;
    password : number;
}
interface Admin extends User{
    cargo : string
}

function imprimirDatosU (user : User | Admin): void {
    console.log(`id: ${user.id}`);
    console.log(`correo: ${user.correo}`);
    console.log(`password: ${user.password}`)



if ('cargo' in user){
    console.log(`Cargo: ${user.cargo}`)
}

const datosUser : User = {id: 4529384, correo:"duvan@gmail.com", password: 4983};
const datosAdmin : Admin = {id: 3748392, correo:"administra@gmail.com", password: 2938, cargo: "jefazo"};

console.log(datosUser);
console.log(datosAdmin);

}
