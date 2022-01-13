const { Router } = require('express');
const ChatComponent = require('.');
// const io = require('../../server/index');

/**
 * Express router to mount user related functions on.
 * @type {Express.Router}
 * @const
 */
const router = Router();

/**
 * Route to sing up.
 * @name /v1/chat/joinToChat
 * @function
 * @inner
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware.
 */
router.get('/joinToChat', ChatComponent.joinToChat);

// io.on('connection', () => {
//     console.log('a user connected');
// });

module.exports = router;
