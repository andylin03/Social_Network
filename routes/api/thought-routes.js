const router = require('express').Router();
const {
    getAllThoughts,
    getThoughtById,
    addThought,
    removeThought,
    addReaction,
    updateThought,
    removeReaction
} = require('../../controllers/thought-controller')

router
    .route('/')
    .get(getAllThoughts)
    .post(addThought)


router
    .route('/:thoughtId')
    .get(getThoughtById)
    .put(updateThought)
    .delete(removeThought)

router
    // /api/thoughts/:thoughtId/reactions
    .route('/:thoughtId/reactions')
    .post(addReaction)


router
// delete reaction
    .route('/:thoughtId/reactions/:reactionId')
    .delete(removeReaction)

module.exports = router;