export const adminContactsStyles = {
  container: "mb-10",
  heading: "text-[2rem] font-extrabold text-text-main mb-2",
  subheading: "text-text-muted text-[0.9rem]",
  card: "card-premium p-0 overflow-hidden",
  cardHeader: "border-b border-[#f1f5f9] p-6 flex justify-between items-center",
  cardTitle: "text-[1.2rem] font-extrabold",
  emptyState: "p-16 text-center text-text-muted",
  emptyIcon: "opacity-20 mb-4 mx-auto",
  contactList: "flex flex-col",
  contactItem: (index, total) => `p-5 sm:p-8 bg-white transition-all duration-300 ease-in-out border-b ${index !== total - 1 ? 'border-[#f1f5f9]' : 'border-transparent'}`,
  contactHeader: "flex flex-col sm:flex-row justify-between items-start mb-6 gap-4 sm:gap-0",
  avatarWrapper: (role) => `w-14 h-14 rounded-full flex items-center justify-center font-bold text-[1.25rem] shrink-0 ${role === 'seller' ? 'bg-[#dcfce7] text-[#166534]' : 'bg-[#dbeafe] text-[#1e40af]'}`,
  nameBadgeContainer: "flex items-center gap-3 mb-1 flex-wrap",
  name: "text-[1.1rem] font-extrabold text-text-main",
  roleBadge: (role) => `text-[0.7rem] px-[0.6rem] py-[0.2rem] rounded-full font-bold uppercase ${role === 'seller' ? 'bg-[#dcfce7] text-[#166534]' : 'bg-[#dbeafe] text-[#1e40af]'}`,
  contactDetails: "flex flex-col sm:flex-row gap-2 sm:gap-6 sm:flex-wrap mt-2 sm:mt-0",
  detailItem: "flex items-center gap-[0.4rem] text-[0.85rem] text-text-muted break-all sm:break-normal",
  messageBox: "bg-[#f8fafc] p-4 sm:py-5 sm:px-6 rounded-2xl text-[0.95rem] leading-[1.6] text-[#334155] border border-[#f1f5f9]",
};

export const adminDashboardStyles = {
  // Loader
  loaderFullPage: "loader-full-page",
  loader: "loader",

  // Header section
  headerContainer: "flex justify-between items-start mb-8 flex-wrap gap-6",
  pageTitle: "text-[1.75rem] font-extrabold text-text-main mb-1",
  pageSubtitle: "text-text-muted text-[0.9375rem]",
  refreshButton: "btn btn-outline py-[0.6rem] px-5 text-[0.875rem] bg-white",

  // Stats grid & cards
  statsGrid: "grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-5 mb-12",
  statCard: "card-premium p-6 flex flex-col gap-4",
  statIconContainer: "w-11 h-11 rounded-[0.875rem] flex items-center justify-center",
  statTitle: "text-[0.8125rem] font-semibold text-text-muted mb-1",
  statValue: "text-[1.75rem] font-extrabold text-text-main",

  // Second grid (System Health & Admin Tools)
  secondGrid: "grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-8 mb-8",

  // System Health card
  systemHealthCard: "card-premium p-6",
  systemHealthTitle: "mb-5 text-[1.125rem] font-bold",
  servicesContainer: "flex flex-col gap-5",
  serviceItem: "flex justify-between items-center",
  serviceName: "text-[0.875rem] font-semibold",
  statusContainer: "flex items-center gap-2",
  statusDot: "w-2 h-2 rounded-full bg-[#10b981]",
  statusText: "text-[0.8125rem] text-[#10b981] font-bold",

  // Admin Tools card
  adminToolsCard: "card-premium p-6 bg-primary text-white",
  adminToolsTitle: "mb-3 text-[1.125rem] font-bold",
  adminToolsDesc: "text-[0.8125rem] mb-6 opacity-90",
  adminToolsButtonsContainer: "flex flex-col gap-3",
  adminToolButton: "btn bg-white/20 text-white w-full justify-start text-[0.875rem]",
};

export const adminInquiriesStyles = {
  headerContainer: "mb-12",
  headerTitle: "text-[2rem] font-extrabold text-text-main mb-2",
  headerSubtitle: "text-text-muted",
  listContainer: "admin-inquiries-list flex flex-col gap-6",
  inquiryCard: "card-premium p-6 md:p-8",
  cardTopSection: "flex flex-col sm:flex-row justify-between items-start mb-6 border-b border-[#f1f5f9] pb-6 gap-4 sm:gap-4",
  propertyInfoWrapper: "flex items-center gap-4",
  propertyIconWrapper: "bg-primary-light p-3 rounded-xl text-primary",
  propertyTextWrapper: "w-full sm:w-auto text-left",
  propertyTitle: "font-bold",
  propertyId: "text-xs text-text-muted",
  dateWrapper: "text-sm text-text-muted text-left sm:text-right w-full sm:w-auto",
  dateIcon: "inline align-middle mr-1",
  detailsGrid: "grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-6",
  detailCard: "bg-[#f8fafc] p-4 md:p-5 rounded-2xl border border-[#f1f5f9]",
  detailLabel: "text-xs font-bold text-text-muted uppercase mb-3 tracking-widest",
  detailName: "font-bold text-text-main mb-1",
  detailEmail: "text-sm text-text-muted break-all",
  messageContainer: "bg-bg-alt p-6 rounded-2xl border-l-[4px] border-primary",
  messageHeader: "flex items-center gap-2 mb-2 text-primary font-bold text-sm",
  messageText: "italic text-text-main leading-relaxed",
  emptyState: "card-premium py-24 px-8 text-center",
  emptyIconWrapper: "text-text-muted mb-4",
  emptyText: "text-text-muted",
};

export const adminPropertiesStyles = {
  // Loader
  loaderFullPage: "loader-full-page",
  loader: "loader",

  // Header
  headerContainer: "mb-12",
  pageTitle: "text-[2rem] font-extrabold text-text-main mb-2",
  pageSubtitle: "text-text-muted",

  // Empty state
  emptyStateCard: "card-premium p-16 text-center text-[#64748b]",

  propertiesGrid: "grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-8 justify-items-center max-sm:grid-cols-1 max-sm:px-4",

  // Inside PropertyCard renderActions
  actionWrapper: "flex-1 flex gap-2 items-center",
  sellerInfo: "text-[0.75rem] text-[#64748b] flex-1",
  sellerName: "font-bold",
  sellerEmail: "text-[0.7rem]",
  buttonGroup: "flex gap-1",
  viewLink: "btn btn-outline p-2",
  deleteButton: "btn bg-[#fef2f2] text-[#dc2626] p-2 border border-[#fee2e2] hover:bg-red-100",
};

export const adminUsersStyles = {
  containerHeader: "flex justify-between items-start mb-8 flex-wrap gap-4",
  headerTitle: "text-[1.75rem] font-extrabold text-text-main mb-1",
  headerSubtitle: "text-text-muted text-[0.875rem]",
  filterWrapper: "relative",
  filterButton: "flex items-center gap-2 px-4 py-2.5 rounded-lg border border-[#e2e8f0] bg-white text-text-main shadow-sm hover:bg-[#f8fafc] transition-all duration-200 cursor-pointer",
  filterDropdown: "absolute right-0 max-sm:left-0 max-sm:right-auto mt-2 w-44 rounded-xl border border-[#e2e8f0] bg-white shadow-lg z-20 overflow-hidden",
  filterOption: (isActive) => `w-full text-left px-4 py-2.5 hover:bg-[#f8fafc] ${isActive ? "font-semibold text-primary" : "text-text-main"}`,
  cardContainer: "card-premium overflow-hidden mb-8 p-0",
  cardHeader: "pt-6 px-6 pb-2",
  cardTitleRow: "flex justify-between items-center mb-4",
  cardTitle: "text-[1.25rem] font-extrabold text-text-main",
  userCount: "text-sm font-semibold text-text-muted",
  userCountSpan: "text-text-main",
  tableWrapper: "overflow-x-auto touch-pan-x",
  table: "w-full border-collapse min-w-[800px]",
  thead: "bg-[#f8fafc] text-[#64748b] text-[0.7rem] font-bold uppercase tracking-[0.05em]",
  tableRow: "border-b border-[#f1f5f9]",
  thUserInfo: "py-4 px-6 text-left",
  thRole: "py-4 px-6 text-center",
  thContact: "py-4 px-6 text-left",
  thStatus: "py-4 px-6 text-center",
  thActions: "py-4 px-6 text-right",
  tdUserInfo: "py-6 px-8",
  userAvatar: "w-10 h-10 rounded-full bg-primary-light text-primary flex items-center justify-center font-bold",
  userInfoName: "font-bold text-[0.9375rem]",
  userInfoId: "text-[0.75rem] text-text-muted",
  tdRole: "py-6 px-6 text-center",
  roleBadge: (role) => `px-3 py-1.5 rounded-full text-[0.75rem] font-bold uppercase ${role === "admin" ? "bg-[#fef3c7] text-[#92400e]" :
    role === "seller" ? "bg-[#dcfce7] text-[#166534]" :
      "bg-[#dbeafe] text-[#1e40af]"
    }`,
  tdContact: "py-6 px-6",
  contactWrapper: "flex flex-col gap-1",
  contactEmail: "text-[0.875rem] flex items-center gap-2 text-text-main",
  contactPhone: "text-[0.875rem] flex items-center gap-2 text-text-main",
  tdStatus: "py-6 px-6 text-center",
  statusBadgeBlocked: "text-[#dc2626] text-[0.8125rem] font-bold inline-flex items-center gap-1.5 justify-center bg-[#fff5f5] py-1 px-2 rounded-lg border border-[#fee2e2]",
  statusBadgeActive: "text-[#10b981] text-[0.8125rem] font-bold inline-flex items-center gap-1.5 justify-center bg-[#f0fdf4] py-1 px-2 rounded-lg border border-[#dcfce7]",
  tdActions: "py-6 px-6 text-right",
  actionsWrapper: "flex gap-2 justify-end",
  blockButton: (isBlocked) => `w-9 h-9 rounded-lg border border-[#e2e8f0] bg-white flex items-center justify-center cursor-pointer hover:bg-gray-50 ${isBlocked ? "text-[#10b981]" : "text-[#f59e0b]"}`,
  deleteButton: "w-9 h-9 rounded-lg border-none bg-[#fef2f2] text-[#dc2626] flex items-center justify-center cursor-pointer hover:bg-red-100",
  emptyState: "py-16 text-center text-text-muted",
};

export const myInquiriesStyles = {
  loaderFullPage: "loader-full-page",
  loader: "loader",
  bgBgAltMinH: "bg-bg-alt min-h-screen",
  bgTransparentMinH: "bg-transparent min-h-screen",
  containerPy12TextCenter: "container py-12 text-center w-full mx-auto",
  cardPremiumPy16Px8: "card-premium py-16 px-4 md:px-8",
  textDangerMb4: "text-[var(--danger)] mb-4",
  mb8: "mb-8",
  btnPrimary: "btn btn-primary",
  bgTransparentHAuto: "bg-transparent h-auto w-full",
  containerFadeIn: "container fade-in w-full max-w-full px-4 sm:px-6 lg:px-8 overflow-hidden",
  py12Pt12: "py-12 pt-12",
  pt0: "pt-0",
  mb12: "mb-8 md:mb-12",
  heading: "text-[2rem] md:text-[2.5rem] mb-2 font-extrabold",
  textMuted: "text-text-muted text-sm md:text-base",
  cardPremiumPy24Px8TextCenter: "card-premium py-16 px-6 md:py-24 md:px-8 text-center",
  iconContainer: "bg-[#f8fafc] w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-[#94a3b8]",
  mb4: "mb-4 text-xl md:text-2xl font-bold",
  textMutedMb8: "text-[#64748b] mb-8 text-sm md:text-base",
  flexColGap6: "flex flex-col gap-4 md:gap-6 w-full",
  inquiryCard: "card-premium p-5 md:p-6 lg:p-8 flex flex-col lg:flex-row justify-between items-start lg:items-stretch gap-6 overflow-hidden",
  inquiryMain: "flex flex-col sm:flex-row gap-4 md:gap-6 flex-1 w-full min-w-0",
  iconWrapper: "bg-primary-light p-3 md:p-4 rounded-xl text-primary h-fit shrink-0",
  iconSize: "w-5 h-5 md:w-6 md:h-6",
  flex1: "flex-1 min-w-0 w-full",
  titleRow: "flex items-start md:items-center justify-between md:justify-start gap-3 mb-3 flex-wrap",
  titleText: "text-[1.1rem] md:text-[1.25rem] font-bold text-text-main break-words",
  badge: "badge shrink-0 px-2 py-1 text-xs whitespace-nowrap",
  badgeRead: "bg-[#f1f5f9] text-[#64748b]",
  badgeNew: "bg-[#eff6ff] text-[#2563eb]",
  buyerInfo: "flex flex-col md:flex-row gap-3 md:gap-6 mb-5 p-3 md:p-4 bg-[#f8fafc] rounded-xl flex-wrap w-full",
  infoItem: "flex items-center gap-2 text-[0.85rem] md:text-sm text-[#475569] break-all sm:break-normal min-w-0",
  textMutedSmall: "text-[#94a3b8] shrink-0",
  fontSemibold: "font-semibold text-text-main",
  message: "text-[#334155] text-[0.95rem] md:text-base italic mb-5 pl-3 border-l-[3px] border-[#e2e8f0] break-words",
  meta: "flex flex-col sm:flex-row gap-2 sm:gap-6 text-[0.8rem] md:text-[0.8125rem] text-[#64748b] font-medium w-full flex-wrap",
  flexItemsCenterGap2: "flex items-center gap-1.5 whitespace-nowrap",
  actions: "flex flex-col sm:flex-row lg:flex-col gap-3 w-full lg:w-[160px] lg:shrink-0 lg:ml-6 pt-4 lg:pt-0 border-t border-[#f1f5f9] lg:border-t-0 justify-center",
  btnOutline: "btn btn-outline py-2.5 px-4 md:py-3 w-full justify-center flex items-center gap-2 text-sm",
  btnPrimaryWhitespaceNowrap: "btn btn-primary py-2.5 px-4 md:py-3 w-full justify-center text-sm",
  btnMessage: "btn py-2.5 px-4 md:py-3 w-full justify-center bg-[#2563eb] text-white hover:bg-[#1d4ed8] flex items-center gap-2 text-sm rounded-xl font-semibold shadow-sm",
};

export const sellerRequestsStyles = {
  // Loader
  loaderFullPage: "loader-full-page",
  loader: "loader",

  // Container & header
  container: "seller-requests-container",
  headerContainer: "mb-8",
  pageTitle: "text-[1.75rem] font-extrabold text-text-main mb-1",
  pageSubtitle: "text-text-muted text-[0.875rem]",

  // Card
  card: "card-premium",
  cardInner: "p-6",
  sectionTitle: "text-[1.25rem] font-extrabold text-text-main mb-6",

  // Empty state
  emptyState: "text-center py-12 text-text-muted",
  emptyStateIcon: "opacity-20 mb-4 mx-auto",

  // Request grid & card
  requestGrid: "grid grid-cols-[repeat(auto-fill,minmax(350px,1fr))] gap-6 max-sm:grid-cols-1",
  requestCard: "border border-[#f1f5f9] rounded-2xl p-6 bg-[#f8fafc] transition-all duration-300 ease-in-out hover:-translate-y-1",
  requestHeader: "flex items-center gap-4 mb-5",
  avatar: "w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-[1.25rem]",
  requestName: "font-bold text-[1.1rem] text-text-main",
  requestDate: "text-[0.75rem] text-text-muted flex items-center gap-1",

  // Contact info
  contactInfo: "flex flex-col gap-3 mb-6",
  contactItem: "flex items-center gap-3 text-[0.9rem] text-[#475569] break-all",

  // Button
  approveButton: "w-full p-3 rounded-xl border-none bg-primary text-white font-bold cursor-pointer flex items-center justify-center gap-2 transition-transform duration-200 ease-in-out hover:-translate-y-[2px]",
};

export const wishlistStyles = {
  loaderFullPage: "loader-full-page",
  loader: "loader",
  pageContainer: "bg-bg-alt min-h-screen pt-32 max-lg:pt-28",
  mainContainer: "container fade-in py-12 px-4 md:px-8",
  headingWrapper: "mb-12",
  heading: "text-[2.5rem] mb-2",
  subheading: "text-text-muted",
  emptyCard: "card-premium py-24 px-8 text-center",
  emptyIconWrapper: "bg-bg-alt w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8 text-text-muted",
  emptyTitle: "mb-4",
  emptyText: "text-text-muted mb-8",
  browseButton: "btn btn-primary",
  gridContainer: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:justify-items-center",
  removeButton: "btn w-full p-3 rounded-xl bg-[#fff5f5] text-[#ef4444] border border-[#fee2e2] flex items-center justify-center gap-2 font-bold",
};


export const addPropertyStyles = {
  // Container
  outerContainer: "fade-in px-4 py-8 md:py-12 w-full mx-auto dashboard-content",
  innerContainer: "max-w-[900px] w-full mx-auto",
  header: "mb-12 text-center",
  heading: "text-[clamp(1.75rem,5vw,2.5rem)] mb-4 text-text-main font-extrabold",
  subheading: "text-text-muted text-base",
  form: "card-premium p-6 md:p-10",
  error: "p-4 bg-red-50 text-red-600 rounded-xl mb-8",

  // Sections
  section: "mb-12",
  sectionHeader: "flex items-center gap-4",
  sectionHeaderLargeMargin: "mb-8",
  sectionHeaderSmallMargin: "mb-6",
  sectionBar: "w-1 h-6 bg-primary rounded-sm",
  sectionTitle: "text-xl font-extrabold text-text-main",

  // Content groups
  contentGroupLarge: "flex flex-col gap-6",
  contentGroupMedium: "flex flex-col gap-5",
  contentGroupSmall: "flex flex-col gap-5", // same as medium

  // Labels
  label: "block mb-2.5 text-sm font-bold text-text-main",
  labelSmallMargin: "block mb-2 text-sm font-bold text-text-main",

  // Inputs
  input: "w-full py-3.5 px-4 rounded-xl border border-[#e2e8f0] outline-none bg-white text-[0.9375rem] focus:border-primary transition-colors",
  textarea: "h-[120px] resize-none leading-relaxed",
  select: "cursor-pointer",

  // Grid layouts
  twoColumnGrid: "grid grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-8 mb-12",
  gridThreeCol: "grid grid-cols-1 sm:grid-cols-3 gap-4",
  gridTwoCol: "grid grid-cols-1 sm:grid-cols-2 gap-4",
  amenitiesGrid: "grid grid-cols-[repeat(auto-fill,minmax(150px,1fr))] gap-4",

  // Amenities label styles
  amenityLabelBase: "flex items-center gap-3 cursor-pointer p-3 rounded-xl border transition-all duration-200",
  amenityLabelActive: "bg-primary-light border-primary",
  amenityLabelInactive: "bg-[#f8fafc] border-[#e2e8f0]",
  amenityCheckbox: "accent-primary w-4 h-4",
  amenityTextBase: "text-sm font-semibold",
  amenityTextActive: "text-primary",
  amenityTextInactive: "text-text-main",

  // Image upload
  uploadArea: "border-2 border-dashed border-[#cbd5e1] p-12 rounded-xl text-center cursor-pointer relative bg-[#f8fafc] transition-colors hover:border-primary",
  uploadIconWrapper: "flex justify-center mb-4",
  uploadTitle: "mb-2 text-text-main font-bold",
  uploadSubtext: "text-sm text-text-muted",

  // Previews
  previewsGrid: "grid grid-cols-[repeat(auto-fill,minmax(100px,1fr))] gap-4 mt-8",
  previewItem: "relative aspect-square rounded-xl overflow-hidden border border-[#f1f5f9] shadow-sm",
  removeButton: "absolute top-1 right-1 bg-[#dc2626] text-white border-none rounded-full w-5 h-5 flex items-center justify-center cursor-pointer z-10 shadow-md",
  addMoreBox: "aspect-square border-2 border-dashed border-[#cbd5e1] rounded-xl flex flex-col items-center justify-center cursor-pointer relative bg-[#f8fafc] transition-colors hover:border-primary",
  addMoreText: "text-xs font-bold text-[#64748b] mt-1.5",

  // Footer buttons
  footerButtons: "mt-12 flex justify-center flex-wrap gap-5 border-t border-[#f1f5f9] pt-10",
  cancelButton: "btn btn-outline py-3.5 px-10 font-bold min-w-[140px]",
  submitButton: "btn btn-primary py-3.5 px-12 font-bold min-w-[180px]",
};

export const editPropertyStyles = {
  pageContainer: "fade-in px-4 py-8 md:py-12 w-full mx-auto dashboard-content",
  innerContainer: "max-w-[900px] w-full mx-auto",
  headerWrapper: "mb-12 text-center",
  pageTitle: "text-[clamp(1.75rem,5vw,2.5rem)] mb-4 text-text-main font-extrabold",
  pageSubtitle: "text-text-muted text-base",
  formContainer: "card-premium p-6 md:p-10",
  section: "mb-12",
  sectionHeader: "flex items-center gap-4 mb-8",
  sectionIndicator: "w-1 h-6 bg-primary rounded-sm",
  sectionTitle: "text-xl font-extrabold text-text-main",
  sectionContent: "flex flex-col gap-6",
  label: "block mb-2.5 text-sm font-bold text-text-main",
  input: "w-full py-3.5 px-4 rounded-xl border border-[#e2e8f0] outline-none bg-white text-[0.9375rem] focus:border-primary transition-colors",
  textarea: "w-full h-[120px] py-3.5 px-4 rounded-xl border border-[#e2e8f0] outline-none resize-none bg-white text-[0.9375rem] leading-relaxed focus:border-primary transition-colors",
  select: "w-full p-3.5 rounded-xl border border-[#e2e8f0] outline-none bg-white cursor-pointer focus:border-primary transition-colors",
  twoColumnGrid: "grid grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-8 mb-12",
  threeColumnGrid: "grid grid-cols-1 sm:grid-cols-3 gap-4",
  twoColumnGridInner: "grid grid-cols-1 sm:grid-cols-2 gap-4",
  amenitiesGrid: "grid grid-cols-[repeat(auto-fill,minmax(150px,1fr))] gap-4",
  amenityLabel: (isSelected) => `flex items-center gap-3 cursor-pointer p-3 rounded-xl border transition-all duration-200 ${isSelected ? 'bg-primary-light border-primary' : 'bg-[#f8fafc] border-[#e2e8f0]'}`,
  amenityCheckbox: "accent-primary w-4 h-4",
  amenityText: (isSelected) => `text-sm font-semibold ${isSelected ? 'text-primary' : 'text-text-main'}`,
  imageGrid: "grid grid-cols-[repeat(auto-fill,minmax(100px,1fr))] gap-4",
  imageCard: "relative aspect-square rounded-xl overflow-hidden border-2 border-[#f1f5f9]",
  imageCardNew: "relative aspect-square rounded-xl overflow-hidden border-2 border-dashed border-primary",
  imageCardImg: "w-full h-full object-cover",
  removeImageBtn: "absolute top-1 right-1 bg-[#dc2626] text-white border-none rounded-full w-5 h-5 flex items-center justify-center cursor-pointer z-10",
  imageBadgeExisting: "absolute bottom-0 left-0 right-0 bg-primary text-white text-[0.6rem] text-center py-0.5 font-bold tracking-widest",
  imageBadgeNew: "absolute bottom-0 left-0 right-0 bg-[#10b981] text-white text-[0.6rem] text-center py-0.5 font-bold tracking-widest",
  uploadCard: "aspect-square border-2 border-dashed border-[#cbd5e1] rounded-xl flex flex-col items-center justify-center cursor-pointer relative bg-[#f8fafc] transition-colors hover:border-primary",
  uploadInput: "absolute inset-0 opacity-0 cursor-pointer",
  uploadText: "text-xs font-bold text-[#64748b] mt-1.5",
  formActions: "mt-12 flex justify-center flex-wrap gap-5 border-t border-[#f1f5f9] pt-10",
  cancelButton: "btn btn-outline py-3.5 px-10 font-bold min-w-[140px]",
  submitButton: "btn btn-primary py-3.5 px-12 font-bold min-w-[180px]",
};

export const myPropertiesStyles = {
  // Loader (reuse from other components, but define here for consistency)
  loaderFullPage: "loader-full-page",
  loader: "loader",

  // Layout
  fadeIn: "fade-in",

  // Header section
  header: "flex flex-col md:flex-row justify-between items-start md:items-center mb-8 flex-wrap gap-6 my-props-header text-left",
  heading: "text-[1.75rem] font-extrabold text-text-main mb-1",
  subheading: "text-text-muted text-[0.9375rem]",
  addButton: "btn btn-primary py-3 px-6 rounded-xl font-bold w-full md:w-auto text-center",

  // Content container (no special classes in original, but we keep as is)
  content: "mb-8",

  // Empty state
  emptyCard: "card-premium py-24 px-8 text-center",
  emptyIconWrapper: "bg-[#f8fafc] w-[80px] h-[80px] rounded-full flex items-center justify-center mx-auto mb-8",
  emptyTitle: "mb-4 text-2xl font-bold text-text-main",
  emptyText: "text-[#64748b] mb-8",
  emptyButton: "btn btn-primary",

  // Properties grid
  grid: "grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-8 justify-items-center max-sm:grid-cols-1 max-sm:px-4",

  // Action buttons inside PropertyCard
  actionContainer: "flex-1 flex gap-2 items-center",
  selectWrapper: "flex-1 relative",
  select: "w-full py-2.5 pr-8 pl-3 text-[0.8125rem] font-semibold rounded-lg border border-[#e2e8f0] bg-white appearance-none cursor-pointer outline-none",
  selectAvailable: "text-[#10b981]",
  selectSold: "text-[#ef4444]",
  selectIcon: "absolute right-[0.8rem] top-1/2 -translate-y-1/2 pointer-events-none text-[#94a3b8]",
  editButton: "btn btn-outline p-2.5 text-[0.8125rem] flex items-center justify-center gap-1.5 border border-[#e2e8f0]",
  deleteButton: "btn p-2.5 text-[0.8125rem] bg-[#fff5f5] text-[#ef4444] border border-[#fee2e2] flex items-center justify-center gap-1.5 transition-colors hover:bg-[#fee2e2]",
};

export const pendingApprovalStyles = {
  // Container
  container: "flex flex-col items-center justify-center min-h-[70vh] text-center p-8",

  // Icon circle
  iconCircle: "w-[100px] h-[100px] rounded-full bg-[#fef3c7] text-[#d97706] flex items-center justify-center mb-8 shadow-[0_8px_16px_rgba(217,119,6,0.1)] animate-pulse",

  // Heading and text
  heading: "text-[2rem] font-extrabold text-[#1e293b] mb-4",
  description: "max-w-[500px] text-[#64748b] text-[1.1rem] leading-relaxed mb-10",

  // Buttons container
  buttonGroup: "flex gap-4 flex-wrap justify-center",

  // Browse button
  browseButton: "py-3.5 px-6 rounded-xl bg-primary text-white font-bold no-underline flex items-center gap-2 shadow-[0_4px_12px_rgba(var(--primary-rgb),0.2)] transition-all duration-300",

  // Manual refresh button
  refreshButtonBase: "py-3.5 px-6 rounded-xl bg-[#eef2ff] border border-[#e0e7ff] text-primary font-bold flex items-center gap-2 transition-all duration-300",
  refreshButtonEnabled: "cursor-pointer",
  refreshButtonDisabled: "cursor-not-allowed",

  // Support section
  supportContainer: "mt-16 flex items-center gap-2 text-[#94a3b8] text-[0.9rem]",
  supportLink: "text-primary no-underline font-semibold",
};

export const sellerDashboardStyles = {
  header: "flex flex-col md:flex-row justify-between items-start mb-8 flex-wrap gap-6 md:gap-6",
  headerLeft: "min-w-0 w-full md:w-auto md:min-w-[280px]",
  headerTitle: "text-[1.5rem] sm:text-[1.75rem] font-extrabold text-text-main mb-1",
  headerSubtitle: "text-[#64748b] text-[0.9375rem]",
  headerActions: "flex gap-3 flex-wrap w-full md:w-auto",
  exportButton: "btn btn-outline bg-white flex items-center gap-2 font-bold flex-1 justify-center whitespace-nowrap",
  addButton: "btn btn-primary flex items-center gap-2 font-bold py-3 px-5 flex-1 justify-center whitespace-nowrap",
  statsGrid: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-4 sm:gap-5 mb-12",
  statCard: "bg-white p-6 rounded-[1.25rem] border border-[#f1f5f9] shadow-[0_4px_20px_rgba(0,0,0,0.02)]",
  statIconWrapper: "w-10 h-10 rounded-xl bg-[#f1f5f9] flex items-center justify-center mb-5",
  statTitle: "text-[#64748b] text-[0.8125rem] font-semibold mb-1",
  statValue: "text-[1.5rem] font-extrabold text-text-main",
  listingsSection: "mb-12",
  listingsHeader: "flex justify-between items-center mb-6 flex-wrap gap-4",
  listingsTitle: "text-[1.25rem] font-extrabold text-text-main",
  searchWrapper: "relative w-full max-w-[300px]",
  searchIcon: "absolute left-4 top-1/2 -translate-y-1/2 text-[#94a3b8]",
  searchInput: "py-2.5 pr-4 pl-10 rounded-xl border border-[#e2e8f0] outline-none text-[0.875rem] w-full",
  emptyListings: "card-premium py-16 text-center text-[#64748b]",
  propertiesGrid: "grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-6 justify-items-center max-sm:grid-cols-1 max-sm:px-4",
  propertyActions: "flex-1 flex gap-[0.4rem]",
  statusButton: (status) => `btn btn-outline flex-1 p-2 text-[0.75rem] flex items-center justify-center gap-1 ${status === 'sold' ? 'text-primary border-primary hover:bg-primary-light' : 'text-[#64748b]'}`,
  editButton: "btn btn-outline flex-1 p-2 text-[0.75rem] flex items-center justify-center gap-1",
  deleteButton: "btn btn-outline flex-1 p-2 text-[0.75rem] text-[#ef4444] border-[#fee2e2] flex items-center justify-center gap-1 hover:bg-red-50",
  viewButton: "btn btn-primary p-2 flex items-center justify-center",
  showMoreWrapper: "text-center mt-10",
  showMoreButton: "btn btn-outline py-3 px-10 font-extrabold text-[0.9rem] rounded-xl bg-white shadow-[0_4px_12px_rgba(0,0,0,0.05)] inline-flex items-center gap-2",
  widgetsGrid: "grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-8 mb-8",
  inquiriesWidget: "bg-white rounded-3xl border border-[#f1f5f9] p-6 shadow-[0_4px_20px_rgba(0,0,0,0.02)]",
  widgetTitle: "text-[1.125rem] font-extrabold text-text-main mb-1",
  widgetSubtitle: "text-[#64748b] text-[0.8125rem] mb-6",
  inquiriesList: "flex flex-col gap-5",
  inquiryItem: "flex justify-between items-center flex-wrap gap-4",
  inquiryLeft: "flex items-center gap-4 min-w-[200px]",
  inquiryIcon: "w-10 h-10 rounded-full bg-[#f1f5f9] flex items-center justify-center border-2 border-white shadow-[0_2px_10px_rgba(0,0,0,0.05)]",
  inquiryName: "font-bold text-[0.875rem] text-text-main",
  inquiryProperty: "text-[0.75rem] text-[#64748b]",
  inquiryRight: "text-right flex-1",
  inquiryDate: "text-[0.7rem] text-[#94a3b8] mb-0.5",
  inquiryStatus: (status) => `py-0.5 px-2 rounded-full text-[0.65rem] font-extrabold uppercase ${status === 'read' ? 'bg-[#f1f5f9] text-[#64748b]' : 'bg-primary-light text-primary'}`,
  noInquiries: "text-center text-[#64748b] p-4",
  tipsWidget: "bg-white rounded-3xl border border-[#f1f5f9] p-6 shadow-[0_4px_20px_rgba(0,0,0,0.02)]",
  tipsList: "flex flex-col gap-4",
  tipCardHighViews: "bg-[#f0fdfa] p-4 rounded-2xl border border-[#ccfbf1]",
  tipTitleHighViews: "text-primary mb-1 flex items-center gap-2 text-[0.875rem]",
  tipTextHighViews: "text-[0.75rem] text-[#134e4a] leading-relaxed",
  tipCardMarket: "p-4 rounded-2xl bg-[#f9fafb]",
  tipTitleMarket: "text-[#4b5563] mb-1 font-bold text-[0.875rem]",
  tipTextMarket: "text-[0.75rem] text-[#6b7280] leading-relaxed",
};

export const chatMessagesStyles = {
  // Loader (reuse existing)
  loaderFullPage: "loader-full-page",
  loader: "loader",

  // Main container
  chatContainer: "flex flex-col overflow-hidden",
  chatContainerSeller: "h-[calc(100vh-120px)]",
  chatContainerNonSeller: "h-screen md:h-screen pt-32 max-lg:pt-28",

  // Chat wrapper
  chatWrapper: "flex flex-1 bg-[#f8fafc] font-sans relative overflow-hidden mt-0 md:mt-0",

  // Sidebar
  sidebar: "w-full absolute inset-0 z-10 transition-transform duration-300 lg:relative lg:w-[350px] shrink-0 bg-white border-r border-[#e2e8f0] flex flex-col lg:translate-x-0",
  sidebarHidden: "-translate-x-full lg:-translate-x-0 hidden lg:flex",
  sidebarHeader: "p-5 border-b border-[#f1f5f9]",
  sidebarTitle: "m-0 text-xl font-bold text-[#1e293b]",
  sidebarContent: "flex-1 overflow-y-auto",
  emptyConversations: "flex-1 flex flex-col items-center justify-center text-[#94a3b8] text-center p-10",
  emptyIcon: "w-20 h-20 mb-5 opacity-50",
  conversationItem: "p-[15px_20px] flex items-center gap-3 cursor-pointer transition-colors duration-200 border-b border-[#f8fafc] hover:bg-[#f1f5f9] group",
  conversationItemActive: "bg-[#f0f9ff] border-r-[3px] border-r-[#00b4d8]",
  avatar: "w-9 h-9 md:w-12 md:h-12 rounded-full bg-[#00b4d8] text-white flex items-center justify-center font-bold text-[0.9rem] md:text-base overflow-hidden",
  avatarImg: "w-full h-full object-cover",
  conversationInfo: "flex-1 min-w-0",
  conversationName: "font-semibold text-[#1e293b] mb-1 whitespace-nowrap overflow-hidden text-ellipsis",
  conversationPreview: "text-[0.85rem] text-[#64748b] whitespace-nowrap overflow-hidden text-ellipsis",
  deleteChatButton: "bg-transparent border-none text-[#94a3b8] p-2 rounded-lg cursor-pointer opacity-100 md:opacity-0 transition-all duration-200 flex items-center justify-center hover:text-red-500 hover:bg-red-100 md:group-hover:opacity-100",

  // Chat area
  chatArea: "absolute inset-0 z-[5] lg:relative lg:flex-1 lg:z-auto flex flex-col bg-white w-full",
  chatHeader: "p-[10px_15px] md:p-[15px_25px] bg-white sticky md:relative top-0 z-20 border-b border-[#e2e8f0] flex items-center justify-between",
  chatHeaderLeft: "flex items-center gap-3",
  backButton: "flex lg:hidden mr-2.5 bg-[#f1f5f9] border-none p-1.5 rounded-full text-[#1e293b]",
  chatPartnerName: "font-bold text-[#1e293b]",
  messagesArea: "p-[15px] pb-[80px] md:p-[25px] md:pb-[25px] overflow-y-auto flex-1 flex flex-col gap-[15px] bg-[#f8fafc]",
  messageBubble: "max-w-[85%] md:max-w-[70%] p-[12px_18px] rounded-[20px] text-[0.95rem] leading-[1.5] relative",
  messageOwn: "self-end bg-[#00b4d8] text-white rounded-br-[4px] shadow-[0_4px_12px_rgba(0,180,216,0.2)]",
  messageOther: "self-start bg-white text-[#334155] rounded-bl-[4px] shadow-[0_4px_12px_rgba(0,0,0,0.05)]",
  messageContent: "flex items-start gap-2 break-all",
  messageImageWrapper: "mb-2 rounded-lg overflow-hidden",
  messageImage: "w-full max-h-[200px] object-cover block",
  messageText: "break-all",
  deleteMessageButton: "bg-transparent border-none text-white/60 cursor-pointer p-0.5 rounded transition-all duration-200 mt-0.5 hover:text-white hover:bg-white/20",
  messageTime: "text-[0.75rem] mt-1.5 opacity-70 block",
  messageForm: "p-[12px_15px] md:p-[20px_25px] bg-white sticky md:relative bottom-0 border-t border-[#e2e8f0] flex gap-[15px] items-center",
  messageInput: "flex-1 min-w-0 border border-[#e2e8f0] rounded-[30px] p-[12px_25px] outline-none text-[0.95rem] transition-colors duration-200 focus:border-[#00b4d8]",
  sendButton: "bg-[#00b4d8] text-white border-none w-[45px] h-[45px] rounded-full cursor-pointer flex items-center justify-center transition-all duration-200 text-xl hover:bg-[#0077b6] hover:scale-105 active:scale-95 shrink-0",
  sendIcon: "rotate-90",
  noChatSelected: "flex-1 flex flex-col items-center justify-center text-[#94a3b8] text-center p-10",
  noChatIcon: "w-20 h-20 mb-5 opacity-50",
  noChatTitle: "font-bold",
};

export const contactStyles = {
  // Layout
  container: "min-h-screen bg-[#f8fafc] pt-32 max-lg:pt-28",
  mainContainer: "container py-16 px-6 max-w-[1000px] mx-auto",

  // Header
  header: "text-center mb-14",
  heading: "text-[2.5rem] font-extrabold text-text-main mb-4",
  subheading: "text-text-muted text-[1.1rem] max-w-[600px] mx-auto",

  // Grid
  grid: "grid grid-cols-[1fr_1.5fr] gap-12 items-start max-lg:grid-cols-1 max-lg:gap-8",

  // Contact Info section
  contactInfoContainer: "flex flex-col gap-8",
  contactInfoCard: "card-premium p-8",
  contactItem: "flex items-center gap-4",
  contactItemMarginBottom: "mb-6",
  contactIconWrapper: "w-10 h-10 rounded-xl bg-primary-light text-primary flex items-center justify-center",
  contactIconWrapperAlt: "w-10 h-10 rounded-xl bg-[#dbeafe] text-[#1e40af] flex items-center justify-center",
  contactTitle: "font-bold text-base",
  contactDetail: "text-text-muted text-[0.9rem]",

  // Quick support card
  quickSupportCard: "card-premium h-[200px] bg-primary text-white flex flex-col justify-center items-center p-8 text-center",
  quickSupportTitle: "mb-2 font-bold text-xl",
  quickSupportText: "text-[0.9rem] opacity-90",

  // Form section
  formCard: "card-premium p-10",
  successContainer: "text-center py-8",
  successIcon: "text-primary mx-auto mb-6",
  successTitle: "mb-4 text-2xl font-bold",
  successMessage: "text-text-muted mb-8",
  successButton: "btn btn-primary py-3 px-8",

  form: "flex flex-col gap-6",
  formTwoColGrid: "grid grid-cols-2 gap-4 max-sm:grid-cols-1",
  inputGroup: "",
  label: "block mb-2 font-semibold text-[0.9rem] items-center",
  input: "w-full p-3 rounded-xl border border-[#e2e8f0] outline-none transition-colors focus:border-primary",
  textarea: "resize-none",
  errorMessage: "text-red-600 text-[0.875rem] p-3 bg-red-50 rounded-lg",
  submitButton: "btn btn-primary w-full p-4 rounded-xl font-bold text-base mt-4",
};


export const profileStyles = {
  containerWrapper: (role) => role !== 'seller' ? 'bg-bg-alt min-h-screen pt-32 max-lg:pt-28' : 'bg-transparent min-h-auto',
  mainContainer: (role) => `container fade-in max-w-[800px] mb-16 ${role !== 'seller' ? 'mx-auto pt-12' : 'mx-0 pt-0'}`,
  header: "mb-12 md:text-center md:mb-8",
  pageTitle: "text-[2.5rem] mb-2 md:text-[2rem]",
  pageSubtitle: "text-text-muted",
  card: "card-premium p-12 md:p-6",
  profileHeader: "flex flex-col md:flex-row items-center gap-4 md:gap-8 mb-10 md:mb-16 text-center md:text-left",
  avatarSection: "relative",
  avatarWrapper: "w-[120px] h-[120px] rounded-[2.5rem] bg-primary-light overflow-hidden flex items-center justify-center text-[3rem] font-bold text-primary border-4 border-white shadow-lg",
  avatarImage: "w-full h-full object-cover",
  avatarPlaceholder: "text-primary opacity-60",
  uploadButton: "absolute -bottom-2.5 -right-2.5 bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center cursor-pointer shadow-[0_4px_10px_rgba(0,0,0,0.2)] border-4 border-white z-10 hover:bg-primary-dark transition-colors",
  removeButton: "absolute -top-2.5 -right-2.5 bg-red-500 text-white w-10 h-10 rounded-full flex items-center justify-center cursor-pointer shadow-[0_4px_10px_rgba(0,0,0,0.2)] border-4 border-white z-10 hover:bg-red-600 transition-colors",
  userName: "text-[1.75rem] mb-1 break-all sm:break-normal",
  roleBadge: "badge badge-sale bg-primary-light text-primary px-4 py-2 rounded-xl",
  errorMessage: "p-4 bg-red-100 text-red-600 rounded-xl mb-8",
  editForm: "flex flex-col gap-8",
  label: "block mb-2 text-sm font-semibold",
  input: "w-full p-3.5 rounded-xl border border-border outline-none focus:border-primary transition-colors",
  textarea: "w-full h-[100px] p-3.5 rounded-xl border border-border outline-none resize-none focus:border-primary transition-colors",
  formActions: "flex flex-col md:flex-row gap-4 mt-4",
  saveButton: "btn btn-primary flex-1 flex items-center justify-center gap-2",
  cancelButton: "btn btn-outline flex-1 flex items-center justify-center gap-2",
  infoSection: "flex flex-col gap-10",
  infoItem: "flex items-center gap-6",
  infoIcon: "w-12 h-12 rounded-2xl bg-[#f8fafc] flex items-center justify-center text-primary shrink-0",
  infoLabel: "text-sm text-text-muted mb-0.5",
  infoValue: "font-semibold break-all sm:break-normal",
  editButtonWrapper: "mt-8 pt-8 border-t border-border",
  editProfileButton: "btn btn-primary px-10 py-3.5",
};

export const landingPageStyles = {
  // Layout
  bgMain: "bg-bg-main",
  container: "container ",

  // Hero section
  heroSection:
    "fade-in items-center justify-center  hero-section pt-32 pb-16 xl:px-40 md:px-20 flex items-center gap-16 overflow-hidden md:flex-col lg:flex-col xl:flex-row max-lg:flex-col max-lg:text-center max-lg:pt-28 max-lg:pb-8 max-lg:px-4 max-lg:gap-8",
  heroContent:
    "hero-content flex-1 max-lg:flex max-lg:flex-col max-lg:items-center",
  badge: "badge bg-primary-light text-primary-dark mb-6 inline-block",
  heroTitle:
    "hero-title text-[clamp(2rem,5vw,4.5rem)] mb-6 transition-all duration-300 max-lg:text-[clamp(1.75rem,8vw,2.5rem)] max-lg:leading-tight max-lg:text-center",
  textGradient: "text-gradient",
  heroSubtitle:
    "hero-subtitle text-[1.125rem] text-text-muted mb-12 max-w-[540px] max-lg:text-base max-lg:mb-10 max-lg:mx-auto max-lg:text-center max-lg:px-4",

  // Search form
  searchForm:
    "glass search-form p-5 rounded-[2rem] flex items-center gap-4 shadow-[0_20px_40px_rgba(0,0,0,0.08)] max-w-[900px] border border-white/50 relative z-10 max-lg:flex-col max-lg:w-full max-lg:max-w-[500px] max-lg:mx-auto max-lg:gap-2 max-lg:rounded-[1.5rem]",
  searchField:
    "search-field flex-[1.2] flex items-center gap-3 py-2 px-3 transition-all duration-300 min-w-[220px] max-lg:w-full max-lg:py-4 max-lg:px-2 max-lg:border-b max-lg:border-[#f1f5f9]",
  textPrimary: "text-primary",
  flexCol: "flex flex-col flex-1",
  labelSmall:
    "text-[0.7rem] font-extrabold text-text-muted uppercase tracking-[0.05em] mb-1",
  inputTransparent:
    "border-none bg-transparent outline-none w-full text-base font-semibold text-text-main",
  searchDivider:
    "search-divider w-[1px] h-[44px] bg-border-color opacity-60 shrink-0 max-lg:hidden",
  searchButton:
    "btn btn-primary search-button h-[64px] min-w-[140px] rounded-[1.25rem] text-base font-bold shadow-[0_12px_24px_rgba(13,148,136,0.25)] flex items-center justify-center gap-2 max-lg:w-full max-lg:h-[56px] max-lg:rounded-2xl max-lg:mt-2",

  // Stats
  statsContainer:
    "stats-container flex gap-[clamp(1rem,3vw,4rem)] mt-16 max-lg:justify-center max-lg:gap-8 max-md:flex-wrap",
  statItemFlex: "flex-1 max-md:flex-none max-md:shrink-0 max-md:basis-[120px]",
  statNumber: "text-[clamp(1.5rem,3vw,2rem)] font-extrabold",
  statLabel:
    "uppercase text-[0.7rem] text-text-muted font-extrabold tracking-[0.05em]",
  statItemBorder:
    "stat-item border-l border-border-color pl-[clamp(1rem,3vw,4rem)] flex-1 max-lg:pl-8 max-md:border-none max-md:pl-0 max-md:flex-none max-md:shrink-0 max-md:basis-[120px]",

  // Hero image
  heroImageContainer: "hero-image-container flex-1 relative ",
  imageWrapper:
    "rounded-[3rem] overflow-hidden shadow-[0_40px_80px_-20px_rgba(0,0,0,0.25)] relative",
  heroImage: "w-full h-[600px] object-cover",
  verifiedBadge:
    "glass absolute bottom-8 left-8 p-6 rounded-3xl flex items-center gap-4 max-w-[300px]",
  badgeIconWrapper: "bg-primary-light p-3 rounded-2xl",
  badgeTitle: "text-[0.9375rem] m-0 font-bold",
  badgeText: "text-[0.75rem] text-text-muted m-0",
  preApproved: "badge bg-primary/10 text-primary text-[0.625rem]",

  // Category section
  categorySection: "py-24 bg-bg-alt",
  categoryHeader:
    "category-header flex justify-between items-end mb-12 max-sm:flex-col max-sm:items-start max-sm:gap-6",
  categoryHeaderText: "max-w-[500px]",
  categoryTitle: "text-[2.5rem] font-extrabold mb-4 max-sm:text-[2rem]",
  categoryDesc: "text-text-muted",
  categoryGrid:
    "category-grid grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-6 max-sm:grid-cols-2 max-sm:gap-4",
  categoryCard:
    "category-card py-10 px-6 text-center cursor-pointer bg-white rounded-3xl border border-[#e2e8f0] transition-all duration-300 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05)] hover:-translate-y-2 hover:border-primary hover:shadow-[0_12px_25px_-5px_rgba(13,148,136,0.1)] group max-sm:py-6 max-sm:px-4",
  categoryIconWrapper:
    "category-icon-wrapper w-16 h-16 bg-primary-light text-primary rounded-[1.25rem] flex items-center justify-center mx-auto mb-6 transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:scale-110 max-sm:w-12 max-sm:h-12 max-sm:mb-4 max-sm:rounded-2xl",
  categoryName: "mb-2 text-xl font-bold max-sm:text-base",
  categoryCount: "text-text-muted text-[0.875rem]",

  // Features section
  featuresSection: "py-32",
  featuresContainer:
    "container features-container flex gap-24 items-center max-lg:flex-col max-lg:gap-12",
  featuresList:
    "features-list-container flex-1 grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-8 max-md:grid-cols-1 max-md:gap-8",
  featureCard:
    "fade-in feature-card-item p-8 bg-white rounded-3xl border border-[#e2e8f0] transition-all duration-300 flex flex-col items-start hover:border-primary hover:-translate-y-[5px] hover:shadow-[0_10px_25px_-5px_rgba(0,0,0,0.05)]",
  featureIconWrapper:
    "w-14 h-14 bg-primary-light text-primary rounded-2xl flex items-center justify-center mb-6",
  featureTitle: "text-[1.125rem] mb-3 font-extrabold",
  featureDesc: "text-text-muted text-[0.875rem] leading-relaxed",
  featuresContent: "flex-1",
  featuresHeading: "text-[clamp(2rem,4vw,3.5rem)] font-extrabold mb-8",
  featuresSubtext: "text-text-muted text-[1.125rem] mb-12 leading-[1.8]",
  featuresListItems: "flex flex-col gap-6",
  listItem: "flex items-center gap-4 font-medium",
  learnMoreLink:
    "inline-block mt-12 text-primary font-semibold border-b-2 hover:text-primary-dark",

  // How It Works section
  processSection: "py-32 bg-bg-main",
  processHeader: "text-center mb-20",
  processBadge: "badge bg-primary/10 text-primary mb-4 inline-block",
  processTitle: "text-5xl mb-6 max-sm:text-4xl text-text-main font-extrabold",
  processSubtitle: "text-text-muted max-w-[600px] mx-auto text-lg",
  processGrid:
    "process-grid grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-12 relative max-md:gap-14",
  processCard:
    "process-card py-12 px-8 bg-white/40 backdrop-blur-md rounded-[2rem] border border-white/50 relative transition-all duration-300 text-center hover:-translate-y-2 hover:bg-white hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] hover:border-primary-light",
  stepNumber:
    "absolute -top-6 left-1/2 -translate-x-1/2 w-16 h-16 bg-primary text-white rounded-[1.5rem] flex items-center justify-center text-2xl font-extrabold shadow-[0_8px_20px_rgba(13,148,136,0.3)]",
  processIconWrapper:
    "w-20 h-20 bg-primary-light text-primary rounded-[2rem] flex items-center justify-center mx-auto mt-4 mb-8",
  processCardTitle: "text-[1.5rem] mb-4 font-bold",
  processCardDesc: "text-text-muted leading-[1.7]",

  // Featured Collections section
  featuredSection: "py-24 bg-bg-alt",
  featuredHeader: "text-center mb-16",
  featuredBadge: "badge bg-primary-light text-primary mb-4 inline-block",
  featuredTitle: "text-5xl mb-6 max-sm:text-4xl font-extrabold text-text-main",
  featuredSubtitle: "text-text-muted max-w-[600px] mx-auto text-lg pt-1 pb-1",
  loadingContainer: "flex justify-center items-center py-20 min-h-[400px]",
  loader:
    "loader w-10 h-10 border-4 border-solid border-secondary border-t-primary rounded-full animate-spin mx-auto",
  errorContainer: "text-center py-20 text-red-500 min-h-[300px]",
  propertiesGrid:
    "grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3",
  discoverButtonContainer: "text-center mt-20",
  discoverButton: "btn btn-primary py-4 px-12 rounded-3xl",

  // Footer
  footer: "bg-white border-t border-[#e2e8f0] pt-24 pb-0",
  footerMainGrid:
    "footer-main-grid grid grid-cols-[1.5fr_1fr_1fr_1.5fr] gap-16 mb-16 max-lg:grid-cols-2 max-lg:gap-12 max-sm:grid-cols-1 min-[640px]:max-[1024px]:justify-items-center",
  footerBrand:
    "footer-brand-section max-sm:text-center max-sm:flex max-sm:flex-col max-sm:items-center",
  brandLogo:
    "flex items-center gap-2 text-2xl font-extrabold text-primary mb-6",
  brandIcon: "bg-primary text-white py-1.5 px-2.5 rounded-xl text-base",
  brandDesc: "text-text-muted mb-8 leading-relaxed text-[0.9375rem]",
  socialIcons: "flex gap-4",
  socialIcon:
    "social-icon w-9 h-9 rounded-full bg-bg-alt flex items-center justify-center text-text-main transition-all duration-300 hover:-translate-y-1 hover:bg-primary hover:text-white",
  footerHeading: "text-[1.125rem] font-extrabold mb-8",
  footerLinks: "flex flex-col gap-5 text-text-muted text-[0.9375rem]",
  footerLink:
    "footer-link transition-colors duration-300 hover:text-primary hover:underline",
  contactInfo: "flex items-center gap-3",
  contactInfoStart: "flex items-start gap-3",
  contactIcon: "shrink-0 mt-[2px] text-xl",
  newsletterDesc: "text-text-muted text-[0.875rem] mb-6 leading-relaxed",
  newsletterInputWrapper: "relative",
  newsletterInput:
    "w-full py-4 pr-[85px] pl-5 rounded-2xl border border-[#e2e8f0] bg-bg-alt outline-none text-[0.875rem] focus:border-primary transition-colors",
  newsletterButton:
    "btn btn-primary absolute right-1.5 top-1.5 bottom-1.5 px-5 rounded-xl text-[0.8125rem]",
  bottomBar:
    "border-t border-[#e2e8f0] py-8 flex flex-col gap-4 text-[0.875rem] text-text-muted",
  bottomBarFlex:
    "flex justify-between items-center flex-wrap gap-4 max-sm:flex-col-reverse max-sm:justify-center",
  footerLegalLinks:
    "flex gap-8 max-sm:w-full max-sm:justify-center max-sm:flex-wrap max-sm:gap-4",
  designCredit: "flex justify-center items-center gap-2 pt-2",
  designLogo: "w-5 h-5 object-contain",
  designLink:
    "font-semibold text-primary hover:text-blue-700 hover:underline transition-colors duration-300",
};

export const propertiesStyles = {
  // Page container
  pageContainer: "bg-[#f8fafc] min-h-screen pb-16 pt-32 max-lg:pt-28",
  container: "container",

  // Mobile filter button
  mobileFilterButtonWrapper: "mobile-filter-btn hidden mb-6 max-[1024px]:block",
  mobileFilterButton: "btn btn-outline w-full flex justify-center gap-3 bg-white py-4",

  // Layout grid
  layout: "properties-layout grid grid-cols-[minmax(280px,300px)_1fr] gap-8 max-[1024px]:grid-cols-1",

  // Sidebar
  sidebar: "filters-sidebar scrollbar-hide bg-white rounded-[1.5rem] p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] max-h-[calc(100vh-120px)] overflow-y-auto sticky top-[100px] border border-[#f1f5f9] z-[90] max-[1024px]:fixed max-[1024px]:max-h-screen max-[1024px]:top-0 max-[1024px]:bottom-0 max-[1024px]:w-full max-[1024px]:max-w-[350px] max-[1024px]:rounded-none max-[1024px]:transition-[left] max-[1024px]:duration-300 max-[1024px]:ease max-[1024px]:z-[2005]",
  sidebarVisible: "max-[1024px]:left-0",
  sidebarHidden: "max-[1024px]:-left-full",
  sidebarHeader: "flex justify-between items-center mb-8",
  sidebarTitleWrapper: "flex items-center gap-2",
  sidebarTitleIcon: "text-primary",
  sidebarTitle: "text-xl font-bold m-0",
  sidebarHeaderActions: "flex gap-4 items-center",
  resetButton: "bg-transparent border-none text-primary text-sm font-semibold cursor-pointer",
  closeMobileFilters: "mobile-close-filters hidden max-[1024px]:flex items-center justify-center bg-[#f1f5f9] border-none p-2 rounded-full cursor-pointer",
  filtersScrollArea: "filters-scroll-area",

  // Filter sections
  filterSection: "mb-8",
  filterLabel: "block font-bold mb-3 text-[0.9375rem]",
  searchInputWrapper: "relative",
  searchIcon: "absolute left-4 top-1/2 -translate-y-1/2 text-[#94a3b8]",
  searchInput: "w-full py-3 pr-4 pl-10 rounded-xl border border-[#e2e8f0] outline-none text-sm",
  priceHeader: "flex justify-between items-center mb-4",
  priceValue: "text-primary font-bold text-[0.875rem]",
  priceSlider: "w-full accent-primary cursor-pointer",
  priceLabels: "flex justify-between mt-2 text-[#94a3b8] text-[0.75rem]",
  checkboxGroup: "flex flex-col gap-3",
  checkboxLabel: "flex items-center gap-3 cursor-pointer text-sm text-[#64748b]",
  checkbox: "w-[18px] h-[18px] cursor-pointer accent-primary",
  bhkGroup: "flex flex-wrap gap-2",
  bhkButton: "flex-1 min-w-[50px] p-2 rounded-lg text-sm font-bold cursor-pointer transition-all duration-200 border border-[#e2e8f0] bg-white text-[#64748b]",
  bhkButtonActive: "border border-primary bg-primary-light text-primary-dark",
  bhkButtonInactive: "border border-[#e2e8f0] bg-white text-[#64748b]",

  // Main content
  mainContent: "", // no extra classes
  contentHeader: "content-header bg-white py-5 px-8 rounded-[1.25rem] mb-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex justify-between items-center border border-[#f1f5f9] max-[1024px]:p-4 max-[1024px]:flex-col max-[1024px]:gap-4 max-[1024px]:items-start",
  resultCount: "text-[#64748b] text-[0.9375rem]",
  resultCountStrong: "text-text-main",
  headerControls: "view-controls flex items-center gap-6 max-[1024px]:w-full max-[1024px]:justify-between",
  viewModeToggle: "view-mode-toggle flex gap-2 p-1 bg-[#f1f5f9] rounded-xl max-sm:hidden",
  viewModeButton: "p-2 rounded-lg border-none cursor-pointer",
  viewModeActive: "bg-white shadow-[0_2px_8px_rgba(0,0,0,0.05)] text-primary",
  viewModeInactive: "bg-transparent text-[#94a3b8]",
  sortControl: "sort-control flex items-center gap-2",
  sortLabel: "text-sm text-[#64748b]",
  sortSelect: "py-2 px-4 bg-white border border-[#e2e8f0] rounded-xl text-sm font-semibold cursor-pointer outline-none text-text-main appearance-auto",

  // Skeleton loading
  skeletonGrid: "grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-6",
  skeletonCard: "skeleton h-[400px] rounded-[1.25rem]",

  // Error state
  errorContainer: "p-16 text-center bg-white rounded-[1.5rem]",
  errorIcon: "text-red-500 mb-4 mx-auto",
  errorTitle: "text-text-main mb-2",
  errorButton: "btn btn-outline",

  // Empty state
  emptyContainer: "py-24 px-8 text-center bg-white rounded-[1.5rem] border border-[#f1f5f9]",
  emptyIconWrapper: "w-[80px] h-[80px] bg-[#f1f5f9] rounded-full flex items-center justify-center mx-auto mb-6",
  emptyIcon: "text-[#94a3b8]",
  emptyTitle: "text-2xl font-bold text-text-main mb-2",
  emptyText: "text-[#64748b] max-w-[400px] mx-auto mb-8",
  emptyButton: "btn btn-primary px-8 py-3",

  // Property list
  propertyList: "property-list grid gap-6",
  propertyListGrid: "grid-cols-[repeat(auto-fill,minmax(280px,1fr))] max-sm:grid-cols-1 max-sm:justify-items-center",
  propertyListList: "grid-cols-1",

  // Mobile overlay
  mobileOverlay: "fixed inset-0 bg-black/50 z-[2004]",
};

export const propertyDetailsStyles = {
  pageContainer: "bg-[#fdfdfd] min-h-screen pb-24 pt-32 max-lg:pt-28",
  mainContainer: "container fade-in pt-4",
  breadcrumbs: "flex items-center flex-wrap gap-2 text-sm text-[#64748b] mb-6",
  breadcrumbLink: "text-inherit no-underline",
  breadcrumbCurrent: "text-text-main font-semibold break-words max-w-full",
  galleryContainer: "property-gallery-container mb-8",
  galleryGrid: "property-gallery hidden md:grid gap-3 rounded-3xl overflow-hidden " +
    "[&:has(>div:nth-child(2):last-child)]:!grid-cols-2 " +
    "[&:has(>div:nth-child(2):last-child)>div]:!col-span-1 " +
    "[&:has(>div:nth-child(2):last-child)>div]:!row-span-2 " +
    "[&:has(>div:nth-child(3):last-child)]:!grid-cols-2 " +
    "[&:has(>div:nth-child(3):last-child)>.main-image]:!col-span-1 " +
    "[&:has(>div:nth-child(3):last-child)>.main-image]:!row-span-2 " +
    "[&:has(>div:nth-child(4):last-child)>div:nth-child(2)]:!col-span-2",
  galleryMainItem: (hasMultiple) => `gallery-item main-image relative overflow-hidden bg-[#f1f5f9] cursor-pointer ${hasMultiple ? "col-span-2 row-span-2" : "col-span-1 row-span-1"}`,
  gallerySideItem: "gallery-item relative overflow-hidden bg-[#f1f5f9] cursor-pointer",
  galleryImage: "w-full h-full object-cover transition-transform duration-400 ease",
  galleryMoreOverlay: "absolute inset-0 bg-black/50 text-white flex items-center justify-center text-2xl font-bold pointer-events-none",
  mobileSliderContainer: "mobile-gallery-wrapper block md:hidden -mx-4 mb-6",
  mobileSliderTrack: "mobile-slider flex overflow-x-auto snap-x snap-mandatory scroll-smooth p-0 whitespace-nowrap [&::-webkit-scrollbar]:hidden",
  mobileSlide: "mobile-slide flex-[0_0_100%] snap-start relative aspect-[4/3] overflow-hidden",
  mobileSlideImage: "w-full h-full object-cover",
  mobileSlideCounter: "slide-counter absolute bottom-4 right-4 bg-black/60 text-white py-1 px-3 rounded-2xl text-xs font-semibold",
  lightboxOverlay: "fixed inset-0 bg-black/35 z-[2000] flex flex-col items-center justify-start pt-24 backdrop-blur-[10px]",
  lightboxCloseBtn: "absolute top-8 right-8 bg-white border-none rounded-full w-11 h-11 cursor-pointer flex items-center justify-center shadow-[0_4px_15px_rgba(0,0,0,0.15)] z-[2001] transition-all duration-200 hover:bg-white/20 hover:scale-110",
  lightboxCloseIcon: "text-primary",
  lightboxContent: "w-[85%] max-w-[900px] bg-white p-4 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.2)] relative",
  lightboxImage: "w-full h-auto max-h-[72vh] object-contain rounded-2xl",
  lightboxPrevBtn: "absolute -left-[22px] top-1/2 -translate-y-1/2 bg-white border-none text-primary w-11 h-11 flex items-center justify-center cursor-pointer rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.12)] transition-all duration-200 hover:bg-white/20 hover:scale-110",
  lightboxNextBtn: "absolute -right-[22px] top-1/2 -translate-y-1/2 bg-white border-none text-primary w-11 h-11 flex items-center justify-center cursor-pointer rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.12)] transition-all duration-200 hover:bg-white/20 hover:scale-110",
  lightboxCounter: "absolute -bottom-[45px] left-1/2 -translate-x-1/2 text-white text-base font-semibold drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]",
  detailsLayout: "details-layout grid grid-cols-[1fr_380px] gap-10 items-start max-[1024px]:grid-cols-1 max-[1024px]:gap-8",
  infoColumn: "info-column min-w-0",
  infoHeader: "mb-8",
  titleWrapper: "min-w-0 flex-1",
  badgeWrapper: "flex gap-2 flex-wrap",
  premiumBadge: "py-1.5 px-4 rounded-lg border border-primary text-primary text-xs font-bold uppercase inline-block mb-3",
  propertyTitle: "property-title text-[2.5rem] font-extrabold text-text-main mb-2 tracking-tight max-[768px]:text-[2rem] max-[480px]:text-[1.75rem] break-words whitespace-normal leading-tight",
  propertyLocation: "flex items-center gap-2 text-[#64748b] text-base break-words whitespace-normal max-w-full",
  locationIcon: "text-primary text-lg shrink-0",
  locationText: "break-words whitespace-normal",
  actionButtons: "flex gap-2 shrink-0",
  wishlistButton: (isInWishlist) => `wishlist-action-btn w-12 h-12 rounded-full border border-[#e2e8f0] bg-white flex items-center justify-center cursor-pointer transition-all duration-300 ease-in-out shadow-[0_4px_12px_rgba(0,0,0,0.1)] hover:scale-110 hover:shadow-[0_6px_16px_rgba(0,0,0,0.12)] hover:border-[#cbd5e1] ${isInWishlist ? "text-red-500" : "text-[#64748b]"}`,
  statsGrid: "stats-grid grid grid-cols-[repeat(auto-fit,minmax(100px,1fr))] gap-3 mb-10 max-[768px]:grid-cols-2 max-[480px]:gap-2",
  statCard: "py-4 px-2 bg-[#f8fafc] rounded-2xl border border-[#f1f5f9] text-center min-w-0",
  statIcon: "text-primary mb-1.5 mx-auto",
  statValue: "font-extrabold text-[0.9rem] text-text-main capitalize break-words whitespace-normal leading-snug",
  statLabel: "text-[0.6rem] text-[#94a3b8] uppercase font-bold tracking-widest",
  descriptionSection: "mb-10 min-w-0",
  sectionTitle: "text-xl font-bold mb-4",
  descriptionText: "text-[#475569] text-base leading-relaxed break-words whitespace-pre-wrap",
  amenitiesSection: "mb-10 min-w-0",
  amenitiesGrid: "amenities-grid grid grid-cols-[repeat(auto-fill,minmax(180px,1fr))] gap-4",
  amenityItem: "flex items-start gap-3 text-[#334155] font-medium text-[0.9375rem] min-w-0",
  amenityIcon: "text-primary shrink-0 mt-0.5",
  amenityText: "break-words whitespace-normal",
  sidebarColumn: "sidebar-column min-w-0",
  priceCard: "text-white p-6 rounded-[1.5rem] mb-6 shadow-[0_10px_25px_rgba(13,148,136,0.2)]",
  priceCardLabel: "text-[0.875rem] opacity-80 font-semibold uppercase mb-2",
  priceCardValue: "text-[2.25rem] font-extrabold my-1 break-words whitespace-normal leading-tight",
  priceCardPeriod: "text-base font-normal opacity-80",
  rentDetails: "mt-4 border-t border-white/20 pt-4 flex flex-col gap-2",
  rentDetailRow: "flex justify-between text-[0.9rem] gap-4",
  rentDetailLabel: "opacity-80 min-w-0 break-words",
  rentDetailValue: "font-bold text-right break-words whitespace-normal",
  priceCardAvailability: "text-[0.8125rem] opacity-90 break-words whitespace-normal",
  sellerCard: "bg-white p-6 rounded-[1.5rem] border border-[#f1f5f9] shadow-[0_4px_20px_rgba(0,0,0,0.03)] min-w-0",
  sellerInfo: "flex items-center gap-4 mb-6 min-w-0",
  sellerAvatar: "w-[50px] h-[50px] rounded-full overflow-hidden bg-[#f1f5f9] shrink-0",
  sellerAvatarImage: "w-full h-full object-cover",
  sellerDetails: "min-w-0",
  sellerNameLink: "no-underline",
  sellerName: "text-base font-extrabold m-0 text-text-main transition-colors duration-200 hover:text-primary break-words whitespace-normal leading-snug",
  sellerVerifiedBadge: "flex items-center gap-1 text-[0.75rem] text-primary font-bold mt-2",
  verifiedIcon: "shrink-0",
  chatButtonWrapper: "flex gap-3 mb-6",
  chatButton: "btn btn-outline flex-1 p-2.5 text-[0.875rem] flex items-center justify-center gap-2",
  inquiryFormTitle: "text-[0.9375rem] font-bold mb-4",
  inquiryTextarea: "w-full h-[100px] p-3 rounded-xl border border-[#e2e8f0] mb-4 outline-none resize-none text-[0.875rem] break-words whitespace-pre-wrap",
  inquirySubmitButton: "btn btn-primary w-full p-3.5 rounded-xl font-bold",
  inquirySuccessMessage: "text-green-600 text-xs mt-2 text-center",
  inquiryDisabledMessage: "text-center p-4 bg-[#f8fafc] rounded-xl",
  inquiryDisabledText: "text-[0.875rem] text-[#64748b] break-words whitespace-normal",
  inquiryLoginButton: "btn btn-primary mt-2 w-full block",
  additionalDetails: "additional-details bg-white p-8 rounded-[1.5rem] border border-[#f1f5f9] mt-12 min-w-0",
  detailsTitle: "text-xl font-bold mb-6 border-b border-[#f1f5f9] pb-3",
  detailsGrid: "details-grid-row grid grid-cols-2 gap-8 max-sm:grid-cols-1 max-sm:gap-0",
  detailRow: "flex justify-between gap-4 py-2 border-b border-dashed border-[#f1f5f9] min-w-0",
  detailLabel: "text-[#64748b] text-[0.875rem] min-w-0 break-words whitespace-normal",
  detailValue: "text-text-main font-semibold capitalize text-right max-w-[60%] break-words whitespace-normal",
  similarSection: "mt-16",
  similarHeader: "flex justify-between items-end mb-8 flex-wrap gap-4",
  similarTitle: "text-[1.75rem] font-extrabold mb-1",
  similarSubtitle: "text-[#64748b] text-[0.9375rem]",
  similarAllLink: "btn btn-outline flex items-center gap-2 py-2.5 px-5 text-[0.875rem]",
  similarGrid: "similar-grid grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-6",
  similarEmptyState: "col-span-full p-12 bg-[#f8fafc] rounded-[1.5rem] text-center border border-dashed border-[#e2e8f0] text-[#64748b] break-words whitespace-normal",
};

export const sellerProfileStyles = {
  // Loader
  loaderFullPage: "loader-full-page",
  loader: "loader",
  errorContainer: "container p-16 text-center",

  // Layout
  pageWrapper: "bg-[#fdfdfd] min-h-screen pb-24",
  mainContainer: "container fade-in pt-12",

  // Profile header card
  profileCard: "bg-white rounded-3xl p-6 sm:p-10 shadow-[0_10px_30px_rgba(0,0,0,0.04)] border border-[#f1f5f9] mb-12 flex flex-wrap gap-10 items-center justify-center sm:justify-start text-center sm:text-left",
  avatarWrapper: "w-[150px] h-[150px] rounded-full overflow-hidden border-4 border-[#f1f5f9]",
  avatarImage: "w-full h-full object-cover",
  profileInfo: "flex-1 min-w-[300px]",
  nameBadgeWrapper: "flex items-center justify-center sm:justify-start gap-3 mb-2",
  sellerName: "text-4xl font-extrabold text-text-main m-0",
  verifiedBadge: "text-primary",
  statsWrapper: "flex flex-wrap justify-center sm:justify-start gap-6 mb-6 text-[#64748b]",
  statItem: "flex items-center gap-2",
  starIcon: "text-[#eab308]",
  ratingNumber: "font-bold text-text-main",
  emailButton: "btn btn-outline flex items-center gap-2",

  // Main grid
  mainGrid: "grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-12",

  // Properties section
  propertiesHeading: "text-[1.75rem] font-extrabold mb-8",
  propertiesGrid: "grid grid-cols-1 sm:grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-6",
  emptyProperties: "col-span-full p-12 bg-[#f8fafc] rounded-3xl text-center border border-[#e2e8f0]",
};

export const forgotPasswordStyles = {
  container: "bg-bg-alt min-h-screen pt-32 max-lg:pt-28",
  centerWrapper: "container flex justify-center items-center pt-16 sm:pt-8",
  formCard: "glass fade-in w-full max-w-[450px] p-10 sm:p-6 rounded-3xl sm:rounded-2xl shadow-card",
  title: "text-[2rem] sm:text-2xl font-bold text-center mb-2 text-primary",
  subtitle: "text-center text-text-muted mb-8",
  errorMessage: "p-3 bg-red-100 text-red-600 rounded-lg mb-4 text-sm text-center",
  successMessage: "p-3 bg-green-100 text-green-600 rounded-lg mb-4 text-sm text-center",
  form: "flex flex-col gap-5",
  label: "block mb-2 font-medium",
  input: "w-full py-3 px-4 rounded-lg border border-border outline-none focus:border-primary transition-colors",
  submitButton: "btn btn-primary p-3.5 text-base mt-2",
  footerText: "text-center mt-8 text-text-muted",
  link: "text-primary font-semibold hover:underline",
};

export const loginStyles = {
  pageContainer: "bg-bg-alt min-h-screen pt-32 max-lg:pt-28",
  containerCenter: "container flex justify-center items-center pt-16 sm:pt-8",
  card: "glass fade-in w-full max-w-[450px] p-10 sm:p-6 rounded-3xl sm:rounded-2xl shadow-card",
  title: "text-[2rem] sm:text-2xl font-bold text-center mb-2 text-primary",
  subtitle: "text-center text-text-muted mb-8",
  errorAlert: "p-3 bg-red-100 text-red-600 rounded-lg mb-4 text-sm text-center",
  form: "flex flex-col gap-5",
  label: "block mb-2 font-medium",
  input: "w-full py-3 px-4 rounded-lg border border-border outline-none focus:border-primary transition-colors",
  passwordHeader: "flex justify-between items-center mb-2",
  forgotLink: "text-sm text-primary font-medium hover:underline",
  submitButton: "btn btn-primary p-3.5 text-base mt-2",
  footerText: "text-center mt-8 text-text-muted",
  registerLink: "text-primary font-semibold hover:underline",
};


export const resetPasswordStyles = {
  container: "bg-bg-alt min-h-screen pt-32 max-lg:pt-28",
  centerWrapper: "container flex justify-center items-center pt-16 sm:pt-8",
  formCard: "glass fade-in w-full max-w-[450px] p-10 sm:p-6 rounded-3xl sm:rounded-2xl shadow-card",
  title: "text-[2rem] sm:text-2xl font-bold text-center mb-2 text-primary",
  subtitle: "text-center text-text-muted mb-8",
  errorMessage: "p-3 bg-red-100 text-red-600 rounded-lg mb-4 text-sm text-center",
  successMessage: "p-3 bg-green-100 text-green-600 rounded-lg mb-4 text-sm text-center",
  form: "flex flex-col gap-5",
  label: "block mb-2 font-medium",
  input: "w-full py-3 px-4 rounded-lg border border-border outline-none focus:border-primary transition-colors",
  submitButton: "btn btn-primary p-3.5 text-base mt-2",
  footerText: "text-center mt-8 text-text-muted",
  link: "text-primary font-semibold hover:underline",
};

export const registerStyles = {
  // Layout
  pageWrapper: "bg-bg-alt min-h-screen pt-32 max-lg:pt-28",
  container: "container flex justify-center items-center pt-8 pb-16 sm:pt-4 sm:pb-8",

  // Form card
  formCard: "glass fade-in w-full max-w-[500px] p-10 sm:p-6 rounded-3xl sm:rounded-2xl shadow-card",
  heading: "text-[2rem] sm:text-2xl font-bold text-center mb-2 text-primary",
  subheading: "text-center text-text-muted mb-8",

  // Messages
  errorMessage: "p-3 bg-red-100 text-red-600 rounded-lg mb-4 text-sm text-center",
  successMessage: "p-3 bg-green-100 text-green-600 rounded-lg mb-4 text-sm text-center",

  // Form
  form: "flex flex-col gap-5 sm:gap-4",
  label: "block mb-2 font-medium",
  input: "w-full py-3 px-4 rounded-lg border border-border outline-none focus:border-primary transition-colors",

  // Role selection
  roleContainer: "flex gap-4",
  roleLabelBase: "flex-1 cursor-pointer p-3 rounded-lg border-2 text-center transition-all duration-200",
  roleLabelActive: "border-primary bg-secondary",
  roleLabelInactive: "border-border bg-white",
  hiddenRadio: "hidden",

  // Submit button
  submitButton: "btn btn-primary p-3.5 text-base mt-2",

  // Footer
  footerText: "text-center mt-8 text-text-muted",
  loginLink: "text-primary font-semibold hover:underline",
};

export const verifyEmailStyles = {
  pageContainer: "bg-bg-alt min-h-screen pt-32 max-lg:pt-28",
  containerCenter: "container flex justify-center items-center pt-16 sm:pt-8",
  card: "glass fade-in w-full max-w-[450px] p-10 sm:p-6 rounded-3xl sm:rounded-2xl shadow-card",
  title: "text-[2rem] sm:text-2xl font-bold text-center mb-2 text-primary",
  subtitle: "text-center text-text-muted mb-8",
  errorAlert: "p-3 bg-red-100 text-red-600 rounded-lg mb-4 text-sm text-center",
  successAlert: "p-3 bg-green-100 text-green-600 rounded-lg mb-4 text-sm text-center",
  form: "flex flex-col gap-5",
  label: "block mb-2 font-medium",
  input: "w-full py-3 px-4 rounded-lg border border-border outline-none focus:border-primary transition-colors",
  codeInput: "w-full py-3 px-4 rounded-lg border border-border outline-none focus:border-primary transition-colors text-center text-2xl tracking-[0.5em]",
  submitButton: "btn btn-primary p-3.5 text-base mt-2",
};

export const adminLayoutStyles = {
  layout: "flex h-screen bg-bg-alt overflow-hidden",
  mainWrapper: "flex-1 flex flex-col min-w-0 h-full overflow-hidden transition-all duration-300 md:ml-[260px]",
  mainContent: "flex-1 overflow-y-auto p-5 md:p-8 relative scroll-smooth fade-in",
};

export const adminSidebarStyles = {
  backdrop: (isOpen) => `fixed inset-0 w-full h-full bg-black/30 backdrop-blur-sm z-[950] transition-all duration-300 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible hidden md:block'
    }`,
  sidebar: (isOpen) => `fixed left-0 top-0 w-[260px] h-screen bg-white border-r border-[#f1f5f9] py-8 px-5 flex flex-col z-[1000] transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
    }`,
  logoContainer: "px-3 mb-10 flex justify-between items-center",
  navContainer: "flex flex-col gap-1.5 flex-1",
  navLink: (isActive) => `flex items-center gap-4 py-3.5 px-4 rounded-xl no-underline text-[0.9375rem] transition-all duration-200 ease-[cubic-bezier(0.4,0,0.2,1)] ${isActive
    ? 'font-bold text-primary bg-primary-light'
    : 'font-medium text-[#64748b] hover:bg-gray-50'
    }`,
  logoutContainer: "border-t border-[#f1f5f9] pt-6 mt-auto",
  logoutButton: "w-full flex items-center gap-4 py-3.5 px-4 rounded-xl border-none bg-transparent text-[0.9375rem] font-semibold text-[#dc2626] cursor-pointer transition-all duration-200 ease-[cubic-bezier(0.4,0,0.2,1)] hover:bg-red-50",
};

export const dashboardNavbarStyles = {
  header: "h-[64px] bg-white/70 backdrop-blur-[12px] border-b border-white/20 flex items-center px-4 sticky top-0 z-[900] w-full gap-4 md:hidden",
  menuButton: "bg-primary/5 border-none text-primary cursor-pointer flex items-center justify-center w-10 h-10 rounded-xl shrink-0",
  logoContainer: "flex items-center overflow-hidden",
};

export const sellerLayoutStyles = {
  container: "flex h-screen bg-bg-alt overflow-hidden",
  contentWrapper: "flex-1 flex flex-col min-w-0 h-full overflow-hidden transition-all duration-300 md:ml-[260px]",
  main: "flex-1 overflow-y-auto p-5 md:p-8 relative scroll-smooth fade-in",
};

export const reviewSectionStyles = {
  // Loading
  loadingText: "text-center text-[#6b7280] p-8 bg-[#f9fafb] rounded-2xl",

  // Container
  container: "mt-12 pt-8 border-t border-border",

  // Header
  headerWrapper: "flex items-center justify-between mb-8",
  headerTitle: "text-2xl text-[#111827]",
  ratingBadge: "flex items-center gap-4",
  ratingStars: "flex items-center gap-2 text-xl font-bold text-[#111827]",
  starIconGold: "text-[#eab308]",
  reviewCount: "text-[#6b7280] text-[15px]",

  // Add review section
  addReviewContainer: "bg-[#f9fafb] p-8 rounded-2xl mb-12 border border-border",
  addReviewTitle: "mb-4",
  starsContainer: "flex gap-2 mb-6",
  starButton: "bg-transparent border-none cursor-pointer p-0 transition-colors duration-100",
  starActive: "text-[#eab308]",
  starInactive: "text-[#cbd5e1] hover:text-[#eab308]",
  reviewTextarea: "w-full min-h-[120px] p-4 rounded-xl border border-border mb-4 font-inherit resize-y",
  submitButton: "btn btn-primary",
  messageSuccess: "bg-[#dcfce7] text-[#166534]",
  messageError: "bg-[#fee2e2] text-[#991b1b]",
  messageBase: "mt-4 p-3 rounded-lg text-sm",

  // Reviews list
  reviewsList: "flex flex-col gap-6",
  reviewCard: "p-6 rounded-2xl bg-white border border-border shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05)]",
  reviewHeader: "flex items-center gap-4 mb-4",
  avatar: "w-10 h-10 rounded-full object-cover",
  reviewBuyerName: "font-semibold text-[#111827]",
  reviewDate: "text-[13px] text-[#6b7280]",
  reviewStars: "flex gap-1 mb-3",
  reviewComment: "text-[#4b5563] leading-relaxed text-[15px]",
  emptyState: "text-center text-[#6b7280] p-8 bg-[#f9fafb] rounded-2xl",
};

export const sellerSidebarStyles = {
  // Backdrop
  backdrop: "fixed inset-0 w-full h-full bg-black/30 backdrop-blur-sm z-[950] transition-all duration-300",
  backdropVisible: "opacity-100 visible",
  backdropHidden: "opacity-0 invisible hidden md:block",

  // Sidebar container
  sidebar: "fixed left-0 top-0 w-[260px] h-screen bg-white border-r border-[#f1f5f9] py-8 px-5 flex flex-col z-[1000] transition-transform duration-300",
  sidebarOpen: "translate-x-0",
  sidebarClosed: "-translate-x-full md:translate-x-0",

  // Logo section
  logoContainer: "px-3 mb-10 flex justify-between items-center",

  // Navigation
  nav: "flex flex-col gap-1.5 flex-1",
  navLink: "flex items-center gap-4 py-3.5 px-4 rounded-xl no-underline text-[0.9375rem] transition-all duration-200 ease-[cubic-bezier(0.4,0,0.2,1)]",
  navLinkActive: "font-bold text-primary bg-primary-light",
  navLinkInactive: "font-medium text-[#64748b] hover:bg-gray-50",

  // Logout
  logoutContainer: "border-t border-[#f1f5f9] pt-6 mt-auto",
  logoutButton: "w-full flex items-center gap-4 py-3.5 px-4 rounded-xl border-none bg-transparent text-[0.9375rem] font-semibold text-[#dc2626] cursor-pointer transition-all duration-200 ease-[cubic-bezier(0.4,0,0.2,1)] hover:bg-red-50",
};

export const logoStyles = {
  link: "font-bold text-primary flex items-center gap-3 no-underline whitespace-nowrap",
  iconWrapper: "bg-primary text-white p-2 rounded-[10px] flex items-center justify-center shadow-[0_4px_12px_rgba(13,110,89,0.2)]",
  text: "tracking-[-0.02em] text-[#0d6e59] font-extrabold",
};

export const navbarStyles = {
  nav: "glass fixed top-0 w-full left-0 z-[1000] py-2 lg:py-4",
  container: "container px-6 max-w-[1400px] mx-auto",
  grid: "grid grid-cols-[auto_1fr_auto] items-center gap-4",
  desktopMenu: "hidden lg:flex justify-self-center items-center bg-white/50 px-3 py-1.5 rounded-full border border-white/30 gap-2 shadow-[0_4px_15px_rgba(0,0,0,0.05)]",
  navLink: "nav-link text-text-main font-semibold text-[15px] px-4 py-2 rounded-3xl transition-all duration-300 no-underline hover:text-primary hover:bg-primary/10",
  rightSection: "justify-self-end flex items-center gap-5",
  userSection: "flex items-center gap-5",
  avatar: "w-10 h-10 rounded-full border-2 border-primary-light object-cover",
  logoutButton: "btn btn-outline hidden lg:flex py-1.5 px-4 rounded-xl font-semibold text-sm",
  mobileToggle: "lg:hidden cursor-pointer text-text-main flex",
  backdrop: (isOpen) => `fixed inset-0 w-full h-full bg-black/40 backdrop-blur-sm z-[2001] transition-all duration-300 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`,
  drawer: (isOpen) => `fixed top-0 -left-[300px] w-[300px] h-full bg-white z-[2002] transition-transform duration-300 shadow-[10px_0_30px_rgba(0,0,0,0.1)] border-r border-border flex flex-col p-6 ${isOpen ? 'translate-x-[300px]' : ''}`,
  drawerHeader: "flex justify-between items-center mb-10",
  drawerCloseIcon: "cursor-pointer text-text-main",
  drawerNavLinks: "flex flex-col gap-6 flex-1 text-lg",
  drawerUserSection: "mt-auto pt-6 border-t border-border",
  drawerUserInfo: "flex items-center gap-4 mb-6",
  drawerAvatar: "w-10 h-10 rounded-full object-cover",
  drawerUserName: "font-semibold text-[15px]",
  drawerUserEmail: "text-xs text-text-muted",
  drawerLogoutButton: "btn btn-primary w-full",
};

export const propertyCardStyles = {
  // Card container
  card: "fade-in group flex flex-col bg-white rounded-[1.25rem] overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.05)] transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] border border-[#e2e8f0] relative w-full hover:-translate-y-2 hover:shadow-[0_12px_30px_rgba(0,0,0,0.1)] max-sm:max-w-[420px] max-sm:mx-auto",
  link: "no-underline text-inherit flex flex-col w-full",

  // Image section
  imageSection: "relative h-[220px] overflow-hidden shrink-0",
  image: "w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105",
  topBadges: "absolute top-4 left-4 right-4 flex justify-between items-center z-10",
  badgesLeft: "flex gap-2",
  badgeStatus: (status) => `text-white px-3 py-1 rounded-full text-xs font-extrabold uppercase backdrop-blur shadow-[0_2px_8px_rgba(0,0,0,0.1)] ${status === 'sold' ? 'bg-[#64748b]' : 'bg-[#10b981]'}`,
  badgeNew: "bg-white/90 px-3 py-1 rounded-full text-xs font-bold uppercase text-text-main backdrop-blur",
  badgeVerified: "bg-primary text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 uppercase",
  wishlistButton: (isWishlisted) => `flex items-center justify-center w-8 h-8 rounded-full border-none cursor-pointer shadow-[0_2px_8px_rgba(0,0,0,0.1)] transition-all duration-200 z-[15] hover:text-red-500 hover:scale-110 hover:bg-white ${isWishlisted ? 'text-red-500 bg-white' : 'text-[#64748b] bg-white/90'}`,
  priceOverlay: "absolute bottom-0 left-0 right-0 pt-6 pb-3 px-4 bg-gradient-to-t from-black/70 to-transparent text-white",
  price: "text-[1.5rem] font-extrabold m-0",

  // Content section
  content: "p-5 flex flex-col flex-1",
  propertyType: "text-[0.75rem] font-bold text-primary uppercase tracking-[0.05em]",
  views: "flex items-center gap-[0.3rem] color-[#64748b] text-[0.8125rem] font-semibold",
  title: "text-[1.125rem] font-bold mt-1 mb-2 text-text-main whitespace-nowrap overflow-hidden text-ellipsis min-h-[1.5rem]",
  location: "flex items-center gap-[0.4rem] text-text-muted text-[0.875rem] mb-4",
  locationIcon: "text-[#94a3b8] shrink-0",
  specsGrid: "grid grid-cols-[1fr_1fr_1fr] py-4 border-t border-[#f1f5f9] gap-2 mt-auto",
  specItem: "text-center",
  specIcon: "text-[#64748b] mb-1 flex justify-center",
  specValue: "font-bold text-[0.9375rem] text-text-main",
  specLabel: "text-[0.625rem] text-[#94a3b8] uppercase font-bold",
  specDivider: "border-l border-r border-[#f1f5f9]",
  viewDetailsButton: "mt-5",
  viewDetailsBtn: "btn btn-primary w-full p-3 rounded-xl font-bold text-[0.9375rem]",

  // Custom actions container
  actionsContainer: "px-5 pb-5 flex gap-2 relative z-20",
};