const numero = [1, 2, 3, 4, 5, 6, 7, 8];
var text = "";
async function create() {
    for await (let x of numero) {
        return new Promise(function (resolve, reject) {
            setTimeout(() => {
                resolve(console.log(text += numero[x]));
            }, 3000);
        });
    };
};
create();
