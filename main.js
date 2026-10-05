// ============================================================================
// HỆ THỐNG QUẢN TRỊ PHIẾU MƯỢN SÁCH THƯ VIỆN
// ============================================================================

// 1. Khởi tạo mảng borrowRecords gồm 3 phiếu mượn ban đầu
const borrowRecords = [
  {
    recordId: "PM01",
    studentId: "SV101",
    bookTitle: "Cấu trúc dữ liệu",
    borrowDays: 12,
    isReturned: false,
  },
  {
    recordId: "PM02",
    studentId: "SV102",
    bookTitle: "Lập trình C++",
    borrowDays: 16,
    isReturned: false,
  },
  {
    recordId: "PM03",
    studentId: "SV103",
    bookTitle: "Hệ quản trị CSDL MySQL",
    borrowDays: 7,
    isReturned: true,
  },
];

console.log("--- 1. DANH SÁCH PHIẾU MƯỢN BAN ĐẦU ---");
console.table(borrowRecords);

// 2. Thêm mới (Create): Thêm phiếu PM04
borrowRecords.push({
  recordId: "PM04",
  studentId: "SV104",
  bookTitle: "Clean Code",
  borrowDays: 18,
  isReturned: false,
});

console.log("\n--- 2. DANH SÁCH SAU KHI THÊM PHIẾU PM04 ---");
console.table(borrowRecords);

// 3. Phạt quá hạn (Read): Duyệt mảng và tính tiền phạt
console.log("\n--- 3. XỬ LÝ PHẠT QUÁ HẠN (TRÊN 14 NGÀY) ---");
for (let i = 0; i < borrowRecords.length; i++) {
  // Gán mặc định tiền phạt = 0 cho tất cả các phiếu để bảng dữ liệu đồng nhất
  borrowRecords[i].fineAmount = 0;

  // Kiểm tra nếu mượn quá 14 ngày và chưa trả sách
  if (
    borrowRecords[i].borrowDays > 14 &&
    borrowRecords[i].isReturned === false
  ) {
    const overdueDays = borrowRecords[i].borrowDays - 14;
    const fine = overdueDays * 5000;
    borrowRecords[i].fineAmount = fine; // Lưu tiền phạt vào đối tượng

    console.log(
      `[CẢNH BÁO] Phiếu ${borrowRecords[i].recordId} (SV: ${borrowRecords[i].studentId}) quá hạn ${overdueDays} ngày. Phạt: ${fine.toLocaleString()} VNĐ`,
    );
  }
}

// 4. Cập nhật (Update): Phiếu PM01 trả sách
console.log("\n--- 4. CẬP NHẬT TRẠNG THÁI TRẢ SÁCH CHO PM01 ---");
for (let i = 0; i < borrowRecords.length; i++) {
  if (borrowRecords[i].recordId === "PM01") {
    borrowRecords[i].isReturned = true;
    console.log(
      `Đã cập nhật thành công: Phiếu ${borrowRecords[i].recordId} đã được trả lại thư viện (isReturned = true).`,
    );
    break; // Tìm thấy và cập nhật xong thì thoát vòng lặp
  }
}

// 5. Xóa (Delete): Xóa phiếu PM03 khỏi danh sách
console.log("\n--- 5. XÓA PHIẾU MƯỢN PM03 ---");
for (let i = 0; i < borrowRecords.length; i++) {
  if (borrowRecords[i].recordId === "PM03") {
    borrowRecords.splice(i, 1); // Xóa 1 phần tử tại vị trí thứ i
    console.log(
      `Đã xóa thành công phiếu PM03 ra khỏi hệ thống do sinh viên đã hoàn thành nghĩa vụ.`,
    );
    break;
  }
}

// 6. In bảng tổng kết cuối cùng
console.log(
  "\n================ BẢNG TỔNG KẾT PHIẾU MƯỢN CUỐI CÙNG ================",
);
console.table(borrowRecords);
