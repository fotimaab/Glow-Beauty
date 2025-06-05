import React, { useState, useEffect } from 'react';
import './Basket.css';

import { translations } from '../translations';
const luminousImg = process.env.PUBLIC_URL + '/images/luminous.png';
const bornImg = process.env.PUBLIC_URL + '/images/born.png';
const watermelonGlowImg = process.env.PUBLIC_URL + '/images/HydratingSerum.png';
const macLipstickImg = process.env.PUBLIC_URL + '../images/maclipstik.png';
const doubleWearImg = process.env.PUBLIC_URL + '../images/doublewearstay.png';
const softMatteImg = process.env.PUBLIC_URL + '../images/Softmattecomponent.png';
const nudeEyeshadowImg = process.env.PUBLIC_URL + '/images/nudeeyeshadow.png';
const sheerImg = process.env.PUBLIC_URL + '/images/sheer.png';



const Notification = ({ message, show, setShow }) => {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        setShow(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [show, setShow]);

  return (
    <div className={`notification ${show ? 'show' : ''}`}>
      {message}
    </div>
  );
};


const BasketItem = ({
  product,
  updateQuantity,
  removeItem,
  saveForLater,
  lang
}) => {
  return (
    <div className="basket-item" data-product={product.name} data-price={product.price}>
      <img src={product.image} alt={product.name} className="item-image" />
      <div className="item-details">
        <h3 className="item-name">{product.name}</h3>
        <p className="item-brand">{product.brand}</p>
        <p className="item-price">${product.price.toFixed(2)}</p>
        <div className="item-controls">
          <div className="quantity-control">
            <button
              className="quantity-btn decrease"
              onClick={() => updateQuantity(product.id, product.quantity - 1)}
              disabled={product.quantity <= 1}
            >
              -
            </button>
            <input type="text" className="quantity-input" value={product.quantity} readOnly />
            <button
              className="quantity-btn increase"
              onClick={() => updateQuantity(product.id, product.quantity + 1)}
            >
              +
            </button>
          </div>
          <button className="save-for-later" onClick={() => saveForLater(product.id)}>
            {translations[lang]["save-for-later"]}
          </button>
          <button className="remove-btn" onClick={() => removeItem(product.id)}>
            {translations[lang]["remove"]}
          </button>
        </div>
      </div>
    </div>
  );
};

const SavedItem = ({
  product,
  moveToBasket,
  removeItem,
  lang
}) => {
  return (
    <div className="basket-item" data-product={product.name} data-price={product.price}>
      <img src={product.image} alt={product.name} className="item-image" />
      <div className="item-details">
        <h3 className="item-name">{product.name}</h3>
        <p className="item-brand">{product.brand}</p>
        <p className="item-price">${product.price.toFixed(2)}</p>
        <div className="item-controls">
          <button
            className="add-to-cart move-to-basket"
            style={{ width: 'auto', padding: '8px 15px' }}
            onClick={() => moveToBasket(product.id)}
          >
            {translations[lang]["move-to-basket"]}
          </button>
          <button className="remove-btn" onClick={() => removeItem(product.id, true)}>
            {translations[lang]["remove"]}
          </button>
        </div>
      </div>
    </div>
  );
};


const ProductCard = ({
  product,
  addToCart,
  lang
}) => {
  return (
    <div className="product-card" data-product={product.name} data-price={product.price}>
      <img src={product.image} alt={product.name} className="product-img" />
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-brand">{product.brand}</p>
        <p className="product-price">${product.price.toFixed(2)}</p>
        <button className="add-to-cart" onClick={() => addToCart(product)}>
          {translations[lang]["add-to-cart"]}
        </button>
      </div>
    </div>
  );
};


const EmptyBasket = ({ lang }) => {
  return (
    <div className="empty-basket">
      <div className="empty-basket-icon">🛒</div>
      <h3 className="empty-basket-message">{translations[lang]["empty-basket-message"]}</h3>
      <p>{translations[lang]["empty-basket-text"]}</p>
      <a href="/" className="continue-shopping">{translations[lang]["continue-shopping"]}</a>
    </div>
  );
};


const Basket = () => {
  
  const [lang, setLang] = useState('en');

  
  const [notification, setNotification] = useState({ message: '', show: false });

  
  const [basketItems, setBasketItems] = useState([
    {
      id: 1,
      name: "Luminous Silk Foundation",
      brand: "Giorgio Armani",
      price: 64.00,
      quantity: 1,
      image: luminousImg
    },
    {
      id: 2,
      name: "Born This Way Foundation",
      brand: "Too Faced",
      price: 40.00,
      quantity: 1,
      image: bornImg
    },
    {
      id: 3,
      name: "Hydrating Serum",
      brand: "Glow Beauty",
      price: 35.00,
      quantity: 2,
      image: watermelonGlowImg
    }
  ]);

  
  const [savedItems, setSavedItems] = useState([
    {
      id: 4,
      name: "Matte Lipstick",
      brand: "MAC",
      price: 19.00,
      quantity: 1,
      image: macLipstickImg
    }
  ]);

 
  const [recommendedProducts] = useState([
    {
      id: 5,
      name: "Double Wear Stay-in-Place",
      brand: "Estée Lauder",
      price: 46.00,
      image: doubleWearImg
    },
    {
      id: 6,
      name: "Soft Matte Foundation",
      brand: "NARS",
      price: 42.00,
      image: softMatteImg
    },
    {
      id: 7,
      name: "Nude Eyeshadow Palette",
      brand: "Urban Decay",
      price: 54.00,
      image: nudeEyeshadowImg
    },
    {
      id: 8,
      name: "Sheer Glow Foundation",
      brand: "NARS",
      price: 47.00,
      image: sheerImg
    }
  ]);

  
  const [promoCode, setPromoCode] = useState('');
  const [appliedPromo, setAppliedPromo] = useState('');
  const [discountRate, setDiscountRate] = useState(0);

  
  const validPromoCodes = {
    'GLOW20': 0.20, 
    'BEAUTY10': 0.10, 
    'FREESHIP': 'freeshipping'
  };

  
  const shippingRate = 5.99;
  const taxRate = 0.08; 

 
  const showNotification = (message) => {
    setNotification({ message, show: true });
  };

  
  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;

    setBasketItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  
  const removeItem = (id, fromSaved = false) => {
    if (fromSaved) {
      setSavedItems(prevItems => prevItems.filter(item => item.id !== id));
    } else {
      setBasketItems(prevItems => prevItems.filter(item => item.id !== id));
    }

    showNotification(translations[lang]["removed-success"]);
  };

  
  const saveForLater = (id) => {
    const itemToSave = basketItems.find(item => item.id === id);
    if (!itemToSave) return;

    
    setSavedItems(prevItems => [...prevItems, itemToSave]);

   
    setBasketItems(prevItems => prevItems.filter(item => item.id !== id));

    showNotification(translations[lang]["saved-success"].replace('{product}', itemToSave.name));
  };

  
  const moveToBasket = (id) => {
    const itemToMove = savedItems.find(item => item.id === id);
    if (!itemToMove) return;

    
    setBasketItems(prevItems => [...prevItems, { ...itemToMove, quantity: 1 }]);

    
    setSavedItems(prevItems => prevItems.filter(item => item.id !== id));

    showNotification(translations[lang]["moved-success"].replace('{product}', itemToMove.name));
  };

 
  const addToCart = (product) => {
    
    const existingItem = basketItems.find(item => item.id === product.id);

    if (existingItem) {
      
      updateQuantity(product.id, existingItem.quantity + 1);
    } else {
      
      setBasketItems(prevItems => [...prevItems, { ...product, quantity: 1 }]);
    }

    showNotification(translations[lang]["added-success"].replace('{product}', product.name));
  };

  
  const applyPromoCode = () => {
    const code = promoCode.trim().toUpperCase();

    if (!code) {
      showNotification(translations[lang]["promo-empty"]);
      return;
    }

    if (appliedPromo) {
      showNotification(translations[lang]["promo-invalid"] + " A promo code is already applied.");
      return;
    }

    if (validPromoCodes.hasOwnProperty(code)) {
      if (code === 'FREESHIP') {
        setAppliedPromo(code);
        setDiscountRate(0);
        showNotification(translations[lang]["promo-success"].replace('{discount}', translations[lang]["free-shipping"]));
      } else {
        setAppliedPromo(code);
        setDiscountRate(validPromoCodes[code]);
        showNotification(translations[lang]["promo-success"].replace('{discount}', `${validPromoCodes[code] * 100}%`));
      }
    } else {
      showNotification(translations[lang]["promo-invalid"]);
    }
  };

 
  const removePromoCode = () => {
    setPromoCode('');
    setAppliedPromo('');
    setDiscountRate(0);
    showNotification(translations[lang]["removed-success"]);
  };

  
  const handleCheckout = () => {
    const subtotal = basketItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const discount = discountRate > 0 ? subtotal * discountRate : 0;
    const discountedSubtotal = subtotal - discount;
    const shipping = appliedPromo === 'FREESHIP' ? 0 : shippingRate;
    const tax = discountedSubtotal * taxRate;
    const total = discountedSubtotal + shipping + tax;

    const itemsList = basketItems.map(item =>
      `${item.name} x${item.quantity} - $${(item.price * item.quantity).toFixed(2)}`
    );

    
    let orderSummary = `
      ORDER SUMMARY
      -----------------------------
      Items (${basketItems.length}):
      ${itemsList.join('\n')}
      
      Subtotal: $${subtotal.toFixed(2)}
    `;

    if (discount > 0) {
      orderSummary += `\nDiscount (${(discountRate * 100).toFixed(0)}%): -$${discount.toFixed(2)}`;
    }

    if (appliedPromo === 'FREESHIP') {
      orderSummary += `\nShipping: ${translations[lang]["free-shipping"]} (Promo Applied)`;
    } else {
      orderSummary += `\nShipping: $${shipping.toFixed(2)}`;
    }

    orderSummary += `
      Tax: $${tax.toFixed(2)}
      -----------------------------
      TOTAL: $${total.toFixed(2)}
    `;

    alert('Proceeding to checkout with the following order:\n\n' + orderSummary);
  };

  
  const calculateTotals = () => {
   
    const subtotal = basketItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

    
    const discount = discountRate > 0 ? subtotal * discountRate : 0;
    const discountedSubtotal = subtotal - discount;

   
    const shipping = appliedPromo === 'FREESHIP' ? 0 : shippingRate;

    
    const tax = discountedSubtotal * taxRate;

    
    const total = discountedSubtotal + shipping + tax;

    
    const itemCount = basketItems.reduce((count, item) => count + item.quantity, 0);

    return {
      subtotal,
      discount,
      shipping,
      tax,
      total,
      itemCount
    };
  };

  
  const totals = calculateTotals();

  return (
    <section className="basket-section">
      <div className="container">
        <h1 className="section-title">{translations[lang]["shopping-basket"]}</h1>

        <div className="basket-container">
          <div className="basket-items">
            {basketItems.length > 0 ? (
              <>
                {basketItems.map(item => (
                  <BasketItem
                    key={item.id}
                    product={item}
                    updateQuantity={updateQuantity}
                    removeItem={removeItem}
                    saveForLater={saveForLater}
                    lang={lang}
                  />
                ))}

                
                {savedItems.length > 0 && (
                  <div className="saved-for-later">
                    <h3 className="saved-title">{translations[lang]["saved-for-later-title"]}</h3>
                    {savedItems.map(item => (
                      <SavedItem
                        key={item.id}
                        product={item}
                        moveToBasket={moveToBasket}
                        removeItem={removeItem}
                        lang={lang}
                      />
                    ))}
                  </div>
                )}
              </>
            ) : (
              <EmptyBasket lang={lang} />
            )}
          </div>

          {basketItems.length > 0 && (
            <div className="basket-summary">
              <h3 className="summary-title">{translations[lang]["order-summary"]}</h3>
              <div className="summary-row">
                <span className="summary-label">
                  {translations[lang]["subtotal"]} ({totals.itemCount} {translations[lang]["items"]})
                </span>
                <span className="summary-value">${totals.subtotal.toFixed(2)}</span>
              </div>

              {discountRate > 0 && (
                <div className="summary-row discount-row">
                  <span className="summary-label">
                    Discount ({(discountRate * 100).toFixed(0)}%)
                  </span>
                  <span className="summary-value">-${totals.discount.toFixed(2)}</span>
                </div>
              )}

              <div className="summary-row">
                <span className="summary-label">{translations[lang]["shipping"]}</span>
                <span className="summary-value">
                  {appliedPromo === 'FREESHIP'
                    ? translations[lang]["free-shipping"]
                    : `$${totals.shipping.toFixed(2)}`}
                </span>
              </div>

              <div className="summary-row">
                <span className="summary-label">{translations[lang]["tax"]}</span>
                <span className="summary-value">${totals.tax.toFixed(2)}</span>
              </div>

              <div className="summary-row summary-total">
                <span className="summary-label">{translations[lang]["total"]}</span>
                <span className="summary-value">${totals.total.toFixed(2)}</span>
              </div>

              <div className="promo-code">
                <input
                  type="text"
                  className="promo-input"
                  placeholder={translations[lang]["promo-placeholder"]}
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  disabled={!!appliedPromo}
                />
                {!appliedPromo ? (
                  <button className="apply-btn" onClick={applyPromoCode}>
                    {translations[lang]["apply"]}
                  </button>
                ) : (
                  <button className="remove-promo-btn" onClick={removePromoCode}>
                    {translations[lang]["remove"]}
                  </button>
                )}
              </div>

              <button className="checkout-btn" onClick={handleCheckout}>
                {translations[lang]["checkout"]}
              </button>

              <div className="payment-options">
                <p className="payment-title">{translations[lang]["payment-methods"]}</p>
                <div className="payment-icons">
                  <div className="payment-icon">VISA</div>
                  <div className="payment-icon">Humo</div>
                  <div className="payment-icon">UZcard</div>
                  <div className="payment-icon">Mastercard</div>
                </div>
              </div>
            </div>
          )}
        </div>

        
        <section className="recommendations">
          <h2 className="section-title">{translations[lang]["recommendations"]}</h2>
          <div className="product-grid">
            {recommendedProducts.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                addToCart={addToCart}
                lang={lang}
              />
            ))}
          </div>
        </section>
      </div>

      <Notification
        message={notification.message}
        show={notification.show}
        setShow={(show) => setNotification(prev => ({ ...prev, show }))}
      />
    </section>
  );
};

export default Basket;