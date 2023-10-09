
function getFriendsFromLocalStorage() {
    const friendsData = localStorage.getItem("friends");

    return JSON.parse(friendsData) || [];
}

function saveFriendsToLocalStorage(friends) {
    localStorage.setItem("friends", JSON.stringify(friends));
}

function populateFriendList() {
    const friendList = document.getElementById("friendList");

    const friends = getFriendsFromLocalStorage();

    friends.forEach((friend, index) => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
            <div class="friend-info">
                <h3>${friend.name}</h3>
                <p>Age: ${friend.age}</p>
                <p>Contact: ${friend.contact}</p>
                <p>Birthday: ${friend.birthday}</p>
                <p>Relationship: ${friend.relationship}</p>
                <p>Address: ${friend.address}</p>
            </div>
            <a href="view.html?id=${index + 1}">View Details</a>
        `;
        friendList.appendChild(listItem);
    });
}


window.addEventListener("load", populateFriendList);

const newFriend = {
    name: "새로운 친구",
    age: 30,
    contact: "newfriend@example.com",
    birthday: "2000-01-01",
    relationship: "친구",
    address: "서울시"
};

const friends = getFriendsFromLocalStorage();
friends.push(newFriend);
saveFriendsToLocalStorage(friends);
