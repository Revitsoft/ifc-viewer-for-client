import { IfcViewerAPI } from "https://cdn.jsdelivr.net/npm/web-ifc-viewer@1.0.214/dist/IFCjs-bundle.js";

// Lấy thẻ div từ HTML
const container = document.getElementById("viewer-container");

// Khởi tạo trình xem
const viewer = new IfcViewerAPI({
    container,
    backgroundColor: new Color(0xffffff), // Đặt màu nền là màu trắng
});

// Tạo các lưới trục
viewer.grid.setGrid();
viewer.axes.setAxes();

// Hàm tải mô hình IFC
async function loadIfc(url) {
    // Tải mô hình và thêm vào cảnh
    const model = await viewer.IFC.loadIfcUrl(url);

    // Thêm đổ bóng cho mô hình
    viewer.shadowDropper.renderShadow(model.modelID);
}

// Gọi hàm để tải mô hình của bạn
// Hãy chắc chắn tên file 'V1.ifc' là chính xác
loadIfc('./V1.ifc');
