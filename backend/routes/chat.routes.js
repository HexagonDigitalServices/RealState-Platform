// create or get chat
chatRouter.post("/start", async (req, res) => {
    try {
        const { propertyId, sellerId, buyerId: providedBuyerId } = req.body;

        let buyerId, finalSellerId;

        if (req.user.role === 'seller') {
            buyerId = providedBuyerId;
            finalSellerId = req.user._id;
        } else {
            buyerId = req.user._id;
            finalSellerId = sellerId;
        }

        if (!buyerId || !finalSellerId) {
            return res.status(400).json({ message: "Missing buyer or seller ID" });
        }

        // Check for an existing chat between this buyer and seller
        let chat = await Chat.findOne({
            buyer: buyerId,
            seller: finalSellerId,
        });

        if (!chat) {
            chat = await Chat.create({
                property: propertyId, // Initial property context
                buyer: buyerId,
                seller: finalSellerId,
                messages: [],
            });
        }

        // Populate users before returning
        chat = await Chat.findById(chat._id)
            .populate("buyer", "name email profilePic")
            .populate("seller", "name email profilePic")
            .populate("property", "title price images");

        res.json(chat);
    } catch (err) {
        res
            .status(500)
            .json({ message: "Error creating or getting chat", error: err.message });
    }
});
