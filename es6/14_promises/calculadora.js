exports.soma = (x, y) => {
    let verificaNegativos = (x, y) => {
        return x < 0 || y < 0;
    }

    var promise = new Promise((resolve, reject) => {
        if (verificaNegativos(x, y)) {
            reject(Error("Não permitido números negativos."));
        }
        resolve(x + y);
    });

    return promise;
}