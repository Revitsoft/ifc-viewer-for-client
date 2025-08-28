// Lấy thẻ div container từ HTML
const container = document.getElementById('viewer-container');

// Khởi tạo trình xem 3D
const viewer = new WEBIFC.IfcViewer(container);

// Thiết lập đường dẫn đến các file wasm của thư viện
// Quan trọng: Đường dẫn này phải đúng
viewer.IFC.setWasmPath("https://unpkg.com/web-ifc@0.0.54/IFC/");

// Đường dẫn đến file IFC của bạn đã được host trên GitHub
const ifcModelUrl = './V1.ifc'; // Thay 'your-model.ifc' bằng tên file của bạn

// Hàm để tải và hiển thị mô hình
async function loadIfcModel() {
    try {
        await viewer.IFC.loadIfcUrl(ifcModelUrl);
    } catch (error) {
        console.error('Không thể tải mô hình IFC:', error);
    }
}

// Gọi hàm để tải mô hình
loadIfcModel();