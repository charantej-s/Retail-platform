const express = require("express");

const app = express();

const PORT = process.env.PORT || 8081;
const VERSION = process.env.APP_VERSION || "4.2.0";
const ENVIRONMENT = process.env.ENVIRONMENT || "UAT";
const FAIL_HEALTH = process.env.FAIL_HEALTH || "true";

app.get("/", (req, res) => {
    res.json({
        message: "Retail Platform API",
        VERSION: VERSION,
        environment: ENVIRONMENT,
        payment: "payment procesing is working"
    });
});

app.get("products", (req, res) => {
    res.json({
        products: ["Laptop", "Mobile", "Tablet", "Smart Watch"],
        VERSION: VERSION
    });
});

app.get("/orders", (req, res) => {
    res.json({
        orders: ["Order 1", "Order 2", "Order 3"],
        VERSION: VERSION
    });
});

app.get("/health", (req, res) => {
    if (FAIL_HEALTH) {
        res.status(500).json({
            status: "UNHEALTHY",
            VERSION: VERSION        
        });
    }

    res.status(200).json({
        status: "HEALTHY",
        VERSION: VERSION
    });
});

app.listen(PORT, () => {
    console.log(`Retail Platform ${VERSION} running on port ${PORT}`);
});