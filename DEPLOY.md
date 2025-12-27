# Deploy lên GitHub Pages

Project này đã được cấu hình để deploy lên GitHub Pages.

## Các bước thực hiện:

### 1. Cập nhật file package.json
Mở file `package.json` và thay đổi dòng `homepage`:
```json
"homepage": "https://<USERNAME>.github.io/<REPO-NAME>"
```
Thay `<USERNAME>` bằng tên GitHub của bạn và `<REPO-NAME>` bằng tên repository.

Ví dụ: 
```json
"homepage": "https://nguyenvana.github.io/my-blog"
```

### 2. Cài đặt dependencies
```bash
npm install
```

### 3. Đẩy code lên GitHub
```bash
git add .
git commit -m "Configure for GitHub Pages deployment"
git push origin main
```

### 4. Cấu hình GitHub Repository

#### Option A: Sử dụng GitHub Actions (Tự động - Khuyến nghị)
1. Truy cập repository trên GitHub
2. Vào **Settings** > **Pages**
3. Trong phần **Source**, chọn **GitHub Actions**
4. Vào **Settings** > **Secrets and variables** > **Actions**
5. Tạo secret mới:
   - Name: `GEMINI_API_KEY`
   - Value: API key Gemini của bạn
6. Mỗi lần push code, GitHub Actions sẽ tự động build và deploy

#### Option B: Deploy thủ công
```bash
npm run deploy
```

### 5. Truy cập website
Sau khi deploy xong, website sẽ có tại:
```
https://<USERNAME>.github.io/<REPO-NAME>
```

## Lưu ý:
- File `.env` không được commit lên GitHub vì chứa API key
- GitHub Actions sẽ sử dụng secret `GEMINI_API_KEY` thay vì file `.env`
- Website có thể mất vài phút để hiển thị sau lần deploy đầu tiên
