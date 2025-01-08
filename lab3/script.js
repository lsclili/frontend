function fetchUserData() {
    fetch('https://randomuser.me/api/?results=6') // Fetch 6 random users
        .then(response => response.json())
        .then(data => displayUsers(data.results))
        .catch(error => console.error('Error fetching user data:', error));
}

function displayUsers(users) {
    const userContainer = document.getElementById('user-container');
    userContainer.innerHTML = ''; // Clear previous users

    users.forEach(user => {
        const userCard = document.createElement('div');
        userCard.className = 'user-card';

        userCard.innerHTML = `
                    <img src="${user.picture.large}" alt="User Picture">
                    <p><strong>Name:</strong> ${user.name.first} ${user.name.last}</p>
                    <p><strong>Cell:</strong> ${user.cell}</p>
                    <p><strong>City:</strong> ${user.location.city}</p>
                    <p><strong>Country:</strong> ${user.location.country}</p>
                    <p><strong>Postcode:</strong> ${user.location.postcode}</p>
                `;

        userContainer.appendChild(userCard);
    });
}
