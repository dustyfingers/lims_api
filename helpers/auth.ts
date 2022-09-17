import bcryptjs from 'bcryptjs';

export default {
    saltAndHashPw: (pw: string) => {
        const salt = bcryptjs.genSaltSync(10);
        return bcryptjs.hashSync(pw, salt);
    },
    checkPw: (givenPw: string, storedHash: string) =>
        bcryptjs.compareSync(givenPw, storedHash),
};
