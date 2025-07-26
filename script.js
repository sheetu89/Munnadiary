// Show submitted reviews below the review form
document.addEventListener('DOMContentLoaded', function() {
  const reviewForm = document.getElementById('reviewForm');
  const userReviews = document.getElementById('userReviews');
  if (reviewForm && userReviews) {
    reviewForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const name = reviewForm.elements['name'].value.trim();
      const rating = reviewForm.elements['rating'].value;
      const comment = reviewForm.elements['comment'].value.trim();
      if (name && rating && comment) {
        // Create review element
        const reviewDiv = document.createElement('div');
        reviewDiv.className = 'review';
        let stars = '⭐'.repeat(Number(rating));
        reviewDiv.innerHTML = `<strong>${name}</strong> <span>${stars}</span><p>${comment}</p>`;
        userReviews.prepend(reviewDiv);
        reviewForm.reset();
        document.getElementById('reviewMessage').textContent = 'Thank you for your review!';
        setTimeout(() => { document.getElementById('reviewMessage').textContent = ''; }, 3000);
      }
    });
  }
});
// Contact form handler
document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      // Optionally, you can send the data to an email service here
      form.reset();
      // Show a success message
      let msg = document.createElement('div');
      msg.textContent = 'Thank you for contacting us! We will get back to you soon.';
      msg.style.color = '#1e5631';
      msg.style.fontWeight = 'bold';
      msg.style.marginTop = '12px';
      form.parentNode.insertBefore(msg, form.nextSibling);
      setTimeout(() => { msg.remove(); }, 5000);
    });
  }
});
