db.createUser(
    {
        user: "nicwalle",
        pwd: "wallenic",
        roles: [
            {
                role: "readWrite",
                db: "users"
            }
        ]
    }
);

db.users.insert([
    {
        "username": "admin",
        "password": "$2a$10$XRPqjasJJBXcqiZCMaFSmOjZ7JQa/vUft0E.1/vaNWPy7wvT40s4O",
        "role": "ADMIN"
    },
    {
        "username": "nicwalle",
        "password": "$2a$10$oWVA4sokjJ3LSiDpsjJXP.DrKLgb977jYDljIj1KDPUCEwtEezOJ6",
        "role": "USER"
    }
]);
