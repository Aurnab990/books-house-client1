import React from 'react';

const FAQ = () => {
    
const faqs = [
    {
        question: "What is Book Haven?",
        answer: "Book Haven is a bookstore that offers a wide range of new and pre-owned books. We also buy used books from customers.",
    },
    {
        question: "How can I sell my books to Book Haven?",
        answer: "You can bring your books to our store during our business hours. Our staff will evaluate them and offer you a price.",
    },
    {
        question: "Do you have a return policy?",
        answer: "Yes, we have a 30-day return policy for all new books. Pre-owned books can be returned within 15 days of purchase.",
    },
    {
        question: "Can I order books online?",
        answer: "Currently, we do not offer online ordering. You can visit our store to browse and purchase books.",
    },
    {
        question: "Do you host events?",
        answer: "Yes, we regularly host author events, book signings, and reading clubs. Check our events page for upcoming events.",
    },
];
    return (
        <div className="bg-gray-100 min-h-screen flex flex-col items-center p-6">
            <div className="max-w-6xl w-full bg-white rounded-2xl mt-8 shadow-lg p-8">
                <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Frequently Asked Questions</h1>
                <p className="text-center text-gray-600 mb-8">
                    Find answers to some of the most common questions our customers ask. If you have any other queries, feel free to reach out to us.
                </p>
                <div className="flex flex-col md:flex-row gap-8">
                    <div className="w-full md:w-1/2">
                        <img src="https://media.istockphoto.com/id/506502824/photo/women-working-at-bookstore.jpg?s=612x612&w=0&k=20&c=tX1qeeclKgqQAqn9MYEHCQTEPJAfX7ww--9cX1IksDQ=" alt="FAQ" className="rounded-lg shadow-lg w-full h-full object-cover"/>
                    </div>
                    <div className="w-full md:w-1/2">
                        <div className="space-y-4">
                            {faqs.map((faq, index) => (
                                <div key={index} className="p-4 bg-blue-100 rounded-lg shadow-md">
                                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{faq.question}</h3>
                                    <p className="text-gray-600">{faq.answer}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default FAQ;
