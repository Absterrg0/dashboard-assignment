
import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

export const {handlers,auth,signIn,signOut} = NextAuth({
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID || "182739669714-df4sf521et27q7bi5d6dunf45i2g2v13.apps.googleusercontent.com",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "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",
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

