
import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

export const {handlers,auth,signIn,signOut} = NextAuth({
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID ,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ,
      profile(profile) {
        return {
          id: profile.sub,
          name: profile.name,
          email: profile.email, 
          image: profile.picture,
        };
      },
    }),
  ],
  pages: {
    signIn: '/signin', // Custom sign-in page
    error: '/error', // Error page
  },
});

