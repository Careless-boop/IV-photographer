const faqQuestions = document.querySelectorAll(".faq__question");

faqQuestions.forEach((question) => {
  question.addEventListener("click", () => {
    if(question.classList.contains("active")){
      question.classList.remove("active");
    }
    else{
      resetFaqs(faqQuestions);
      question.classList.add("active");
    }
  });
});
function resetFaqs(faqs) {
  faqs.forEach((faq) => {
      faq.classList.remove("active");
  });
}