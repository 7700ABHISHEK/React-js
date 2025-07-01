import { useRef, useState } from "react";

const FormCard = () => {
    const [input, setInput] = useState({
        name: '',
        review: '',
        rating: '',
        date: ''
    });

    const [errors, setErrors] = useState({});
    const [reviews, setReviews] = useState([]);
    const [isEditing, setIsEditing] = useState(false);
    const [editingId, setEditingId] = useState(null);

    const formRef = useRef(null);

    const handleChange = (e) => {
        setInput({ ...input, [e.target.id]: e.target.value }); // storing all the values in this using dynamic keys
        setErrors({ ...errors, [e.target.id]: "" }); // if anyone write on input error will disappear
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = {}; // storing all the errors in this object

        if (!input.name.trim()) validationErrors.name = "Please enter your name";
        if (!input.review.trim()) validationErrors.review = "Please write your review";
        if (!input.rating.trim() || input.rating === "0") validationErrors.rating = "Please select a rating";
        if (!input.date.trim()) validationErrors.date = "Please select a date";

        if (Object.keys(validationErrors).length > 0) { // if their is some error then 
            setErrors(validationErrors);  // showing it by using setErrors
            return; // returing so that it won't run if thier is any error
        }

        // intially isEditing is false...
        if (isEditing) { // When someone clicked on edit icon isEditing will become true then it will check
            const updatedReview = reviews.map((review) =>
                    review.id === editingId
                    ? { ...review, ...input, date: new Date(input.date).toLocaleDateString() }
                    : review
            );
            setReviews(updatedReview);

            setIsEditing(false); // resetting it to default
            setEditingId(null); // resetting it to default
        } else {
            const newReview = {
                id: Date.now(),
                name: input.name,
                review: input.review,
                rating: input.rating,
                date: new Date().toLocaleDateString(),
            };
            setReviews([...reviews, newReview]); // setting all the old reviews and also new one
        }

        setInput({ name: '', review: '', rating: '', date: '' }); // again making it empty
    };

    const handleEdit = (reviewID) => {
        const reviewEdit = reviews.find((review) => {
            return review.id === reviewID;
        })

        if (reviewEdit) { // if their is something in reviewEdit then setting input
            setInput({
                name: reviewEdit.name,
                review: reviewEdit.review,
                rating: reviewEdit.rating,
                date: reviewEdit.date,
            })
            setIsEditing(true) // making it true so that handleSubmit can run
            setEditingId(reviewID); // passing ID in editingID
        }
    }

    // filtering all the reviews with id of which we clicked with whole reviews.id
    const handleDelete = (reviewID) => {
        const updatedReview = reviews.filter((review) => {
            return review.id !== reviewID; // returning it to reviews if it is not equal
        })
        setReviews(updatedReview); // setting updatedReviews in setReviews
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-8">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-3">
                        Customer Reviews
                    </h1>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        Share your experience with us and help others make better decisions
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Review Form */}
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 transition-all hover:shadow-xl">
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center shadow-md">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                    </svg>
                                </div>
                                <div className="ml-4">
                                    <h2 className="text-2xl font-bold text-gray-800">Share Your Thoughts</h2>
                                    <p className="text-gray-500 text-sm">We value your feedback</p>
                                </div>
                            </div>

                            <form className="space-y-5">
                                {/* Name */}
                                <div className="space-y-1">
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        value={input.name}
                                        className={`w-full px-4 py-3 rounded-lg border ${errors.name ? 'border-red-300 focus:border-red-500' : 'border-gray-200 focus:border-blue-500'} focus:ring-2 focus:ring-blue-200 transition-colors`}
                                        placeholder="John Doe"
                                        onChange={handleChange}
                                    />
                                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                                </div>

                                {/* Review */}
                                <div className="space-y-1">
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Your Review</label>
                                    <textarea
                                        rows="4"
                                        id="review"
                                        value={input.review}
                                        className={`w-full px-4 py-3 rounded-lg border ${errors.review ? 'border-red-300 focus:border-red-500' : 'border-gray-200 focus:border-blue-500'} focus:ring-2 focus:ring-blue-200 transition-colors resize-none`}
                                        placeholder="Tell us about your experience..."
                                        onChange={handleChange}
                                    />
                                    {errors.review && <p className="text-red-500 text-sm mt-1">{errors.review}</p>}
                                </div>

                                {/* Rating */}
                                <div className="space-y-1">
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Rating</label>
                                    <select
                                        id="rating"
                                        value={input.rating}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-3 rounded-lg border ${errors.rating ? 'border-red-300 focus:border-red-500' : 'border-gray-200 focus:border-blue-500'} focus:ring-2 focus:ring-blue-200 bg-white`}
                                    >
                                        <option value="0">Select your rating</option>
                                        <option value="1">⭐ (Poor)</option>
                                        <option value="2">⭐⭐ (Fair)</option>
                                        <option value="3">⭐⭐⭐ (Good)</option>
                                        <option value="4">⭐⭐⭐⭐ (Very Good)</option>
                                        <option value="5">⭐⭐⭐⭐⭐ (Excellent)</option>
                                    </select>
                                    {errors.rating && <p className="text-red-500 text-sm mt-1">{errors.rating}</p>}
                                </div>

                                {/* Date */}
                                <div className="space-y-1">
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
                                    <input
                                        type="date"
                                        id="date"
                                        value={input.date}
                                        className={`w-full px-4 py-3 rounded-lg border ${errors.date ? 'border-red-300 focus:border-red-500' : 'border-gray-200 focus:border-blue-500'} focus:ring-2 focus:ring-blue-200`}
                                        onChange={handleChange}
                                    />
                                    {errors.date && <p className="text-red-500 text-sm mt-1">{errors.date}</p>}
                                </div>

                                {/* Submit */}
                                <button
                                    type="submit"
                                    onClick={handleSubmit}
                                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg active:scale-95 flex items-center justify-center"
                                >

                                    {/* if isEditing is true then showing update button else submit button */}

                                    {isEditing ? (
                                        <>
                                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                            </svg>
                                            Update Review
                                        </>
                                    ) : (
                                        <>
                                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                            </svg>
                                            Submit Review
                                        </>
                                    )}
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Review List */}
                    <div className="lg:col-span-2">

                        {/* if thier is no review then showing no review else showing reviews */}

                        {reviews.length === 0 ? (
                            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 text-center">
                                <div className="max-w-md mx-auto">
                                    <svg className="w-24 h-24 mx-auto text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                                    </svg>
                                    <h3 className="text-xl font-semibold text-gray-700 mt-4">No Reviews Yet</h3>
                                    <p className="text-gray-500 mt-2">Be the first to share your experience with us!</p>
                                </div>
                            </div>
                        ) : (
                            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                                <div className="flex items-center justify-between mb-6">
                                    <h3 className="text-2xl font-bold text-gray-800">Customer Feedback</h3>
                                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">
                                        {reviews.length} {reviews.length === 1 ? 'Review' : 'Reviews'}
                                    </span>
                                </div>
                                <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
                                    {reviews.map((review) => (
                                        <div
                                            key={review.id}
                                            className="bg-gray-50 rounded-lg p-5 border border-gray-100 hover:border-blue-100 transition-colors group"
                                        >
                                            <div className="flex items-start justify-between mb-3">
                                                <div className="flex items-center space-x-3">
                                                    <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full flex items-center justify-center text-white font-bold shadow-sm">
                                                        {review.name.charAt(0).toUpperCase()}
                                                    </div>
                                                    <div>
                                                        <h4 className="font-semibold text-gray-800">{review.name}</h4>
                                                        <p className="text-xs text-gray-500">{review.date}</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-center space-x-1 bg-white px-2 py-1 rounded-full shadow-sm">
                                                    {[1, 2, 3, 4, 5].map((star) => (
                                                        <svg
                                                            key={star}
                                                            className={`w-4 h-4 ${star <= parseInt(review.rating) ? "text-yellow-500" : "text-gray-300"}`}
                                                            fill="currentColor"
                                                            viewBox="0 0 20 20"
                                                        >
                                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.922-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.783.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                        </svg>
                                                    ))}
                                                    <span className="text-xs font-medium text-gray-700 ml-1">{review.rating}.0</span>
                                                </div>
                                            </div>
                                            <p className="text-gray-700 mb-4 leading-relaxed">{review.review}</p>
                                            <div className="flex justify-end space-x-3 opacity-0 group-hover:opacity-100 transition-opacity">
                                                <button
                                                    onClick={() => handleEdit(review.id)}
                                                    className="text-blue-600 hover:text-blue-800 p-1 rounded-full hover:bg-blue-50 transition-colors"
                                                    title="Edit"
                                                >
                                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                                    </svg>
                                                </button>
                                                <button
                                                    onClick={() => handleDelete(review.id)}
                                                    className="text-red-600 hover:text-red-800 p-1 rounded-full hover:bg-red-50 transition-colors"
                                                    title="Delete"
                                                >
                                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FormCard;