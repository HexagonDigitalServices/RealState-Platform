
  const { id } = useParams();
  const navigate = useNavigate();
  const { token } = useAuth();
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [existingImages, setExistingImages] = useState([]);
  const [newImages, setNewImages] = useState([]);
  const [newImagePreviews, setNewImagePreviews] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    city: "",
    area: "",
    pincode: "",
    propertyType: "flat",
    bhk: "",
    bathrooms: "",
    areaSize: "",
    furnishing: "unfurnished",
    status: "sale",
    amenities: [],
    securityDeposit: "",
    maintenance: "",
  });

  const commonAmenities = [
    "Parking",
    "Pool",
    "Gym",
    "Security",
    "Wifi",
    "Power Backup",
    "Club House",
    "Garden",
  ];


        setFormData({
          title: p.title || "",
          description: p.description || "",
          price: p.price || "",
          city: p.city || "",
          area: p.area || "",
          pincode: p.pincode || "",
          propertyType: p.propertyType || "flat",
          bhk: p.bhk || "",
          bathrooms: p.bathrooms || "",
          areaSize: p.areaSize || "",
          furnishing: p.furnishing || "unfurnished",
          status: p.status || "sale",
          amenities: p.amenities || [],
          securityDeposit: p.securityDeposit || "",
          maintenance: p.maintenance || "",
        });
       

  const handleAmenityChange = (amenity) => {
    setFormData((prev) => {
      const current = prev.amenities || [];
      if (current.includes(amenity)) {
        return { ...prev, amenities: current.filter((a) => a !== amenity) };
      } else {
        return { ...prev, amenities: [...current, amenity] };
      }
    });
  };


  
          {error && (
            <div
              style={{
                padding: "1rem",
                background: "#fee2e2",
                color: "#dc2626",
                borderRadius: "0.75rem",
                marginBottom: "2rem",
              }}
            >
              {error}
            </div>
          )}


          <div className={s.twoColumnGrid}>
            {/* Section 2: Property Details */}
            <div>
              <div className={s.sectionHeader}>
                <div className={s.sectionIndicator}></div>
                <h3 className={s.sectionTitle}>Property Details</h3>
              </div>
              <div className={s.sectionContent}>
                <div>
                  <label className={s.label}>Property Type</label>
                  <select
                    name="propertyType"
                    value={formData.propertyType}
                    onChange={handleInputChange}
                    className={s.select}
                  >
                    <option value="flat">Flat/Apartment</option>
                    <option value="villa">Independent House/Villa</option>
                    <option value="penthouse">Penthouse</option>
                    <option value="commercial">Commercial</option>
                  </select>
                </div>
                <div className={s.threeColumnGrid}>
                  <div>
                    <label className={s.label}>BHK</label>
                    <input
                      type="number"
                      name="bhk"
                      value={formData.bhk}
                      onChange={handleInputChange}
                      placeholder="e.g. 3"
                      className={s.input}
                    />
                  </div>
                  <div>
                    <label className={s.label}>Bathrooms</label>
                    <input
                      type="number"
                      name="bathrooms"
                      value={formData.bathrooms || ""}
                      onChange={handleInputChange}
                      placeholder="e.g. 2"
                      className={s.input}
                    />
                  </div>
                  <div>
                    <label className={s.label}>Area (Sq.Ft)</label>
                    <input
                      type="number"
                      name="areaSize"
                      value={formData.areaSize}
                      onChange={handleInputChange}
                      placeholder="e.g. 1500"
                      className={s.input}
                      required
                    />
                  </div>
                </div>
                <div className={s.twoColumnGridInner}>
                  <div>
                    <label className={s.label}>Furnishing</label>
                    <select
                      name="furnishing"
                      value={formData.furnishing}
                      onChange={handleInputChange}
                      className={s.select}
                    >
                      <option value="unfurnished">Unfurnished</option>
                      <option value="semi-furnished">Semi-Furnished</option>
                      <option value="furnished">Fully Furnished</option>
                    </select>
                  </div>
                  <div>
                    <label className={s.label}>Listing Status</label>
                    <select
                      name="status"
                      value={formData.status}
                      onChange={handleInputChange}
                      className={s.select}
                    >
                      <option value="sale">For Sale</option>
                      <option value="sold">Sold</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 3: Pricing & Location */}
            <div>
              <div className={s.sectionHeader}>
                <div className={s.sectionIndicator}></div>
                <h3 className={s.sectionTitle}>Pricing & Location</h3>
              </div>
              <div className={s.sectionContent}>
                <div>
                  <label className={s.label}>Price (₹)</label>
                  <input
                    type="number"
                    name="price"
                    value={formData.price}
                    onChange={handleInputChange}
                    placeholder="e.g. 5000000"
                    className={s.input}
                    required
                  />
                </div>

                <div className={s.twoColumnGridInner}>
                  <div>
                    <label className={s.label}>City</label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      placeholder="e.g. Mumbai"
                      className={s.input}
                      required
                    />
                  </div>
                  <div>
                    <label className={s.label}>Pincode</label>
                    <input
                      type="text"
                      name="pincode"
                      value={formData.pincode}
                      onChange={handleInputChange}
                      placeholder="e.g. 400001"
                      className={s.input}
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className={s.label}>Specific Area</label>
                  <input
                    type="text"
                    name="area"
                    value={formData.area}
                    onChange={handleInputChange}
                    placeholder="e.g. Worli"
                    className={s.input}
                    required
                  />
                </div>
              </div>
            </div>
          </div>

        

          {/* Section 5: Image Management */}
          <div className={s.section}>
            <div className={s.sectionHeader}>
              <div className={s.sectionIndicator}></div>
              <h3 className={s.sectionTitle}>Image Management</h3>
            </div>

            <div className={s.imageGrid}>
              {/* Existing Images */}
              {existingImages.map((src, i) => (
                <div key={`existing-${i}`} className={s.imageCard}>
                  <img src={src} alt="Existing" className={s.imageCardImg} />
                  <button
                    type="button"
                    onClick={() => removeExistingImage(src)}
                    className={s.removeImageBtn}
                  >
                    <HiX size={12} />
                  </button>
                  <div className={s.imageBadgeExisting}>EXISTING</div>
                </div>
              ))}

              {/* New Image Previews */}
              {newImagePreviews.map((src, i) => (
                <div key={`new-${i}`} className={s.imageCardNew}>
                  <img src={src} alt="New Preview" className={s.imageCardImg} />
                  <button
                    type="button"
                    onClick={() => removeNewImage(i)}
                    className={s.removeImageBtn}
                  >
                    <HiX size={12} />
                  </button>
                  <div className={s.imageBadgeNew}>NEW</div>
                </div>
              ))}

              {/* Upload Button overlay */}
              {existingImages.length + newImages.length < 10 && (
                <div className={s.uploadCard}>
                  <input
                    type="file"
                    multiple
                    onChange={handleNewImageChange}
                    className={s.uploadInput}
                    accept="image/*"
                  />
                  <HiUpload size={22} color="#64748b" />
                  <span className={s.uploadText}>Add Image</span>
                </div>
              )}
            </div>
          </div>

         
