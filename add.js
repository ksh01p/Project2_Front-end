function addFriend() {
    const addForm = document.getElementById("addForm");
    const addButton = document.getElementById("addButton");

    addButton.addEventListener("click", (e) => {
        e.preventDefault();

        // Get the form values
        const name = addForm.querySelector("#name").value;
        const age = addForm.querySelector("#age").value;
        const contact = addForm.querySelector("#contact").value;
        const birthday = addForm.querySelector("#birthday").value;
        const relationship = addForm.querySelector("#relationship").value;
        const address = addForm.querySelector("#address").value;

        // Create a new friend object
        const newFriend = {
            name,
            age,
            contact,
            birthday,
            relationship,
            address
        };

        // Get the existing friends from localStorage
        const friends = getFriendsFromLocalStorage();

        // Add the new friend to the existing friends array
        friends.push(newFriend);

        // Save the updated friends list to localStorage
        saveFriendsToLocalStorage(friends);

        // Alert that the friend is added (you can use a better UI notification)
        alert(`${newFriend.name} has been added to your friend list!`);

        // Redirect to the index page (or any other desired action)
        window.location.href = "index.html";
    });

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
}

// Call the addFriend function when the page loads
window.addEventListener("load", addFriend);
