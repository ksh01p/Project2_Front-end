// index.js - Remove the sample friend data

// Function to get friends from localStorage
function getFriendsFromLocalStorage() {
    // localStorage에서 친구 데이터 가져오기
    const friendsData = localStorage.getItem("friends");

    // localStorage에 데이터가 없을 경우 빈 배열을 반환
    return JSON.parse(friendsData) || [];
}

// Function to save friends to localStorage
function saveFriendsToLocalStorage(friends) {
    // 친구 데이터를 문자열로 변환하여 localStorage에 저장
    localStorage.setItem("friends", JSON.stringify(friends));
}

// Function to populate the friend list
function populateFriendList() {
    const friendList = document.getElementById("friendList");

    // localStorage에서 친구 데이터 불러오기
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

// Call the populateFriendList function when the page loads
window.addEventListener("load", populateFriendList);

// 예제: 새로운 친구 데이터를 추가하고 localStorage에 저장
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
