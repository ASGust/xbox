const faqs = document.querySelectorAll('.faq-item-container')

faqs.forEach(function(faq){
    faq.addEventListener('click', function(){
        faq.classList.toggle('active')
    })
})