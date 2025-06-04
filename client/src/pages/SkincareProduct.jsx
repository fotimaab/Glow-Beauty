import React, { useState, useEffect, useRef } from 'react';
import './SkincareProduct.css';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { AuthContext } from '../context/AuthContext';

const SkincareProduct = () => {
  const { addToCart } = useContext(CartContext);
  const { language } = useContext(AuthContext);
  
  const [cameraModalOpen, setCameraModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [detailModalVisible, setDetailModalVisible] = useState(false);
  const [wishlistItems, setWishlistItems] = useState([]);
  
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
      "Skincare Collection": "Skincare Collection",
      "Discover effective skincare solutions for every skin type and concern. From cleansers to serums, find the perfect products to achieve your healthiest, most radiant skin.": "Discover effective skincare solutions for every skin type and concern. From cleansers to serums, find the perfect products to achieve your healthiest, most radiant skin.",
      "Shop by Skin Concern": "Shop by Skin Concern",
      "Acne & Blemishes": "Acne & Blemishes",
      "Anti-Aging": "Anti-Aging",
      "Dryness": "Dryness",
      "Sensitivity": "Sensitivity",
      "Uneven Tone": "Uneven Tone",
      "Hydration": "Hydration",
      "Categories": "Categories",
      "Cleansers": "Cleansers",
      "Toners": "Toners",
      "Serums": "Serums",
      "Moisturizers": "Moisturizers",
      "Masks": "Masks",
      "Eye Care": "Eye Care",
      "Filter": "Filter",
      "Brand": "Brand",
      "Price": "Price",
      "Skin Type": "Skin Type",
      "Concern": "Concern",
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
      "Your Ultimate Skincare Routine": "Your Ultimate Skincare Routine",
      "Cleanse": "Cleanse",
      "Start with a gentle cleanser to remove dirt, oil, and makeup. Cleanse morning and night to create a clean canvas for the rest of your skincare products.": "Start with a gentle cleanser to remove dirt, oil, and makeup. Cleanse morning and night to create a clean canvas for the rest of your skincare products.",
      "Tone": "Tone",
      "Use a toner to balance your skin's pH, remove any remaining impurities, and prepare your skin to better absorb the following products.": "Use a toner to balance your skin's pH, remove any remaining impurities, and prepare your skin to better absorb the following products.",
      "Treat": "Treat",
      "Apply serums with active ingredients targeted to your specific skin concerns, such as vitamin C for brightening or hyaluronic acid for hydration.": "Apply serums with active ingredients targeted to your specific skin concerns, such as vitamin C for brightening or hyaluronic acid for hydration.",
      "Moisturize": "Moisturize",
      "Lock in hydration with a moisturizer appropriate for your skin type. This helps maintain your skin barrier and keeps skin soft and supple.": "Lock in hydration with a moisturizer appropriate for your skin type. This helps maintain your skin barrier and keeps skin soft and supple.",
      "Protect": "Protect",
      "In the morning, always finish with a broad-spectrum sunscreen with at least SPF 30 to protect your skin from harmful UV rays.": "In the morning, always finish with a broad-spectrum sunscreen with at least SPF 30 to protect your skin from harmful UV rays.",
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
      "Skincare Tutorials": "Skincare Tutorials",
      "Skin Type Quiz": "Skin Type Quiz",
      "Skincare Routine": "Skincare Routine",
      "Connect With Us": "Connect With Us",
      "All rights reserved.": "All rights reserved.",
      "Analyze Your Skin": "Analyze Your Skin",
      "Take a photo of your skin to get personalized skincare recommendations": "Take a photo of your skin to get personalized skincare recommendations",
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
      "Skincare Collection": "Коллекция средств по уходу за кожей",
      "Discover effective skincare solutions for every skin type and concern. From cleansers to serums, find the perfect products to achieve your healthiest, most radiant skin.": "Откройте для себя эффективные решения для ухода за кожей любого типа. От очищающих средств до сывороток — найдите идеальные продукты для достижения здоровой и сияющей кожи.",
      "Shop by Skin Concern": "Поиск по проблемам кожи",
      "Acne & Blemishes": "Акне и высыпания",
      "Anti-Aging": "Антивозрастной уход",
      "Dryness": "Сухость",
      "Sensitivity": "Чувствительность",
      "Uneven Tone": "Неровный тон",
      "Hydration": "Увлажнение",
      "Categories": "Категории",
      "Cleansers": "Очищающие средства",
      "Toners": "Тоники",
      "Serums": "Сыворотки",
      "Moisturizers": "Увлажняющие средства",
      "Masks": "Маски",
      "Eye Care": "Уход за кожей вокруг глаз",
      "Filter": "Фильтр",
      "Brand": "Бренд",
      "Price": "Цена",
      "Skin Type": "Тип кожи",
      "Concern": "Проблема",
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
      "Your Ultimate Skincare Routine": "Ваш идеальный уход за кожей",
      "Cleanse": "Очищение",
      "Start with a gentle cleanser to remove dirt, oil, and makeup. Cleanse morning and night to create a clean canvas for the rest of your skincare products.": "Начните с мягкого очищающего средства для удаления грязи, жира и макияжа. Очищайте кожу утром и вечером, чтобы создать чистую основу для остальных средств ухода.",
      "Tone": "Тонизирование",
      "Use a toner to balance your skin's pH, remove any remaining impurities, and prepare your skin to better absorb the following products.": "Используйте тоник для балансировки pH кожи, удаления оставшихся загрязнений и подготовки кожи к лучшему впитыванию последующих продуктов.",
      "Treat": "Лечение",
      "Apply serums with active ingredients targeted to your specific skin concerns, such as vitamin C for brightening or hyaluronic acid for hydration.": "Нанесите сыворотки с активными ингредиентами, направленными на решение ваших конкретных проблем с кожей, например, витамин C для сияния или гиалуроновую кислоту для увлажнения.",
      "Moisturize": "Увлажнение",
      "Lock in hydration with a moisturizer appropriate for your skin type. This helps maintain your skin barrier and keeps skin soft and supple.": "Закрепите увлажнение с помощью крема, подходящего для вашего типа кожи. Это помогает поддерживать защитный барьер кожи и сохраняет её мягкой и эластичной.",
      "Protect": "Защита",
      "In the morning, always finish with a broad-spectrum sunscreen with at least SPF 30 to protect your skin from harmful UV rays.": "Утром всегда завершайте уход солнцезащитным кремом широкого спектра действия с SPF не менее 30, чтобы защитить кожу от вредных УФ-лучей.",
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
      "Skincare Tutorials": "Уроки по уходу за кожей",
      "Skin Type Quiz": "Тест на тип кожи",
      "Skincare Routine": "Рутина ухода за кожей",
      "Connect With Us": "Связаться с нами",
      "All rights reserved.": "Все права защищены.",
      "Analyze Your Skin": "Анализ вашей кожи",
      "Take a photo of your skin to get personalized skincare recommendations": "Сделайте фото вашей кожи, чтобы получить персонализированные рекомендации по уходу",
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
      "Skincare Collection": "Teri parvarishi to'plami",
      "Discover effective skincare solutions for every skin type and concern. From cleansers to serums, find the perfect products to achieve your healthiest, most radiant skin.": "Har qanday teri turi va muammolari uchun samarali teri parvarish yechimlarini kashf eting. Tozalovchi vositalardan serumgacha, eng sog'lom, yorqin teringizga erishish uchun mukammal mahsulotlarni toping.",
      "Shop by Skin Concern": "Teri muammolari bo'yicha xarid qilish",
      "Acne & Blemishes": "Akne va dog'lar",
      "Anti-Aging": "Qarshilik ko'rsatish",
      "Dryness": "Quruqlik",
      "Sensitivity": "Sezgirlik",
      "Uneven Tone": "Notekis ton",
      "Hydration": "Namlik",
      "Categories": "Kategoriyalar",
      "Cleansers": "Tozalovchi vositalar",
      "Toners": "Toniklar",
      "Serums": "Serumlar",
      "Moisturizers": "Namlovchi vositalar",
      "Masks": "Niqoblar",
      "Eye Care": "Ko'z atrofi parvarishi",
      "Filter": "Filtr",
      "Brand": "Brend",
      "Price": "Narx",
      "Skin Type": "Teri turi",
      "Concern": "Muammo",
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
      "Your Ultimate Skincare Routine": "Sizning mukammal teri parvarish rejangiz",
      "Cleanse": "Tozalash",
      "Start with a gentle cleanser to remove dirt, oil, and makeup. Cleanse morning and night to create a clean canvas for the rest of your skincare products.": "Kir, yog' va pardozni ketkazish uchun yumshoq tozalovchi vosita bilan boshlang. Qolgan teri parvarish mahsulotlari uchun toza asos yaratish uchun ertalab va kechqurun tozalang.",
      "Tone": "Tonlash",
      "Use a toner to balance your skin's pH, remove any remaining impurities, and prepare your skin to better absorb the following products.": "Teringizning pH balansini saqlash, qolgan iflosliklarni ketkazish va keyingi mahsulotlarni yaxshiroq singdirish uchun teringizni tayyorlash uchun tonikdan foydalaning.",
      "Treat": "Davolash",
      "Apply serums with active ingredients targeted to your specific skin concerns, such as vitamin C for brightening or hyaluronic acid for hydration.": "Yorqinlashtirish uchun C vitamini yoki namlik uchun gialuron kislotasi kabi o'zingizning teri muammolaringizga qaratilgan faol tarkibiy qismlar bilan serumlarni qo'llang.",
      "Moisturize": "Namlash",
      "Lock in hydration with a moisturizer appropriate for your skin type. This helps maintain your skin barrier and keeps skin soft and supple.": "Teri turingizga mos namlovchi vosita bilan namlikni saqlang. Bu teri to'sig'ini saqlashga yordam beradi va terini yumshoq va egiluvchan saqlaydi.",
      "Protect": "Himoya",
      "In the morning, always finish with a broad-spectrum sunscreen with at least SPF 30 to protect your skin from harmful UV rays.": "Ertalab doimo teringizni zararli ultrabinafsha nurlaridan himoya qilish uchun kamida SPF 30 bo'lgan keng spektrli quyosh himoya vositasi bilan tugating.",
      "Featured Brands": "Tavsiya etilgan brendlar",
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
      "Skincare Tutorials": "Teri parvarishi bo'yicha qo'llanmalar",
      "Skin Type Quiz": "Teri turi testi",
      "Skincare Routine": "Teri parvarishi tartibi",
      "Connect With Us": "Biz bilan bog'laning",
      "All rights reserved.": "Barcha huquqlar himoyalangan.",
      "Analyze Your Skin": "Teringizni tahlil qiling",
      "Take a photo of your skin to get personalized skincare recommendations": "Shaxsiylashtirilgan teri parvarishi bo'yicha tavsiyalar olish uchun teringizni suratga oling",
      "Take Photo": "Suratga olish",
      "Description": "Tavsif"
    }
  };
  
  const translate = (key) => {
    return translations[language]?.[key] || key;
  };
  
  useEffect(() => {
    document.title = language === 'en' ? 'Skincare Products | Glow Beauty' : 
                    language === 'ru' ? 'Средства для ухода за кожей | Glow Beauty' : 
                    'Teri parvarishi mahsulotlari | Glow Beauty';
  }, [language]);
  
  // Camera functions
  const openCamera = async () => {
    setCameraModalOpen(true);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: {
          facingMode: 'user',
          width: { ideal: 1280 },
          height: { ideal: 720 }
        }
      });
      streamRef.current = stream;
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    } catch (err) {
      console.error("Error accessing camera:", err);
      alert("Could not access camera. Please make sure you've granted camera permissions.");
    }
  };
  
  const closeCamera = () => {
    setCameraModalOpen(false);
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => {
        track.stop();
      });
    }
  };
  
  const capturePhoto = () => {
    let message = "In a real application, this would capture your image and analyze your skin to recommend personalized skincare products.";
    
    if (language === 'ru') {
      message = "В реальном приложении это сделало бы снимок вашей кожи и проанализировало её, чтобы порекомендовать персонализированные средства по уходу за кожей.";
    } else if (language === 'uz') {
      message = "Haqiqiy ilovada bu teringizning rasmini oladi va uni tahlil qiladi, shaxsiylashtirilgan teri parvarish mahsulotlarini tavsiya qilish uchun.";
    }
    
    alert(message);
    closeCamera();
  };
  
  // Updated add to cart function that uses the context
  const handleAddToCart = (product) => {
    // If product is just a name (string), find the full product object
    let productToAdd = typeof product === 'string' 
      ? products.find(p => p.name === product)
      : product;
    
    // Create a product object with numeric price (removing HTML tags)
    const productWithNumericPrice = {
      ...productToAdd,
      price: typeof productToAdd.price === 'string' 
        ? productToAdd.price.replace(/<[^>]*>/g, '') // Remove HTML tags
        : productToAdd.price
    };
    
    addToCart(productWithNumericPrice);
    console.log(`${typeof product === 'string' ? product : product.name} added to your cart!`);
  };
  
  // Updated wishlist toggle function
  const toggleWishlist = (event, productId) => {
    event.stopPropagation();
    setWishlistItems(prev => {
      if (prev.includes(productId)) {
        return prev.filter(id => id !== productId);
      } else {
        return [...prev, productId];
      }
    });
  };
  
  const showProductDetails = (product) => {
    setSelectedProduct(product);
    setDetailModalVisible(true);
  };
  
  const showFilterOptions = () => {
    alert('Filter options would appear in a dropdown or modal in a real application.');
  };
  
  const showSortOptions = () => {
    alert('Sort options would appear in a dropdown in a real application.');
  };
  
  const handlePageChange = (e) => {
    if (!e.target.classList.contains('prev') && !e.target.classList.contains('next')) {
      document.querySelector('.page-btn.active')?.classList.remove('active');
      e.target.classList.add('active');
    }
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const products = [
    {
      id: 1,
      name: "Vitamin C Serum",
      brand: "The Ordinary",
      stars: "★★★★★",
      ratingCount: "2,345",
      price: "$28.00",
      image: "/images/vitaminCserum.png",
      badge: "BESTSELLER",
      description: "A high-strength vitamin C serum that brightens skin tone, reduces signs of aging, and fights visible blemish marks. This potent formula contains 15% pure L-Ascorbic Acid, enhanced with 0.5% Ferulic Acid for stability and 1% Vitamin E for synergistic antioxidant benefits. Apply daily for a more radiant complexion and improved skin texture."
    },
    {
      id: 2,
      name: "Hyaluronic Acid Serum",
      brand: "The Ordinary",
      stars: "★★★★★",
      ratingCount: "1,987",
      price: "$12.00",
      image: "../images/hyaluronic.png",
      description: "A hydration support formula with ultra-pure, vegan hyaluronic acid. This lightweight serum draws moisture into the skin with its multi-molecular weight hyaluronic acid complex. Contains 2% hyaluronic acid blend with B5 to deliver multi-depth hydration and visible plumping without tacky or sticky residue."
    },
    {
      id: 3,
      name: "Niacinamide 10% + Zinc 1%",
      brand: "The Ordinary",
      stars: "★★★★☆",
      ratingCount: "1,432",
      price: "$15.00",
      image: "../images/niacinamide.png",
      badge: "NEW",
      description: "A high-strength vitamin and mineral formula to reduce the appearance of blemishes and congestion. This oil-free serum combines 10% niacinamide (vitamin B3) to reduce pore appearance and improve skin texture, with 1% zinc PCA to help balance visible sebum activity. Ideal for oily and acne-prone skin types."
    },
    {
      id: 4,
      name: "Ultra Facial Cream",
      brand: "Kiehl's",
      stars: "★★★★★",
      ratingCount: "3,210",
      price: "$38.00",
      image: "/images/ultrafacial.png",
      description: "A 24-hour daily facial cream that provides ultra-lightweight hydration. Formulated with Glacial Glycoprotein and olive-derived Squalane, this bestselling moisturizer helps strengthen the skin barrier and prevents moisture loss throughout the day. Absorbs quickly for a soft, healthy-looking complexion in all climate conditions."
    },
    {
      id: 5,
      name: "Soy Face Cleanser",
      brand: "Fresh",
      stars: "★★★★☆",
      ratingCount: "1,876",
      price: "$42.00",
      image: "/images/soyface.png",
      description: "A gentle, extra-soft gel cleanser for all skin types. This multi-tasking formula removes makeup and impurities without stripping essential moisture from the skin. Enriched with amino acid-rich soy proteins, calming cucumber extract, and balancing rosewater. The pH-balanced formula helps maintain skin's natural acidity even after cleansing."
    },
    {
      id: 6,
      name: "Hydrating Face Mask",
      brand: "Glow Beauty",
      stars: "★★★★☆",
      ratingCount: "932",
      price: "<span style=\"text-decoration: line-through; color: #999; margin-right: 5px;\">$25.00</span> $18.00",
      image: "/images/hydratingclaymask.png",
      badge: "SALE",
      description: "A deeply moisturizing treatment mask for dry and dehydrated skin. This creamy clay-based formula combines hyaluronic acid, aloe vera, and vitamin E to restore moisture levels while purifying the skin. The unique blend of kaolin clay and glycerin draws out impurities without drying, leaving skin soft, refreshed, and plumped with hydration."
    },
    {
      id: 7,
      name: "Clarifying Toner",
      brand: "Glow Beauty",
      stars: "★★★★☆",
      ratingCount: "756",
      price: "$22.00",
      image: "/images/clarifyingtoner.png",
      description: "An alcohol-free toner that gently exfoliates and clarifies the skin. Formulated with a blend of glycolic and salicylic acids to remove dead skin cells and unclog pores, while chamomile and allantoin soothe and calm the skin. Use daily after cleansing to refine skin texture, minimize the appearance of pores, and prepare skin for optimal absorption of serums and moisturizers."
    },
    {
      id: 8,
      name: "Creamy Eye Treatment",
      brand: "Kiehl's",
      stars: "★★★★★",
      ratingCount: "2,543",
      price: "$32.00",
      image: "/images/creamyeyetreatment.png",
      description: "A rich, moisturizing eye cream formulated with avocado oil. This creamy preparation gently moisturizes the delicate eye area without migrating into the eyes. Ophthalmologist and dermatologist tested, it contains avocado oil, beta-carotene, and shea butter to nourish and protect the skin barrier while providing intensive hydration for the eye area."
    },
    {
      id: 9,
      name: "Retinol Serum 0.5%",
      brand: "The Ordinary",
      stars: "★★★★☆",
      ratingCount: "1,234",
      price: "$18.00",
      image: "/images/retinalserum.png",
      description: "A moderate-strength retinoid serum for reducing the appearance of fine lines, photo damage, and general skin aging. This formula combines 0.5% pure retinol with squalane for stability and to reduce potential irritation. For best results, use in the evening and always follow with sunscreen during daytime hours. Not recommended for sensitive skin."
    },
    {
      id: 10,
      name: "Glycolic Acid 7% Toning Solution",
      brand: "The Ordinary",
      stars: "★★★★★",
      ratingCount: "2,156",
      price: "$14.00",
      image: "../images/clycolic.png",
      badge: "NEW",
      description: "An exfoliating toning solution with 7% glycolic acid. This daily-use exfoliating toner improves skin texture and brightness through mild exfoliation. The formula contains Tasmanian Pepperberry derivative to help reduce irritation, ginseng root for radiance, and aloe vera for soothing hydration. Use in the evening after cleansing for improved skin clarity."
    },
    {
      id: 11,
      name: "Dramatically Different Moisturizing Lotion+",
      brand: "Clinique",
      stars: "★★★★☆",
      ratingCount: "3,421",
      price: "$32.00",
      image: "/images/DramaticallyDifferentMoisturizing.png",
      description: "A dermatologist-developed face moisturizer that delivers all-day hydration. This iconic yellow moisturizer strengthens the skin's moisture barrier by 54% while providing 8-hour hydration. The lightweight, silky texture absorbs quickly and contains a blend of hyaluronic acid, glycerin, and sunflower seed cake to maintain optimal moisture balance."
    },
    {
      id: 12,
      name: "Midnight Recovery Concentrate",
      brand: "Kiehl's",
      stars: "★★★★★",
      ratingCount: "1,987",
      price: "<span style=\"text-decoration: line-through; color: #999; margin-right: 5px;\">$52.00</span> $42.00",
      image: "../images/midnight.png",
      badge: "SALE",
      description: "A replenishing nighttime facial oil that works with the skin's natural nocturnal activity. This blend of lavender essential oil, evening primrose oil, and squalane helps restore and replenish the skin while you sleep. Wake up to visibly restored, more radiant skin by morning. 99% naturally derived ingredients work synergistically for optimal overnight repair and regeneration."
    }
  ];

  const skinConcerns = [
    {
      id: 1,
      name: "Acne & Blemishes",
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
            </svg>
    },
    {
      id: 2,
      name: "Anti-Aging",
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3"></path>
            </svg>
    },
    {
      id: 3,
      name: "Dryness",
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2v20M2 12h20"></path>
            </svg>
    },
    {
      id: 4,
      name: "Sensitivity",
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M12 16v.01"></path>
              <path d="M12 8a2 2 0 0 1 2 2c0 .9-.7 1.5-2 2"></path>
            </svg>
    },
    {
      id: 5,
      name: "Uneven Tone",
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 3v18M3 12h18"></path>
            </svg>
    },
    {
      id: 6,
      name: "Hydration",
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
              <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
              <path d="M3 5c0 1.66 4 3 9 3s9-1.34 9-3"></path>
            </svg>
    }
  ];

  const subcategories = [
    {
      id: 1,
      name: "Cleansers",
      image: "../images/cleansers.png"
    },
    {
      id: 2,
      name: "Toners",
      image: "../images/toners.png"
    },
    {
      id: 3,
      name: "Serums",
      image: "../images/serums.png"
    },
    {
      id: 4,
      name: "Moisturizers",
      image: "../images/moisturizer.png"
    },
    {
      id: 5,
      name: "Masks",
      image: "../images/masks.png"
    },
    {
      id: 6,
      name: "Eye Care",
      image: "../images/eyecare.png"
    }
  ];

  const featuredBrands = [
    {
      id: 1,
      name: "The Ordinary",
      image: "../images/ordunarylogo.png"
    },
    {
      id: 2,
      name: "CeraVe",
      image: "../images/ceravelogo.png"
    },
    {
      id: 3,
      name: "Kiehl's",
      image: "../images/kiehlslogo.png"
    },
    {
      id: 4,
      name: "Clinique",
      image: "../images/clinique.png"
    },
    {
      id: 5,
      name: "Drunk Elephant",
      image: "../images/drunklogo.png"
    },
    {
      id: 6,
      name: "Tatcha",
      image: "../images/tatchalogo.png"
    }
  ];

  const guideSteps = [
    {
      id: 1,
      title: "Cleanse",
      description: "Start with a gentle cleanser to remove dirt, oil, and makeup. Cleanse morning and night to create a clean canvas for the rest of your skincare products."
    },
    {
      id: 2,
      title: "Tone",
      description: "Use a toner to balance your skin's pH, remove any remaining impurities, and prepare your skin to better absorb the following products."
    },
    {
      id: 3,
      title: "Treat",
      description: "Apply serums with active ingredients targeted to your specific skin concerns, such as vitamin C for brightening or hyaluronic acid for hydration."
    },
    {
      id: 4,
      title: "Moisturize",
      description: "Lock in hydration with a moisturizer appropriate for your skin type. This helps maintain your skin barrier and keeps skin soft and supple."
    },
    {
      id: 5,
      title: "Protect",
      description: "In the morning, always finish with a broad-spectrum sunscreen with at least SPF 30 to protect your skin from harmful UV rays."
    }
  ];

  return (
    <>
      <main>
        <section className="category-hero">
          <div className="container">
            <div className="category-content">
              <h1 className="category-title">{translate("Skincare Collection")}</h1>
              <p className="category-description">
                {translate("Discover effective skincare solutions for every skin type and concern. From cleansers to serums, find the perfect products to achieve your healthiest, most radiant skin.")}
              </p>
            </div>
          </div>
        </section>

        <div className="container">
          <section className="concern-section">
            <h2 className="section-subtitle">{translate("Shop by Skin Concern")}</h2>
            <div className="concern-grid">
              {skinConcerns.map(concern => (
                <a href="#" className="concern-card" key={concern.id}>
                  <div className="concern-icon">
                    {concern.icon}
                  </div>
                  <div className="concern-name">{translate(concern.name)}</div>
                </a>
              ))}
            </div>
          </section>

          <section className="subcategories">
            <h2 className="subcategory-title">{translate("Categories")}</h2>
            <div className="subcategory-grid">
              {subcategories.map(subcategory => (
                <a href="#" className="subcategory-card" key={subcategory.id}>
                  <img src={subcategory.image} alt={subcategory.name} className="subcategory-img" />
                  <div className="subcategory-name">{translate(subcategory.name)}</div>
                </a>
              ))}
            </div>
          </section>

          <section className="filter-section">
            <div className="filter-container">
              <button className="filter-button" onClick={showFilterOptions}>
                <svg className="filter-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 21v-7m0-4V3m8 18v-4m0-7V3m8 18v-11m0-4V3M1 14h6m2-6h6m2 8h6"/>
                </svg>
                <span>{translate("Filter")}</span>
              </button>
              <button className="filter-button" onClick={showFilterOptions}>{translate("Brand")}</button>
              <button className="filter-button" onClick={showFilterOptions}>{translate("Price")}</button>
              <button className="filter-button" onClick={showFilterOptions}>{translate("Skin Type")}</button>
              <button className="filter-button" onClick={showFilterOptions}>{translate("Concern")}</button>
            </div>
            <div className="sort-container">
              <button className="sort-button" onClick={showSortOptions}>
                <svg className="sort-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 6h18M6 12h12m-9 6h6"/>
                </svg>
                <span>{translate("Sort by: Featured")}</span>
              </button>
            </div>
            <div className="results-count">
              {translate("Showing")} 1-24 {translate("of")} 128 {translate("products")}
            </div>
          </section>

          <section className="product-grid">
            {products.map(product => (
              <div className="product-card" key={product.id} onClick={() => showProductDetails(product)}>
                {product.badge && (
                  <span className={`badge ${product.badge.toLowerCase()}-badge`}>
                    {translate(product.badge)}
                  </span>
                )}
                <img src={product.image} alt={product.name} className="product-img" />
                <div className="product-info">
                  <h3 className="product-name">{product.name}</h3>
                  <p className="product-brand">{product.brand}</p>
                  <div className="product-rating">
                    <div className="stars">{product.stars}</div>
                    <span className="rating-count">({product.ratingCount})</span>
                  </div>
                  <p className="product-price" dangerouslySetInnerHTML={{ __html: product.price }}></p>
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
                        toggleWishlist(e, product.id);
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
            <button className="page-btn prev" onClick={handlePageChange}>{translate("Prev")}</button>
            <button className="page-btn active" onClick={handlePageChange}>1</button>
            <button className="page-btn" onClick={handlePageChange}>2</button>
            <button className="page-btn" onClick={handlePageChange}>3</button>
            <button className="page-btn" onClick={handlePageChange}>4</button>
            <button className="page-btn" onClick={handlePageChange}>5</button>
            <button className="page-btn next" onClick={handlePageChange}>{translate("Next")}</button>
          </div>

          <section className="skincare-guide">
            <h2 className="guide-title">{translate("Your Ultimate Skincare Routine")}</h2>
            <div className="guide-content">
              {guideSteps.map(step => (
                <div className="guide-step" key={step.id}>
                  <div className="step-number">{step.id}</div>
                  <h3 className="step-title">{translate(step.title)}</h3>
                  <p className="step-description">{translate(step.description)}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

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
      </main>

      {/* Camera Modal */}
      <div className="camera-modal" style={{ display: cameraModalOpen ? 'flex' : 'none' }}>
        <div className="camera-modal-content">
          <button className="close-modal" onClick={closeCamera}>&times;</button>
          <h2>{translate("Analyze Your Skin")}</h2>
          <p className="camera-instructions">
            {translate("Take a photo of your skin to get personalized skincare recommendations")}
          </p>
          <div className="camera-container">
            <video ref={videoRef} autoPlay playsInline></video>
          </div>
          <button id="capture-btn" onClick={capturePhoto}>
            {translate("Take Photo")}
          </button>
        </div>
      </div>

      {/* Product Detail Modal */}
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
                  <span className={`badge ${selectedProduct.badge.toLowerCase()}-badge detail-badge`}>
                    {translate(selectedProduct.badge)}
                  </span>
                )}
              </div>
              <div className="product-detail-info">
                <h2>{selectedProduct.name}</h2>
                <p className="detail-brand">{selectedProduct.brand}</p>
                <div className="product-rating">
                  <div className="stars">{selectedProduct.stars}</div>
                  <span className="rating-count">({selectedProduct.ratingCount})</span>
                </div>
                <p className="detail-price" dangerouslySetInnerHTML={{ __html: selectedProduct.price }}></p>
                <div className="product-description">
                  <h3>{translate("Description")}</h3>
                  <p>{selectedProduct.description}</p>
                </div>
                <div className="product-detail-actions">
                  <button 
                    className="add-to-cart-detail" 
                    onClick={() => {
                      handleAddToCart(selectedProduct);
                      setDetailModalVisible(false);
                    }}
                  >
                    {translate("Add to Cart")}
                  </button>
                  <button 
                    className="wishlist-btn-detail"
                    onClick={(e) => toggleWishlist(e, selectedProduct.id)}
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

export default SkincareProduct;