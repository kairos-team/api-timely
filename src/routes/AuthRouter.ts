import { Router } from 'express';

const router = Router();


router.post('/login', (req, res) => {
    //Altere para implementação da controler
    res.json({ message: "Bateu no login" })
});

export default router;
