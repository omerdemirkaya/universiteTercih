import { useParams } from 'react-router-dom';
import data from './content.json'; // Öneri verilerini içe aktar
import './DepContent.css'; // CSS dosyasını içe aktar

const DepContent = () => {
  const { departmentName } = useParams();

  // URL'deki formatı JSON'daki formatla karşılaştırmak için normalizasyon fonksiyonu
  const normalize = (str) =>
    str
      .toLowerCase()
      .replace(/ç/g, 'c')
      .replace(/ğ/g, 'g')
      .replace(/ı/g, 'i')
      .replace(/ö/g, 'o')
      .replace(/ş/g, 's')
      .replace(/ü/g, 'u')
      .replace(/[^a-z0-9]/g, '') // Boşlukları ve özel karakterleri kaldır
      .replace(/-/g, ''); // URL'deki tırnakları kaldır

  // Bölüm adına göre bölümü bul
  const department = data.departments.find(
    (dept) => normalize(dept.name) === normalize(departmentName)
  );

  if (!department) {
    return <div className="dep-content-container">Bölüm bulunamadı.</div>;
  }

  return (
    <div className="full-page-container">
      <div className="dep-content-container">
        <h2 className="dep-content-title">Bölüm Ders İçerikleri</h2>
        <h3>{department.name}</h3>
        <ul className="courses-list">
          {department.courses.map((course, idx) => (
            <li key={idx}>
              <strong>{course.name}</strong>: {course.description}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DepContent;
