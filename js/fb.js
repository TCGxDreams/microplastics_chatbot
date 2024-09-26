document.getElementById('feedback-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Đang gửi');
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const feedback = document.getElementById('feedback').value;

    // Tạo object chứa dữ liệu từ form
    const formData = {
        Name: name,
        Email: email,
        Feedback: feedback
    };

    // Gửi dữ liệu qua API
    fetch('https://66f0d21df2a8bce81be6b56f.mockapi.io/Feedback_1', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        alert('Cảm ơn bạn đã gửi phản hồi!');
        
        // Reset form sau khi submit thành công
        document.getElementById('feedback-form').reset();
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('Đã xảy ra lỗi khi gửi phản hồi.');
    });
});
