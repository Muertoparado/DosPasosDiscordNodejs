import passport from "passport";
import { Strategy as Discord } from "passport-discord";


const authUser = (accessToken, refreshToken, profile, done) => {
    done(null,profile);
}

passport.use(
    new Discord(
        {
            clientID:"1133490602135277618",
            clientSecret:"EcFbXHpzdEtpXB4FqI8F1GpB6JE4j_ZV",
            callbackURL:"https://127.3.3.1:5100/login/discord/callback",
        },
        authUser
    )
);

passport.serializeUser((user, done) => {
    console.log("serializeUser");
    done(null, user);
});

passport.deserializeUser((user, done) => {
    console.log("deserializeUser");
    done(null, user);
});

export default passport;