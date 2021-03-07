function getData() {
    const data = [1, 2, 3];

    return new Promise(resolve => {
        setTimeout(() => {
            const sum = data.reduce((a, b) => a + b, 0);
            console.log(sum);
            resolve(sum)
        }, 1000);
    });
}

getData().then();  