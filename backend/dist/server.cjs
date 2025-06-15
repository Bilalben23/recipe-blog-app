"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/server.ts
var server_exports = {};
__export(server_exports, {
  default: () => server_default
});
module.exports = __toCommonJS(server_exports);
var import_express6 = __toESM(require("express"), 1);

// src/configs/envVars.ts
var import_dotenv = __toESM(require("dotenv"), 1);
import_dotenv.default.config();
var ENV_VARS = {
  PORT: Number(process.env.PORT) || 5e3,
  FRONTEND_URL: process.env.FRONTEND_URL || "http://localhost:5173",
  MONGODB_URI: process.env.MONGO_URI || "mongodb://localhost:27017",
  SPOONACULAR_API_KEY: process.env.SPOONACULAR_API_KEY || ""
};
var envVars_default = ENV_VARS;

// src/server.ts
var import_cors = __toESM(require("cors"), 1);

// src/configs/connectDB.ts
var import_mongoose = require("mongoose");
var connectToDB = () => {
  try {
    (0, import_mongoose.connect)(envVars_default.MONGODB_URI);
    console.log("Connected to MongoDB database successfully at:", envVars_default.MONGODB_URI);
  } catch (err) {
    console.error("Error connecting to the database:", err);
  }
};

// src/models/category.model.ts
var import_mongoose2 = require("mongoose");
var categorySchema = new import_mongoose2.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    lowercase: true
  },
  menuId: {
    type: Number,
    required: true
  }
}, { timestamps: true });
var Category = (0, import_mongoose2.model)("Category", categorySchema);

// src/models/Item.model.ts
var import_mongoose3 = require("mongoose");
var InstructionSchema = new import_mongoose3.Schema({
  stepTitle: {
    type: String,
    required: true,
    trim: true
  },
  stepDescription: {
    type: String,
    required: true,
    trim: true
  }
}, { _id: false });
var IngredientSchema = new import_mongoose3.Schema({
  name: {
    type: String,
    required: true
  },
  quantity: {
    type: String,
    required: true
  }
}, { _id: false });
var CommentSchema = new import_mongoose3.Schema({
  user: {
    type: String,
    required: true
  },
  comment: {
    type: String,
    required: true
  }
}, { _id: false });
var MoreSchema = new import_mongoose3.Schema({
  prep_time: {
    type: String,
    required: true
  },
  cook_time: {
    type: String,
    required: true
  },
  servings: {
    type: String,
    required: true
  },
  difficulty: {
    type: String,
    enum: ["easy", "medium", "hard"],
    required: true
  },
  source: {
    type: String,
    required: true
  }
}, { _id: false });
var DEFAULT_DESCRIPTION = "A delightful dish crafted with care, combining fresh ingredients and easy-to-follow steps for a satisfying meal experience.";
var ItemSchema = new import_mongoose3.Schema({
  menuId: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    lowercase: true
  },
  thumbnail_image: {
    type: String,
    required: true
  },
  category: {
    type: import_mongoose3.Schema.Types.ObjectId,
    ref: "Category",
    required: true
  },
  description: {
    type: String,
    trim: true,
    default: DEFAULT_DESCRIPTION
  },
  instructions: {
    type: [InstructionSchema],
    required: true
  },
  tags: {
    type: [String],
    default: []
  },
  ingredients: {
    type: [IngredientSchema],
    required: true
  },
  comments: {
    type: [CommentSchema],
    default: []
  },
  more: {
    type: MoreSchema,
    required: true
  }
}, { timestamps: true });
var Item = (0, import_mongoose3.model)("Item", ItemSchema);

// src/controllers/Item.controller.ts
var getAllItems = async (req, res) => {
  const limit = Number(req.query.limit) || 10;
  const page = Number(req.query.page) || 1;
  const skip = (page - 1) * limit;
  try {
    const items = await Item.find({}).populate("category", "name").select("name thumbnail_image category more.difficulty more.prep_time").sort({ createdAt: -1 }).skip(skip).limit(limit).lean();
    const total = await Item.countDocuments();
    const totalPages = Math.ceil(total / limit);
    const nextPage = page < totalPages ? page + 1 : null;
    res.status(200).json({
      success: true,
      message: "Items fetched successfully",
      data: items,
      pagination: {
        total,
        page,
        limit,
        totalPages,
        nextPage
      }
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: err instanceof Error ? err.message : "Failed to fecth items"
    });
  }
};
var getItemById = async (req, res) => {
  const { id } = req.params;
  try {
    const item = await Item.findById(id).populate("category", "name").lean();
    if (!item) {
      res.status(404).json({
        success: false,
        message: "Item not found"
      });
      return;
    }
    res.status(200).json({
      success: true,
      message: "Item fetched successfully",
      data: item
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: err instanceof Error ? err.message : "Unknown error"
    });
  }
};
var getSearchItems = async (req, res) => {
  const { q } = req.query;
  if (!q) {
    res.status(400).json({
      success: false,
      message: "Search query is required"
    });
    return;
  }
  try {
    const items = await Item.find({ name: { $regex: q, $options: "i" } }).populate("category", "name").select("name thumbnail_image category more.difficulty more.prep_time").sort({ createdAt: -1 }).lean();
    res.status(200).json({
      success: true,
      message: items.length ? "Items fetched successfully" : "No items found!",
      data: items
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: err instanceof Error ? err.message : "Unknown error"
    });
  }
};
var getItemsByCategory = async (req, res) => {
  const { category } = req.params;
  try {
    const foundCategory = await Category.findOne({ name: category.toLowerCase() }).lean();
    if (!foundCategory) {
      res.status(404).json({
        success: false,
        message: "Category with this name doesn't exist!"
      });
      return;
    }
    const itemsByCategory = await Item.find({ category: foundCategory._id }).populate("category", "name").select("name thumbnail_image category more.difficulty more.prep_time").lean();
    res.status(200).json({
      success: true,
      message: `Items of category "${foundCategory.name}" fetched successfully`,
      data: itemsByCategory
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: err instanceof Error ? err.message : "Unknown error"
    });
  }
};
var createItem = async (req, res) => {
  try {
    const foundItem = await Item.findOne({ name: req.body.name });
    if (foundItem) {
      res.status(400).json({
        success: false,
        message: "Item with this name already exists!"
      });
      return;
    }
    const createdItem = await Item.create(req.body);
    res.status(201).json({
      success: true,
      message: "Item created successfully.",
      data: createdItem
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: err instanceof Error ? err.message : "Unknown error"
    });
  }
};
var updateItem = async (req, res) => {
  try {
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: err instanceof Error ? err.message : "Unknown error"
    });
  }
};
var deleteItem = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedItem = await Item.findByIdAndDelete(id).lean();
    if (!deletedItem) {
      res.status(404).json({
        success: false,
        message: "Item not found"
      });
      return;
    }
    res.status(200).json({
      success: true,
      message: "Item deleted successfully",
      data: deletedItem
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: err instanceof Error ? err.message : "Unknown error"
    });
  }
};

// src/middlewares/validateRequest.ts
var import_zod = require("zod");
var validateRequest = (schemas) => {
  return (req, res, next) => {
    try {
      if (schemas.body) {
        req.body = schemas.body.parse(req.body);
      }
      if (schemas.query) {
        req.query = schemas.query.parse(req.query);
      }
      if (schemas.params) {
        req.params = schemas.params.parse(req.params);
      }
      next();
    } catch (error) {
      if (error instanceof import_zod.ZodError) {
        res.status(400).json({
          message: "Validation Error",
          errors: error.errors.map((err) => ({
            field: err.path.join("."),
            err: err.message
          }))
        });
        return;
      }
      next(error);
    }
  };
};

// src/schemas/item.schema.ts
var import_zod2 = require("zod");
var instructionSchema = import_zod2.z.object({
  stepTitle: import_zod2.z.string().trim().min(1, "Step title is required").max(100, "Step title is too long"),
  stepDescription: import_zod2.z.string().trim().min(1, "Step description is required").max(1e3, "Step description is too long")
});
var ingredientSchema = import_zod2.z.object({
  name: import_zod2.z.string().min(1, "Ingredient name is required"),
  quantity: import_zod2.z.string().min(1, "Ingredient quantity is required")
});
var commentSchema = import_zod2.z.object({
  user: import_zod2.z.string().trim().min(1, "User name is required"),
  comment: import_zod2.z.string().trim().min(1, "Comment is required")
});
var moreSchema = import_zod2.z.object({
  prep_time: import_zod2.z.string().trim().min(1, "Preparation time is required"),
  cook_time: import_zod2.z.string().trim().min(1, "Cooking time is required"),
  servings: import_zod2.z.string().trim().min(1, "Services info is required"),
  difficulty: import_zod2.z.enum(["easy", "medium", "hard"], {
    required_error: "Difficulty is required"
  }),
  source: import_zod2.z.string().trim().min(1, "Source is required")
});
var createItemSchema = import_zod2.z.object({
  menuId: import_zod2.z.number().int().positive("Menu ID must be a positive integer"),
  name: import_zod2.z.string().trim().min(1, "Name is required").toLowerCase(),
  thumbnail_image: import_zod2.z.string().url("Thumbnail must be a valid URL"),
  category: import_zod2.z.string().min(1, "Category is required"),
  description: import_zod2.z.string().min(30, "Description must be at least 30 characters").max(300, "Description must be at most 300 characters").optional(),
  instructions: import_zod2.z.array(instructionSchema).min(1, "At least one instruction is required"),
  tags: import_zod2.z.array(import_zod2.z.string()).optional(),
  ingredients: import_zod2.z.array(ingredientSchema, { required_error: "ingredient field is required" }).min(1, "At least one ingredient is required"),
  comments: import_zod2.z.array(commentSchema).optional(),
  more: moreSchema
});

// src/routes/Item.routes.ts
var import_express = require("express");
var router = (0, import_express.Router)();
router.get("/", getAllItems);
router.get("/search", getSearchItems);
router.get("/category/:category", getItemsByCategory);
router.get("/:id", getItemById);
router.post("/", validateRequest({ body: createItemSchema }), createItem);
router.put("/:id", updateItem);
router.delete("/:id", deleteItem);
var Item_routes_default = router;

// src/routes/category.routes.ts
var import_express2 = require("express");

// src/controllers/category.controller.ts
var getAllCategories = async (req, res) => {
  try {
    const categories = await Category.find().lean();
    res.status(200).json({
      success: true,
      message: "Categories fetched successfully.",
      data: categories
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: err instanceof Error ? err.message : "Unknown error"
    });
  }
};
var getCategoryById = async (req, res) => {
  const { id } = req.params;
  try {
    const category = await Category.findById(id).lean();
    if (!category) {
      res.status(404).json({
        success: false,
        message: "Category with this ID was not found!"
      });
      return;
    }
    res.status(200).json({
      success: true,
      message: "Category fetched successfully.",
      data: category
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: err instanceof Error ? err.message : "Unknown error"
    });
  }
};
var createCategory = async (req, res) => {
  const { name, menuId } = req.body;
  try {
    const doesCategoryExist = await Category.findOne({ name }).lean();
    if (doesCategoryExist) {
      res.status(400).json({
        success: false,
        message: "Category with this name already exists."
      });
      return;
    }
    const createdCategory = await Category.create({ name, menuId });
    res.status(201).json({
      success: true,
      message: "Category created successfully!",
      data: createdCategory
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: err instanceof Error ? err.message : "Unknown error"
    });
  }
};
var updateCategory = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedCategory = await Category.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedCategory) {
      res.status(404).json({
        success: false,
        message: "Category with this ID was not found!"
      });
      return;
    }
    res.status(200).json({
      success: true,
      message: "Category updated successfully",
      data: updatedCategory
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: err instanceof Error ? err.message : "Unknown error"
    });
  }
};
var deleteCategory = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedCategory = await Category.findByIdAndDelete(id).lean();
    if (!deletedCategory) {
      res.status(404).json({
        success: false,
        message: "Category with this ID was not found!"
      });
      return;
    }
    res.status(200).json({
      success: true,
      message: "Category deleted successfully",
      data: deletedCategory
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: err instanceof Error ? err.message : "Unknown error"
    });
  }
};

// src/schemas/category.schema.ts
var import_zod3 = require("zod");
var createCategorySchema = import_zod3.z.object({
  name: import_zod3.z.string().trim().toLowerCase().min(1, "Category name is required"),
  menuId: import_zod3.z.number().int().positive("menuId must be a positive integer")
});
var updateCategorySchema = createCategorySchema.partial();

// src/routes/category.routes.ts
var router2 = (0, import_express2.Router)();
router2.get("/", getAllCategories);
router2.get("/:id", getCategoryById);
router2.post("/", validateRequest({ body: createCategorySchema }), createCategory);
router2.patch("/:id", validateRequest({ body: updateCategorySchema }), updateCategory);
router2.delete("/:id", deleteCategory);
var category_routes_default = router2;

// src/routes/newsletter.routes.ts
var import_express3 = require("express");

// src/models/newsletter.model.ts
var import_mongoose4 = require("mongoose");
var newsletterSchema = new import_mongoose4.Schema({
  name: {
    type: String,
    trim: true,
    minlength: 2,
    maxlength: 50
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true
  },
  subscribedAt: {
    type: Date,
    default: Date.now
  }
}, { timestamps: true });
var NewsletterSubscription = (0, import_mongoose4.model)("NewsletterSubscription", newsletterSchema);

// src/controllers/newsletter.controller.ts
var subscribeToNewsletter = async (req, res) => {
  const { name, email } = req.body;
  try {
    const existingSubscription = await NewsletterSubscription.findOne({ email });
    if (existingSubscription) {
      res.status(400).json({
        success: false,
        message: "You are already subscribed to the newsletter."
      });
      return;
    }
    const subscription = await NewsletterSubscription.create({ name, email });
    res.status(201).json({
      success: true,
      message: "Successfully subscribed to the newsletter.",
      data: subscription
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: err instanceof Error ? err.message : "Unknown error"
    });
  }
};

// src/schemas/newsletter.schema.ts
var import_zod4 = require("zod");
var newsletterSubscriptionSchema = import_zod4.z.object({
  name: import_zod4.z.string().trim().min(2, "Name is too short").max(50, "Name is too long").optional(),
  email: import_zod4.z.string({ required_error: "Email is required" }).email("Invalid email format").trim().toLowerCase()
}).strict();

// src/routes/newsletter.routes.ts
var router3 = (0, import_express3.Router)();
router3.post("/subscribe", validateRequest({ body: newsletterSubscriptionSchema }), subscribeToNewsletter);
var newsletter_routes_default = router3;

// src/routes/recipe.routes.ts
var import_express4 = require("express");

// src/controllers/recipe.controller.ts
var import_axios = __toESM(require("axios"), 1);
var fetchRecipeBlogs = async (req, res) => {
  const { number = 6 } = req.query;
  try {
    const { data } = await import_axios.default.get(`https://api.spoonacular.com/recipes/random`, {
      params: {
        number,
        apiKey: envVars_default.SPOONACULAR_API_KEY
      }
    });
    const filteredBlogs = data.recipes.map((recipe) => ({
      id: recipe.id,
      title: recipe.title,
      image: recipe.image,
      summary: recipe.summary,
      readyInMinutes: recipe.readyInMinutes,
      servings: recipe.servings,
      sourceUrl: recipe.sourceUrl
    }));
    res.status(200).json({
      success: true,
      message: "Fetched recipe blogs successfully",
      data: filteredBlogs
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: err instanceof Error ? err.message : "Failed to fetch blogs"
    });
  }
};

// src/routes/recipe.routes.ts
var router4 = (0, import_express4.Router)();
router4.get("/blogs", fetchRecipeBlogs);
var recipe_routes_default = router4;

// src/models/contact.model.ts
var import_mongoose5 = require("mongoose");
var ContactMessageSchema = new import_mongoose5.Schema({
  firstName: {
    type: String,
    required: true,
    trim: true
  },
  lastName: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true
  },
  message: {
    type: String,
    required: true,
    trim: true
  }
});
var ContactMessage = (0, import_mongoose5.model)("ContactMessage", ContactMessageSchema);

// src/controllers/contact.controller.ts
var getPaginatedContactMessages = async (req, res) => {
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 10;
  const skip = (page - 1) * limit;
  try {
    const contactMessages = await ContactMessage.find({}).sort({ createdAt: -1 }).skip(skip).limit(limit).lean();
    const total = await ContactMessage.countDocuments();
    res.status(200).json({
      success: true,
      message: "Contact messages retrieved successfully",
      data: contactMessages,
      pagination: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit)
      }
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: err instanceof Error ? err.message : "Failed to retrieve contact messages"
    });
  }
};
var getContactMessageById = async (req, res) => {
  const { id } = req.params;
  try {
    const contact = await ContactMessage.findById(id);
    if (!contact) {
      res.status(404).json({
        success: false,
        message: "Contact message not found"
      });
      return;
    }
    res.status(200).json({
      success: true,
      message: "Contact message retrieved successfully",
      data: contact
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: err instanceof Error ? err.message : "Failed to retrieve contact messages"
    });
  }
};
var createContactMessage = async (req, res) => {
  try {
    const contact = await ContactMessage.create(req.body);
    res.status(201).json({
      success: true,
      message: "Message received successfully",
      data: contact
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: err instanceof Error ? err.message : "Failed to create contact message"
    });
  }
};
var deleteContactMessage = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedContactMessage = await ContactMessage.findByIdAndDelete(id);
    if (!deletedContactMessage) {
      res.status(404).json({
        success: false,
        message: "Contact message not found"
      });
      return;
    }
    res.status(200).json({
      success: true,
      message: "Contact message deleted successfully",
      data: deletedContactMessage
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: err instanceof Error ? err.message : "Failed to delete contact message"
    });
  }
};

// src/schemas/contact.schema.ts
var import_zod5 = require("zod");
var contactMessageSchema = import_zod5.z.object({
  firstName: import_zod5.z.string({
    required_error: "First name is required",
    invalid_type_error: "First name must be a string"
  }).trim().min(3, "First name must be at least 3 characters").max(25, "First name must be less than 25 characters").toLowerCase(),
  lastName: import_zod5.z.string({
    required_error: "Last name is required",
    invalid_type_error: "Last name must be a string"
  }).trim().min(3, "Last name must be at least 3 characters").max(25, "Last name must be less than 25 characters").toLowerCase(),
  email: import_zod5.z.string({
    required_error: "Email is required",
    invalid_type_error: "Email must be a string"
  }).trim().email("Invalid email format").toLowerCase(),
  message: import_zod5.z.string({
    required_error: "Message is required",
    invalid_type_error: "Message must be a string"
  }).trim().min(10, "Message must be at least 10 characters").max(500, "Message must be less than 500 characters")
});

// src/routes/contact.routes.ts
var import_express5 = require("express");
var router5 = (0, import_express5.Router)();
router5.get("/", getPaginatedContactMessages);
router5.get("/:id", getContactMessageById);
router5.post("/", validateRequest({ body: contactMessageSchema }), createContactMessage);
router5.delete("/:id", deleteContactMessage);
var contact_routes_default = router5;

// src/server.ts
var app = (0, import_express6.default)();
app.use(import_express6.default.json());
app.use(import_express6.default.urlencoded({ extended: true }));
app.use((0, import_cors.default)({
  origin: [envVars_default.FRONTEND_URL, "http://192.168.8.100:5173"],
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true
}));
connectToDB();
app.use("/api/v1/items", Item_routes_default);
app.use("/api/v1/categories", category_routes_default);
app.use("/api/v1/newsletter", newsletter_routes_default);
app.use("/api/v1/recipe", recipe_routes_default);
app.use("/api/v1/contact", contact_routes_default);
var server_default = app;
//# sourceMappingURL=server.cjs.map