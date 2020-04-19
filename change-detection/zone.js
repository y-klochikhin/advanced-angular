const originSetTimeout = setTimeout;
setTimeout = (callback, timeout) => {
    console.log('before timeout');
    originSetTimeout(() => {
        callback();
        console.log('after timeout');
    }, timeout);
}

//----------------------

setTimeout(() => console.log('timeout!'));
