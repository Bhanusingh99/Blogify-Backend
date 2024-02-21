import jwt from 'jsonwebtoken';

// Function to get user information from the JWT token
export const getUserInfo = (token) => {
    try {
        if (!token) {
            throw new Error('Token missing');
        }

        const jwt_secret = process.env.JWT_SECRET_KEY;

        const payload = jwt.verify(token, jwt_secret);
        return payload;
    } catch (error) {
        console.error('JWT Verification Error:', error.message);
        throw new Error('Unauthorized');
    }
};
