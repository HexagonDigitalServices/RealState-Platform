  const { id } = useParams();
  const { user, token } = useAuth();
  const navigate = useNavigate();
  const [property, setProperty] = useState(null);
  const [similarProperties, setSimilarProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [inquiry, setInquiry] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [inquiryStatus, setInquiryStatus] = useState({
    loading: false,
    success: false,
    error: null,
  });
  const [isInWishlist, setIsInWishlist] = useState(false);


  const [lightboxIndex, setLightboxIndex] = useState(null);


  const formattedPrice = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(property.price);

  const openLightbox = (index) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const nextImage = () =>
    setLightboxIndex((prev) => (prev + 1) % property.images.length);
  const prevImage = () =>
    setLightboxIndex(
      (prev) => (prev - 1 + property.images.length) % property.images.length,
    );

 
            style={{
              gridTemplateColumns:
                property.images.length > 1 ? "repeat(4, 1fr)" : "1fr",
              gridTemplateRows:
                property.images.length > 1 ? "repeat(2, 180px)" : "400px",
            }}
         

       
              {[
                {
                  label: "Bedrooms",
                  value: property.bhk || 0,
                  icon: HiOutlineHome,
                },
                {
                  label: "Bathrooms",
                  value:
                    property.bathrooms ||
                    Math.max(1, (parseInt(property.bhk) || 1) - 1),
                  icon: HiOutlineUserGroup,
                },
                {
                  label: "Furnishing",
                  value: property.furnishing || "N/A",
                  icon: HiCollection,
                },
                {
                  label: "Living Area",
                  value: `${property.areaSize} sqft`,
                  icon: HiOutlineViewGrid,
                },
                {
                  label: "Type",
                  value: property.propertyType,
                  icon: HiCalendar,
                },
              ].map((stat, i) => (
   
              ))}
          

       

           
                {(property.amenities?.length
                  ? property.amenities
                  : ["Parking", "Security", "Water Supply", "Power Backup"]
                ).map((amn, i) => (
                  
                ))}
         
                {property.status?.toLowerCase() === "rent"
                  ? `₹${Number(property.price).toLocaleString("en-IN")}`
                  : formattedPrice}
                {property.status?.toLowerCase() === "rent" && (
                  <span className={s.priceCardPeriod}> /month</span>
                )}
            
                      ₹
                     
                 <div className={s.sellerCard}>
              <div className={s.sellerInfo}>
                <div className={s.sellerAvatar}>
                  <img
                    src={
                      property.seller?.profilePic ||
                      `https://ui-avatars.com/api/?name=${property.seller?.name || "Seller"}&background=0d6e59&color=fff`
                    }
                    alt="Agent"
                    className={s.sellerAvatarImage}
                  />
                </div>
                <div className={s.sellerDetails}>
                  <div className={s.sellerNameLink}>
                    <h4 className={s.sellerName}>
                      {property.seller?.name || "Seller"}
                    </h4>
                  </div>
                  <div className={s.sellerVerifiedBadge}>
                    <HiBadgeCheck className={s.verifiedIcon} /> Verified Seller
                  </div>
                </div>
              </div>

              <div className={s.chatButtonWrapper}>
                <button className={s.chatButton} onClick={handleChatStart}>
                  <HiChatAlt /> Chat
                </button>
              </div>

              {/* Inquiry Form */}
              <h4 className={s.inquiryFormTitle}>Inquire</h4>
              <form onSubmit={handleInquirySubmit}>
                {user?.role === "buyer" ? (
                  <>
                    <textarea
                      placeholder="Your Message..."
                      value={inquiry.message}
                      onChange={(e) =>
                        setInquiry({ ...inquiry, message: e.target.value })
                      }
                      className={s.inquiryTextarea}
                      required
                    />
                    <button
                      type="submit"
                      className={s.inquirySubmitButton}
                      disabled={inquiryStatus.loading}
                    >
                      {inquiryStatus.loading ? "Sending..." : "Send Inquiry"}
                    </button>
                    {inquiryStatus.success && (
                      <p className={s.inquirySuccessMessage}>Inquiry sent!</p>
                    )}
                  </>
                ) : (
                  <div className={s.inquiryDisabledMessage}>
                    <p className={s.inquiryDisabledText}>
                      {user
                        ? "Only buyers can send inquiries."
                        : "Please login as a buyer to send inquiries."}
                    </p>
                    {!user && (
                      <Link to="/login" className={s.inquiryLoginButton}>
                        Login
                      </Link>
                    )}
                  </div>
                )}
              </form>
            </div>
                

          
            {[
              {
                label: "Property ID",
                value: property._id.slice(-8).toUpperCase(),
              },
              {
                label: "Added On",
                value: new Date(property.createdAt).toLocaleDateString(),
              },
              { label: "Property Type", value: property.propertyType },
              { label: "Status", value: `For ${property.status}` },
            ].map((detail, i) => (
             
            ))}
         
