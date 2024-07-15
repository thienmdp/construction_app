import path from '@/constants/path'

export const sidebarData = [
  {
    id: 1,
    name: 'Dashboard',
    icon: <img src='/assets/logo.svg' alt='logo' height={24} width={24} />,
    link: path.dashboard
  },
  {
    id: 2,
    name: 'bcvh',
    icon: <img src='/assets/logo.svg' alt='logo' height={24} width={24} />,
    link: '#/dashboard/bcvh'
  },
  {
    id: 3,
    name: 'ycpd',
    icon: <img src='/assets/logo.svg' alt='logo' height={24} width={24} />,
    link: '#/dashboard/ycpd'
  }
]
export const initialChecklist1 = [
  {
    STT: '1',
    key: '1',
    NoiDung: 'Quy mô công trình',
    ChiTiet: [
      { STT: '1.1', item: 'Số tầng: Từ 9 tầng trở lên', Diem: null },
      { STT: '1.2', item: 'Chức năng: Văn phòng làm việc', Diem: null },
      { STT: '1.3', item: 'Sử dụng điều hòa trung tâm', Diem: null },
      { STT: '1.4', item: 'Hình dạng mặt bằng tầng điển hình tương tự nhau', Diem: null }
    ]
  },
  {
    STT: '2',
    key: '2',
    NoiDung: 'Thông số thiết kế, kỹ thuật',
    ChiTiet: [
      { STT: '2.1', item: 'Diện tích mặt bằng điển hình lớn', Diem: null },
      { STT: '2.2', item: 'Phân bố không gian chức năng bên trong', Diem: null },
      { STT: '2.3', item: 'Chiều cao thông thủy phù hợp', Diem: null },
      { STT: '2.4', item: 'Thiết kế hệ thống điều hòa trung tâm', Diem: null },
      { STT: '2.5', item: 'Tỷ lệ đặc - rỗng của lớp vỏ bao che', Diem: null },
      { STT: '2.6', item: 'Thiết kế chiếu sáng tự nhiên', Diem: null },
      { STT: '2.7', item: 'Sử dụng giải pháp thụ động để làm mát', Diem: null },
      { STT: '2.8', item: 'Sử dụng thông gió tự nhiên', Diem: null },
      { STT: '2.9', item: 'Sử dụng kết cấu che nắng', Diem: null }
    ]
  },
  {
    STT: '3',
    key: '3',
    NoiDung: 'Những vấn đề bất cập',
    ChiTiet: [
      { STT: '3.1', item: 'Mức tiêu thụ năng lượng rất lớn', Diem: null },
      { STT: '3.2', item: 'Không tận dụng được chiếu sáng tự nhiên dù tiềm năng là rất lớn', Diem: null },
      { STT: '3.3', item: 'Không tổ chức thông gió tự nhiên để làm mát công trình', Diem: null },
      { STT: '3.4', item: 'Không sử dụng giải pháp năng lượng áp mái cho công trình', Diem: null },
      { STT: '3.5', item: 'Khả năng cách nhiệt của lớp vỏ bao che là rất thấp', Diem: null },
      { STT: '3.6', item: 'Sử dụng nhiều kính cho lớp vỏ bao che', Diem: null },
      { STT: '3.7', item: 'Không có giải pháp che nắng hiệu quả', Diem: null }
    ]
  }
]
export const initialChecklist2 = [
  {
    STT: '1',
    NoiDung: 'Sự thích ứng với khí hậu địa phương',
    ChiTiet: [
      { STT: '1.1', item: 'Hướng công trình được lựa chọn theo hướng tốt', Diem: null },
      { STT: '1.2', item: 'Có hệ thống che nắng cho các hướng khác nhau', Diem: null },
      { STT: '1.3', item: 'Tận dụng được gió mát tại địa phương', Diem: null },
      { STT: '1.4', item: 'Có lớp vật liệu cách nhiệt hiệu quả cho kết cấu bao che', Diem: null },
      { STT: '1.5', item: 'Tận dụng nước mưa và xử lý nước thải hiệu quả', Diem: null },
      { STT: '1.6', item: 'Có giải pháp tận dụng chiếu sáng tự nhiên hiệu quả', Diem: null },
      { STT: '1.7', item: 'Tạo môi trường vi khí hậu tốt cho không gian công trình', Diem: null },
      { STT: '1.8', item: 'Không tạo các hiệu ứng không tốt về vi khí hậu: Hiệu ứng nhà kính, khối nhiệt', Diem: null },
      { STT: '1.9', item: 'Có khả năng thông gió tự nhiên xuyên phòng', Diem: null },
      { STT: '1.10', item: 'Có kết hợp sử dụng năng lượng sạch', Diem: null }
    ],
    key: '1'
  },
  {
    STT: '2',
    NoiDung: 'Đáp ứng Chiến lược về hiệu quả năng lượng',
    ChiTiet: [
      { STT: '2.1', item: 'Áp dụng các yêu cầu của chiến lược quốc gia về hiệu quả năng lượng', Diem: null },
      { STT: '2.2', item: 'Có giải pháp tận dụng năng lượng sạch cho công trình', Diem: null },
      {
        STT: '2.3',
        item: 'Có sự quản lý hiệu quả về sử dụng năng lượng cho toàn công trình và quá trình vận hành',
        Diem: null
      },
      { STT: '2.4', item: 'Các giải pháp tiết kiệm năng lượng cụ thể', Diem: null },
      { STT: '2.5', item: 'Có sự phân vùng cụ thể cho điều hòa và kết hợp chiếu sáng nhân tạo', Diem: null },
      { STT: '2.6', item: 'Sử dụng vật liệu, màu sắc hiệu quả', Diem: null }
    ],
    key: '2'
  },
  {
    STT: '3',
    NoiDung: 'Phù hợp với cơ chế, chính sách',
    ChiTiet: [
      { STT: '3.1', item: 'Đáp ứng các tiêu chuẩn của công trình xanh và thích ứng khí hậu địa phương', Diem: null },
      { STT: '3.2', item: 'Đáp ứng các tiêu chuẩn về chiều cao công trình, chiều cao tầng', Diem: null },
      { STT: '3.3', item: 'Đáp ứng các tiêu chuẩn về mức phát thải carbon của vật liệu', Diem: null },
      { STT: '3.4', item: 'Có sự quản lý xây dựng và vận hành công trình hiệu quả', Diem: null }
    ],
    key: '3'
  }
]
export const initialChecklist3 = [
  {
    STT: '1',
    NoiDung: 'Thông gió tự nhiên',
    ChiTiet: [
      {
        STT: '1',
        item: 'Thiết kế hình khối nhà đảm bảo tối ưu thông gió tự nhiên',
        Diem1: null,
        Diem2: null,
        Diem3: null,
        total: null
      },
      {
        STT: '2',
        item: 'Tăng diện tích tiếp xúc của công trình với hướng gió tốt',
        Diem1: null,
        Diem2: null,
        Diem3: null,
        total: null
      },
      {
        STT: '3',
        item: 'Giải pháp tổ chức không gian đảm bảo TGTN theo phương ngang',
        Diem1: null,
        Diem2: null,
        Diem3: null,
        total: null
      },
      {
        STT: '4',
        item: 'Giải pháp tổ chức không gian đảm bảo TGTN theo phương đứng',
        Diem1: null,
        Diem2: null,
        Diem3: null,
        total: null
      },
      { STT: '5', item: 'Công trình quay về hướng gió tốt', Diem1: null, Diem2: null, Diem3: null, total: null },
      {
        STT: '6',
        item: 'Có giải pháp hạn chế tác động của hướng gió bất lợi',
        Diem1: null,
        Diem2: null,
        Diem3: null,
        total: null
      },
      {
        STT: '7',
        item: 'Giải pháp vị trí cửa đón gió và thoát gió đảm bảo TGTN',
        Diem1: null,
        Diem2: null,
        Diem3: null,
        total: null
      },
      {
        STT: '8',
        item: 'Diện tích cửa đảm bảo thông gió tự nhiên',
        Diem1: null,
        Diem2: null,
        Diem3: null,
        total: null
      },
      {
        STT: '9',
        item: 'Giải pháp kiểm soát thông gió tự nhiên',
        Diem1: null,
        Diem2: null,
        Diem3: null,
        total: null
      },
      {
        STT: '10',
        item: 'Giải pháp tăng cường hiệu quả thông gió',
        Diem1: null,
        Diem2: null,
        Diem3: null,
        total: null
      }
    ],
    key: '1'
  },
  {
    STT: '2',
    NoiDung: 'Chiếu sáng tự nhiên',
    ChiTiet: [
      {
        STT: '11',
        item: 'Sử dụng ánh sáng tán xạ để chiếu sáng tự nhiên',
        Diem1: null,
        Diem2: null,
        Diem3: null,
        total: null
      },
      {
        STT: '12',
        item: 'Đảm bảo đồng đều độ rọi trên mặt phẳng làm việc',
        Diem1: null,
        Diem2: null,
        Diem3: null,
        total: null
      },
      {
        STT: '13',
        item: 'Hướng cửa lấy sáng mở về hướng Bắc/Nam',
        Diem1: null,
        Diem2: null,
        Diem3: null,
        total: null
      },
      {
        STT: '14',
        item: "Giải pháp 'lọc' ánh sáng cho hướng chiếu sáng bất lợi (có trực xạ)",
        Diem1: null,
        Diem2: null,
        Diem3: null,
        total: null
      },
      {
        STT: '15',
        item: 'Diện tích cửa lấy sáng đảm bảo CSTN (Scs≈1/5Ss)',
        Diem1: null,
        Diem2: null,
        Diem3: null,
        total: null
      },
      {
        STT: '16',
        item: 'Sử dụng cửa băng, cửa liên tục để đảm bảo đồng đều độ rọi trên mặt phẳng làm việc',
        Diem1: null,
        Diem2: null,
        Diem3: null,
        total: null
      },
      {
        STT: '17',
        item: 'Ưu tiên bố trí các không gian chính ở vị trí tốt về CSTN',
        Diem1: null,
        Diem2: null,
        Diem3: null,
        total: null
      },
      {
        STT: '18',
        item: 'Tổ chức thêm các không gian mở để tăng cường CSTN (sân trong, giếng trời)',
        Diem1: null,
        Diem2: null,
        Diem3: null,
        total: null
      },
      {
        STT: '19',
        item: 'Sử dụng vật liệu kính để lấy sáng tự nhiên',
        Diem1: null,
        Diem2: null,
        Diem3: null,
        total: null
      },
      {
        STT: '20',
        item: 'Kết hợp sử dụng kết cấu che nắng cho kính nếu bị nắng chiếu trực tiếp',
        Diem1: null,
        Diem2: null,
        Diem3: null,
        total: null
      }
    ],
    key: '2'
  },
  {
    STT: '3',
    NoiDung: 'Điều hòa không khí',
    ChiTiet: [
      {
        STT: '21',
        item: 'Tổ chức thông gió tự nhiên vào một số thời điểm thích hợp',
        Diem1: null,
        Diem2: null,
        Diem3: null,
        total: null
      },
      {
        STT: '22',
        item: 'Sử dụng thêm quạt để tăng vận tốc gió trong thời gian sử dụng ĐH',
        Diem1: null,
        Diem2: null,
        Diem3: null,
        total: null
      },
      {
        STT: '23',
        item: 'Hạn chế lượng nhiệt tác động vào bên trong qua lớp vỏ',
        Diem1: null,
        Diem2: null,
        Diem3: null,
        total: null
      },
      { STT: '24', item: 'Che nắng cho lớp vỏ', Diem1: null, Diem2: null, Diem3: null, total: null },
      {
        STT: '25',
        item: 'Thiết kế không gian với kích thước tối ưu',
        Diem1: null,
        Diem2: null,
        Diem3: null,
        total: null
      },
      {
        STT: '26',
        item: 'Phân vùng bố trí miệng thổi điều hoà hợp lý nhất',
        Diem1: null,
        Diem2: null,
        Diem3: null,
        total: null
      },
      {
        STT: '27',
        item: 'Kiểm soát sự rò rỉ không khí qua lớp vỏ',
        Diem1: null,
        Diem2: null,
        Diem3: null,
        total: null
      },
      {
        STT: '28',
        item: 'Có giải pháp cách nhiệt cho lớp vỏ bao che',
        Diem1: null,
        Diem2: null,
        Diem3: null,
        total: null
      },
      {
        STT: '29',
        item: 'Sử dụng năng lượng áp mái để làm mát công trình',
        Diem1: null,
        Diem2: null,
        Diem3: null,
        total: null
      },
      {
        STT: '30',
        item: 'Bổ sung năng lượng sạch cho hệ thống điện quốc gia (nếu dư sản lượng)',
        Diem1: null,
        Diem2: null,
        Diem3: null,
        total: null
      }
    ],
    key: '3'
  }
]
export const initialChecklist4 = [
  {
    STT: '1',
    NoiDung: 'Thông gió tự nhiên',
    ChiTiet: [
      {
        STT: '1',
        item: 'Thiết kế hình khối nhà đảm bảo tối ưu thông gió tự nhiên',
        DiemCu: 0,
        DiemMoi: null,
        MucDo: null,
        ChiPhi: null
      },
      {
        STT: '2',
        item: 'Tăng diện tích tiếp xúc của công trình với hướng gió tốt',
        DiemCu: 0,
        DiemMoi: null,
        MucDo: null,
        ChiPhi: null
      },
      {
        STT: '3',
        item: 'Giải pháp tổ chức không gian đảm bảo TGTN theo phương ngang',
        DiemCu: 0,
        DiemMoi: null,
        MucDo: null,
        ChiPhi: null
      },
      {
        STT: '4',
        item: 'Giải pháp tổ chức không gian đảm bảo TGTN theo phương đứng',
        DiemCu: 0,
        DiemMoi: null,
        MucDo: null,
        ChiPhi: null
      },
      {
        STT: '5',
        item: 'Công trình quay về hướng gió tốt',
        DiemCu: 0,
        DiemMoi: null,
        MucDo: null,
        ChiPhi: null
      },
      {
        STT: '6',
        item: 'Có giải pháp hạn chế tác động của hướng gió bất lợi',
        DiemCu: 0,
        DiemMoi: null,
        MucDo: null,
        ChiPhi: null
      },
      {
        STT: '7',
        item: 'Giải pháp vị trí cửa đón gió và thoát gió đảm bảo TGTN',
        DiemCu: 0,
        DiemMoi: null,
        MucDo: null,
        ChiPhi: null
      },
      {
        STT: '8',
        item: 'Diện tích cửa đảm bảo thông gió tự nhiên',
        DiemCu: 0,
        DiemMoi: null,
        MucDo: null,
        ChiPhi: null
      },
      {
        STT: '9',
        item: 'Giải pháp kiểm soát việc thông gió tự nhiên',
        DiemCu: 0,
        DiemMoi: null,
        MucDo: null,
        ChiPhi: null
      },
      {
        STT: '10',
        item: 'Giải pháp tăng hiệu quả thông gió tự nhiên',
        DiemCu: 0,
        DiemMoi: null,
        MucDo: null,
        ChiPhi: null
      }
    ],
    key: '1'
  },
  {
    STT: '2',
    NoiDung: 'Chiếu sáng tự nhiên',
    ChiTiet: [
      {
        STT: '11',
        item: 'Sự dụng ánh sáng tán xạ để chiếu sáng tự nhiên',
        DiemCu: 0,
        DiemMoi: null,
        MucDo: null,
        ChiPhi: null
      },
      {
        STT: '12',
        item: 'Đảm bảo đồng đều độ rọi trên mặt phẳng làm việc',
        DiemCu: 0,
        DiemMoi: null,
        MucDo: null,
        ChiPhi: null
      },
      {
        STT: '13',
        item: 'Bố trí không gian chính về hướng Bắc - Nam',
        DiemCu: 0,
        DiemMoi: null,
        MucDo: null,
        ChiPhi: null
      },
      {
        STT: '14',
        item: 'Giải pháp "lọc" ánh sáng cho hướng chiếu sáng bất lợi (có trực xạ)',
        DiemCu: 0,
        DiemMoi: null,
        MucDo: null,
        ChiPhi: null
      },
      {
        STT: '15',
        item: 'Diện tích cửa lấy sáng đảm bảo CSTN (Scs=1/5Ss)',
        DiemCu: 0,
        DiemMoi: null,
        MucDo: null,
        ChiPhi: null
      },
      {
        STT: '16',
        item: 'Sử dụng cửa băng, cửa liên tục để đảm bảo đồng đều độ rọi trên mặt phẳng làm việc',
        DiemCu: 0,
        DiemMoi: null,
        MucDo: null,
        ChiPhi: null
      },
      {
        STT: '17',
        item: 'Ưu tiên bố trí các không gian chính ở vị trí tốt về CSTN',
        DiemCu: 0,
        DiemMoi: null,
        MucDo: null,
        ChiPhi: null
      },
      {
        STT: '18',
        item: 'Tổ chức thêm các không gian mở để tăng cường CSTN (sân trong, giếng trời)',
        DiemCu: 0,
        DiemMoi: null,
        MucDo: null,
        ChiPhi: null
      },
      {
        STT: '19',
        item: 'Sử dụng vật liệu kính để lấy sáng tự nhiên',
        DiemCu: 0,
        DiemMoi: null,
        MucDo: null,
        ChiPhi: null
      },
      {
        STT: '20',
        item: 'Kết hợp sử dụng kết cấu che nắng cho kính nếu bị nắng chiếu trực tiếp',
        DiemCu: 0,
        DiemMoi: null,
        MucDo: null,
        ChiPhi: null
      }
    ],
    key: '2'
  },
  {
    STT: '3',
    NoiDung: 'Điều hòa không khí',
    ChiTiet: [
      {
        STT: '21',
        item: 'Tổ chức thông gió tự nhiên vào một số thời điểm thích hợp',
        DiemCu: 0,
        DiemMoi: null,
        MucDo: null,
        ChiPhi: null
      },
      {
        STT: '22',
        item: 'Sử dụng thêm quạt để tăng vận tốc gió trong thời gian sử dụng ĐHKK',
        DiemCu: 0,
        DiemMoi: null,
        MucDo: null,
        ChiPhi: null
      },
      {
        STT: '23',
        item: 'Hạn chế hướng nhiệt tác động vào bên trong qua lớp vỏ',
        DiemCu: 0,
        DiemMoi: null,
        MucDo: null,
        ChiPhi: null
      },
      {
        STT: '24',
        item: 'Che nắng cho lớp vỏ',
        DiemCu: 0,
        DiemMoi: null,
        MucDo: null,
        ChiPhi: null
      },
      {
        STT: '25',
        item: 'Thiết kế không gian với kích thước tối ưu',
        DiemCu: 0,
        DiemMoi: null,
        MucDo: null,
        ChiPhi: null
      },
      {
        STT: '26',
        item: 'Phân vùng bố trí nhiệt độ điều hòa hợp lý nhất',
        DiemCu: 0,
        DiemMoi: null,
        MucDo: null,
        ChiPhi: null
      },
      {
        STT: '27',
        item: 'Kiểm soát sự rò rỉ không khí qua lớp vỏ',
        DiemCu: 0,
        DiemMoi: null,
        MucDo: null,
        ChiPhi: null
      },
      {
        STT: '28',
        item: 'Có giải pháp cách nhiệt cho lớp vỏ bao che',
        DiemCu: 0,
        DiemMoi: null,
        MucDo: null,
        ChiPhi: null
      },
      {
        STT: '29',
        item: 'Sử dụng năng lượng áp mái để làm mát công trình',
        DiemCu: 0,
        DiemMoi: null,
        MucDo: null,
        ChiPhi: null
      },
      {
        STT: '30',
        item: 'Bổ sung năng lượng sạch cho hệ thống điện quốc gia (nếu dư sản lượng)',
        DiemCu: 0,
        DiemMoi: null,
        MucDo: null,
        ChiPhi: null
      }
    ],
    key: '3'
  }
]
interface SolutionDetail {
  threshold: number
  solutions: string[]
  difficulty: string
  cost: string
}

interface ImprovementSolutions {
  [key: string]: SolutionDetail[]
}
export const improvementSolutions: ImprovementSolutions = {
  'Thiết kế hình khối nhà đảm bảo tối ưu thông gió tự nhiên': [
    {
      threshold: 1,
      solutions: ['Thay đổi hình dạng khối nhà'],
      difficulty: 'Khó',
      cost: 'Nhiều'
    }
  ],
  'Tăng diện tích tiếp xúc của công trình với hướng gió tốt': [
    {
      threshold: 1,
      solutions: ["Sử dụng phương pháp 'xẻ' để tăng diện tích tiếp xúc gió tốt"],
      difficulty: 'Dễ',
      cost: 'Ít'
    }
  ],
  'Giải pháp tổ chức không gian đảm bảo TGTN theo phương ngang': [
    {
      threshold: 1,
      solutions: ['Tổ chức thông gió tự nhiên xuyên phòng'],
      difficulty: 'Dễ',
      cost: 'Không'
    }
  ],
  'Giải pháp tổ chức không gian đảm bảo TGTN theo phương đứng': [
    {
      threshold: 1,
      solutions: ['Thiết kế sân trong, giếng trời nhằm tăng cường TGTN'],
      difficulty: 'Dễ',
      cost: 'Nhiều'
    }
  ],
  'Công trình quay về hướng gió tốt': [
    {
      threshold: 1,
      solutions: ['Lựa chọn hướng công trình theo hướng gió tốt'],
      difficulty: 'Khó',
      cost: 'Không'
    }
  ],
  'Có giải pháp hạn chế tác động của hướng gió bất lợi': [
    {
      threshold: 1,
      solutions: ['Không mở cửa đón gió ở hướng gió bất lợi'],
      difficulty: 'Dễ',
      cost: 'Không'
    }
  ],
  'Giải pháp vị trí cửa đón gió và thoát gió đảm bảo TGTN': [
    {
      threshold: 1,
      solutions: ['Bố trí cửa đón gió và thoát gió lệch phía'],
      difficulty: 'Dễ',
      cost: 'Không'
    }
  ],
  'Diện tích cửa đảm bảo thông gió tự nhiên': [
    {
      threshold: 1,
      solutions: ['Tăng diện tích cửa thông gió'],
      difficulty: 'Dễ',
      cost: 'Không'
    }
  ],
  'Giải pháp kiểm soát thông gió tự nhiên': [
    {
      threshold: 1,
      solutions: ['Sử dụng kết cấu linh hoạt (có thể đóng/mở theo yêu cầu)'],
      difficulty: 'Dễ',
      cost: 'Ít'
    }
  ],
  'Giải pháp tăng cường hiệu quả thông gió': [
    {
      threshold: 1,
      solutions: ['Sử dụng thêm quạt để tăng cường lưu lượng gió thổi'],
      difficulty: 'Dễ',
      cost: 'Không'
    }
  ],
  'Sử dụng ánh sáng tán xạ để chiếu sáng tự nhiên': [
    {
      threshold: 1,
      solutions: ['Mở cửa lấy sáng (chỉ lấy ánh sáng tán xạ của bầu trời)'],
      difficulty: 'Dễ',
      cost: 'Không'
    }
  ],
  'Đảm bảo đồng đều độ rọi trên mặt phẳng làm việc': [
    {
      threshold: 2,
      solutions: ['Đảm bảo L ≤ 2H'],
      difficulty: '--',
      cost: 'Không'
    }
  ],
  'Hướng cửa lấy sáng mở về hướng Bắc/Nam': [
    {
      threshold: 1,
      solutions: ['Hướng cửa lấy sáng mở về hướng Bắc/Nam'],
      difficulty: 'Khó',
      cost: 'Không'
    }
  ],
  "Giải pháp 'lọc' ánh sáng cho hướng chiếu sáng bất lợi (có trực xạ)": [
    {
      threshold: 1,
      solutions: ['Sử dụng kết cấu che nắng để ngăn ánh sáng trực xạ, chỉ đón ánh sáng tán xạ'],
      difficulty: 'Dễ',
      cost: 'Ít'
    }
  ],
  'Diện tích cửa lấy sáng đảm bảo CSTN (Scs≈1/5Ss)': [
    {
      threshold: 1,
      solutions: ['Thiết kế cửa lấy sáng đảm bảo diện tích'],
      difficulty: 'Dễ',
      cost: 'Không'
    }
  ],
  'Sử dụng cửa băng, cửa liên tục để đảm bảo đồng đều độ rọi trên mặt phẳng làm việc': [
    {
      threshold: 1,
      solutions: ['Sử dụng cửa băng, cửa liên tục để đảm bảo đồng đều độ rọi trên mặt phẳng làm việc'],
      difficulty: 'Dễ',
      cost: 'Không'
    }
  ],
  'Ưu tiên bố trí các không gian chính ở vị trí tốt về CSTN': [
    {
      threshold: 1,
      solutions: ['Tổ chức lại không gian'],
      difficulty: 'Khó',
      cost: 'Ít'
    }
  ],
  'Tổ chức thêm các không gian mở để tăng cường CSTN (sân trong, giếng trời)': [
    {
      threshold: 1,
      solutions: ['Tổ chức thêm các không gian mở để tăng cường CSTN (sân trong, giếng trời)'],
      difficulty: 'Khó',
      cost: 'Nhiều'
    }
  ],
  'Sử dụng vật liệu kính để lấy sáng tự nhiên': [
    {
      threshold: 1,
      solutions: ['Thay thế vật liệu đặc bằng vật liệu kính'],
      difficulty: 'Dễ',
      cost: 'Không'
    }
  ],
  'Kết hợp sử dụng kết cấu che nắng cho kính nếu bị nắng chiếu trực tiếp': [
    {
      threshold: 1,
      solutions: ['Bổ sung kết cấu che nắng cho phần kính bị nắng chiếu trực tiếp'],
      difficulty: 'Dễ',
      cost: 'Ít'
    }
  ],
  'Tổ chức thông gió tự nhiên vào một số thời điểm thích hợp': [
    {
      threshold: 1,
      solutions: ['Sử dụng hệ thống điều khiển đóng/mở cửa thông gió'],
      difficulty: 'Dễ',
      cost: 'Ít'
    }
  ],
  'Sử dụng thêm quạt để tăng vận tốc gió trong thời gian sử dụng ĐH': [
    {
      threshold: 1,
      solutions: ['Bố trí thêm hệ thống quạt cho các không gian chính'],
      difficulty: 'Dễ',
      cost: 'Ít'
    }
  ],
  'Hạn chế lượng nhiệt tác động vào bên trong qua lớp vỏ': [
    {
      threshold: 1,
      solutions: ['Dùng vật liệu cách nhiệt hoặc giải pháp "tránh" BXMT'],
      difficulty: 'Dễ',
      cost: 'Ít'
    }
  ],

  'Che nắng cho lớp vỏ': [
    {
      threshold: 1,
      solutions: ['Bổ sung kết cấu che nắng bên ngoài'],
      difficulty: 'Dễ',
      cost: 'Ít'
    }
  ],
  'Thiết kế không gian với kích thước tối ưu': [
    {
      threshold: 1,
      solutions: ['Phân bố lại không gian "đều" nhất'],
      difficulty: 'Dễ',
      cost: 'Không'
    }
  ],
  'Phân vùng bố trí miệng thổi điều hoà hợp lý nhất': [
    {
      threshold: 1,
      solutions: ['Bố trí lại bố trí miệng thổi điều hoà'],
      difficulty: 'Dễ',
      cost: 'Không'
    }
  ],
  'Kiểm soát sự rò rỉ không khí qua lớp vỏ': [
    {
      threshold: 1,
      solutions: ['Thi công đảm bảo không rò rỉ không khí'],
      difficulty: 'Dễ',
      cost: 'Không'
    }
  ],
  'Có giải pháp cách nhiệt cho lớp vỏ bao che': [
    {
      threshold: 1,
      solutions: ['Bổ sung vật liệu cách nhiệt cho lớp vỏ'],
      difficulty: 'Dễ',
      cost: 'Ít'
    }
  ],
  'Sử dụng năng lượng áp mái để làm mát công trình': [
    {
      threshold: 1,
      solutions: ['Lắp đặt năng lượng áp mái cho công trình'],
      difficulty: 'Dễ',
      cost: 'Nhiều'
    }
  ],
  'Bổ sung năng lượng sạch cho hệ thống điện quốc gia (nếu dư sản lượng)': [
    {
      threshold: 1,
      solutions: ['Lắp đặt hệ thống kiểm soát điện 2 chiều với lưới điện quốc gia'],
      difficulty: 'Dễ',
      cost: 'Ít'
    }
  ]
}
