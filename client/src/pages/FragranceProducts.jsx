import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './FragranceProducts.css';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const fragranceHeroBgImg = process.env.PUBLIC_URL + '/images/fragrance-hero-bg.jpg';

const FragranceProducts = () => {
  
  const [showCameraModal, setShowCameraModal] = useState(false);
  const [activeLanguage, setActiveLanguage] = useState(localStorage.getItem('selectedLanguage') || 'en');
  const [cameraStream, setCameraStream] = useState(null);
  const [facingMode, setFacingMode] = useState('user');
  const [showProcessingMessage, setShowProcessingMessage] = useState(false);
  const [wishlistItems, setWishlistItems] = useState({});
  const [activePage, setActivePage] = useState(1);
  const { addToCart } = useContext(CartContext);
  
 
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  
  
  const [showQuizModal, setShowQuizModal] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [quizResults, setQuizResults] = useState(null);
  const [quizLoading, setQuizLoading] = useState(false);

  
  const cameraFeedRef = useRef(null);
  const cameraCanvasRef = useRef(null);
  const uploadPhotoRef = useRef(null);
  
 
  const fragranceTypes = [
    { id: 1, name: "Perfume", image: "/images/perfume.png" },
    { id: 2, name: "Eau de Parfum", image: "/images/eaudeparfum.png" },
    { id: 3, name: "Eau de Toilette", image: "/images/eaudetoilette.png" },
    { id: 4, name: "Cologne", image: "/images/cologne.png" },
    { id: 5, name: "Body Mist", image: "/images/bodymist.png" },
    { id: 6, name: "Travel Size", image: "/images/traveksize.png" }
  ];
  
 
  const featuredBrands = [
    { id: 1, name: "Chanel", logo: "/images/chanellogo.png" },
    { id: 2, name: "Dior", logo: "/images/diorlogo.png" },
    { id: 3, name: "Gucci", logo: "../images/guccilogo.png" },
    { id: 4, name: "Yves Saint Laurent", logo: "/images/ysllogo.png" },
    { id: 5, name: "Giorgio Armani", logo: "/images/armanilogo.png" },
    { id: 6, name: "Tom Ford", logo: "/images/tomfordlogo.png" },
    { id: 7, name: "Jo Malone", logo: "/images/jomalonelogo.png" },
    { id: 8, name: "Versace", logo: "/images/versacelogo.png" },
    { id: 9, name: "Dolce & Gabbana", logo: "/images/dglogo.png" },
    { id: 10, name: "Lancôme", logo: "/images/lancomelogo.png" },
    { id: 11, name: "Burberry", logo: "/images/burberrylogo.png" },
    { id: 12, name: "Paco Rabanne", logo: "/images/pacologo.png" }
  ];

  
  const fragranceProducts = [
    {
      id: "prod1",
      name: "Bloom Eau de Parfum",
      brand: "Gucci",
      rating: "★★★★★",
      ratingCount: "2,345",
      price: "$135.00",
      image: "/images/BloomEaudeParfum.png",
      badge: "BESTSELLER",
      description: "A rich floral scent featuring Rangoon Creeper, jasmine bud, and tuberose for a modern, elegant white floral fragrance. Created by master perfumer Alberto Morillas under Alessandro Michele's creative direction, it embodies authenticity and vitality in a natural white floral scent."
    },
    {
      id: "prod2",
      name: "La Vie Est Belle",
      brand: "Lancôme",
      rating: "★★★★★",
      ratingCount: "3,129",
      price: "$108.00",
      image: "/images/LaVieEstBelle.png",
      description: "An irresistible fragrance that captures the essence of happiness with a heart of the most exquisite flowers, gourmand notes, and patchouli. This feminine perfume is a sweet iris gourmand scent with iris, jasmine, orange blossom, patchouli, vanilla, and praline."
    },
    {
      id: "prod3",
      name: "Acqua di Giò",
      brand: "Giorgio Armani",
      rating: "★★★★★",
      ratingCount: "4,521",
      price: "$95.00",
      image: "/images/acquadigio.png",
      description: "Inspired by the Mediterranean sea, this iconic men's fragrance captures the fresh, aquatic essence with a blend of marine notes, bergamot, neroli, and patchouli. Perfect for the modern man who embraces both strength and elegance."
    },
    {
      id: "prod4",
      name: "J'adore",
      brand: "Dior",
      rating: "★★★★★",
      ratingCount: "3,756",
      price: "$140.00",
      image: "/images/J'adore.png",
      description: "A modern floral bouquet that celebrates the renaissance of extreme femininity and the powerfulness of delicate flowers. Essence of ylang-ylang with floral notes of Damascus Rose and Jasmine create this iconic women's perfume."
    },
    {
      id: "prod5",
      name: "Black Opium",
      brand: "Yves Saint Laurent",
      rating: "★★★★★",
      ratingCount: "2,984",
      price: "$124.00",
      image: "/images/Blackopium.png",
      badge: "NEW",
      description: "An addictive women's fragrance with notes of black coffee, white flowers, and vanilla. This seductively intoxicating scent combines the energy of coffee with a sensual floral heart for a modern, young, and vibrant signature fragrance."
    },
    {
      id: "prod6",
      name: "Bleu de Chanel",
      brand: "Chanel",
      rating: "★★★★★",
      ratingCount: "3,124",
      price: "$150.00",
      image: "../images/BleudeChanel.png",
      description: "A woody aromatic fragrance for the man who defies convention. An unexpected composition with striking notes of citrus, vetiver, and warm spices. Fresh, clean, and profoundly sensual with an aromatic woody accord that reveals the essence of determination."
    },
    {
      id: "prod7",
      name: "Coco Mademoiselle",
      brand: "Chanel",
      rating: "★★★★★",
      ratingCount: "4,105",
      price: "$142.00",
      image: "/images/CocoMademoiselle.png",
      description: "An oriental fragrance with a strong personality, yet surprisingly fresh. The modern, feminine scent features fresh and vibrant orange, jasmine and rose notes on a warm, sensual base of patchouli and vetiver. Irresistibly sensual and elegant."
    },
    {
      id: "prod8",
      name: "Sauvage",
      brand: "Dior",
      rating: "★★★★★",
      ratingCount: "5,230",
      price: "$120.00",
      image: "/images/Sauvage.png",
      description: "A powerful blend of bergamot, pepper, and ambroxan that embodies rugged wilderness and masculine freedom. Created with natural ingredients selected for their premium caliber, this fragrance brings a raw masculinity with refined sophistication."
    },
    {
      id: "prod9",
      name: "Light Blue",
      brand: "Dolce & Gabbana",
      rating: "★★★★☆",
      ratingCount: "2,541",
      price: "$88.00",
      image: "/images/lightblueeay.png",
      description: "A refreshing summer fragrance that evokes the spirit of the Mediterranean. With notes of Sicilian cedar, apple, and bluebell, this vibrant perfume captures the sensuality of a southern Italian summer. Perfect for warm weather and casual wear."
    },
    {
      id: "prod10",
      name: "Mon Paris",
      brand: "Yves Saint Laurent",
      rating: "★★★★☆",
      ratingCount: "1,756",
      price: "$126.00",
      image: "/images/MonParis.png",
      description: "A sweet, floral fragrance that's inspired by the city of love. This dizzying scent features notes of red berries, datura flower, and patchouli for a modern take on a classic chypre perfume. Intensely passionate and romantic."
    },
    {
      id: "prod11",
      name: "Aventus",
      brand: "Creed",
      rating: "★★★★★",
      ratingCount: "2,210",
      price: "$435.00",
      image: "../images/Aventus.png",
      badge: "LUXURY",
      description: "A sophisticated blend celebrating strength, power, and success. Opening with bergamot and blackcurrant, followed by a heart of pineapple, roses, and birch, finishing with a base of musk and ambergris. A timeless, unrivaled fragrance for the modern man."
    },
    {
      id: "prod12",
      name: "Wood Sage & Sea Salt",
      brand: "Jo Malone London",
      rating: "★★★★★",
      ratingCount: "1,887",
      price: "$155.00",
      image: "/images/WoodSage.png",
      description: "An earthy, fresh cologne that captures the spirit of the windswept coast. The combination of ambrette seeds, sea salt, and sage creates a unique, natural aroma reminiscent of driftwood and salty sea air. Perfect for everyday wear."
    },
    {
      id: "prod13",
      name: "The Only One",
      brand: "Dolce & Gabbana",
      rating: "★★★★☆",
      ratingCount: "1,245",
      price: "$94.00",
      image: "/images/TheOnlyOne.png",
      description: "A captivating women's fragrance that combines feminine violet with coffee for a unique sensory experience. The warm, vibrant scent features top notes of violet and bergamot, a heart of coffee and iris, and a base of vanilla and patchouli."
    },
    {
      id: "prod14",
      name: "Flowerbomb",
      brand: "Viktor&Rolf",
      rating: "★★★★★",
      ratingCount: "3,678",
      price: "$115.00",
      image: "/images/Flowerbomb.png",
      description: "An explosive floral bouquet with notes of jasmine, orange blossom, and patchouli. This iconic fragrance transforms the negative into the positive, creating an addictive, floral explosion that leaves a sensual and unforgettable trail."
    },
    {
      id: "prod15",
      name: "Y Eau de Parfum",
      brand: "Yves Saint Laurent",
      rating: "★★★★☆",
      ratingCount: "1,543",
      price: "$100.00",
      image: "/images/YEaudeParfum.png",
      description: "A bold and modern masculine fragrance that embodies the dual personality of the modern man. Fresh bergamot and ginger meet with warm sage and balsam fir over a sophisticated woody base. Intense, sensual, and long-lasting."
    },
    {
      id: "prod16",
      name: "Bright Crystal",
      brand: "Versace",
      rating: "★★★★☆",
      ratingCount: "2,123",
      price: "$76.00",
      image: "/images/BrightCrystal.png",
      badge: "SALE",
      sale_price: "$62.00",
      description: "A fresh, sensual blend of refreshing chilled yuzu and pomegranate mingled with floral notes of peony, magnolia, and lotus flower. The fragrance is built on a base of musk and amber that adds warmth to this delicately sexy summer scent."
    },
    {
      id: "prod17",
      name: "Miss Dior",
      brand: "Dior",
      rating: "★★★★★",
      ratingCount: "2,940",
      price: "$138.00",
      image: "/images/MissDior.png",
      description: "A charmingly feminine floral fragrance with a chypre accord. The vibrant, elegant perfume features Centifolia Rose and fresh notes of Lily-of-the-Valley, tied together with a light base of patchouli. The essence of a woman in love."
    },
    {
      id: "prod18",
      name: "1 Million",
      brand: "Paco Rabanne",
      rating: "★★★★☆",
      ratingCount: "3,210",
      price: "$92.00",
      image: "/images/1Million.png",
      description: "A daring, sensual men's fragrance that combines fresh grapefruit, red orange, mint, and rose with warm cinnamon, spices, leather, and woody notes. Bold and assertive, this scent embodies luxury and makes a seductive statement."
    }
  ];

  
  const translations = {
    'en': {
      'category-title': 'Fragrances',
      'category-description': 'Discover your signature scent from our collection of luxury fragrances. From floral to woody, explore perfumes and colognes that express your unique personality.',
      'section-title-type': 'Shop by Type',
      'section-title-scent': 'Explore Scent Families',
      'finder-title': 'Find Your Perfect Fragrance',
      'finder-description': 'Not sure which fragrance suits you best? Take our quick quiz to discover scents that match your personality and preferences.',
      'finder-button': 'Take the Fragrance Quiz',
      'section-title-guide': 'Fragrance Guide',
      'section-title-brands': 'Featured Brands',
      'camera-modal-title': 'Find Your Perfect Match',
      'camera-modal-text': 'Take a photo or upload an image to find matching fragrances',
      'take-photo-btn': 'Take Photo',
      'switch-camera-btn': 'Switch Camera',
      'upload-label': 'Upload Image',
      'description': 'Description',
      'close': 'Close'
    },
    'ru': {
      'category-title': 'Ароматы',
      'category-description': 'Откройте для себя свой неповторимый аромат из нашей коллекции роскошных парфюмов. От цветочных до древесных, исследуйте духи, которые выражают вашу уникальную индивидуальность.',
      'section-title-type': 'Магазин по типу',
      'section-title-scent': 'Изучите семейства ароматов',
      'finder-title': 'Найдите свой идеальный аромат',
      'finder-description': 'Не уверены, какой аромат подходит вам лучше всего? Пройдите наш быстрый тест, чтобы открыть для себя ароматы, соответствующие вашей личности и предпочтениям.',
      'finder-button': 'Пройти тест на аромат',
      'section-title-guide': 'Руководство по ароматам',
      'section-title-brands': 'Популярные бренды',
      'camera-modal-title': 'Найдите идеальное соответствие',
      'camera-modal-text': 'Сделайте фото или загрузите изображение, чтобы найти подходящие ароматы',
      'take-photo-btn': 'Сделать фото',
      'switch-camera-btn': 'Переключить камеру',
      'upload-label': 'Загрузить изображение',
      'description': 'Описание',
      'close': 'Закрыть'
    },
    'uz': {
      'category-title': 'Atirlar',
      'category-description': 'Hashamatli atirlar kolleksiyamizdan o\'zingizning noyob hidingizni kashf eting. Gullardan yog\'ochgacha, o\'zingizning noyob shaxsiyatingizni ifodalovchi atirlarni o\'rganing.',
      'section-title-type': 'Turi bo\'yicha xarid qiling',
      'section-title-scent': 'Hid oilalarini o\'rganing',
      'finder-title': 'Mukammal hidingizni toping',
      'finder-description': 'Qaysi hid sizga eng mos kelishiga ishonchingiz komilmi? Shaxsiyatingiz va afzalliklaringizga mos keladigan hidlarni kashf qilish uchun tezkor viktorinani o\'tkazing.',
      'finder-button': 'Atir viktorinasini o\'tkazing',
      'section-title-guide': 'Atirlar bo\'yicha qo\'llanma',
      'section-title-brands': 'Mashhur brendlar',
      'camera-modal-title': 'Mukammal moslikni toping',
      'camera-modal-text': 'Mos atirlarni topish uchun rasm oling yoki rasm yuklang',
      'take-photo-btn': 'Rasm olish',
      'switch-camera-btn': 'Kamerani almashtirish',
      'upload-label': 'Rasm yuklash',
      'description': 'Tavsif',
      'close': 'Yopish'
    }
  };

  
  const quizTranslations = {
    'en': {
      'quiz-title': 'Find Your Signature Scent',
      'question1': 'What type of scent do you typically prefer?',
      'question2': 'When do you usually wear fragrance?',
      'question3': 'Which season best matches your personality?',
      'question4': 'Which environment makes you feel most at home?',
      'question5': 'What feeling do you want your fragrance to evoke?',
      'next-button': 'Next',
      'prev-button': 'Previous',
      'submit-button': 'Get My Results',
      'loading-message': 'Analyzing your preferences...',
      'results-title': 'Your Perfect Fragrance Matches',
      'close-button': 'Close',
      'retake-button': 'Take Quiz Again'
    },
    'ru': {
      'quiz-title': 'Найдите свой характерный аромат',
      'question1': 'Какой тип аромата вы обычно предпочитаете?',
      'question2': 'Когда вы обычно носите аромат?',
      'question3': 'Какое время года лучше всего соответствует вашей личности?',
      'question4': 'В какой среде вы чувствуете себя наиболее комфортно?',
      'question5': 'Какие чувства вы хотите, чтобы ваш аромат вызывал?',
      'next-button': 'Далее',
      'prev-button': 'Назад',
      'submit-button': 'Получить результаты',
      'loading-message': 'Анализ ваших предпочтений...',
      'results-title': 'Ваши идеальные ароматы',
      'close-button': 'Закрыть',
      'retake-button': 'Пройти тест снова'
    },
    'uz': {
      'quiz-title': 'O\'zingizning shaxsiy hidingizni toping',
      'question1': 'Siz qanday hidni afzal ko\'rasiz?',
      'question2': 'Odatda atirni qachon ishlatasiz?',
      'question3': 'Qaysi fasl shaxsiyatingizga eng mos keladi?',
      'question4': 'Qaysi muhitda o\'zingizni eng yaxshi his qilasiz?',
      'question5': 'Atringiz qanday hisni uyg\'otishini xohlaysiz?',
      'next-button': 'Keyingi',
      'prev-button': 'Oldingi',
      'submit-button': 'Natijalarimni olish',
      'loading-message': 'Sizning afzalliklaringiz tahlil qilinmoqda...',
      'results-title': 'Sizga mos keluvchi mukammal atirlar',
      'close-button': 'Yopish',
      'retake-button': 'Testni qaytadan o\'tkazish'
    }
  };

  
  const quizQuestions = [
    {
      id: 'question1',
      options: [
        { value: 'floral', label: 'Floral (Jasmine, Rose, Lily)' },
        { value: 'fresh', label: 'Fresh (Citrus, Green, Aquatic)' },
        { value: 'oriental', label: 'Oriental (Vanilla, Amber, Spices)' },
        { value: 'woody', label: 'Woody (Cedar, Sandalwood, Vetiver)' },
        { value: 'fruity', label: 'Fruity (Berries, Peach, Apple)' },
      ]
    },
    {
      id: 'question2',
      options: [
        { value: 'everyday', label: 'Everyday' },
        { value: 'work', label: 'Work/Office' },
        { value: 'evening', label: 'Evening/Special occasions' },
        { value: 'weekend', label: 'Weekends/Casual outings' },
        { value: 'seasonal', label: 'Seasonally (different fragrances)' },
      ]
    },
    {
      id: 'question3',
      options: [
        { value: 'spring', label: 'Spring' },
        { value: 'summer', label: 'Summer' },
        { value: 'autumn', label: 'Autumn' },
        { value: 'winter', label: 'Winter' },
        { value: 'year-round', label: 'I enjoy all seasons equally' },
      ]
    },
    {
      id: 'question4',
      options: [
        { value: 'nature', label: 'In nature (forests, mountains, etc.)' },
        { value: 'beach', label: 'By the ocean/beach' },
        { value: 'urban', label: 'Urban environment (cities, cafes)' },
        { value: 'home', label: 'Cozy at home' },
        { value: 'luxury', label: 'Luxury settings (fine dining, events)' },
      ]
    },
    {
      id: 'question5',
      options: [
        { value: 'confident', label: 'Confidence and power' },
        { value: 'calm', label: 'Calm and relaxation' },
        { value: 'romantic', label: 'Romance and sensuality' },
        { value: 'fresh', label: 'Freshness and energy' },
        { value: 'mysterious', label: 'Mystery and intrigue' },
      ]
    },
  ];

  
  const getText = (key) => {
    return translations[activeLanguage]?.[key] || translations.en[key];
  };

  
  const getQuizText = (key) => {
    return quizTranslations[activeLanguage]?.[key] || quizTranslations.en[key];
  };

 
  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setShowDetailsModal(true);
  };
  
  
  const handleAnswerSelect = (questionId, answer) => {
    setQuizAnswers({
      ...quizAnswers,
      [questionId]: answer
    });
  };

  
  const handleNextQuizStep = () => {
    if (currentStep < quizQuestions.length) {
      setCurrentStep(currentStep + 1);
    }
  };

 
  const handlePrevQuizStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  
  const handleQuizSubmit = () => {
    setQuizLoading(true);
    
  
    setTimeout(() => {
      const recommendedFragrances = [
        {
          id: 'rec1',
          name: 'Bloom Eau de Parfum',
          brand: 'Gucci',
          description: 'A rich white floral scent featuring jasmine and tuberose.',
          image: '/images/Bloom Eau de Parfum.png',
          match: '95%'
        },
        {
          id: 'rec2',
          name: 'Black Opium',
          brand: 'Yves Saint Laurent',
          description: 'An addictive fragrance with notes of black coffee and vanilla.',
          image: '/images/Black opium .png',
          match: '88%'
        },
        {
          id: 'rec3',
          name: 'Wood Sage & Sea Salt',
          brand: 'Jo Malone London',
          description: 'A fresh fragrance that evokes the feeling of a coastal walk.',
          image: '/images/Wood Sage.png',
          match: '82%'
        }
      ];
      
      setQuizResults(recommendedFragrances);
      setQuizLoading(false);
    }, 2000);
  };

  
  const resetQuiz = () => {
    setCurrentStep(0);
    setQuizAnswers({});
    setQuizResults(null);
  };

 
  const closeQuiz = () => {
    setShowQuizModal(false);
    setTimeout(() => resetQuiz(), 300);
  };

  
  const renderQuizQuestion = () => {
    if (currentStep < quizQuestions.length) {
      const currentQuestion = quizQuestions[currentStep];
      return (
        <>
          <h3>{getQuizText(currentQuestion.id)}</h3>
          <div className="quiz-options">
            {currentQuestion.options.map(option => (
              <label key={option.value} className="quiz-option">
                <input 
                  type="radio"
                  name={currentQuestion.id}
                  value={option.value}
                  checked={quizAnswers[currentQuestion.id] === option.value}
                  onChange={() => handleAnswerSelect(currentQuestion.id, option.value)}
                />
                <span className="option-label">{option.label}</span>
              </label>
            ))}
          </div>
          <div className="quiz-navigation">
            {currentStep > 0 && (
              <button className="quiz-nav-button" onClick={handlePrevQuizStep}>
                {getQuizText('prev-button')}
              </button>
            )}
            {currentStep < quizQuestions.length - 1 ? (
              <button 
                className="quiz-nav-button"
                onClick={handleNextQuizStep}
                disabled={!quizAnswers[currentQuestion.id]}
              >
                {getQuizText('next-button')}
              </button>
            ) : (
              <button 
                className="quiz-nav-button submit-button"
                onClick={handleQuizSubmit}
                disabled={!quizAnswers[currentQuestion.id]}
              >
                {getQuizText('submit-button')}
              </button>
            )}
          </div>
        </>
      );
    }
    return null;
  };

  
  const renderQuizResults = () => {
    if (!quizResults) return null;
    
    return (
      <div className="quiz-results">
        <h3>{getQuizText('results-title')}</h3>
        <div className="recommendations">
          {quizResults.map(fragrance => (
            <div key={fragrance.id} className="recommendation-card">
              <div className="match-percentage">{fragrance.match}</div>
              <img 
                src={fragrance.image} 
                alt={fragrance.name} 
                className="recommendation-img" 
              />
              <h4>{fragrance.name}</h4>
              <p className="recommendation-brand">{fragrance.brand}</p>
              <p className="recommendation-description">{fragrance.description}</p>
            </div>
          ))}
        </div>
        <div className="quiz-footer">
          <button className="quiz-button retake" onClick={resetQuiz}>
            {getQuizText('retake-button')}
          </button>
          <button className="quiz-button" onClick={closeQuiz}>
            {getQuizText('close-button')}
          </button>
        </div>
      </div>
    );
  };


  const startCamera = async () => {
    try {
      if (cameraStream) {
        stopCamera();
      }
      
      const constraints = {
        video: { facingMode }
      };
      
      const stream = await navigator.mediaDevices.getUserMedia(constraints);
      setCameraStream(stream);
      
      if (cameraFeedRef.current) {
        cameraFeedRef.current.srcObject = stream;
      }
    } catch (err) {
      console.error("Error accessing camera: ", err);
      alert("Could not access camera. Please make sure you've granted camera permissions.");
    }
  };

  const stopCamera = () => {
    if (cameraStream) {
      cameraStream.getTracks().forEach(track => {
        track.stop();
      });
      setCameraStream(null);
    }
  };

  const takePhoto = () => {
    if (!cameraFeedRef.current || !cameraCanvasRef.current) return;
    
    const context = cameraCanvasRef.current.getContext('2d');
    cameraCanvasRef.current.width = cameraFeedRef.current.videoWidth;
    cameraCanvasRef.current.height = cameraFeedRef.current.videoHeight;
    context.drawImage(cameraFeedRef.current, 0, 0, cameraCanvasRef.current.width, cameraCanvasRef.current.height);
    
   
    const imageDataUrl = cameraCanvasRef.current.toDataURL('image/png');
    
    
    setShowProcessingMessage(true);
    
    
    setTimeout(() => {
      setShowProcessingMessage(false);
      alert("Image processed! In a real app, we would analyze this image and show matching fragrances.");
    }, 2000);
  };

  const handleFileUpload = (event) => {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      
      reader.onload = () => {
        setShowProcessingMessage(true);
        
        setTimeout(() => {
          setShowProcessingMessage(false);
          alert("Image uploaded and processed! In a real app, we would analyze this image and show matching fragrances.");
        }, 2000);
      };
      
      reader.readAsDataURL(event.target.files[0]);
    }
  };

  
  const handleAddToCart = (product) => {
    const productWithNumericPrice = {
      ...product,
      price: product.price
    };
    
    addToCart(productWithNumericPrice);
  };

  
  const handleToggleWishlist = (productId, productName) => {
    setWishlistItems(prev => {
      const newState = {...prev};
      newState[productId] = !prev[productId];
      
      if (newState[productId]) {
        alert(`${productName} added to your wishlist!`);
      } else {
        alert(`${productName} removed from your wishlist!`);
      }
      
      return newState;
    });
  };

  
  useEffect(() => {
    if (showCameraModal) {
      startCamera();
    } else {
      stopCamera();
    }
    
    
    return () => stopCamera();
  }, [showCameraModal, facingMode]);

  return (
    <>
      
      {showCameraModal && (
        <div className="modal" style={{ display: 'block' }}>
          <div className="modal-content">
            <span className="close-modal" onClick={() => setShowCameraModal(false)}>&times;</span>
            <h2 id="camera-modal-title">{getText('camera-modal-title')}</h2>
            <p id="camera-modal-text">{getText('camera-modal-text')}</p>
            <div className="camera-container">
              <video ref={cameraFeedRef} id="camera-feed" autoPlay playsInline></video>
              <canvas ref={cameraCanvasRef} id="camera-canvas" style={{ display: 'none' }}></canvas>
            </div>
            <div className="camera-controls">
              <button id="take-photo-btn" onClick={takePhoto}>{getText('take-photo-btn')}</button>
              <button id="switch-camera-btn" onClick={() => setFacingMode(prev => prev === 'user' ? 'environment' : 'user')}>
                {getText('switch-camera-btn')}
              </button>
              <input 
                type="file" 
                id="upload-photo" 
                ref={uploadPhotoRef}
                accept="image/*"
                onChange={handleFileUpload}
                style={{ display: 'none' }}
              />
              <label htmlFor="upload-photo" id="upload-label">{getText('upload-label')}</label>
            </div>
            {showProcessingMessage && (
              <div id="processing-message">
                <p>Processing your image...</p>
                <div className="loader"></div>
              </div>
            )}
          </div>
        </div>
      )}

      
      {showQuizModal && (
        <div className="modal quiz-modal" style={{ display: 'block' }}>
          <div className="modal-content quiz-modal-content">
            <div className="quiz-container">
              <button className="close-quiz" onClick={closeQuiz}>&times;</button>
              <h2 className="quiz-title">{getQuizText('quiz-title')}</h2>
              
              {quizLoading ? (
                <div className="quiz-loading">
                  <p>{getQuizText('loading-message')}</p>
                  <div className="quiz-loader"></div>
                </div>
              ) : quizResults ? (
                renderQuizResults()
              ) : (
                <div className="quiz-questions">
                  <div className="quiz-progress">
                    <div 
                      className="progress-bar" 
                      style={{ width: `${((currentStep + 1) / quizQuestions.length) * 100}%` }}
                    ></div>
                  </div>
                  {renderQuizQuestion()}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      
      <section className="category-hero" style={{ backgroundImage: `url(${fragranceHeroBgImg})` }}>
        <div className="container">
          <div className="category-content">
            <h1 className="category-title">{getText('category-title')}</h1>
            <p className="category-description">{getText('category-description')}</p>
          </div>
        </div>
      </section>

      
      <main className="container">
        
        <section className="fragrance-types">
          <h2 className="section-title">{getText('section-title-type')}</h2>
          <div className="type-grid">
            {fragranceTypes.map(type => (
              <Link to="#" key={type.id} className="type-card">
                <div className="type-img-container">
                  <img src={type.image} alt={type.name} className="type-img" />
                </div>
                <div className="type-name">{type.name}</div>
              </Link>
            ))}
          </div>
        </section>

        
        <section className="scent-families">
          <h2 className="section-subtitle">{getText('section-title-scent')}</h2>
          <div className="scent-grid">
            <Link to="#" className="scent-card">
              <img src="/images/floral.png" alt="Floral" className="scent-img" />
              <div className="scent-overlay">
                <div className="scent-name">Floral</div>
                <div className="scent-description">Rose, Jasmine, Lily, Peony</div>
              </div>
            </Link>
            
          </div>
        </section>

        {/* Filter Section */}
        <section className="filter-section">
          <div className="filter-container">
            <button className="filter-button" onClick={() => alert('Filter options would appear here')}>
              <svg className="filter-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 21v-7m0-4V3m8 18v-4m0-7V3m8 18v-11m0-4V3M1 14h6m2-6h6m2 8h6"/>
              </svg>
              Filter
            </button>
            <button className="filter-button">Brand</button>
            <button className="filter-button">Price</button>
            <button className="filter-button">Scent Family</button>
            <button className="filter-button">Gender</button>
          </div>
          <div className="sort-container">
            <button className="sort-button">
              <svg className="sort-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 6h18M6 12h12m-9 6h6"/>
              </svg>
              Sort by: Featured
            </button>
          </div>
          <div className="results-count">Showing 1-24 of 128 products</div>
        </section>

        
        <section className="product-grid">
          {fragranceProducts.map(product => (
            <div 
              key={product.id} 
              className="product-card"
              onClick={() => handleProductClick(product)}
            >
              {product.badge && (
                <span className={`badge ${product.badge.toLowerCase()}-badge`}>{product.badge}</span>
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
                  {product.sale_price ? (
                    <>
                      <span className="original-price">{product.price}</span> {product.sale_price}
                    </>
                  ) : (
                    product.price
                  )}
                </p>
                <div className="product-actions">
                  <button 
                    className="add-to-cart" 
                    onClick={(e) => {
                      e.stopPropagation();
                      handleAddToCart(product.name);
                    }}
                  >
                    Add to Cart
                  </button>
                  <button 
                    className="wishlist-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleToggleWishlist(product.id, product.name);
                    }}
                  >
                    <svg 
                      className="heart-icon" 
                      viewBox="0 0 24 24" 
                      fill={wishlistItems[product.id] ? "var(--accent-color)" : "none"} 
                      stroke={wishlistItems[product.id] ? "var(--accent-color)" : "currentColor"}
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
          <button 
            className="page-btn prev" 
            onClick={() => activePage > 1 && setActivePage(activePage - 1)}
          >
            Prev
          </button>
          {[1, 2, 3, 4, 5].map(num => (
            <button 
              key={num}
              className={`page-btn ${activePage === num ? 'active' : ''}`}
              onClick={() => setActivePage(num)}
            >
              {num}
            </button>
          ))}
          <button 
            className="page-btn next"
            onClick={() => activePage < 5 && setActivePage(activePage + 1)}
          >
            Next
          </button>
        </div>

        
        <section className="fragrance-finder">
          <h2 className="finder-title">{getText('finder-title')}</h2>
          <p className="finder-description">{getText('finder-description')}</p>
          <button className="finder-button" onClick={() => setShowQuizModal(true)}>
            <svg className="finder-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4"></path>
              <path d="M16 17l5-5-5-5"></path>
              <path d="M21 12H9"></path>
            </svg>
            {getText('finder-button')}
          </button>
        </section>

      
        <section className="fragrance-guide">
          <h2 className="section-title">{getText('section-title-guide')}</h2>
          <div className="guide-grid">
            <div className="guide-card">
              <img src="/images/understanding.png" alt="Understanding Fragrance Notes" className="guide-img" />
              <div className="guide-content">
                <h3 className="guide-title">Understanding Fragrance Notes</h3>
                <p className="guide-description">Learn about top, middle, and base notes and how they create a complete fragrance experience that evolves throughout the day.</p>
                <Link to="#" className="guide-link">Read More</Link>
              </div>
            </div>
           
          </div>
        </section>
      </main>

      {/* Featured Brands Section */}
      <section className="featured-section">
        <div className="container">
          <h2 className="section-title">{getText('section-title-brands')}</h2>
          <div className="brand-grid">
            {featuredBrands.map(brand => (
              <Link to="#" key={brand.id} className="brand-card">
                <div className="brand-logo-container">
                  <img src={brand.logo} alt={brand.name} className="brand-logo" />
                </div>
                <div className="brand-name">{brand.name}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      
      {showDetailsModal && selectedProduct && (
        <div className="product-details-modal">
          <div className="modal-content">
            <span className="close-modal" onClick={() => setShowDetailsModal(false)}>&times;</span>
            <div className="product-details-container">
              <div className="product-details-image">
                <img src={selectedProduct.image} alt={selectedProduct.name} />
                {selectedProduct.badge && (
                  <span className={`badge ${selectedProduct.badge.toLowerCase()}-badge`}>
                    {selectedProduct.badge}
                  </span>
                )}
              </div>
              <div className="product-details-info">
                <h2>{selectedProduct.name}</h2>
                <p className="product-brand">{selectedProduct.brand}</p>
                <div className="product-rating">
                  <div className="stars">{selectedProduct.rating}</div>
                  <span className="rating-count">({selectedProduct.ratingCount})</span>
                </div>
                <p className="product-price">
                  {selectedProduct.sale_price ? (
                    <>
                      <span className="original-price">{selectedProduct.price}</span> {selectedProduct.sale_price}
                    </>
                  ) : (
                    selectedProduct.price
                  )}
                </p>
                <div className="product-description">
                  <h3>{getText('description')}</h3>
                  <p>{selectedProduct.description}</p>
                </div>
                <div className="product-actions detail-actions">
                  <button 
                    className="add-to-cart" 
                    onClick={() => handleAddToCart(selectedProduct.name)}
                  >
                    Add to Cart
                  </button>
                  <button 
                    className="wishlist-btn"
                    onClick={() => handleToggleWishlist(selectedProduct.id, selectedProduct.name)}
                  >
                    <svg 
                      className="heart-icon" 
                      viewBox="0 0 24 24" 
                      fill={wishlistItems[selectedProduct.id] ? "var(--accent-color)" : "none"} 
                      stroke={wishlistItems[selectedProduct.id] ? "var(--accent-color)" : "currentColor"}
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

export default FragranceProducts;