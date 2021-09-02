const service = require("./reviews.service.js");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

async function reviewIdExists(req, res, next) {
    const { reviewId } = req.params;
    const foundReview = await service.read(reviewId);
    if (foundReview) {
        res.locals.review = foundReview;
        return next();
    }
    return next({ status: 404, message: "Review cannot be found." });
}

async function destroy(req, res) {
    await service.destroy(res.locals.review. review_id);
    res.sendStatus(204);
}

async function update(req, res) {
    const updatedReview = { ...res.locals.review, ...req.body.data };
    await service.update(updatedReview);
    const returnData = await service.getReviewsWithCritic(
        res.locals.review. review_id
    );
    res.json({ data: returnData });
}

module.exports = {
    delete: [asyncErrorBoundary(reviewIdExists), asyncErrorBoundary(destroy)],
    update: [asyncErrorBoundary(reviewIdExists), asyncErrorBoundary(update)],
};