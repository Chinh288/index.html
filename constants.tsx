
import { Tag, SkillLevel, Activity, Project, Certification } from './types';

export const PROFILE_INFO = {
  fullName: "Đinh Duy Chính",
  school: "Hutech University",
  field: "An toàn thông tin / An ninh mạng",
  focus: "SOC / Blue Team / Network Security",
  bio: "Bản ghi quá trình học tập thực tế và bằng chứng kỹ thuật. Chuyên sâu về phân tích log và giám sát an ninh mạng.",
  tools: ["Wireshark", "Suricata", "Wazuh", "Linux", "Nmap", "Burp Suite"]
};

export const MOCK_ACTIVITIES: Activity[] = [
  {
    id: '2025-12-20-lap-trinh-mang',
    date: '2025-12-20',
    title: 'Lập Trình Mạng',
    tags: [Tag.READING],
    level: SkillLevel.INTERMEDIATE,
    content: 
    `## PHẦN 1: TỔNG QUAN VÀ KIẾN THỨC NỀN TẢNG

### 1.1 Tổng quan về Lập trình mạng và Môi trường phát triển
* Giới thiệu môn học: Khái niệm, vai trò, ứng dụng thực tế (Web server, Chat, Game, IoT).
* Chuẩn bị môi trường: Java (OOP, Exception), JDK, IntelliJ/Eclipse, Netcat, Telnet.

### 1.2 Kiến thức nền tảng về Mạng máy tính cho lập trình viên
* Mô hình tham chiếu: OSI 7 tầng, TCP/IP 4 tầng. Quá trình Encapsulation/Decapsulation.
* Giao thức cốt lõi: IP, So sánh TCP vs UDP. Khái niệm Port và Socket.
* Kiến trúc: Client-Server, Peer-to-Peer.

## PHẦN 2: QUẢN LÝ DỮ LIỆU VÀ KẾT NỐI

### 2.1 Quản lý luồng vào/ra dữ liệu (Java I/O)
* Luồng Byte (Byte Streams): InputStream, OutputStream.
* Luồng Ký tự (Character Streams): Reader, Writer, Encoding/Decoding.
* Nâng cao: Buffered I/O, Data Streams, Object Serialization.

### 2.2 Quản lý địa chỉ và kết nối mạng trong Java
* Lớp InetAddress: Quản lý IP, DNS Lookup.
* NetworkInterface: Quản lý card mạng, địa chỉ MAC.
* Endpoint: InetSocketAddress.

## PHẦN 3: LẬP TRÌNH SOCKET CƠ BẢN

### 3.1 Lập trình Socket với giao thức TCP (Giao thức tin cậy)
* Cơ chế: Three-way handshake, độ tin cậy.
* Server: ServerSocket, accept(), I/O streams.
* Client: Socket, kết nối IP/Port.
* Vấn đề Blocking: Nghẽn tại accept() và read().

### 3.2 Lập trình Socket với giao thức UDP (Giao thức tốc độ)
* Đặc điểm: Không kết nối, tốc độ cao (Streaming, DNS).
* Lớp cốt lõi: DatagramSocket, DatagramPacket.
* Quy trình: send() và receive().

## PHẦN 4: KỸ THUẬT NÂNG CAO VÀ ỨNG DỤNG PHÂN TÁN

### 4.1 Lập trình đa luồng và Xử lý đồng thời
* Giới hạn server đơn luồng.
* Multithreaded Server: Chiến lược Thread-per-client.
* Quản lý hiệu quả: Thread Pools (ExecutorService).

### 4.2 Các chủ đề nâng cao: Multicast UDP và Java RMI
* Multicast UDP: Unicast/Broadcast/Multicast, MulticastSocket, joinGroup.
* Java RMI: Gọi phương thức từ xa, RMI Registry, Stub/Skeleton.`
  },
  {
    id: '2024-05-15-pcap-analysis',
    date: '2024-05-15',
    title: 'Phân tích PCAP lưu lượng độc hại Cobalt Strike',
    tags: [Tag.LAB],
    level: SkillLevel.INTERMEDIATE,
    images: ['https://picsum.photos/seed/cyber1/1200/800'],
    content: `### What I did
Phân tích beaconing traffic của Cobalt Strike. Trích xuất metadata từ HTTP cookie header và xác định chu kỳ heartbeat.

### What I learned
Nhận diện cấu trúc default URI và pattern của các request tự động từ C2 framework.

### Next step
Cấu hình Suricata rule phát hiện beaconing dựa trên content size.`
  }
];

export const MOCK_PROJECTS: Project[] = [
  {
    id: 'wazuh-automation',
    title: 'Tự động hóa phát hiện sự cố với Wazuh',
    description: 'Xây dựng pipeline từ thu thập log đến phản ứng tự động.',
    technologies: ['Wazuh', 'Shuffle', 'Docker'],
    content: `Triển khai hệ thống SIEM/SOAR tập trung. Sử dụng Shuffle để tự động hoá việc chặn IP trên firewall sau khi Wazuh phát hiện tấn công brute-force.`
  }
];

export const MOCK_CERTIFICATIONS: Certification[] = [
  {
    id: 'hutech-is-2025',
    title: 'Giải Khuyến Khích - Sinh viên với An toàn thông tin HUTECH 2025',
    images: ['/images/SVATTT.jpg'],
    issuer: 'Trường Đại học Công nghệ TP.HCM (HUTECH)',
    date: '20/06/2025',
    content: 'Đạt giải Khuyến khích trong cuộc thi chuyên môn về An toàn thông tin cấp trường dành cho nhóm sinh viên.'
  },
  {
    id: 'maze-of-shadows-ctf',
    title: 'Giải Khuyến Khích - Cuộc thi CTF "The Maze of Shadows"',
    images: ['/images/ctf-maze.jpg'],
    issuer: 'Câu lạc bộ An toàn thông tin HUTECH',
    date: '06/06/2025',
    content: 'Chứng nhận thành tích giải Khuyến khích trong giải đấu Capture The Flag nội bộ.'
  },
  {
    id: 'cisco-intro-cyber',
    title: 'Introduction to Cybersecurity',
    images: ['/images/Seccyber.jpg'],
    issuer: 'Cisco Networking Academy',
    date: '29/11/2024',
    content: 'Chứng nhận hoàn thành khóa học nền tảng về an ninh mạng, bảo vệ dữ liệu và nguyên tắc bảo mật.'
  },
  {
    id: 'cisco-js-essentials',
    title: 'JavaScript Essentials 1',
    images: ['/images/java1.jpg'],
    issuer: 'Cisco Networking Academy',
    date: '01/12/2025',
    content: 'Nắm vững kiến thức lập trình JavaScript cơ bản phục vụ cho phát triển ứng dụng và tự động hoá.'
  },
  {
    id: 'cisco-networking-basics',
    title: 'Networking Basics',
    images: ['/images/NetworkBasic.jpg'],
    issuer: 'Cisco Networking Academy',
    date: '20/11/2025',
    content: 'Hiểu rõ các nguyên lý mạng, mô hình OSI và cấu hình thiết bị mạng Cisco.'
  },
   {
    id: 'cisco-js-essentials',
    title: 'JavaScript Essentials 2',
    images: ['/images/Jvaess2.jpg'],
    issuer: 'Cisco Networking Academy',
    date: '20/12/2025',
    content: 'Nắm vững kiến thức lập trình JavaScript cơ bản phục vụ cho phát triển ứng dụng và tự động hoá.'
  }
];
