// Hệ Thống Quiz Hệ Điều Hành
const CHAPTERS_METADATA = [
  { id: 'chuong5', file: 'chuong5.json', title: 'Chương 5: Đồng bộ tiến trình', desc: 'Critical Section, Semaphore, Mutex, Peterson, Race Condition' },
  { id: 'chuong7', file: 'chuong7.json', title: 'Chương 7: Quản lý bộ nhớ', desc: 'Phân trang, TLB, Bảng trang, MMU, Ánh xạ địa chỉ ảo - vật lý' },
  { id: 'chuong8', file: 'chuong8.json', title: 'Chương 8: Bộ nhớ ảo', desc: 'Phân trang theo yêu cầu, Page fault, Thay thế trang LRU, FIFO, Belady' }
];

const EMBEDDED_DATA = {
  'chuong5.json': {
  "title": "Chương 5: Đồng bộ tiến trình",
  "total_questions": 22,
  "questions": [
    {
      "id": 1,
      "question": "Xung đột dữ liệu (data race) có thể xảy ra trong trường hợp nào sau đây?",
      "options": {
        "a": "Hai tiến trình cùng truy cập vào một bộ đệm I/O và thực hiện thao tác ghi dữ liệu",
        "b": "Hai tiến trình cùng truy cập vào một vùng nhớ chia sẻ và thực hiện thao tác ghi dữ liệu",
        "c": "Hai tiến trình cùng truy cập vào một tài nguyên mạng và thực hiện thao tác ghi dữ liệu",
        "d": "Hai tiến trình cùng truy cập vào một tệp tin và chỉ thực hiện thao tác đọc dữ liệu"
      },
      "correct_answer": "b"
    },
    {
      "id": 2,
      "question": "Đặc điểm chung của nhóm giải pháp đồng bộ theo cơ chế chờ bận (busy waiting) là gì?",
      "options": {
        "a": "Tiến trình tiếp tục tiêu thụ CPU khi chưa được cấp quyền vào vùng tranh chấp",
        "b": "Cần có sự can thiệp và hỗ trợ trực tiếp từ hệ điều hành",
        "c": "Luôn bảo đảm tính chất loại trừ tương hỗ trên các hệ thống đa bộ xử lý",
        "d": "Không bao giờ xảy ra hiện tượng đói tài nguyên (starvation)"
      },
      "correct_answer": "a"
    },
    {
      "id": 3,
      "question": "Thuật toán Peterson sử dụng bao nhiêu biến chia sẻ để đồng bộ?",
      "options": {
        "a": "Một",
        "b": "Bốn",
        "c": "Hai",
        "d": "Ba"
      },
      "correct_answer": "c"
    },
    {
      "id": 4,
      "question": "Phát biểu nào sau đây phản ánh đúng bản chất kết quả của race condition?",
      "options": {
        "a": "Kết quả luôn luôn không thể dự đoán và bị sai lệch",
        "b": "Kết quả luôn dẫn tới tình trạng deadlock",
        "c": "Kết quả luôn cố định và dự đoán được chính xác",
        "d": "Kết quả phụ thuộc vào thứ tự thực thi mà các tiến trình hoặc luồng được lập lịch"
      },
      "correct_answer": "d"
    },
    {
      "id": 5,
      "question": "Lời giải hoàn chỉnh cho bài toán vùng tranh chấp cần thỏa mãn những tiêu chí nào trong các tiêu chí sau: (1) Loại trừ tương hỗ (Mutual Exclusion), (2) Tất cả tiến trình phải được đối xử như nhau, (3) Tiến triển (Progress), (4) Chờ đợi có giới hạn (Bounded Waiting)?",
      "options": {
        "a": "(1), (2), (3), (4)",
        "b": "(1), (3), (4)",
        "c": "(2), (3), (4)",
        "d": "(1), (2), (4)"
      },
      "correct_answer": "b"
    },
    {
      "id": 6,
      "question": "Thuật toán Peterson được áp dụng chủ yếu để giải quyết vấn đề gì trong hệ điều hành?",
      "options": {
        "a": "Đảm bảo tính loại trừ tương hỗ (mutual exclusion)",
        "b": "Triển khai không gian bộ nhớ ảo",
        "c": "Hiện thực hóa cấu trúc dữ liệu semaphore",
        "d": "Lập lịch thực thi tiến trình"
      },
      "correct_answer": "a"
    },
    {
      "id": 7,
      "question": "Trong giải pháp đồng bộ dùng semaphore, để cho phép tối đa 5 tiến trình đồng thời vào vùng tranh chấp, cần khởi tạo semaphore với giá trị bằng bao nhiêu?",
      "options": {
        "a": "6",
        "b": "10",
        "c": "5",
        "d": "4"
      },
      "correct_answer": "c"
    },
    {
      "id": 8,
      "question": "Mục đích của biến 'turn' trong thuật toán đồng bộ Peterson là gì?",
      "options": {
        "a": "Làm bộ đếm số lần mỗi tiến trình đã bước vào critical section",
        "b": "Thuật toán Peterson không sử dụng biến này",
        "c": "Thông báo cho các tiến trình khác biết có thể vào critical section",
        "d": "Chỉ ra tiến trình nào đang đến lượt được ưu tiên vào critical section"
      },
      "correct_answer": "d"
    },
    {
      "id": 9,
      "question": "Tại sao việc kiểm soát và bảo vệ các vùng tranh chấp (critical section) trong hệ điều hành lại mang tính chất thiết yếu?",
      "options": {
        "a": "Để tránh mất mát dữ liệu trên ổ đĩa",
        "b": "Để ngăn chặn tình trạng tranh đoạt dữ liệu (race condition)",
        "c": "Để nâng cao tối đa hiệu suất xử lý của toàn hệ thống",
        "d": "Để mở rộng số lượng tài khoản có quyền quản trị"
      },
      "correct_answer": "b"
    },
    {
      "id": 10,
      "question": "Nếu giá trị hiện thời của biến semaphore s1 là -5, phát biểu nào sau đây là chính xác?",
      "options": {
        "a": "Cần thực hiện thao tác signal(s1) đúng 5 lần thì mới có thể gọi tiếp thao tác wait(s1)",
        "b": "Không tiến trình nào có thể gọi thao tác wait(s1) cho đến khi s1 lớn hơn 0",
        "c": "Semaphore không được nhận giá trị âm nên trường hợp này không hợp lệ",
        "d": "Đang có 5 tiến trình bị chặn và xếp hàng chờ trên semaphore s1"
      },
      "correct_answer": "d"
    },
    {
      "id": 11,
      "question": "Giải pháp nào dưới đây thường được áp dụng để bảo vệ các vùng tranh chấp trong hệ điều hành?",
      "options": {
        "a": "Cho phép tất cả các luồng truy cập critical section cùng một lúc",
        "b": "Giảm mức độ ưu tiên của các luồng cần truy cập critical section",
        "c": "Sử dụng các cơ chế đồng bộ như semaphores và mutex",
        "d": "Tăng số lượng luồng tối đa được cấp phép vào critical section"
      },
      "correct_answer": "c"
    },
    {
      "id": 12,
      "question": "Khái niệm Counting Semaphore được định nghĩa là gì?",
      "options": {
        "a": "Semaphore có giá trị giới hạn nhỏ nhất là 0",
        "b": "Semaphore nhận giá trị là một số thực",
        "c": "Semaphore có giá trị cực đại lớn hơn 1",
        "d": "Semaphore chỉ nhận giá trị nhị phân 0 hoặc 1"
      },
      "correct_answer": "c"
    },
    {
      "id": 13,
      "question": "Giải pháp nào sau đây giúp loại trừ nguy cơ xảy ra race condition trong hệ điều hành?",
      "options": {
        "a": "Giảm bớt dung lượng bộ nhớ cấp phát cho mỗi tiến trình/luồng",
        "b": "Tăng mức độ ưu tiên của các tiến trình cần truy cập tài nguyên chia sẻ",
        "c": "Tăng số lượng tiến trình truy cập đồng thời vào tài nguyên",
        "d": "Triển khai các cơ chế đồng bộ hóa phù hợp"
      },
      "correct_answer": "d"
    },
    {
      "id": 14,
      "question": "Giải pháp đồng bộ tiến trình của Peterson là sự kết hợp giữa các thành phần nào?",
      "options": {
        "a": "Biến turn kiểm tra lượt và mảng order[] kiểm tra thứ tự",
        "b": "Biến turn kiểm tra lượt và mảng flag[] kiểm tra tính sẵn sàng",
        "c": "Biến semaphore kiểm tra số lần thực thi và mảng order[] kiểm tra thứ tự",
        "d": "Biến flag kiểm tra lượt và mảng priority[] kiểm tra độ ưu tiên"
      },
      "correct_answer": "b"
    },
    {
      "id": 15,
      "question": "Đoạn mã nguồn mà tại đó tiến trình truy cập và cập nhật các biến hoặc tệp tin dùng chung được gọi là gì?",
      "options": {
        "a": "Critical section",
        "b": "Race section",
        "c": "Non-critical section",
        "d": "Sensitive section"
      },
      "correct_answer": "a"
    },
    {
      "id": 16,
      "question": "Vấn đề tiềm ẩn khi sử dụng khóa mutex để đồng bộ hóa truy cập tài nguyên chia sẻ là gì?",
      "options": {
        "a": "Tình trạng deadlock có thể xảy ra nếu một tiến trình đang giữ một khóa và chờ một khóa khác vốn đang bị tiến trình khác giữ",
        "b": "Một khóa mutex không thể được dùng để đồng bộ hóa truy cập vào tài nguyên được chia sẻ",
        "c": "Cả deadlock và tình trạng đói đều không có khả năng xảy ra khi sử dụng khóa mutex",
        "d": "Tình trạng đói có thể xảy ra nếu một tiến trình bị ngăn cản vô thời hạn khi muốn chiếm một khóa mutex"
      },
      "correct_answer": "d"
    },
    {
      "id": 17,
      "question": "Cơ chế đồng bộ hóa đóng vai trò cốt lõi nào đối với bài toán vùng tranh chấp (critical section)?",
      "options": {
        "a": "Tối ưu hóa và nâng cao hiệu suất tính toán của hệ thống",
        "b": "Đảm bảo sự phân phối công bằng tuyệt đối về tài nguyên giữa các luồng",
        "c": "Ngăn chặn tình trạng deadlock xảy ra",
        "d": "Đảm bảo nguyên tắc loại trừ tương hỗ (mutual exclusion)"
      },
      "correct_answer": "d"
    },
    {
      "id": 18,
      "question": "Định nghĩa chính xác về vùng tranh chấp (critical section) trong hệ điều hành là gì?",
      "options": {
        "a": "Vùng mã nguồn được thực thi dùng chung giữa hai hay nhiều tiến trình",
        "b": "Vùng nhớ lưu trữ dữ liệu được chia sẻ bởi hai hay nhiều tiến trình",
        "c": "Vùng dữ liệu (data section) được cấp phát đồng thời cho các tiến trình",
        "d": "Vùng code chứa các thao tác làm thay đổi dữ liệu chia sẻ giữa hai hay nhiều tiến trình"
      },
      "correct_answer": "d"
    },
    {
      "id": 19,
      "question": "Khi các tiến trình cộng tác (cooperative processes) với nhau, yếu tố bắt buộc phải đảm bảo là gì?",
      "options": {
        "a": "Ngăn chặn hoàn toàn hiện tượng deadlock",
        "b": "Bảo đảm tính nhất quán của dữ liệu (data consistency)",
        "c": "Tránh tình trạng starvation",
        "d": "Cân bằng tải giữa các lõi xử lý"
      },
      "correct_answer": "b"
    },
    {
      "id": 20,
      "question": "Phát biểu nào sau đây phản ánh chính xác quy tắc hoạt động của khóa mutex?",
      "options": {
        "a": "Khóa mutex chỉ có thể được sử dụng trong các ứng dụng đơn tiến trình",
        "b": "Khóa mutex có thể được mở bởi một tiến trình bất kỳ không giữ khóa",
        "c": "Khóa mutex chỉ có thể được giải phóng bởi chính tiến trình đã khóa nó",
        "d": "Quyền sở hữu khóa mutex có thể được chia sẻ đồng thời giữa nhiều tiến trình"
      },
      "correct_answer": "c"
    },
    {
      "id": 21,
      "question": "Lợi ích nổi bật của việc sử dụng các thao tác đơn nguyên (atomic operations) trong hệ điều hành là gì?",
      "options": {
        "a": "Cải thiện hiệu năng xử lý nhờ hạn chế số lần chuyển đổi ngữ cảnh (context switch)",
        "b": "Đảm bảo việc truy cập vào critical section luôn tuân theo một thứ tự định sẵn",
        "c": "Cung cấp giải pháp đồng bộ truy cập tài nguyên chia sẻ mà không cần sử dụng khóa hoặc semaphore",
        "d": "Triệt tiêu hoàn toàn nguy cơ xảy ra starvation trong hệ thống"
      },
      "correct_answer": "c"
    },
    {
      "id": 22,
      "question": "Xét một hệ thống có 4 tiến trình T1, T2, T3, T4. Quan hệ thứ tự thực thi giữa các tiến trình được biểu diễn theo sơ đồ: T1 -> T2, T1 -> T3, T2 -> T4, T3 -> T4 (tiến trình Tx phải hoàn thành trước khi Ty bắt đầu). Giả sử tất cả tiến trình đều đã sẵn sàng, để đồng bộ hoạt động theo đúng sơ đồ trên cần sử dụng ít nhất bao nhiêu semaphore?",
      "url_demo": "assets/",
      "options": {
        "a": "4",
        "b": "2",
        "c": "1",
        "d": "3"
      },
      "correct_answer": "b"
    }
  ]
},
  'chuong7.json': {
  "title": "Chương 7: Quản lý bộ nhớ",
  "total_questions": 15,
  "questions": [
    {
      "id": 1,
      "question": "Associative memory là thuật ngữ để chỉ:",
      "options": {
        "a": "Một vùng nhớ đặc biệt để liên kết địa chỉ luận lý và địa chỉ vật lý",
        "b": "Một bảng trang rút gọn đặc biệt được lưu trong cache",
        "c": "Một vùng nhớ đặc biệt có tác dụng lưu trữ bảng trang",
        "d": "Một bảng trang đặc biệt có tác dụng ghi nhận những trang đã được truy xuất"
      },
      "correct_answer": "b"
    },
    {
      "id": 2,
      "question": "Chọn phát biểu SAI khi nói về Translation Look-Aside Buffer (TLB)?",
      "options": {
        "a": "Xác suất tìm thấy trang trong TLB là trên 90%",
        "b": "Kích thước của TLB thường rất nhỏ",
        "c": "TLB được lưu trên cache do đó có tốc độ truy xuất rất nhanh",
        "d": "TLB giúp cho thao tác truy xuất lệnh/dữ liệu trở nên nhanh hơn"
      },
      "correct_answer": "a"
    },
    {
      "id": 3,
      "question": "Trong kỹ thuật paging, bộ nhớ vật lý được chia thành các khối, ý nào sau đây mô tả đúng về các khối này?",
      "options": {
        "a": "Kích thước mỗi khối là bằng nhau và cố định trong khoảng 512 bytes đến 16Mbytes",
        "b": "Kích thước mỗi khối là cố định, và có thể khác nhau trong khoảng từ 512 bytes đến 16 Mbytes",
        "c": "Kích thước mỗi khối có thể co giãn, dao động từ 512 bytes đến 16 Mbytes",
        "d": "Kích thước mỗi khối là bằng nhau và cố định. Kích thước này lớn hay nhỏ tùy vào tổng độ lớn của bộ nhớ chính."
      },
      "correct_answer": "a"
    },
    {
      "id": 4,
      "question": "Cho bảng trang như bên dưới:\n0 1\n1 5\n2 4\n3 8\n4 6\n5 2\n\nBiết kích thước mỗi khung trang là 4Kbytes, như vậy địa chỉ vật lý 18408 sẽ được ánh xạ thành địa chỉ ảo ...",
      "options": null,
      "correct_answer": "10216"
    },
    {
      "id": 5,
      "question": "Phần cứng thực hiện việc ánh xạ địa chỉ ảo thành địa chỉ vật lý được gọi là?",
      "options": {
        "a": "Memory Mapping Unit (MMU)",
        "b": "Memory Management Unit (MMU)",
        "c": "Input/Output Controller (IOC)",
        "d": "Random Access Memory (RAM)"
      },
      "correct_answer": "b"
    },
    {
      "id": 6,
      "question": "Cho bảng trang như bên dưới:\n0 4\n1 8\n2 1\n3 2\n4 9\n5 3\n\nBiết kích thước mỗi trang là 2Kbytes, như vậy địa chỉ ảo 4567 sẽ được ánh xạ thành địa chỉ vật lý ...\n*Lưu ý: 1K = 1024",
      "options": null,
      "correct_answer": "2519",
      "explanation": "Mẹo 3 bước siêu nhanh:\n1. 2K = 2048. Lấy 4567 / 2048 = 2,23 -> Lấy số nguyên là Trang 2. Phần dư: 4567 - (2 * 2048) = 471.\n2. Tra bảng: Cột trái số 2 ứng với cột phải là số 1 (Khung 1).\n3. Địa chỉ vật lý: 1 * 2048 + 471 = 2519."
    },
    {
      "id": 7,
      "question": "Chọn phát biểu đúng khi nói về việc quản lý bộ nhớ?",
      "options": {
        "a": "Tất cả đều đúng",
        "b": "Chương trình ứng dụng chỉ làm việc với địa chỉ luận lý và không bao giờ nhìn thấy địa chỉ vật lý thực sự",
        "c": "Việc liên kết địa chỉ sẽ được thực hiện trong giai đoạn thực thi nếu chương trình cần truy cập đến một vị trí nào đó trong bộ nhớ chính",
        "d": "Địa chỉ bộ nhớ trong mã nguồn được biểu diễn dưới dạng ký hiệu (symbolic)"
      },
      "correct_answer": "a"
    },
    {
      "id": 8,
      "question": "Xét một hệ thống sử dụng kỹ thuật phân trang, với bảng trang được lưu trữ trong bộ nhớ chính. Nếu sử dụng TLBs với hit-ratio (tỉ lệ tìm thấy) là 80%, thời gian để tìm trong TLBs là 25 ns. Thời gian truy xuất bộ nhớ trong hệ thống (effective memory reference time) là 175ns. Vậy thời gian cho một lần truy xuất bộ nhớ là ... ns",
      "options": null,
      "correct_answer": "125"
    },
    {
      "id": 9,
      "question": "Xét một hệ thống sử dụng kỹ thuật phân trang, với bảng trang được lưu trữ trong bộ nhớ chính. Nếu sử dụng TLBs với hit-ratio (tỉ lệ tìm thấy) là 96%, thời gian để tìm trong TLBs là 16 ns. Thời gian truy xuất hiệu dụng (effective memory reference time) là 204ns. Tính thời gian cho một lần truy xuất lệnh/dữ liệu là bao nhiêu ns?",
      "options": {
        "a": "Xấp xỉ 350.6",
        "b": "Xấp xỉ 180.8",
        "c": "Xấp xỉ 361.5",
        "d": "Xấp xỉ 90.4"
      },
      "correct_answer": "c"
    },
    {
      "id": 10,
      "question": "Chọn phát biểu đúng khi nói về hiện tượng phân mảnh nội?",
      "options": {
        "a": "Tất cả đều sai",
        "b": "Chênh lệch kích thước giữa vùng nhớ được cấp phát và yêu cầu cấp phát",
        "c": "Bộ nhớ cấp phát lớn hơn một ít so với yêu cầu cấp phát bộ nhớ",
        "d": "Tổng dung lượng còn lại trong không gian bộ nhớ đủ để thỏa mãn yêu cầu cấp phát nhưng lại không liên tục"
      },
      "correct_answer": "c"
    },
    {
      "id": 11,
      "question": "Biết thời gian truy xuất lệnh/dữ liệu không sử dụng TLBs là 200ns. Thời gian tìm kiếm trong bảng TLBs là 20ns. Với xác suất tìm thấy trong TLBs bằng ... % thì thời gian truy xuất hiệu dụng sẽ là 121ns?",
      "options": null,
      "correct_answer": "99"
    },
    {
      "id": 12,
      "question": "Xét một không gian địa chỉ luận lý có 18 trang, mỗi trang có kích thước là 4K. Như vậy ta cần ... bit để biểu diễn cho một địa chỉ luận lý trong không gian này.",
      "options": null,
      "correct_answer": "17"
    },
    {
      "id": 13,
      "question": "Gọi base_register và limit_register là 2 thanh ghi lưu địa chỉ nền và giới hạn địa chỉ của một tiến trình. Với base_register = 10000 và limit_register = 500, CÁC địa chỉ ảo nào sau đây là hợp lệ?",
      "options": {
        "a": "467",
        "b": "231",
        "c": "605",
        "d": "10289"
      },
      "correct_answer": "a, b"
    },
    {
      "id": 14,
      "question": "Trong kỹ thuật phân trang, mục đích của việc thiết lập bảng trang là gì?",
      "options": {
        "a": "Tránh hiện tượng phân mảnh ngoại",
        "b": "Tránh hiện tượng phân mảnh nội",
        "c": "Phân bổ bộ nhớ vật lý mỗi khi có sẵn",
        "d": "Chuyển địa chỉ luận lý thành địa chỉ vật lý"
      },
      "correct_answer": "d"
    },
    {
      "id": 15,
      "question": "\"Nếu vị trí bộ nhớ được biết trước thì (mã tuyệt đối) absolute code có thể được tạo\" là mô tả nói về việc gán địa chỉ của các lệnh và dữ liệu vào giai đoạn nào?",
      "options": {
        "a": "Load time",
        "b": "Execution time",
        "c": "Compile time"
      },
      "correct_answer": "c"
    }
  ]
},
  'chuong8.json': {
  "title": "Chương 8: Bộ nhớ ảo",
  "total_questions": 10,
  "questions": [
    {
      "id": 1,
      "question": "Giả sử một tiến trình được cấp 3 khung trang trong bộ nhớ vật lý và 7 trang trong bộ nhớ ảo. Tại thời điểm nạp tiến trình vào, 3 khung trang trên bộ nhớ vật lý này đang trống. Tiến trình truy xuất 7 trang (1, 2, 3, 4, 5, 6, 7, 8) trong bộ nhớ ảo theo thứ tự như sau:\n5 2 1 1 3 2 4 1 4 2 3 7 1 5 6 6 4 3 5 1\n\nTại thời điểm tiến trình truy xuất trang nhớ số 6 lần đầu tiên, trang nhớ nào bị thay ra để nạp trang số 6 vào nếu áp dụng chiến lược LRU?",
      "options": {
        "a": "Trang số 7",
        "b": "Trang số 5",
        "c": "Trang số 2",
        "d": "Trang số 1"
      },
      "correct_answer": "a"
    },
    {
      "id": 2,
      "question": "Giả sử một tiến trình được cấp 3 khung trang trong bộ nhớ vật lý và 7 trang trong bộ nhớ ảo. Tại thời điểm nạp tiến trình vào, 3 khung trang trên bộ nhớ vật lý này đang trống. Tiến trình truy xuất 7 trang (1, 2, 3, 4, 5, 6, 7) trong bộ nhớ ảo theo thứ tự như sau:\n5 2 1 1 3 2 4 1 4 2 3 7 1 5 6 6 4 3 5 1\n\nTại thời điểm tiến trình truy xuất trang nhớ số 7 lần đầu tiên, hệ thống đã xảy ra bao nhiêu lỗi trang (không tính lỗi trang khi nạp trang số 7 vào) nếu sử dụng giải thuật LRU?",
      "options": {
        "a": "8 lỗi trang",
        "b": "7 lỗi trang",
        "c": "6 lỗi trang",
        "d": "5 lỗi trang"
      },
      "correct_answer": "b"
    },
    {
      "id": 3,
      "question": "Các chiến lược thay thế trang nào sau đây bị vướng phải nghịch lý Belady?",
      "options": {
        "a": "Least Recently Used Algorithm",
        "b": "Optimal Algorithm",
        "c": "Tất cả đều đúng",
        "d": "First-In-First-Out Algorithm"
      },
      "correct_answer": "d"
    },
    {
      "id": 4,
      "question": "Chiến lược thay thế trang nào sau đây được xem là tối ưu nhất?",
      "options": {
        "a": "Least Recently Used Algorithm",
        "b": "First-In-First-Out Algorithm",
        "c": "Optimal Algorithm",
        "d": "Shortest Remaining Time First Algorithm"
      },
      "correct_answer": "c"
    },
    {
      "id": 5,
      "question": "Chiến lược thay thế trang nào sau đây được xem là khó triển khai nhất?",
      "options": {
        "a": "Shortest Remaining Time First Algorithm",
        "b": "First-In-First-Out Algorithm",
        "c": "Least Recently Used Algorithm",
        "d": "Optimal Algorithm"
      },
      "correct_answer": "c"
    },
    {
      "id": 6,
      "question": "Trong kỹ thuật phân trang theo yêu cầu, số lượng lỗi trang sẽ bị ảnh hưởng bởi CÁC yếu tố nào sau đây?",
      "options": {
        "a": "Chiến lược thay thế trang",
        "b": "Tốc độ xử lý của CPU",
        "c": "Số khung trang tiến trình được cấp phát",
        "d": "Tốc độ truy xuất của bộ nhớ chính"
      },
      "correct_answer": "a, c"
    },
    {
      "id": 7,
      "question": "Kỹ thuật phân trang theo yêu cầu KHÔNG cần hỗ trợ phần cứng nào sau đây?",
      "options": {
        "a": "Dự đoán các trang sẽ được truy xuất",
        "b": "Bộ nhớ thứ cấp hỗ trợ cơ chế hoán vị",
        "c": "Bảng trang với valid-invalid bit",
        "d": "Khởi động lại câu lệnh"
      },
      "correct_answer": "a"
    },
    {
      "id": 8,
      "question": "Nghịch lý Belady mô tả hiện tượng khi số lượng khung trang ... thì số lượng lỗi trang ...",
      "options": null,
      "correct_answer": "tăng, tăng"
    },
    {
      "id": 9,
      "question": "Ý nào sau đây KHÔNG phải là ưu điểm của việc sử dụng bộ nhớ ảo?",
      "options": {
        "a": "Không gian địa chỉ luận lý có thể lớn hơn không gian địa chỉ vật lý",
        "b": "Cho phép nhiều tiến trình được thực thi đồng thời hơn",
        "c": "Cho phép tạo tiến trình hiệu quả hơn",
        "d": "Cho phép sử dụng nhiều I/O hơn để load hoặc swap tiến trình"
      },
      "correct_answer": "d"
    },
    {
      "id": 10,
      "question": "Thuật ngữ nào sau đây mô tả trạng thái tiến trình truy xuất trang mà trang không có trong bộ nhớ chính?",
      "options": {
        "a": "Page missing",
        "b": "Page fault",
        "c": "Page error",
        "d": "Page lagging"
      },
      "correct_answer": "b"
    }
  ]
}
};

// State
let currentChapterData = null;
let currentMode = 'home'; // 'home' | 'review' | 'quiz'
let quizState = {
  currentIndex: 0,
  userAnswers: {}, // index: { answered: bool, selected: any, isCorrect: bool }
  score: { correct: 0, wrong: 0 }
};

// DOM Elements
const viewHome = document.getElementById('view-home');
const viewReview = document.getElementById('view-review');
const viewQuiz = document.getElementById('view-quiz');
const chapterCardsContainer = document.getElementById('chapter-cards');

// Load chapter data
async function getChapterData(file) {
  try {
    const res = await fetch(file);
    if (res.ok) {
      return await res.json();
    }
  } catch (err) {
    console.log('Using embedded fallback for ' + file);
  }
  return EMBEDDED_DATA[file];
}

// Render Home Screen
async function renderHomeScreen() {
  chapterCardsContainer.innerHTML = '';
  for (const meta of CHAPTERS_METADATA) {
    const data = await getChapterData(meta.file);
    const count = data.questions ? data.questions.length : data.total_questions;
    const card = document.createElement('div');
    card.className = 'chapter-card';
    card.innerHTML = `
      <div class="card-badge">Chương ${meta.id.replace('chuong', '')}</div>
      <h3 class="card-title">${data.title || meta.title}</h3>
      <p class="card-desc">${meta.desc}</p>
      <div class="card-stats">
        <span class="stat-item"><i class="icon">📝</i> ${count} câu hỏi</span>
      </div>
      <div class="card-actions">
        <button class="btn btn-outline" onclick="openReviewMode('${meta.file}')">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
          Xem hết
        </button>
        <button class="btn btn-primary" onclick="openQuizMode('${meta.file}')">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"/></svg>
          Bắt đầu
        </button>
      </div>
    `;
    chapterCardsContainer.appendChild(card);
  }
}

// Switch Views
function showView(viewName) {
  viewHome.classList.add('hidden');
  viewReview.classList.add('hidden');
  viewQuiz.classList.add('hidden');

  if (viewName === 'home') viewHome.classList.remove('hidden');
  if (viewName === 'review') viewReview.classList.remove('hidden');
  if (viewName === 'quiz') viewQuiz.classList.remove('hidden');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ---------------------- XEM HẾT (REVIEW MODE) ----------------------
async function openReviewMode(file) {
  currentChapterData = await getChapterData(file);
  document.getElementById('review-title').textContent = currentChapterData.title;
  document.getElementById('review-total-badge').textContent = `Tổng số: ${currentChapterData.questions.length} câu`;
  
  const container = document.getElementById('review-questions-list');
  container.innerHTML = '';

  currentChapterData.questions.forEach((q, idx) => {
    const item = document.createElement('div');
    item.className = 'review-question-card';
    
    // Check if question has image (e.g. cau 22)
    let imageHtml = '';
    if (q.url_demo && q.id === 22) {
      imageHtml = `<div class="question-image"><img src="assets/chuong5/cau22.png" alt="Sơ đồ câu ${q.id}" onerror="this.style.display='none'"></div>`;
    }

    let optionsHtml = '';
    const isFillIn = !q.options || typeof q.options !== 'object';

    if (isFillIn) {
      // Câu điền đáp án
      optionsHtml = `
        <div class="fill-answer-box">
          <span class="fill-label">Đáp án chính xác:</span>
          <span class="correct-highlight">${escapeHtml(q.correct_answer)}</span>
        </div>
      `;
    } else {
      // Câu trắc nghiệm (1 hoặc nhiều đáp án)
      const correctAnswers = q.correct_answer.split(',').map(s => s.trim().toLowerCase());
      optionsHtml = '<div class="options-list review-options">';
      for (const [key, val] of Object.entries(q.options)) {
        const isCorrect = correctAnswers.includes(key.toLowerCase());
        const correctClass = isCorrect ? 'option-correct-muted' : '';
        const badge = isCorrect ? '<span class="check-icon">✓</span>' : '';
        optionsHtml += `
          <div class="option-item ${correctClass}">
            <span class="option-key">${key.toUpperCase()}.</span>
            <span class="option-text">${escapeHtml(val)}</span>
            ${badge}
          </div>
        `;
      }
      optionsHtml += '</div>';
    }

    let explanationHtml = '';
    if (q.explanation) {
      explanationHtml = `
        <div class="explanation-box">
          <strong>💡 Giải thích / Mẹo nhớ:</strong>
          <pre class="explanation-text">${escapeHtml(q.explanation)}</pre>
        </div>
      `;
    }

    item.innerHTML = `
      <div class="q-header">
        <span class="q-number">Câu ${q.id}</span>
      </div>
      <div class="q-content">${escapeHtml(q.question).replace(/\n/g, '<br>')}</div>
      ${imageHtml}
      ${optionsHtml}
      ${explanationHtml}
    `;
    container.appendChild(item);
  });

  showView('review');
}

// ---------------------- BẮT ĐẦU (QUIZ MODE) ----------------------
async function openQuizMode(file) {
  currentChapterData = await getChapterData(file);
  document.getElementById('quiz-title').textContent = currentChapterData.title;
  
  quizState = {
    currentIndex: 0,
    userAnswers: {},
    score: { correct: 0, wrong: 0 }
  };

  renderQuizNav();
  renderCurrentQuestion();
  showView('quiz');
}

function renderQuizNav() {
  const navContainer = document.getElementById('quiz-nav-chips');
  navContainer.innerHTML = '';
  currentChapterData.questions.forEach((q, idx) => {
    const chip = document.createElement('button');
    chip.className = 'nav-chip';
    if (idx === quizState.currentIndex) chip.classList.add('active');
    
    const ans = quizState.userAnswers[idx];
    if (ans) {
      if (ans.isCorrect) chip.classList.add('chip-correct');
      else chip.classList.add('chip-wrong');
    }
    
    chip.textContent = idx + 1;
    chip.onclick = () => jumpToQuestion(idx);
    navContainer.appendChild(chip);
  });

  updateScoreStats();
}

function updateScoreStats() {
  const answeredCount = Object.keys(quizState.userAnswers).length;
  const total = currentChapterData.questions.length;
  document.getElementById('stat-answered').textContent = `${answeredCount} / ${total}`;
  document.getElementById('stat-correct').textContent = quizState.score.correct;
  document.getElementById('stat-wrong').textContent = quizState.score.wrong;
}

function jumpToQuestion(idx) {
  quizState.currentIndex = idx;
  renderQuizNav();
  renderCurrentQuestion();
}

function renderCurrentQuestion() {
  const q = currentChapterData.questions[quizState.currentIndex];
  const total = currentChapterData.questions.length;
  const qContainer = document.getElementById('quiz-question-box');
  
  document.getElementById('quiz-progress-text').textContent = `Câu ${quizState.currentIndex + 1} trên ${total}`;
  
  // Prev / Next button states
  document.getElementById('btn-prev').disabled = quizState.currentIndex === 0;
  document.getElementById('btn-next').disabled = quizState.currentIndex === total - 1;

  let imageHtml = '';
  if (q.url_demo && q.id === 22) {
    imageHtml = `<div class="question-image"><img src="assets/chuong5/cau22.png" alt="Sơ đồ câu ${q.id}"></div>`;
  }

  const ansState = quizState.userAnswers[quizState.currentIndex];
  const isAnswered = !!ansState;
  const isFillIn = !q.options || typeof q.options !== 'object';
  const isMultiSelect = !isFillIn && q.correct_answer.includes(',');

  let contentHtml = '';

  if (isFillIn) {
    // Fill in question
    const userVal = ansState ? ansState.selected : '';
    let resultNotice = '';
    let inputStatusClass = '';

    if (isAnswered) {
      if (ansState.isCorrect) {
        inputStatusClass = 'input-correct';
        resultNotice = `<div class="feedback-badge feedback-correct">✓ Chính xác! Đáp án là: <strong>${escapeHtml(q.correct_answer)}</strong></div>`;
      } else {
        inputStatusClass = 'input-wrong';
        resultNotice = `<div class="feedback-badge feedback-wrong">✗ Sai rồi! Bạn nhập: "${escapeHtml(userVal)}" &mdash; Đáp án đúng là: <strong>${escapeHtml(q.correct_answer)}</strong></div>`;
      }
    }

    contentHtml = `
      <div class="fill-interactive-form">
        <label class="fill-input-label">Nhập câu trả lời của bạn:</label>
        <div class="fill-input-group">
          <input type="text" id="fill-input" class="fill-input-field ${inputStatusClass}" value="${escapeHtml(userVal)}" placeholder="Nhập đáp án vào đây..." ${isAnswered ? 'disabled' : ''} onkeydown="if(event.key==='Enter') submitFillAnswer()">
          ${!isAnswered ? `<button class="btn btn-primary" onclick="submitFillAnswer()">Kiểm tra</button>` : ''}
        </div>
        ${resultNotice}
      </div>
    `;
  } else if (isMultiSelect) {
    // Multi-select question
    const correctKeys = q.correct_answer.split(',').map(s => s.trim().toLowerCase());
    const selectedKeys = ansState ? (Array.isArray(ansState.selected) ? ansState.selected : []) : [];

    contentHtml = '<div class="options-list quiz-options" id="multi-options-list">';
    for (const [key, val] of Object.entries(q.options)) {
      const kLow = key.toLowerCase();
      let optClass = 'quiz-option-clickable';
      let isChecked = selectedKeys.includes(kLow);

      if (isAnswered) {
        optClass = 'quiz-option-disabled';
        if (correctKeys.includes(kLow)) {
          optClass += ' option-answer-correct';
        }
        if (isChecked && !correctKeys.includes(kLow)) {
          optClass += ' option-answer-wrong';
        }
      }

      contentHtml += `
        <div class="option-item ${optClass}" onclick="toggleMultiSelectOption('${kLow}')">
          <input type="checkbox" id="chk_${kLow}" value="${kLow}" ${isChecked ? 'checked' : ''} ${isAnswered ? 'disabled' : ''} onclick="event.stopPropagation(); toggleMultiSelectOption('${kLow}')">
          <span class="option-key">${key.toUpperCase()}.</span>
          <span class="option-text">${escapeHtml(val)}</span>
        </div>
      `;
    }
    contentHtml += '</div>';

    if (!isAnswered) {
      contentHtml += `<div style="margin-top: 16px;"><button class="btn btn-primary" onclick="submitMultiAnswer()">Kiểm tra câu này</button></div>`;
    } else {
      const fbClass = ansState.isCorrect ? 'feedback-correct' : 'feedback-wrong';
      const fbText = ansState.isCorrect ? '✓ Chính xác! Tất cả lựa chọn của bạn đều đúng.' : `✗ Chưa đúng! Các đáp án chính xác là: <strong>${q.correct_answer.toUpperCase()}</strong>`;
      contentHtml += `<div class="feedback-badge ${fbClass}">${fbText}</div>`;
    }
  } else {
    // Single-choice question
    const correctKey = q.correct_answer.trim().toLowerCase();
    contentHtml = '<div class="options-list quiz-options">';
    for (const [key, val] of Object.entries(q.options)) {
      const kLow = key.toLowerCase();
      let optClass = 'quiz-option-clickable';

      if (isAnswered) {
        optClass = 'quiz-option-disabled';
        if (kLow === correctKey) {
          optClass += ' option-answer-correct';
        }
        if (ansState.selected === kLow && kLow !== correctKey) {
          optClass += ' option-answer-wrong';
        }
      }

      contentHtml += `
        <div class="option-item ${optClass}" onclick="selectSingleOption('${kLow}')">
          <span class="option-key">${key.toUpperCase()}.</span>
          <span class="option-text">${escapeHtml(val)}</span>
        </div>
      `;
    }
    contentHtml += '</div>';

    if (isAnswered) {
      if (ansState.isCorrect) {
        contentHtml += `<div class="feedback-badge feedback-correct">✓ Hoàn toàn chính xác!</div>`;
      } else {
        contentHtml += `<div class="feedback-badge feedback-wrong">✗ Sai rồi! Đáp án đúng là: <strong>${correctKey.toUpperCase()}</strong></div>`;
      }
    }
  }

  let explanationHtml = '';
  if (isAnswered && q.explanation) {
    explanationHtml = `
      <div class="explanation-box" style="margin-top: 20px;">
        <strong>💡 Mẹo nhớ / Giải thích:</strong>
        <pre class="explanation-text">${escapeHtml(q.explanation)}</pre>
      </div>
    `;
  }

  qContainer.innerHTML = `
    <div class="q-header">
      <span class="q-number">Câu ${q.id}</span>
    </div>
    <div class="q-content">${escapeHtml(q.question).replace(/\n/g, '<br>')}</div>
    ${imageHtml}
    ${contentHtml}
    ${explanationHtml}
  `;

  if (isFillIn && !isAnswered) {
    setTimeout(() => {
      const input = document.getElementById('fill-input');
      if (input) input.focus();
    }, 50);
  }
}

// User interactions in Quiz
function selectSingleOption(selectedKey) {
  if (quizState.userAnswers[quizState.currentIndex]) return; // Already answered
  
  const q = currentChapterData.questions[quizState.currentIndex];
  const correctKey = q.correct_answer.trim().toLowerCase();
  const isCorrect = (selectedKey === correctKey);

  quizState.userAnswers[quizState.currentIndex] = {
    answered: true,
    selected: selectedKey,
    isCorrect: isCorrect
  };

  if (isCorrect) quizState.score.correct++;
  else quizState.score.wrong++;

  renderQuizNav();
  renderCurrentQuestion();
}

let tempMultiSelected = [];
function toggleMultiSelectOption(key) {
  if (quizState.userAnswers[quizState.currentIndex]) return;
  const idx = tempMultiSelected.indexOf(key);
  if (idx > -1) tempMultiSelected.splice(idx, 1);
  else tempMultiSelected.push(key);

  const chk = document.getElementById('chk_' + key);
  if (chk) chk.checked = tempMultiSelected.includes(key);
}

function submitMultiAnswer() {
  if (quizState.userAnswers[quizState.currentIndex]) return;
  const q = currentChapterData.questions[quizState.currentIndex];
  const correctKeys = q.correct_answer.split(',').map(s => s.trim().toLowerCase()).sort();
  const userKeys = [...tempMultiSelected].sort();

  const isCorrect = JSON.stringify(correctKeys) === JSON.stringify(userKeys);

  quizState.userAnswers[quizState.currentIndex] = {
    answered: true,
    selected: [...tempMultiSelected],
    isCorrect: isCorrect
  };

  if (isCorrect) quizState.score.correct++;
  else quizState.score.wrong++;

  tempMultiSelected = [];
  renderQuizNav();
  renderCurrentQuestion();
}

function submitFillAnswer() {
  if (quizState.userAnswers[quizState.currentIndex]) return;
  const input = document.getElementById('fill-input');
  if (!input) return;
  const userText = input.value.trim();
  if (!userText) {
    alert('Vui lòng nhập câu trả lời!');
    return;
  }

  const q = currentChapterData.questions[quizState.currentIndex];
  const cleanCorrect = q.correct_answer.toLowerCase().replace(/\s+/g, '');
  const cleanUser = userText.toLowerCase().replace(/\s+/g, '');
  const isCorrect = (cleanCorrect === cleanUser);

  quizState.userAnswers[quizState.currentIndex] = {
    answered: true,
    selected: userText,
    isCorrect: isCorrect
  };

  if (isCorrect) quizState.score.correct++;
  else quizState.score.wrong++;

  renderQuizNav();
  renderCurrentQuestion();
}

function nextQuestion() {
  if (quizState.currentIndex < currentChapterData.questions.length - 1) {
    tempMultiSelected = [];
    quizState.currentIndex++;
    renderQuizNav();
    renderCurrentQuestion();
  }
}

function prevQuestion() {
  if (quizState.currentIndex > 0) {
    tempMultiSelected = [];
    quizState.currentIndex--;
    renderQuizNav();
    renderCurrentQuestion();
  }
}

function resetQuiz() {
  if (confirm('Bạn có chắc muốn làm lại bài từ đầu không?')) {
    quizState = {
      currentIndex: 0,
      userAnswers: {},
      score: { correct: 0, wrong: 0 }
    };
    tempMultiSelected = [];
    renderQuizNav();
    renderCurrentQuestion();
  }
}

function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// Init
document.addEventListener('DOMContentLoaded', () => {
  renderHomeScreen();
});
