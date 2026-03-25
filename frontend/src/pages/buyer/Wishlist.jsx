const removeFromWishlist = async (propertyId) => {
    if (!propertyId) {
      alert("Invalid property ID");
      return;
    }
    try {
      await axios.delete(`${API_URL}/api/wishlist/${propertyId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setWishlistItems((prev) =>
        prev.filter(
          (item) => item.property && item.property._id !== propertyId,
        ),
      );
    } catch (err) {
      const errorMsg =
        err.response?.data?.message || "Failed to remove from wishlist.";
      alert(errorMsg);
    }
  };
