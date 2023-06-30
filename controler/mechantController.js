const Merchant = require("../models/merchantModels");
const User = require("../models/userModels");

const becomeMerchantController = async (req, res) => {
  const { storeName, officialEmail, officialPhone, address, owner, products } =
    req.body;

  if (!storeName) {
    return res.json({ error: "Store name is required" });
  } else if (!officialEmail) {
    return res.json({ error: "Offical Email is required" });
  } else if (!officialPhone) {
    return res.json({ error: "Offical Phone is required" });
  } else if (!address) {
    return res.json({ error: "Address is required" });
  }
  let duplicateEmail = await Merchant.find({ officialEmail });
  let duplicateStore = await Merchant.find({ storeName });
  if (duplicateEmail.length > 0) {
    return res.json({ error: "Offical Email is already exists" });
  } else if (duplicateStore.length > 0) {
    return res.json({ error: "Store is already exists" });
  }

  const merchant = new Merchant({
    storeName,
    officialEmail,
    officialPhone,
    address,
    owner,
    products,
  });
  merchant.save();
  await User.findOneAndUpdate(
    { _id: owner },
    { merchant: true, role: "merchant" },
    { new: true }
  );
  res.json({ success: "Now you are merchant" });
};
module.exports = { becomeMerchantController };
