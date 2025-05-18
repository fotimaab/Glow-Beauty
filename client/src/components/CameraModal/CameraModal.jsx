import React, { useState, useRef, useEffect } from 'react';
import './CameraModal.css';

function CameraModal({ onClose }) {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [stream, setStream] = useState(null);
  const [isCapturing, setIsCapturing] = useState(true);
  const [showResult, setShowResult] = useState(false);
  const [selectedShade, setSelectedShade] = useState(null);
  const [activeOption, setActiveOption] = useState('FOUNDATION');
console.log("camera");
  
  const foundationShades = [
    { id: 1, name: "1 FAIR", hexColor: "#F5E2D0", inStock: true, price: 49.00 },
    { id: 2, name: "2 LIGHT", hexColor: "#F0D4B9", inStock: true, price: 49.00 },
    { id: 3, name: "3 NEUTRAL", hexColor: "#E5C4A9", inStock: false, price: 49.00 },
    { id: 4, name: "4 MEDIUM LIGHT", hexColor: "#DEBA9A", inStock: true, price: 49.00 },
    { id: 5, name: "5 MEDIUM", hexColor: "#D4AF8F", inStock: true, price: 49.00 },
    { id: 6, name: "6 MEDIUM TAN", hexColor: "#C9A080", inStock: true, price: 49.00 },
    { id: 7, name: "7 TAN", hexColor: "#BD9271", inStock: true, price: 49.00 },
    { id: 8, name: "8 DEEP TAN", hexColor: "#B18363", inStock: true, price: 49.00 },
    { id: 9, name: "9 DEEP", hexColor: "#A67454", inStock: true, price: 49.00 },
    { id: 10, name: "10 DEEP RICH", hexColor: "#9A6545", inStock: true, price: 49.00 }
  ];

  
  useEffect(() => {
    startCamera();
    
    
    return () => stopCamera();
  }, []);

  const startCamera = async () => {
    try {
      setShowResult(false);
      setIsCapturing(true);
      
      
      stopCamera();
      
      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: {
          facingMode: "user",
          width: { ideal: 1280 },
          height: { ideal: 720 }
        },
        audio: false
      });
      
      setStream(mediaStream);
      
      if (videoRef.current) {
        videoRef.current.srcObject = mediaStream;
        
        
        videoRef.current.onloadedmetadata = () => {
          videoRef.current.play()
            .catch(err => {
              console.error("Error playing video:", err);
            });
        };
      }
    } catch (err) {
      console.error("Error accessing camera:", err);
      alert("Unable to access the camera. Please ensure camera permissions are enabled.");
    }
  };

  const stopCamera = () => {
    if (stream) {
      stream.getTracks().forEach(track => track.stop());
      setStream(null);
    }
  };

  const captureImage = () => {
    if (!videoRef.current || !canvasRef.current) return;
    
    const video = videoRef.current;
    const canvas = canvasRef.current;
    
    
    if (video.readyState !== 4) return;
    
    
    canvas.width = video.videoWidth || 640;
    canvas.height = video.videoHeight || 480;
    
    try {
      
      const context = canvas.getContext('2d');
      context.drawImage(video, 0, 0, canvas.width, canvas.height);
      
      
      setSelectedShade(foundationShades[2]);
      setIsCapturing(false);
      setShowResult(true);
    } catch (err) {
      console.error("Error capturing image:", err);
    }
  };

  const tryAgain = () => {
    setShowResult(false);
    startCamera();
  };

  const selectShade = (shade) => {
    setSelectedShade(shade);
  };

  return (
    <div className="camera-modal" onClick={onClose}>
      <h1>camera test</h1>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close-btn" onClick={onClose}>&times;</span>
        <h2>Foundation Shade Finder</h2>
        <p>Position your face in the camera frame to analyze your skin tone and find the perfect foundation match.</p>
        
        <div className="camera-view">
          {isCapturing && (
            <video 
              ref={videoRef} 
              autoPlay 
              playsInline 
              muted
              style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '10px' }}
            />
          )}
          <canvas ref={canvasRef} style={{ display: 'none' }} />
          
          {showResult && (
            <div className="result-container">
              <h3>Your Perfect Match</h3>
              <div className="shade-result">
                <h4>{selectedShade.name}</h4>
                <div 
                  style={{ 
                    width: '50px', 
                    height: '50px', 
                    backgroundColor: selectedShade.hexColor, 
                    margin: '10px auto', 
                    borderRadius: '5px', 
                    border: '1px solid #ddd' 
                  }}
                ></div>
                <p>{selectedShade.inStock ? "IN STOCK" : "OUT OF STOCK"} - ${selectedShade.price.toFixed(2)}</p>
                {selectedShade.inStock && (
                  <button className="add-to-cart">Add to Cart</button>
                )}
              </div>
              
              <div className="shade-swatches">
                {foundationShades.map((shade) => (
                  <div 
                    key={shade.id}
                    className="shade-swatch"
                    style={{ 
                      width: '40px', 
                      height: '40px', 
                      backgroundColor: shade.hexColor,
                      border: shade.id === selectedShade.id ? '2px solid #e88f8f' : '1px solid #ddd',
                      borderRadius: '5px',
                      margin: '0 5px',
                      cursor: 'pointer'
                    }}
                    onClick={() => selectShade(shade)}
                  />
                ))}
              </div>
              <button className="btn" style={{ marginTop: '15px' }} onClick={tryAgain}>
                Try Again
              </button>
            </div>
          )}
        </div>
        
        <div className="matching-options">
          <div 
            className={`matching-option ${activeOption === 'FOUNDATION' ? 'active' : ''}`}
            onClick={() => setActiveOption('FOUNDATION')}
          >
            FOUNDATION
          </div>
          <div 
            className={`matching-option ${activeOption === 'MATCHING CONCEALER' ? 'active' : ''}`}
            onClick={() => setActiveOption('MATCHING CONCEALER')}
          >
            MATCHING CONCEALER
          </div>
          <div 
            className={`matching-option ${activeOption === 'MATCHING POWDER' ? 'active' : ''}`}
            onClick={() => setActiveOption('MATCHING POWDER')}
          >
            MATCHING POWDER
          </div>
        </div>
        
        {isCapturing && (
          <button className="capture-btn" onClick={captureImage}>
            Capture Image
          </button>
        )}
      </div>
    </div>
  );
}

export default CameraModal;