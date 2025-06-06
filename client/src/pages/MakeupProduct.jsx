import React, { useState, useEffect, useRef, useContext } from 'react';
import './MakeupProduct.css';
import { AuthContext } from '../context/AuthContext';
import { CartContext } from '../context/CartContext';

const MakeupProduct = () => {
  const {  language, changeLanguage } = useContext(AuthContext);
  const { addToCart } = useContext(CartContext);
  
  
  
  const [cameraModalVisible, setCameraModalVisible] = useState(false);
  
  
  const [activePage, setActivePage] = useState(1);
  
 
  const [wishlistItems, setWishlistItems] = useState([]);
  
  
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [detailModalVisible, setDetailModalVisible] = useState(false);
  
  
  const videoRef = useRef(null);
  const streamRef = useRef(null);

  
  const translations = {
    en: {
      "Home": "Home",
      "Wishlist": "Wishlist",
      "Basket": "Basket",
      "Sign In": "Sign In",
      "Search for products, brands...": "Search for products, brands...",
      "New": "New",
      "Makeup": "Makeup",
      "Skincare": "Skincare",
      "Fragrance": "Fragrance",
      "Hair": "Hair",
      "Tools": "Tools",
      "Makeup Collection": "Makeup Collection",
      "Discover our wide range of high-quality makeup products from top brands. From foundation to lipstick, find everything you need to create your perfect look.": "Discover our wide range of high-quality makeup products from top brands. From foundation to lipstick, find everything you need to create your perfect look.",
      "Categories": "Categories",
      "Face": "Face",
      "Eyes": "Eyes",
      "Lips": "Lips",
      "Cheeks": "Cheeks",
      "Sets": "Sets",
      "Filter": "Filter",
      "Brand": "Brand",
      "Price": "Price",
      "Rating": "Rating",
      "Type": "Type",
      "Sort by: Featured": "Sort by: Featured",
      "Showing": "Showing",
      "of": "of",
      "products": "products",
      "BESTSELLER": "BESTSELLER",
      "NEW": "NEW",
      "SALE": "SALE",
      "Add to Cart": "Add to Cart",
      "Prev": "Prev",
      "Next": "Next",
      "Featured Brands": "Featured Brands",
      "Customer Service": "Customer Service",
      "Contact Us": "Contact Us",
      "FAQ": "FAQ",
      "Shipping & Returns": "Shipping & Returns",
      "Order Tracking": "Order Tracking",
      "About Us": "About Us",
      "Our Story": "Our Story",
      "Careers": "Careers",
      "Press": "Press",
      "Sustainability": "Sustainability",
      "Resources": "Resources",
      "Beauty Blog": "Beauty Blog",
      "Makeup Tutorials": "Makeup Tutorials",
      "Foundation Guide": "Foundation Guide",
      "Skincare Routine": "Skincare Routine",
      "Connect With Us": "Connect With Us",
      "All rights reserved.": "All rights reserved.",
      "Find Your Perfect Match": "Find Your Perfect Match",
      "Take a photo of your skin to find foundation matches": "Take a photo of your skin to find foundation matches",
      "Take Photo": "Take Photo",
      "Description": "Description"
    },
    ru: {
      "Home": "Главная",
      "Wishlist": "Избранное",
      "Basket": "Корзина",
      "Sign In": "Войти",
      "Search for products, brands...": "Поиск товаров, брендов...",
      "New": "Новинки",
      "Makeup": "Макияж",
      "Skincare": "Уход за кожей",
      "Fragrance": "Ароматы",
      "Hair": "Волосы",
      "Tools": "Инструменты",
      "Makeup Collection": "Коллекция макияжа",
      "Discover our wide range of high-quality makeup products from top brands. From foundation to lipstick, find everything you need to create your perfect look.": "Откройте для себя широкий ассортимент высококачественных продуктов для макияжа от ведущих брендов. От тональной основы до помады - найдите все необходимое для создания идеального образа.",
      "Categories": "Категории",
      "Face": "Лицо",
      "Eyes": "Глаза",
      "Lips": "Губы",
      "Cheeks": "Щёки",
      "Sets": "Наборы",
      "Filter": "Фильтр",
      "Brand": "Бренд",
      "Price": "Цена",
      "Rating": "Рейтинг",
      "Type": "Тип",
      "Sort by: Featured": "Сортировать: Рекомендуемые",
      "Showing": "Показано",
      "of": "из",
      "products": "товаров",
      "BESTSELLER": "БЕСТСЕЛЛЕР",
      "NEW": "НОВИНКА",
      "SALE": "СКИДКА",
      "Add to Cart": "В корзину",
      "Prev": "Назад",
      "Next": "Вперед",
      "Featured Brands": "Популярные бренды",
      "Customer Service": "Обслуживание клиентов",
      "Contact Us": "Связаться с нами",
      "FAQ": "Частые вопросы",
      "Shipping & Returns": "Доставка и возврат",
      "Order Tracking": "Отслеживание заказа",
      "About Us": "О нас",
      "Our Story": "Наша история",
      "Careers": "Карьера",
      "Press": "Пресса",
      "Sustainability": "Устойчивое развитие",
      "Resources": "Ресурсы",
      "Beauty Blog": "Бьюти-блог",
      "Makeup Tutorials": "Уроки макияжа",
      "Foundation Guide": "Руководство по тональным основам",
      "Skincare Routine": "Уход за кожей",
      "Connect With Us": "Связаться с нами",
      "All rights reserved.": "Все права защищены.",
      "Find Your Perfect Match": "Найдите свой идеальный тон",
      "Take a photo of your skin to find foundation matches": "Сделайте фото вашей кожи, чтобы найти подходящие тональные основы",
      "Take Photo": "Сделать фото",
      "Description": "Описание"
    },
    uz: {
      "Home": "Bosh sahifa",
      "Wishlist": "Sevimlilar",
      "Basket": "Savatcha",
      "Sign In": "Kirish",
      "Search for products, brands...": "Mahsulotlar, brendlarni qidirish...",
      "New": "Yangi",
      "Makeup": "Pardoz",
      "Skincare": "Teri parvarishi",
      "Fragrance": "Atirlar",
      "Hair": "Soch",
      "Tools": "Asboblar",
      "Makeup Collection": "Pardoz to'plami",
      "Discover our wide range of high-quality makeup products from top brands. From foundation to lipstick, find everything you need to create your perfect look.": "Yuqori brendlardan sifatli pardoz mahsulotlarining keng assortimentini kashf eting. Tonal asosdan labga bo'yoqgacha - mukammal ko'rinish yaratish uchun kerak bo'lgan hamma narsani toping.",
      "Categories": "Kategoriyalar",
      "Face": "Yuz",
      "Eyes": "Ko'zlar",
      "Lips": "Lablar",
      "Cheeks": "Yonoqlar",
      "Sets": "To'plamlar",
      "Filter": "Filtr",
      "Brand": "Brend",
      "Price": "Narx",
      "Rating": "Reyting",
      "Type": "Turi",
      "Sort by: Featured": "Saralash: Tavsiya etilgan",
      "Showing": "Ko'rsatilmoqda",
      "of": "dan",
      "products": "mahsulotlar",
      "BESTSELLER": "ENG KO'P SOTILGAN",
      "NEW": "YANGI",
      "SALE": "CHEGIRMA",
      "Add to Cart": "Savatchaga qo'shish",
      "Prev": "Oldingi",
      "Next": "Keyingi",
      "Featured Brands": "Mashhur brendlar",
      "Customer Service": "Mijozlar xizmati",
      "Contact Us": "Biz bilan bog'lanish",
      "FAQ": "Ko'p so'raladigan savollar",
      "Shipping & Returns": "Yetkazib berish va qaytarish",
      "Order Tracking": "Buyurtmani kuzatish",
      "About Us": "Biz haqimizda",
      "Our Story": "Bizning hikoyamiz",
      "Careers": "Karyera",
      "Press": "Matbuot",
      "Sustainability": "Barqarorlik",
      "Resources": "Resurslar",
      "Beauty Blog": "Go'zallik blogi",
      "Makeup Tutorials": "Pardoz darslari",
      "Foundation Guide": "Tonal asos bo'yicha qo'llanma",
      "Skincare Routine": "Teri parvarishi",
      "Connect With Us": "Biz bilan bog'laning",
      "All rights reserved.": "Barcha huquqlar himoyalangan.",
      "Find Your Perfect Match": "O'zingizga mos rangni toping",
      "Take a photo of your skin to find foundation matches": "Teringizga mos tonal asoslarni topish uchun teringizni suratga oling",
      "Take Photo": "Suratga olish",
      "Description": "Tavsif"
    }
  };

  
  const translate = (key) => {
    return translations[language]?.[key] || key;
  };

  
  const products = [
    {
      id: 1,
      name: "Luminous Silk Foundation",
      brand: "Giorgio Armani",
      image: "/images/luminous.png",
      rating: "★★★★★",
      ratingCount: 1245,
      price: "$64.00",
      badge: { type: "bestseller", text: "BESTSELLER" },
      description: "A lightweight, oil-free liquid foundation that delivers a luminous, glowy-skin finish. Available in 40 shades to suit all skin tones. This award-winning foundation is inspired by charmeuse silk, and features Micro-fil™ technology for a weightless texture and buildable coverage."
    },
    {
      id: 2,
      name: "Double Wear Stay-in-Place Foundation",
      brand: "Estée Lauder",
      image: "../images/doublewearstay.png",
      rating: "★★★★★",
      ratingCount: 2103,
      price: "$46.00",
      description: "This 24-hour wear foundation stays flawless through heat, humidity, and non-stop activity. Won't change color, smudge or come off on clothes. Feels lightweight and comfortable. Medium-to-full buildable coverage with a natural, matte finish."
    },
    {
      id: 3,
      name: "Born This Way Foundation",
      brand: "Too Faced",
      image: "/images/born.png",
      rating: "★★★★☆",
      ratingCount: 876,
      price: "$40.00",
      badge: { type: "new", text: "NEW" },
      description: "An oil-free foundation that provides medium-to-full coverage for a naturally flawless finish. Infused with coconut water, alpine rose, and hyaluronic acid, this foundation provides all-day hydration while looking so natural and beautiful, they'll think you were born this way."
    },
    {
      id: 4,
      name: "Soft Matte Complete Foundation",
      brand: "NARS",
      image: "../images/Softmattecomponent.png",
      rating: "★★★★☆",
      ratingCount: 542,
      price: "$42.00",
      description: "A full-coverage, natural matte foundation with 16-hour wear that resists oxidation. This foundation controls shine, blurs pores and imperfections, and is transfer-resistant, sweat-resistant, and resistant to facial oil."
    },
    {
      id: 5,
      name: "Matte Lipstick",
      brand: "MAC",
      image: "../images/mattelipstic.png",
      rating: "★★★★★",
      ratingCount: 1876,
      price: "$19.00",
      description: "A lipstick with a rich, creamy formula that features high color payoff in a no-shine matte finish. MAC's classic, iconic product loved by makeup artists and beauty enthusiasts worldwide. Available in a wide range of colors."
    },
    {
      id: 6,
      name: "Nude Eyeshadow Palette",
      brand: "Urban Decay",
      image: "/images/sheer.png",
      rating: "★★★★☆",
      ratingCount: 932,
      price: "$42.00",
      oldPrice: "$54.00",
      badge: { type: "sale", text: "SALE" },
      description: "A versatile eyeshadow palette featuring 12 neutral shades in matte, shimmer, and metallic finishes. Perfect for creating everything from subtle daytime looks to dramatic evening styles. The highly-pigmented, blendable formula delivers rich color that lasts all day."
    },
    {
      id: 7,
      name: "Better Than Sex Mascara",
      brand: "Too Faced",
      image: "../images/BetterThanSexMascara.png",
      rating: "★★★★☆",
      ratingCount: 1432,
      price: "$27.00",
      description: "This bestselling, volumizing mascara delivers full, dramatic lashes that look false-lash-level amazing. The hourglass-shaped brush was designed with extra stiff bristles to maximize the performance of the carbon black, collagen-fueled formula."
    },
    {
      id: 8,
      name: "Orgasm Blush",
      brand: "NARS",
      image: "/images/orgasm.png",
      rating: "★★★★★",
      ratingCount: 2543,
      price: "$30.00",
      description: "The #1 selling blush in the U.S. A universally flattering, natural-looking flush with a hint of golden shimmer. This award-winning powder blush delivers a sheer, buildable wash of color that suits all skin tones."
    },
    {
      id: 9,
      name: "Sheer Glow Foundation",
      brand: "NARS",
      image: "../images/sheerGlow.png",
      rating: "★★★★☆",
      ratingCount: 987,
      price: "$47.00",
      description: "A foundation with sheer, buildable coverage and a glowing finish. Brightening the skin through a powerful combination of skincare benefits and light-reflecting technology, this foundation revives dull skin for a smoother, more luminous complexion."
    },
    {
      id: 10,
      name: "Radiant Creamy Concealer",
      brand: "NARS",
      image: "/images/Radiant.png",
      rating: "★★★★★",
      ratingCount: 1654,
      price: "$30.00",
      badge: { type: "new", text: "NEW" },
      description: "A multi-award winning concealer that delivers medium-to-full coverage with a natural, radiant finish. The creamy formula smoothes and blends easily to conceal darkness under the eyes, redness, and other imperfections without creasing or settling."
    },
    {
      id: 11,
      name: "Chocolate Soleil Bronzer",
      brand: "Too Faced",
      image: "/images/Chocolate.png",
      rating: "★★★★☆",
      ratingCount: 765,
      price: "$32.00",
      description: "A long-wearing, rich matte bronzer infused with 100% real cocoa powder. This bronzer smells like chocolate, is formulated with antioxidant-rich cocoa powder, and creates a matte, never-orange contour or all-over glow."
    },
    {
      id: 12,
      name: "Becca Highlighter",
      brand: "Becca",
      image: "/images/becca.png",
      rating: "★★★★★",
      ratingCount: 1234,
      price: "$30.00",
      oldPrice: "$38.00",
      badge: { type: "sale", text: "SALE" },
      description: "A creamy, luminizing powder that creates a radiant, natural glow. The highlighter's ultra-buttery texture makes it perfect for layering and building intensity. Available in multiple shades to complement all skin tones."
    }
  ];

 
  const subcategories = [
    {
      id: 1,
      name: "Face",
      image: "/images/facemakeup.png"
    },
    {
      id: 2,
      name: "Eyes",
      image: "/images/eyemakeup.png"
    },
    {
      id: 3,
      name: "Lips",
      image: "../images/lipproduct.png"
    },
    {
      id: 4,
      name: "Cheeks",
      image: "/images/cheekproducts.png"
    },
    {
      id: 5,
      name: "Sets",
      image: "/images/makeupsets.png"
    },
    {
      id: 6,
      name: "Tools",
      image: "/images/makeuptools.png"
    }
  ];

  
  const featuredBrands = [
    {
      id: 1,
      name: "NARS",
      image: "/images/narsmakeuppage.png"
    },
    {
      id: 2,
      name: "MAC",
      image: "/images/macmakeupprodutpage.png"
    },
    {
      id: 3,
      name: "Fenty Beauty",
      image: "/images/Fenty.png"
    },
    {
      id: 4,
      name: "Too Faced",
      image: "../images/tooface.png"
    },
    {
      id: 5,
      name: "Urban Decay",
      image: "/images/urbandecay.png"
    },
    {
      id: 6,
      name: "Estée Lauder",
      image: "/images/esteelauder.png"
    }
  ];

  
  useEffect(() => {
    document.title = language === 'en' ? 'Makeup Products | Glow Beauty' : 
                    language === 'ru' ? 'Продукты для макияжа | Glow Beauty' : 
                    'Pardoz mahsulotlari | Glow Beauty';
  }, [language]);

  
  useEffect(() => {
    const link1 = document.createElement('link');
    link1.rel = 'preconnect';
    link1.href = 'https://fonts.googleapis.com';
    document.head.appendChild(link1);

    const link2 = document.createElement('link');
    link2.rel = 'preconnect';
    link2.href = 'https://fonts.gstatic.com';
    link2.crossOrigin = '';
    document.head.appendChild(link2);

    const link3 = document.createElement('link');
    link3.rel = 'stylesheet';
    link3.href = 'https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;700&display=swap';
    document.head.appendChild(link3);

    return () => {
      document.head.removeChild(link1);
      document.head.removeChild(link2);
      document.head.removeChild(link3);
    };
  }, []);

  
  useEffect(() => {
    if (cameraModalVisible && videoRef.current) {
      const startCamera = async () => {
        try {
          const stream = await navigator.mediaDevices.getUserMedia({ 
            video: { 
              facingMode: 'user',
              width: { ideal: 1280 },
              height: { ideal: 720 } 
            } 
          });
          videoRef.current.srcObject = stream;
          streamRef.current = stream;
        } catch (err) {
          console.error("Error accessing camera:", err);
          alert("Could not access camera. Please make sure you've granted camera permissions.");
        }
      };
      
      startCamera();
    }
    
    
    return () => {
      if (streamRef.current) {
        streamRef.current.getTracks().forEach(track => {
          track.stop();
        });
      }
    };
  }, [cameraModalVisible]);

  
  const handleLanguageChange = (lang) => {
    changeLanguage(lang);
    localStorage.setItem('selectedLanguage', lang);
  };

  
  const toggleWishlist = (productId) => {
    setWishlistItems(prev => {
      if (prev.includes(productId)) {
        return prev.filter(id => id !== productId);
      } else {
        return [...prev, productId];
      }
    });
  };

  
  const handleAddToCart = (product) => {
    const productWithNumericPrice = {
      ...product,
      price: product.price
    };
    
    addToCart(productWithNumericPrice);
  };

  
  const handleFilterClick = () => {
    alert('Filter options would appear in a dropdown or modal in a real application.');
  };

  
  const handleSortClick = () => {
    alert('Sort options would appear in a dropdown in a real application.');
  };

  
  const handlePageChange = (pageNumber) => {
    setActivePage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  
  const handleCameraCapture = () => {
    alert('In a real application, this would capture your image and analyze your skin tone to recommend foundation matches.');
    setCameraModalVisible(false);
  };
  
  
  const showProductDetails = (product) => {
    setSelectedProduct(product);
    setDetailModalVisible(true);
  };

  return (
    <>
      
      <section className="category-hero">
        <div className="container">
          <h1 className="category-title">{translate("Makeup Collection")}</h1>
          <p className="category-description">{translate("Discover our wide range of high-quality makeup products from top brands. From foundation to lipstick, find everything you need to create your perfect look.")}</p>
        </div>
      </section>

      
      <main className="container">
        {/* Subcategories Section */}
        <section className="subcategories">
          <h2 className="subcategory-title">{translate("Categories")}</h2>
          <div className="subcategory-grid">
            {subcategories.map(category => (
              <a href="#" className="subcategory-card" key={category.id}>
                <img src={category.image} alt={translate(category.name)} className="subcategory-img" />
                <div className="subcategory-name">{translate(category.name)}</div>
              </a>
            ))}
          </div>
        </section>

        
        <section className="filter-section">
          <div className="filter-container">
            <button className="filter-button" onClick={handleFilterClick}>
              <svg className="filter-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 21v-7m0-4V3m8 18v-4m0-7V3m8 18v-11m0-4V3M1 14h6m2-6h6m2 8h6"/>
              </svg>
              <span>{translate("Filter")}</span>
            </button>
            <button className="filter-button" onClick={handleFilterClick}>{translate("Brand")}</button>
            <button className="filter-button" onClick={handleFilterClick}>{translate("Price")}</button>
            <button className="filter-button" onClick={handleFilterClick}>{translate("Rating")}</button>
            <button className="filter-button" onClick={handleFilterClick}>{translate("Type")}</button>
          </div>
          
          <div className="sort-container">
            <button className="sort-button" onClick={handleSortClick}>
              <svg className="sort-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 6h18M6 12h12m-9 6h6"/>
              </svg>
              <span>{translate("Sort by: Featured")}</span>
            </button>
          </div>
          
          <div className="results-count">
            {translate("Showing")} 1-24 {translate("of")} 156 {translate("products")}
          </div>
        </section>

        
        <section className="product-grid">
          {products.map(product => (
            <div className="product-card" key={product.id} onClick={() => showProductDetails(product)}>
              {product.badge && (
                <span className={`badge ${product.badge.type}-badge`}>
                  {translate(product.badge.text)}
                </span>
              )}
              <img src={product.image} alt={product.name} className="product-img" />
              <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-brand">{product.brand}</p>
                <div className="product-rating">
                  <div className="stars">{product.rating}</div>
                  <span className="rating-count">({product.ratingCount})</span>
                </div>
                <p className="product-price">
                  {product.oldPrice && (
                    <span style={{ textDecoration: 'line-through', color: '#999', marginRight: '5px' }}>
                      {product.oldPrice}
                    </span>
                  )}
                  {product.price}
                </p>
                <div className="product-actions">
                  <button 
                    className="add-to-cart" 
                    onClick={(e) => {
                      e.stopPropagation();
                      handleAddToCart(product);
                    }}
                  >
                    {translate("Add to Cart")}
                  </button>
                  <button 
                    className="wishlist-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleWishlist(product.id);
                    }}
                  >
                    <svg 
                      className="heart-icon" 
                      viewBox="0 0 24 24"
                      fill={wishlistItems.includes(product.id) ? 'var(--accent-color)' : 'none'}
                      stroke={wishlistItems.includes(product.id) ? 'var(--accent-color)' : 'currentColor'}
                    >
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </section>

        
        <div className="pagination">
          <button className="page-btn prev">{translate("Prev")}</button>
          <button 
            className={`page-btn ${activePage === 1 ? 'active' : ''}`}
            onClick={() => handlePageChange(1)}
          >1</button>
          <button 
            className={`page-btn ${activePage === 2 ? 'active' : ''}`}
            onClick={() => handlePageChange(2)}
          >2</button>
          <button 
            className={`page-btn ${activePage === 3 ? 'active' : ''}`}
            onClick={() => handlePageChange(3)}
          >3</button>
          <button 
            className={`page-btn ${activePage === 4 ? 'active' : ''}`}
            onClick={() => handlePageChange(4)}
          >4</button>
          <button 
            className={`page-btn ${activePage === 5 ? 'active' : ''}`}
            onClick={() => handlePageChange(5)}
          >5</button>
          <button className="page-btn next">{translate("Next")}</button>
        </div>
      </main>

      
      <section className="featured-section">
        <div className="container">
          <h2 className="section-title">{translate("Featured Brands")}</h2>
          <div className="subcategory-grid">
            {featuredBrands.map(brand => (
              <a href="#" className="subcategory-card" key={brand.id}>
                <img src={brand.image} alt={brand.name} className="subcategory-img" />
                <div className="subcategory-name">{brand.name}</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      
      {cameraModalVisible && (
        <div 
          className="camera-modal" 
          style={{ display: 'flex' }}
        >
          <div className="camera-modal-content">
            <button 
              className="close-modal" 
              onClick={() => setCameraModalVisible(false)}
            >
              &times;
            </button>
            <h2>{translate("Find Your Perfect Match")}</h2>
            <p className="camera-instructions">{translate("Take a photo of your skin to find foundation matches")}</p>
            <div className="camera-container">
              <video ref={videoRef} id="camera-feed" autoPlay playsInline></video>
            </div>
            <button id="capture-btn" onClick={handleCameraCapture}>
              {translate("Take Photo")}
            </button>
          </div>
        </div>
      )}
      
      
      {detailModalVisible && selectedProduct && (
        <div className="product-detail-modal">
          <div className="product-detail-content">
            <button 
              className="close-modal" 
              onClick={() => setDetailModalVisible(false)}
            >
              &times;
            </button>
            <div className="product-detail-grid">
              <div className="product-detail-image">
                <img 
                  src={selectedProduct.image} 
                  alt={selectedProduct.name} 
                />
                {selectedProduct.badge && (
                  <span className={`badge ${selectedProduct.badge.type}-badge detail-badge`}>
                    {translate(selectedProduct.badge.text)}
                  </span>
                )}
              </div>
              <div className="product-detail-info">
                <h2>{selectedProduct.name}</h2>
                <p className="detail-brand">{selectedProduct.brand}</p>
                <div className="product-rating">
                  <div className="stars">{selectedProduct.rating}</div>
                  <span className="rating-count">({selectedProduct.ratingCount})</span>
                </div>
                <p className="detail-price">
                  {selectedProduct.oldPrice && (
                    <span style={{ textDecoration: 'line-through', color: '#999', marginRight: '5px' }}>
                      {selectedProduct.oldPrice}
                    </span>
                  )}
                  {selectedProduct.price}
                </p>
                <div className="product-description">
                  <h3>{translate("Description")}</h3>
                  <p>{selectedProduct.description}</p>
                </div>
                <div className="product-detail-actions">
                  <button 
                    className="add-to-cart-detail" 
                    onClick={() => {
                      handleAddToCart(selectedProduct.name);
                      setDetailModalVisible(false);
                    }}
                  >
                    {translate("Add to Cart")}
                  </button>
                  <button 
                    className="wishlist-btn-detail"
                    onClick={() => toggleWishlist(selectedProduct.id)}
                  >
                    <svg 
                      className="heart-icon" 
                      viewBox="0 0 24 24"
                      fill={wishlistItems.includes(selectedProduct.id) ? 'var(--accent-color)' : 'none'}
                      stroke={wishlistItems.includes(selectedProduct.id) ? 'var(--accent-color)' : 'currentColor'}
                    >
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MakeupProduct;