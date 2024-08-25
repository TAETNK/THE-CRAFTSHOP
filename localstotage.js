// ฟังก์ชันสำหรับการเลือกและตั้งค่ารูปโปรไฟล์
function selectImage(imageUrl) {
    var profileImageElement = document.getElementById('profile-image');
    profileImageElement.style.backgroundImage = 'url(' + imageUrl + ')';

    // โหลดข้อมูลผู้ใช้จาก localStorage
    var currentUser = JSON.parse(localStorage.getItem('currentUser')) || {};

    // บันทึกรูปภาพใหม่ไปที่ localStorage
    currentUser.profileImage = imageUrl;
    localStorage.setItem('currentUser', JSON.stringify(currentUser)); // บันทึกข้อมูลลง localStorage

    // ปิดหน้าต่างเลือกภาพ
    closeImagePicker();
}
