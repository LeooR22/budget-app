const { Schema, model } = require("mongoose");

const RecordSchema = Schema({
  concept: {
    type: String,
    required: [true, "Concept field is required"],
  },
  amount: {
    type: Number,
    required: [true, "Amount field is required"],
  },
  date: {
    type: Date,
    required: [true, "Date field is required"],
  },
  type: {
    type: String,
    required: [true, "Type field is required"],
  },
  estado: {
    type: Boolean,
    default: true,
  },
});

RecordSchema.methods.toJSON = function () {
  const { __v, ...record } = this.toObject();
  return record;
};

module.exports = model("Record", RecordSchema);
