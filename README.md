# Bot AI Discord của Gemini

Bot Discord này sử dụng Generative AI của Google để tạo phản hồi dựa trên tin nhắn của người dùng.

## Cài đặt

### Điều kiện tiên quyết

- Node.js (v14.0.0 hoặc mới hơn)
- Mã thông báo Bot bất hòa
- Khóa API AI sáng tạo của Google
- ID kênh Discord nơi bot sẽ hoạt động

### Cài đặt

1. Sao chép kho lưu trữ này:

 ``` bash
 bản sao git https://github.com/erenofficial
 ```

2. Điều hướng đến thư mục dự án:

 ``` bash
 cd discord-generative-ai-bot
 ```

3. Cài đặt phụ thuộc:

 ``` bash
 npm install
 ```

4. Thiết lập cấu hình:

 Sao chép tệp `.env.example` sang tệp mới có tên `.env`:

 ``` bash
 cp .env.example .env
 ```

 Mở tệp `.env` và điền vào các biến sau:

 - `BOT_TOKEN`: Mã thông báo Bot Discord của bạn.
 - `API_KEY`: Khóa API AI sáng tạo của Google của bạn.
 - `CHANNEL_ID`: ID kênh Discord nơi bot sẽ hoạt động.

 Lưu các thay đổi.

5. Chạy bot:

 ``` bash
 npm start
 ```

 Bot bây giờ sẽ trực tuyến và hoạt động.

## Tín dụng

Bot Discord này được tạo bởi [ErenOfficial](https://github.com/erenofficial).

## Hướng dẫn

Để biết hướng dẫn chi tiết về cách thiết lập và tùy chỉnh bot này, hãy vào server discord của tôi để được hỗ trợ : [ANGEL HOUSE](https://discord.gg/W8ZGDDZP).

## Đóng góp

Vui lòng đóng góp cho dự án này bằng cách gửi các vấn đề hoặc yêu cầu kéo.

```