function isTouching(a, b) {
	const aRect = a.getBoundingClientRect();
	const bRect = b.getBoundingClientRect();
	return !(
		aRect.top + aRect.height < bRect.top ||
		aRect.top > bRect.top + bRect.height ||
		aRect.left + aRect.width < bRect.left ||
		aRect.left > bRect.left + bRect.width
	);
}

const init = () => {
    //get the avatar
    //get the coin
    const avatar = document.querySelector('img:nth-child(1)');
    const coin = document.querySelector('img:nth-child(2)');


    moveCoin(coin, avatar);

    window.addEventListener('keyup', function(e){
        if(e.key === 'ArrowDown' || e.key === 'Down'){
            moveVertical(avatar, 50);
        } else if(e.key === 'ArrowUp' || e.key === 'Up'){
            moveVertical(avatar, -50);
        } else if(e.key === 'ArrowLeft' || e.key === 'Left'){
            moveHorizontal(avatar, -50);
        } else if(e.key === 'ArrowRight' || e.key === 'Right'){
            moveHorizontal(avatar, 50);
        }



        if(isTouching(avatar,coin)) moveCoin(coin);
    });
}

const moveVertical = (element, amount) => {
    const currTop = extractPos(element.style.top);
    element.style.top = `${currTop + amount}px`;
}

const moveHorizontal = (element, amount) => {
    const currLeft = extractPos(element.style.left);
    element.style.left = `${currLeft + amount}px`;
}

const extractPos = (position) => {
    if(!position) return 100;
    return parseInt(position.slice(0, -2))
}

const moveCoin = (coin) => {
    const x = Math.floor(Math.random() * window.innerWidth )
    const y = Math.floor(Math.random() * window.innerHeight )
    // const y = ?
    coin.style.top = `${y}px`;
    coin.style.left = `${x}px`;
    // coin.style. ?? = ??



}

init();