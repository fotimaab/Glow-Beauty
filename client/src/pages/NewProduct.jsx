import React, { useState, useEffect, useRef } from 'react';
import './NewProduct.css';

const NewProduct = () => {
  
  const [language, setLanguage] = useState(localStorage.getItem('selectedLanguage') || 'en');
  
  
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
      "New Arrivals": "New Arrivals",
      "Be the first to discover our newest beauty innovations and the latest additions to your favorite collections.": "Be the first to discover our newest beauty innovations and the latest additions to your favorite collections.",
      "Categories": "Categories",
      "Face": "Face",
      "Eyes": "Eyes",
      "Lips": "Lips",
      "Body": "Body",
      "Sets": "Sets",
      "Filter": "Filter",
      "Brand": "Brand",
      "Price": "Price",
      "Rating": "Rating",
      "Type": "Type",
      "Sort by: Featured": "Sort by: Featured",
      "Sort by: Newest": "Sort by: Newest",
      "Showing": "Showing",
      "of": "of",
      "products": "products",
      "BESTSELLER": "BESTSELLER",
      "NEW": "NEW",
      "SALE": "SALE",
      "EXCLUSIVE": "EXCLUSIVE",
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
      "Just Arrived": "Just Arrived",
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
      "New Arrivals": "Новые поступления",
      "Be the first to discover our newest beauty innovations and the latest additions to your favorite collections.": "Будьте первыми, кто откроет для себя наши новейшие бьюти-инновации и последние пополнения ваших любимых коллекций.",
      "Categories": "Категории",
      "Face": "Лицо",
      "Eyes": "Глаза",
      "Lips": "Губы",
      "Body": "Тело",
      "Sets": "Наборы",
      "Filter": "Фильтр",
      "Brand": "Бренд",
      "Price": "Цена",
      "Rating": "Рейтинг",
      "Type": "Тип",
      "Sort by: Featured": "Сортировать: Рекомендуемые",
      "Sort by: Newest": "Сортировать: Новейшие",
      "Showing": "Показано",
      "of": "из",
      "products": "товаров",
      "BESTSELLER": "БЕСТСЕЛЛЕР",
      "NEW": "НОВИНКА",
      "SALE": "СКИДКА",
      "EXCLUSIVE": "ЭКСКЛЮЗИВ",
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
      "Just Arrived": "Только поступило",
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
      "New Arrivals": "Yangi kelganlar",
      "Be the first to discover our newest beauty innovations and the latest additions to your favorite collections.": "Eng yangi go'zallik innovatsiyalarini va sevimli to'plamlaringizga qo'shilgan yangi mahsulotlarni birinchilardan bo'lib kashf eting.",
      "Categories": "Kategoriyalar",
      "Face": "Yuz",
      "Eyes": "Ko'zlar",
      "Lips": "Lablar",
      "Body": "Tana",
      "Sets": "To'plamlar",
      "Filter": "Filtr",
      "Brand": "Brend",
      "Price": "Narx",
      "Rating": "Reyting",
      "Type": "Turi",
      "Sort by: Featured": "Saralash: Tavsiya etilgan",
      "Sort by: Newest": "Saralash: Eng yangilari",
      "Showing": "Ko'rsatilmoqda",
      "of": "dan",
      "products": "mahsulotlar",
      "BESTSELLER": "ENG KO'P SOTILGAN",
      "NEW": "YANGI",
      "SALE": "CHEGIRMA",
      "EXCLUSIVE": "EKSKLYUZIV",
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
      "Just Arrived": "Hozirgina keldi",
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
      image: "../images/luminous.png",
      rating: "★★★★★",
      ratingCount: 1245,
      price: "$64.00",
      arrivalDate: "2 days ago",
      badge: { type: "new", text: "NEW" },
      description: "A lightweight, oil-free liquid foundation that delivers a luminous, glowy-skin finish. Available in 40 shades to suit all skin tones. This award-winning foundation is inspired by charmeuse silk, and features Micro-fil™ technology for a weightless texture and buildable coverage."
    },
    {
      id: 2,
      name: "Hydra Zen Anti-Stress Moisturizing Cream",
      brand: "Lancôme",
      image: "../images/hydra-zen.png",
      rating: "★★★★★",
      ratingCount: 324,
      price: "$48.00",
      arrivalDate: "3 days ago",
      badge: { type: "new", text: "NEW" },
      description: "This rich, daily face cream provides 24-hour hydration and helps protect against environmental aggressors. Formulated with Hyaluronic Acid and Rose Extract, it helps strengthen the skin barrier and provides intense hydration, leaving skin feeling soft and supple."
    },
    {
      id: 3,
      name: "Lip Glow Oil",
      brand: "Dior",
      image: "../images/LipGlowOil.png",
      rating: "★★★★☆",
      ratingCount: 156,
      price: "$38.00",
      arrivalDate: "1 week ago",
      badge: { type: "new", text: "NEW" },
      description: "A nourishing lip oil that enhances your natural lip color with a high-shine finish. This formula contains cherry oil to protect lips from dryness, and color reviver technology that reacts to your lips' moisture level to give a custom rosy tint."
    },
    {
      id: 4,
      name: "Soleil Tan Bronze Universal Bronzing Cream",
      brand: "Chanel",
      image: "../images/soleil-tan.png",
      rating: "★★★★★",
      ratingCount: 211,
      price: "$50.00",
      arrivalDate: "5 days ago",
      badge: { type: "new", text: "NEW" },
      description: "A cream-gel bronzer with a velvety finish that gives skin a healthy, sun-kissed glow. The universal shade works on most skin tones and can be used as a bronzer or as a base for foundation. Its lightweight formula blends seamlessly for natural-looking results."
    },
    {
      id: 5,
      name: "Tatouage Couture Liquid Matte Lip Stain",
      brand: "Yves Saint Laurent",
      image: "../images/matte-lipstic.png",
      rating: "★★★★★",
      ratingCount: 178,
      price: "$37.00",
      arrivalDate: "2 days ago",
      badge: { type: "new", text: "NEW" },
      description: "An ultra-matte, liquid lip stain that delivers intense, long-lasting color with a lightweight, naked-lip feel. The unique, angled applicator precisely defines lips with a tattoo-like color that stays put for up to 8 hours without feathering or drying."
    },
    {
      id: 6,
      name: "Charlotte's Magic Cream",
      brand: "Charlotte Tilbury",
      image: "../images/magic-cream.png",
      rating: "★★★★☆",
      ratingCount: 287,
      price: "$64.00",
      arrivalDate: "1 week ago",
      badge: { type: "exclusive", text: "EXCLUSIVE" },
      description: "A secret mix of patented anti-aging ingredients, hyaluronic acid, and vitamins C and E that lifts and transforms tired skin in an instant. This rich, revitalizing moisturizer floods skin with moisture for a dewy, plumped effect that creates the perfect canvas for makeup."
    },
    {
      id: 7,
      name: "Gloss Bomb Universal Lip Luminizer",
      brand: "Fenty Beauty",
      image: "../images/li[ glooss.png",
      rating: "★★★★★",
      ratingCount: 394,
      price: "$20.00",
      arrivalDate: "3 days ago",
      badge: { type: "new", text: "NEW" },
      description: "The ultimate gotta-have-it lip gloss with explosive shine that feels as good as it looks. The non-sticky formula is super shiny and has an addictive peach-vanilla scent. Lips look instantly fuller and smoother with a mirror-like finish that's universally flattering."
    },
    {
      id: 8,
      name: "All Nighter Long-Lasting Makeup Setting Spray",
      brand: "Urban Decay",
      image: "../images/setting-spray.png",
      rating: "★★★★★",
      ratingCount: 512,
      price: "$33.00",
      arrivalDate: "1 week ago",
      badge: { type: "bestseller", text: "BESTSELLER" },
      description: "An award-winning setting spray that keeps makeup looking fresh for up to 16 hours. This weightless mist with Temperature Control Technology prevents makeup from smudging, sliding, and settling into fine lines for a just-applied look that lasts all day or night."
    },
    {
      id: 9,
      name: "Rouge Allure Velvet Lipstick",
      brand: "Chanel",
      image: "../images/lipstick.png",
      rating: "★★★★☆",
      ratingCount: 167,
      price: "$42.00",
      arrivalDate: "4 days ago",
      badge: { type: "new", text: "NEW" },
      description: "A luminous matte lipstick that glides on with intense color and a soft velvet finish. The non-drying formula keeps lips comfortable throughout wear, while the sleek click-packaging makes application effortless and elegant in equal measure."
    },
    {
      id: 10,
      name: "Advanced Night Repair Serum",
      brand: "Estée Lauder",
      image: "../images/night-repair.png",
      rating: "★★★★★",
      ratingCount: 428,
      price: "$75.00",
      arrivalDate: "2 days ago",
      badge: { type: "new", text: "NEW" },
      description: "This powerful overnight repair serum reduces the look of multiple signs of aging. Its unique Chronolux™ Power Signal Technology supports skin's natural repair process, helping to visibly reduce the appearance of fine lines and wrinkles while improving skin's radiance and firmness."
    },
    {
      id: 11,
      name: "Hoola Matte Bronzer",
      brand: "Benefit Cosmetics",
      image: "../images/hoola.png",
      rating: "★★★★☆",
      ratingCount: 356,
      price: "$30.00",
      arrivalDate: "6 days ago",
      badge: { type: "new", text: "NEW" },
      description: "An award-winning, natural-looking bronzer for face and body. This finely milled powder bronzer blends seamlessly, never looks orange, and creates a matte finish without shimmer or glitter. Perfect for contouring and creating an all-over warmth."
    },
    {
      id: 12,
      name: "Cloud Paint Seamless Cheek Color",
      brand: "Glossier",
      image: "../images/cloud-paint.png",
      rating: "★★★★★",
      ratingCount: 276,
      price: "$20.00",
      arrivalDate: "1 week ago",
      badge: { type: "new", text: "NEW" },
      description: "A gel-cream blush that's seamless, sheer, and buildable. Inspired by NYC sunsets, this lightweight formula is designed to be applied with fingertips. The pillowy, gel-cream formula is blendable and easy to apply for a soft, diffused look."
    }
  ];

  
  const subcategories = [
    {
      id: 1,
      name: "Face",
      image: "../images/face.png"
    },
    {
      id: 2,
      name: "Eyes",
      image: "../images/eye.png"
    },
    {
      id: 3,
      name: "Lips",
      image: "../images/lip product.png"
    },
    {
      id: 4,
      name: "Body",
      image: "../images/body.png"
    },
    {
      id: 5,
      name: "Sets",
      image: "../images/makeupsets.png"
    },
    {
      id: 6,
      name: "Tools",
      image: "../images/makeuptools.png"
    }
  ];

  
  const featuredBrands = [
    {
      id: 1,
      name: "Fenty Beauty",
      image: "/images/Fenty.png"
    },
    {
      id: 2,
      name: "Chanel",
      image: "../images/chanel logo.png"
    },
    {
      id: 3,
      name: "Dior",
      image: "../images/dior logo.png"
    },
    {
      id: 4,
      name: "Glossier",
      image: "../images/glossier logo .png"
    },
    {
      id: 5,
      name: "Charlotte Tilbury",
      image: "../images/Charlotte Tilbury logo .png"
    },
    {
      id: 6,
      name: "Rare Beauty",
      image: "../images/rare beauty logo .png"
    }
  ];

  
  useEffect(() => {
    document.title = language === 'en' ? 'New Arrivals | Glow Beauty' : 
                    language === 'ru' ? 'Новые поступления | Glow Beauty' : 
                    'Yangi kelganlar | Glow Beauty';
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
    setLanguage(lang);
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

  
  const handleAddToCart = (productName) => {
    alert(`${productName} added to your cart!`);
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
      
      <section className="category-hero new-arrivals-hero">
        <div className="container">
          <h1 className="category-title">{translate("New Arrivals")}</h1>
          <p className="category-description">{translate("Be the first to discover our newest beauty innovations and the latest additions to your favorite collections.")}</p>
        </div>
      </section>

      
      <main className="container">
        
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
              <span>{translate("Sort by: Newest")}</span>
            </button>
          </div>
          
          <div className="results-count">
            {translate("Showing")} 1-12 {translate("of")} 48 {translate("products")}
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
              <div className="arrival-date">
                <svg className="clock-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
                <span>{translate("Just Arrived")} - {product.arrivalDate}</span>
              </div>
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
                      handleAddToCart(product.name);
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
                <p className="detail-price">{selectedProduct.price}</p>
                <div className="arrival-info">
                  <svg className="clock-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                  <span>{translate("Just Arrived")} - {selectedProduct.arrivalDate}</span>
                </div>
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

export default NewProduct;