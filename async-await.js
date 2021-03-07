function getNumber(n) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(n), 500);
    });
}

const getX = () => getNumber(3);
const getY = () => getNumber(5);
const getZ = () => getNumber(2);

async function sumData() {
    let x = await getX();
    let y = await getY();
    let z = await getZ();

    console.log(x + y + z);
}

sumData(); 