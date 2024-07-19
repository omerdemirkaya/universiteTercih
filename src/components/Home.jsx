import "./Home.css";
import logo from "../assets/logo.png"
import { Outlet, Link } from "react-router-dom";

const Home = () => {   

  return (
    <div className="container">
        <div className="header">
            <img className="logo" src={logo} alt="" />
            <span>Bir Üniversite Tercih Meselesi</span>
        </div>
        <div className="questions">
            <div className="question-card">
                Üniversite ve Bölüm Tercihinde Nelere Dikkat Etmeliyim?
            </div>
            <div className="question-card">
                Üniversitenin kampüs olanakları nasıl?
            </div>
            <div className="question-card">
                Seçmek istediğim bölümde staj ve iş bulma olanakları nasıl?
            </div>
            <div className="question-card">
                Üniversitenin öğrenci değişim programları ve yurtdışı imkanları neler?
            </div>
            <div className="question-card">
                Bölümde hangi dersler ve konular işleniyor? Müfredat benim ilgimi çekiyor mu?
            </div>
            <div className="question-card">
                Üniversitenin barınma imkanları (yurt, kiralık evler) ve maliyetleri nasıl?
            </div>
        </div>
        <div className="methods">
            <div className="method-card">
            TERCİHLERİN
            </div>
            <div className="arrow">↓</div>
            <div className="method-card">
            BÖLÜM ANALİZ TESTİ
            </div>
            <div className="arrow">↓</div>
            <div className="method-card">
            BÖLÜMLER VE İÇERİKLERİ
            </div>
            <div className="arrow">↓</div>
            <div className="method-card">
            ALTERNATİF ÖNERİLER
            </div>
            <div className="arrow">↓</div>
            <div className="method-card">
            ÇEVRE, EKONOMİK DURUM VE BURSLAR
            </div>
            <div className="arrow">↓</div>
            <Link to="/choice">
            <button className="start-button">HAYDİ BAŞLAYALIM</button>
            </Link>
        </div>
    </div>
  );
}

export default Home;
