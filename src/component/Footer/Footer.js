import "./Footer.scss";
const Footer = () => {
    return (

        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    {/* Logo + Subscription */}
                    <div className="footer-section footer-logo">
                        <h2>Comicola</h2>
                        <p>
                            Bạn quan tâm đến các sản phẩm văn hóa giải trí do tác giả Việt sáng tạo? Hãy để lại email ở đây và đón nhận sự bất ngờ chúng tôi dành cho các bạn.
                        </p>
                        <div className="subscribe-box">
                            <input type="email" placeholder="Your Email (required)" />
                            <button>Subscribe me</button>
                        </div>
                    </div>

                    {/* Các dự án */}
                    <div className="footer-section">
                        <h3>CÁC DỰ ÁN</h3>
                        <ul>
                            <li><a href="#">Crowdfunding</a></li>
                            <li><a href="#">Cửa hàng</a></li>
                            <li><a href="#">Nền tảng webtoon</a></li>
                        </ul>
                    </div>

                    {/* Chi tiết */}
                    <div className="footer-section">
                        <h3>CHI TIẾT</h3>
                        <ul>
                            <li><a href="#">Trang chủ</a></li>
                            <li><a href="#">Về chúng tôi</a></li>
                            <li><a href="#">Tin tức</a></li>
                            <li><a href="#">Liên hệ</a></li>
                        </ul>
                    </div>

                    {/* Mạng xã hội */}
                    <div className="footer-section">
                        <h3>MẠNG XÃ HỘI</h3>
                        <ul>
                            <li><a href="#">Facebook</a></li>
                            <li><a href="#">LinkedIn</a></li>
                            <li><a href="#">YouTube</a></li>
                        </ul>
                    </div>
                </div>

                {/* Copyright */}
                <div className="footer-bottom">
                    <p>©2021 Comicola JSC</p>
                    <ul>
                        <li><a href="#">Trang chủ</a></li>
                        <li><a href="#">Về chúng tôi</a></li>
                        <li><a href="#">Tin tức</a></li>
                        <li><a href="#">Liên hệ</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};
export default Footer;