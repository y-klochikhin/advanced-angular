const zone = (callback) => {
    const originSetTimeout = setTimeout;
    /* global setTimeout */
    setTimeout = (callback, timeout) => {
        console.log('before timeout');
        originSetTimeout(() => {
            callback();
            console.log('after timeout');
        }, timeout);
    }

    callback();

    setTimeout = originSetTimeout;
}

//----------------------

zone(() => setTimeout(() => console.log('timeout in zone!')));

setTimeout(() => console.log('timeout out zone!'));

