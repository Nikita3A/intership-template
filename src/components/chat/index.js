const path = require('path');
const ValidationError = require('../../error/ValidationError');
// const io = require('../../server/index');

// const userModel = require('../User/model');

/**
 * @function
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 * @returns {Promise < void >}
 */
async function joinToChat(req, res, next) {
    try {
        // return res.sendFile(path.join(__dirname, '../../views/pages/chat.ejs'));
        const name = req.query.name;
        console.log(name);
        return res.render(path.join(__dirname, '../../views/pages/chat.ejs'), { nameInChat: name });

        // return res.status(200).json({
        //     message: 'joined the chat',
        // });
    } catch (error) {
        if (error instanceof ValidationError) {
            return res.status(422).json({
                message: error.name,
                details: error.message,
            });
        }

        res.status(500).json({
            message: error.name,
            details: error.message,
        });

        return next(error);
    }
}

module.exports = {
    joinToChat,
};
