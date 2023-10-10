function addFriend() {
    const addForm = document.getElementById("addForm");
    const addButton = document.getElementById("addButton");

    addButton.addEventListener("click", (e) => {
        e.preventDefault();

        const name = addForm.querySelector("#name").value;
        const age = addForm.querySelector("#age").value;
        const contact = addForm.querySelector("#contact").value;
        const birthday = addForm.querySelector("#birthday").value;
        const relationship = addForm.querySelector("#relationship").value;
        const address = addForm.querySelector("#address").value;

        const newFriend = {
            name,
            age,
            contact,
            birthday,
            relationship,
            address
        };

        const friends = getFriendsFromLocalStorage();

        friends.push(newFriend);

        saveFriendsToLocalStorage(friends);

        alert(`${newFriend.name} has been added to your friend list!`);

        window.location.href = "index.html";
    });

    function getFriendsFromLocalStorage() {
        const friendsData = localStorage.getItem("friends");

        
        return JSON.parse(friendsData) || [];
    }


    function saveFriendsToLocalStorage(friends) {

        localStorage.setItem("friends", JSON.stringify(friends));
    }
}


window.addEventListener("load", addFriend);
