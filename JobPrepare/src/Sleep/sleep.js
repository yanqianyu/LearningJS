function sleep(time) {
    return new Promise((resolve) => {
        setTimeout(resolve, time);
    })
}

const t1 = new Date();
sleep(1000).then(() => {
    const t2 = new Date();
    console.log(t2 - t1);
})

async function test() {
    const t1 = new Date();
    await sleep(1000);
    const t2 = new Date();
    console.log(t2 - t1);
}

test();