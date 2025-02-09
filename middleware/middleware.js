const jwt = require('jsonwebtoken');
require('dotenv').config();

// Admin Token Verification Middleware
const verifyToken = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) return res.redirect("/admin/login");
  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    req.admin = decoded;
    next();
  } catch (err) {
    res.clearCookie("token");
    return res.redirect("/admin/login");
  }
};

// Student Token Verification Middleware
const verifyStudentToken = (req, res, next) => {
  const token = req.cookies.studentToken;
  if (!token) {
    return res.redirect("/student/login");
  }
  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    if (
      !decoded.id ||
      !decoded.email ||
      !decoded.role ||
      decoded.role !== "student"
    ) {
      console.error("Invalid or malformed token:", decoded);
      return res.redirect("/student/login");
    }
    req.student = {
      id: decoded.id,
      email: decoded.email,
      role: decoded.role,
    };
    next();
  } catch (err) {
    console.error("Error verifying token:", err.message);
    res.clearCookie("studentToken");
    return res.redirect("/student/login");
  }
};

module.exports = { verifyToken, verifyStudentToken };