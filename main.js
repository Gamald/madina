// استلام النموذج والتفاعل مع المستخدم
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault(); // منع إعادة تحميل الصفحة

    // جلب البيانات المدخلة
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // التحقق من البيانات
    if (name && email && message) {
        document.getElementById("formMessage").innerText = "تم إرسال رسالتك بنجاح! سنقوم بالتواصل معك قريبًا.";
        document.getElementById("contactForm").reset();
    } else {
        document.getElementById("formMessage").innerText = "يرجى ملء جميع الحقول.";
    }
});