const tweetForm = document.querySelector('#tweetForm');
const tweetContainer = document.querySelector('#tweets');

tweetForm.addEventListener('submit', function(e){
    e.preventDefault();
    const userNameInput = tweetForm.elements.username;
    const tweetInput = tweetForm.elements.tweet;
    addTweet(userNameInput.value, tweetInput.value);
    userNameInput.value = '';
    tweetInput.value = '';
});

const addTweet = (username, tweet) => {
    const newTweet = document.createElement('li');
    const bTag = document.createElement('b');
    bTag.append(username);
    newTweet.append(bTag);
    newTweet.append(`- ${tweet}`);
    tweetContainer.appendChild(newTweet);
}

tweetContainer.addEventListener('click', function(e){
    console.dir(e.target);
    e.target.nodeName === 'LI' && e.target.remove();
})