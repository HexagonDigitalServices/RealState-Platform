  const formattedPrice = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(property.price);

  const statusBadgeClass = s.badgeStatus(property.status);

 
              <>
                <div className={s.specItem}>
                  <div className={s.specIcon}>
                    <HiOutlineHome size={20} />
                  </div>
                  <div className={s.specValue}>{property.status}</div>
                  <div className={s.specLabel}>Type</div>
                </div>
                <div className={`${s.specItem} ${s.specDivider}`}>
                  <div className={s.specIcon}>
                    <HiArrowsExpand size={20} />
                  </div>
                  <div className={s.specValue}>{property.areaSize}</div>
                  <div className={s.specLabel}>Sq Ft</div>
                </div>
                <div className={s.specItem}>
                  <div className={s.specIcon}>
                    <HiShieldCheck size={20} />
                  </div>
                  <div className={s.specValue}>OK</div>
                  <div className={s.specLabel}>Legal</div>
                </div>
              </>
  
              <>
                <div className={s.specItem}>
                  <div className={s.specIcon}>
                    <HiOutlineHome size={20} />
                  </div>
                  <div className={s.specValue}>{property.bhk}</div>
                  <div className={s.specLabel}>Beds</div>
                </div>
                <div className={`${s.specItem} ${s.specDivider}`}>
                  <div className={s.specIcon}>
                    <HiOutlineUserGroup size={20} />
                  </div>
                  <div className={s.specValue}>
                    {property.bathrooms ||
                      Math.max(1, parseInt(property.bhk) - 1 || 0)}
                  </div>
                  <div className={s.specLabel}>Baths</div>
                </div>
                <div className={s.specItem}>
                  <div className={s.specIcon}>
                    <HiArrowsExpand size={20} />
                  </div>
                  <div className={s.specValue}>{property.areaSize}</div>
                  <div className={s.specLabel}>Sq Ft</div>
                </div>
              </>
       