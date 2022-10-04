import IRouteProps from '../types';

export default {
    create: async ({ req, res, next, prisma }: IRouteProps) => {
        try {
            // required fields:
            const { email, password, orgName } = req.body;

            // TODO: create a facility
        } catch (err) {
            console.log(err);
            res.status(400).json({
                error: err,
            });
        }
    },
};
