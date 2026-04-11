const handleExport = () => {
  const headers = ["Title", "Location", "Type", "Price", "Status", "Views"];
  const csvRows = properties.map((p) => [
    p.title,
    `${p.area}, ${p.city}`,
    p.propertyType,
    p.price,
    p.status,
    p.views || 0,
  ]);

  const csvContent = [headers, ...csvRows].map((e) => e.join(",")).join("\n");
  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  const link = document.createElement("a");
  const url = URL.createObjectURL(blob);
  link.setAttribute("href", url);
  link.setAttribute("download", "property_listings.csv");
  link.style.visibility = "hidden";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

if (loading)
  return (
    <div className="loader-full-page">
      <div className="loader"></div>
    </div>
  );

const statCards = [
  {
    title: "Total Views",
    value: stats.totalViews?.toLocaleString() || "0",
    icon: HiOutlineEye,
    color: "#0d6e59",
  },
  {
    title: "Active Leads",
    value: stats.totalInquiries?.toLocaleString() || "0",
    icon: HiOutlineUserGroup,
    color: "#0d6e59",
  },
  {
    title: "Live Listings",
    value: stats.activeListings?.toLocaleString() || "0",
    icon: HiOutlineLibrary,
    color: "#0d6e59",
  },
  {
    title: "Properties Sold",
    value: stats.soldProperties?.toLocaleString() || "0",
    icon: HiOutlineCheckCircle,
    color: "#0d6e59",
  },
];

const filteredProperties = Array.isArray(properties)
  ? properties
      .filter(
        (p) =>
          p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          p.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
          p.area.toLowerCase().includes(searchTerm.toLowerCase()),
      )
      .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
  : [];
