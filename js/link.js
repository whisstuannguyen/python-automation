// Lấy danh sách tất cả các liên kết có lớp "openLink"
const openLinks = document.querySelectorAll('.openLink');

// Thêm sự kiện click cho tất cả các liên kết
openLinks.forEach(function(link) {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Ngăn chặn hành vi mặc định của liên kết

        // Mở cửa sổ mới
        window.open(link.href, 'Popup', 'width=1000,height=700')
    });
});