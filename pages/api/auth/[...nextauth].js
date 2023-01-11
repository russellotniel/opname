import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const { username, password } = credentials;
        const res = await fetch("https://dummyjson.com/auth/login", {
          method: "POST",
          keepalive: true,
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username,
            password,
            expiresInMins: 60,
          }),
        })

        const user = res.json();
        if (res.ok && user) return user;
        else return null;
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },

  pages: {
    signIn: "/login",
  },
  
};

export default NextAuth(authOptions);
