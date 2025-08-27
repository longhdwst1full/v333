import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Globe, Shield, Zap, Users, Database, Star, Phone, Mail, MapPin } from "lucide-react"

export default function HDFutureTechLanding() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 flex h-16 items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="text-2xl font-bold text-blue-600">HD</div>
            <span className="text-lg font-semibold text-gray-800">FUTURE TECH</span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">
              HOME
            </a>
            <a href="#about" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">
              VỀ CHÚNG TÔI
            </a>
            <a href="#services" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">
              DỊCH VỤ
            </a>
            <a href="#contact" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">
              LIÊN HỆ
            </a>
          </nav>

          <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6">Liên hệ ngay</Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <span className="text-3xl font-bold">HD FUTURE TECH</span>
              <p className="text-lg mt-2 opacity-90">Công nghệ tương lai</p>
            </div>

            <div className="relative mx-auto w-96 h-64 mb-8">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full opacity-20"></div>
              <Globe className="w-full h-full text-blue-200 opacity-60" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-80 h-48 bg-gradient-to-r from-blue-300 to-blue-500 rounded-lg opacity-30"></div>
              </div>
            </div>

            <Button className="bg-white text-blue-600 hover:bg-gray-100 rounded-full px-8 py-3 font-semibold">
              Khám phá ngay
            </Button>
          </div>
        </div>

        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/90 to-blue-800/90"></div>
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-20 left-20 w-32 h-32 bg-white rounded-full opacity-20"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 bg-white rounded-full opacity-15"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white rounded-full opacity-10"></div>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-8xl font-bold text-blue-600 mb-4">HD</div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">HD Future Tech</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Chúng tôi là công ty công nghệ hàng đầu, chuyên cung cấp các giải pháp công nghệ tiên tiến cho doanh
                nghiệp. Với đội ngũ chuyên gia giàu kinh nghiệm và công nghệ hiện đại, chúng tôi cam kết mang đến những
                sản phẩm chất lượng cao.
              </p>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6">Tìm hiểu thêm</Button>
            </div>
            <div className="relative">
              <div className="w-full h-80 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg flex items-center justify-center">
                <div className="relative">
                  <div className="w-32 h-32 bg-blue-600 rounded-lg transform rotate-12 opacity-80"></div>
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-400 rounded-lg transform -rotate-12"></div>
                  <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-blue-300 rounded-lg transform rotate-45"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workflow Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Take a look at
              <br />
              Our Workflow About Us
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200"></div>

              {/* Timeline items */}
              <div className="space-y-16">
                <div className="flex items-center">
                  <div className="w-1/2 pr-8 text-right">
                    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                      <div className="text-blue-600 font-bold text-lg mb-2">2023</div>
                      <p className="text-gray-600">
                        Khởi đầu với tầm nhìn mang công nghệ tiên tiến đến gần hơn với doanh nghiệp Việt Nam
                      </p>
                    </div>
                  </div>
                  <div className="w-4 h-4 bg-blue-600 rounded-full relative z-10"></div>
                  <div className="w-1/2 pl-8"></div>
                </div>

                <div className="flex items-center">
                  <div className="w-1/2 pr-8"></div>
                  <div className="w-4 h-4 bg-blue-600 rounded-full relative z-10"></div>
                  <div className="w-1/2 pl-8">
                    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                      <div className="text-blue-600 font-bold text-lg mb-2">2024</div>
                      <p className="text-gray-600">Mở rộng quy mô và phát triển các sản phẩm công nghệ đột phá</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-1/2 pr-8 text-right">
                    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                      <div className="text-blue-600 font-bold text-lg mb-2">2025</div>
                      <p className="text-gray-600">Trở thành đối tác công nghệ tin cậy của hàng nghìn doanh nghiệp</p>
                    </div>
                  </div>
                  <div className="w-4 h-4 bg-blue-600 rounded-full relative z-10"></div>
                  <div className="w-1/2 pl-8"></div>
                </div>

                <div className="flex items-center">
                  <div className="w-1/2 pr-8"></div>
                  <div className="w-4 h-4 bg-gray-300 rounded-full relative z-10"></div>
                  <div className="w-1/2 pl-8">
                    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                      <div className="text-gray-400 font-bold text-lg mb-2">2026</div>
                      <p className="text-gray-400">Tiếp tục đổi mới và phát triển bền vững</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fun OTP Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-12 text-center relative overflow-hidden">
              <div className="relative z-10">
                <h2 className="text-3xl font-bold text-blue-800 mb-4">Fun OTP</h2>
                <p className="text-blue-600 text-lg mb-8">
                  Giải pháp xác thực OTP thông minh và bảo mật cao cho doanh nghiệp
                </p>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8">Khám phá ngay</Button>
              </div>

              {/* Cloud decorations */}
              <div className="absolute top-4 right-8 w-16 h-10 bg-blue-200 rounded-full opacity-60"></div>
              <div className="absolute top-8 right-20 w-12 h-8 bg-blue-300 rounded-full opacity-40"></div>
              <div className="absolute bottom-4 left-8 w-20 h-12 bg-blue-200 rounded-full opacity-50"></div>
              <div className="absolute bottom-8 left-24 w-14 h-9 bg-blue-300 rounded-full opacity-30"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              VÌ SAO HD FUTURE TECH LÀ LỰA CHỌN HÀNG ĐẦU
              <br />
              CỦA CÁC DOANH NGHIỆP?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-gradient-to-br from-blue-600 to-blue-700 text-white border-0 hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-2">BẢO MẬT TUYỆT ĐỐI</h3>
                <p className="text-blue-100 text-sm">Hệ thống bảo mật đa lớp với công nghệ mã hóa tiên tiến</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white border-0 hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-2">HIỆU SUẤT CAO</h3>
                <p className="text-blue-100 text-sm">Tối ưu hóa hiệu suất với công nghệ AI và Machine Learning</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-600 to-purple-700 text-white border-0 hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-2">HỖ TRỢ 24/7</h3>
                <p className="text-purple-100 text-sm">Đội ngũ chuyên gia sẵn sàng hỗ trợ mọi lúc mọi nơi</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-600 to-blue-700 text-white border-0 hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Database className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-2">DỮ LIỆU AN TOÀN</h3>
                <p className="text-blue-100 text-sm">Lưu trữ và xử lý dữ liệu với độ tin cậy cao</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white border-0 hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-2">TOÀN CẦU HÓA</h3>
                <p className="text-blue-100 text-sm">Kết nối toàn cầu với hạ tầng công nghệ hiện đại</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">TESTIMONIAL</h2>
            <p className="text-gray-600">Khách hàng nói gì về chúng tôi</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <Card key={item} className="border border-gray-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                      <Users className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">Khách hàng {item}</p>
                      <p className="text-sm text-gray-500">Giám đốc công ty</p>
                    </div>
                  </div>
                  <div className="flex items-center mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 text-sm">
                    "HD Future Tech đã giúp công ty chúng tôi chuyển đổi số thành công. Dịch vụ chuyên nghiệp và hiệu
                    quả vượt mong đợi."
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white relative overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              SẴN SÀNG CHUYỂN ĐỔI SỐ
              <br />
              DOANH NGHIỆP CỦA BẠN?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Hãy để HD Future Tech đồng hành cùng bạn trên con đường phát triển
            </p>

            <div className="relative mx-auto w-80 h-48 mb-8">
              <Globe className="w-full h-full text-blue-200 opacity-40" />
            </div>

            <Button className="bg-white text-blue-600 hover:bg-gray-100 rounded-full px-8 py-3 font-semibold">
              Liên hệ tư vấn
            </Button>
          </div>
        </div>

        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-20 left-20 w-32 h-32 bg-white rounded-full opacity-20"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 bg-white rounded-full opacity-15"></div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                GỬI YÊU CẦU TƯ VẤN
                <br />
                VÀ BÁO GIÁ TỪ CHÚNG TÔI
              </h2>
              <p className="text-gray-600 mb-8">
                Điền thông tin vào form bên cạnh, chúng tôi sẽ liên hệ tư vấn trong 24h
              </p>

              <div className="relative">
                <div className="w-full h-64 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg flex items-center justify-center">
                  <div className="relative">
                    <div className="w-24 h-24 bg-blue-600 rounded-lg transform rotate-12 opacity-80"></div>
                    <div className="absolute -top-2 -right-2 w-16 h-16 bg-blue-400 rounded-lg transform -rotate-12"></div>
                    <div className="absolute -bottom-2 -left-2 w-12 h-12 bg-blue-300 rounded-lg transform rotate-45"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <form className="space-y-6">
                <div>
                  <Input placeholder="Họ và tên *" className="border-gray-300 focus:border-blue-500" />
                </div>
                <div>
                  <Input placeholder="Email *" type="email" className="border-gray-300 focus:border-blue-500" />
                </div>
                <div>
                  <Input placeholder="Số điện thoại *" className="border-gray-300 focus:border-blue-500" />
                </div>
                <div>
                  <Input placeholder="Tên công ty" className="border-gray-300 focus:border-blue-500" />
                </div>
                <div>
                  <Textarea
                    placeholder="Nội dung yêu cầu *"
                    rows={4}
                    className="border-gray-300 focus:border-blue-500"
                  />
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3">Gửi yêu cầu</Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="text-2xl font-bold">HD</div>
                <span className="text-lg font-semibold">FUTURE TECH</span>
              </div>
              <p className="text-blue-200 mb-4">Đối tác công nghệ tin cậy cho doanh nghiệp hiện đại</p>
              <div className="flex space-x-4">
                <a href="#" className="text-blue-200 hover:text-white">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
                <a href="#" className="text-blue-200 hover:text-white">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                  </svg>
                </a>
                <a href="#" className="text-blue-200 hover:text-white">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Dịch vụ</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-blue-200 hover:text-white">
                    Phát triển phần mềm
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-200 hover:text-white">
                    Tư vấn công nghệ
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-200 hover:text-white">
                    Chuyển đổi số
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-200 hover:text-white">
                    Bảo mật thông tin
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Công ty</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-blue-200 hover:text-white">
                    Về chúng tôi
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-200 hover:text-white">
                    Tin tức
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-200 hover:text-white">
                    Tuyển dụng
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-200 hover:text-white">
                    Đối tác
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Liên hệ</h3>
              <ul className="space-y-2">
                <li className="flex items-center text-blue-200">
                  <Phone className="w-4 h-4 mr-2" />
                  <span>+84 123 456 789</span>
                </li>
                <li className="flex items-center text-blue-200">
                  <Mail className="w-4 h-4 mr-2" />
                  <span>info@hdfuturetech.com</span>
                </li>
                <li className="flex items-center text-blue-200">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>Hà Nội, Việt Nam</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-blue-700 mt-8 pt-8 text-center">
            <p className="text-blue-200">© 2024 HD Future Tech. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
