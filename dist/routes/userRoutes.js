"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authController_1 = require("../controllers/authController");
const userController = __importStar(require("../controllers/userController"));
const rateLimit_1 = require("../middlewares/rateLimit");
const router = (0, express_1.Router)();
router.use(authController_1.protect);
router.get("/:id", userController.getProfile);
router.post("/update", rateLimit_1.limiter, userController.updateProfile);
router.get("/:id/posts", userController.getProfilePosts);
router.get("/:id/comments", userController.getProfileComments);
router.get("/:id/likes", userController.getProfileLikes);
router.get("/:id/reposts", userController.getProfileReposts);
router.get("/:id/followers", userController.getFollowers);
router.get("/:id/following", userController.getFollowing);
router.post("/:id/follow", userController.followUser);
router.delete("/:id/unfollow", userController.unfollowUser);
exports.default = router;
