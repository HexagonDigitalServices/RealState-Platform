useEffectHook(() => {
    const handleClickOutside = (e) => {
      if (filterRef.current && !filterRef.current.contains(e.target)) {
        setOpenFilter(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filteredUsers = useMemo(() => {
    if (roleFilter === "all") return users;
    return users.filter((user) => user.role === roleFilter);
  }, [users, roleFilter]);


            <thead className={s.thead}>
              <tr className={s.tableRow}>
                <th className={s.thUserInfo}>User Info</th>
                <th className={s.thRole}>Role</th>
                <th className={s.thContact}>Contact Details</th>
                <th className={s.thStatus}>Account Status</th>
                <th className={s.thActions}>Actions</th>
              </tr>
            </thead>