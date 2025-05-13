const AuthService = {
    register: (userName, passWord) => {
        const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
        const existingUserName = storedUsers.find(user => user.userName === userName);
        if (existingUserName) {
            throw new Error('کاربر با این نام کاربری موجو است');

        }
        const newUser = { userName, passWord };
        storedUsers.push(newUser);
        localStorage.setItem('users', JSON.stringify(storedUsers));
        return newUser;

    },
    login: (userName, passWord) => {
        const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
        const existingUser = storedUsers.find(user => user.userName === userName && user.passWord === passWord);
        if (existingUser) {
            localStorage.setItem('user', JSON.stringify({ userName, id: Date.now() }));
            return existingUser;

        }
        else {
            throw new Error('نام کاربری یا رمز ورود نادرست است');

        }


    },
    logout: () => {
        localStorage.removeItem('user');

    },

    getUser: () => {
        const userInfo = localStorage.getItem('user');
        return userInfo ? JSON.parse(userInfo) : null;

    }
}

export default AuthService;