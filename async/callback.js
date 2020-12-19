function soma(x, callback) {
    return setTimeout(() => {
        return callback(null, x + 5000);
    }, 3000)
}

//callback function
function resolveSoma(err, data) {
    if (err) throw err;
    console.log(data)
}

soma(200, resolveSoma)