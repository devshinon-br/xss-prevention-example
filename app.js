function processInput() {
    var userInput = $('#textInput').val();

    var regex = /^[a-zA-Z0-9\s]+$/; // Permitir letras, números e espaços
    if (!regex.test(userInput)) {
        alert("Entrada inválida. Apenas texto é permitido.");
        return;
    }

    // Filtro de saída para remover tags e scripts perigosos
    var sanitizedInput = sanitizeInput(userInput);

    $('#outputText').text(sanitizedInput);
}

function sanitizeInput(input) {
    // Remove tags HTML e scripts perigosos usando regex
    var sanitizedInput = input.replace(/<[^>]*>/g, '');

    return sanitizedInput;
}
