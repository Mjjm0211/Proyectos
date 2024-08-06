document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir el envío del formulario

    // Obtener los valores del formulario
    // Obtener los valores del formulario
    const firstname = document.getElementById('first-name').value;
    const lastname = document.getElementById('last-name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const repeatPassword = document.getElementById('repeat-password').value;
    const address = document.getElementById('address').value;
    const country = document.getElementById('country').value;
    const state = document.getElementById('state').value;
    const city = document.getElementById('city').value;
    const phoneNumber = document.getElementById('phone-number').value;


    if(password !== repeatPassword){
        alert('Las contraseñas no coinciden');
        return;
    }
    // Crear un objeto de usuario
    const user = {
        firstname: firstname,
        lastname: lastname,
        email: email,
        password: password,
        repeatPassword; repeatPassword,
        address: address,
        country: country,
        state: state,
        city: city,
        phoneNumber: phoneNumber
    };

    // Obtener usuarios existentes de LocalStorage
    let users = localStorage.getItem('users');
    if (users) {
        users = JSON.parse(users);
    } else {
        users = [];
    }

    // Agregar el nuevo usuario a la lista de usuarios
    users.push(user);

    // Guardar la lista de usuarios en LocalStorage
    localStorage.setItem('users', JSON.stringify(users));

    // Limpiar el formulario
    document.getElementById('registrationForm').reset();

    alert('Usuario registrado exitosamente');
});
