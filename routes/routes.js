import {Router} from 'express';
import val from '../validation/validation.js';

const router = Router();

router.get('/', (req,res)=>{
    req.logout ({}, err => console.log(err));
    res.redirect('/login');
});

router.get('/discord', val.authenticate('discord',{ scope: ['email']}));
router.get('/discord/callback', val.authenticate('discord',{ failRedirect: '/login', successRedirect: '/dashboard'}));

export default router;