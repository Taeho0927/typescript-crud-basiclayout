import express from "express";

const router:express.Router= express.Router();
// make route
router.get('/',(req, res, next)=>{
    res.send("test success");
});

export default router;