

  const updateStatus = async (id, newStatus) => {
    try {
      await axios.patch(
        `${API_URL}/api/property/${id}/status`,
        { status: newStatus },
        {
          headers: { Authorization: `Bearer ${token}` },
        },
      );
      setProperties(
        properties.map((p) => (p._id === id ? { ...p, status: newStatus } : p)),
      );
    } catch (err) {
      alert("Failed to update status.");
    }
  };


                          <select
                            value={p.status === "sale" ? "available" : p.status}
                            onChange={(e) => {
                              const val = e.target.value;
                              if (val === "available") {
                                updateStatus(p._id, getAvailableStatus(p));
                              } else {
                                updateStatus(p._id, val);
                              }
                            }}
                            onClick={(e) => e.stopPropagation()}
                            onMouseDown={(e) => e.stopPropagation()}
                            className={`${s.select} ${p.status === "sold" ? s.selectSold : s.selectAvailable}`}
                          >
                            <option value="available">Available</option>
                            <option value="sold">Sold</option>
                          </select>
                        