const FAQ = () => {
  const faqs = [
    {
      question: "What is this platform about?",
      answer: "This is an online tutor booking platform that connects students with tutors across various subjects and languages."
    },
    {
      question: "How can I find a tutor?",
      answer: "You can browse tutors by category on the Find Tutors page and book a session based on your preference."
    },
    {
      question: "Is registration required?",
      answer: "Yes, you need to sign up to book a tutor, add tutorials, or review a tutor."
    },
    {
      question: "How do I book a tutor?",
      answer: "Click on a tutor's profile, check their details, and use the 'Book' button to schedule a session."
    },
    {
      question: "Is there a search option?",
      answer: "Yes, you can search for tutors based on language or subject expertise on the Find Tutors page."
    },
    {
      question: "What authentication methods are available?",
      answer: "You can log in using email/password or Google authentication."
    },
    {
      question: "How do I add a tutorial?",
      answer: "Navigate to 'Add Tutorials' and fill out the form to submit your tutorial."
    },
    {
      question: "Can I update my tutorial?",
      answer: "Yes, go to 'My Tutorials' and use the update button to edit your tutorial details."
    },
    {
      question: "What happens when I review a tutor?",
      answer: "When you submit a review, the tutor's overall rating updates based on user feedback."
    },
    {
      question: "Is dark mode available?",
      answer: "Yes, you can toggle between light and dark mode using the theme switcher in the navbar."
    },
    {
      question: "How do I secure my data?",
      answer: "We use Firebase authentication and JWT for secure access, ensuring your data remains safe."
    },
    {
      question: "What technologies power this website?",
      answer: "We use React, Tailwind CSS, Firebase, and MongoDB for a seamless experience."
    },
    {
      question: "Can I cancel a booking?",
      answer: "Currently, cancellations are not available. You can contact the tutor for rescheduling."
    },
    {
      question: "How do I switch between dark and light mode?",
      answer: "Click on the theme toggle button in the navbar to switch between dark and light mode."
    },
    {
      question: "What happens if I forget my password?",
      answer: "You can reset your password from the login page by clicking on 'Forgot Password?'."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border p-4 rounded-lg bg-white dark:bg-gray-800">
              <h3 className="text-lg font-semibold">{faq.question}</h3>
              <p className="text-sm mt-2">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;