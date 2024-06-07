import Offer from "../models/offer.js";

const postNewOffer = async (req, res) => {
  try {
    const { season, activity, deadline, monthlyPrice, duration } = req.body;
    const newOffer = new Offer({ season, activity, deadline, monthlyPrice, duration });
    await newOffer.save();
    res.json(newOffer);
  } catch (error) {
    res.status(500).json({ error: 'Error saving offer', details: error.message });
  }
};

const getAllOffers = async (req, res) => {
  try {
    const offers = await Offer.find();
    res.json(offers);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching offers', details: error.message });
  }
};

const updateOfferById = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, picture, date, duration } = req.body;
    const updatedOffer = await Offer.findByIdAndUpdate(
      id,
      { title, description, picture, date, duration },
      { new: true }
    );

    if (!updatedOffer) {
      return res.status(404).json({ error: 'Offer not found' });
    }

    res.json(updatedOffer);
  } catch (error) {
    res.status(500).json({ error: 'Error updating offer', details: error.message });
  }
};

const deleteOfferById = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedOffer = await Offer.findByIdAndDelete(id);

    if (!deletedOffer) {
      return res.status(404).json({ error: 'Offer not found' });
    }

    res.json(deletedOffer);
  } catch (error) {
    res.status(500).json({ error: 'Error deleting offer', details: error.message });
  }
};

export { postNewOffer, getAllOffers, updateOfferById, deleteOfferById };
