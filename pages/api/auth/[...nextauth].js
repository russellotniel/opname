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
        // const res = await fetch("https://dummyjson.com/auth/login", {
        //   method: "POST",
        //   keepalive: true,
        //   headers: {
        //     "Content-Type": "application/json",
        //   },
        //   body: JSON.stringify({
        //     username,
        //     password,
        //     expiresInMins: 60,
        //   }),
        // })
        const res = await fetch(
          "https://api-authentication.kalbe.co.id/api/Login",
          {
            method: "POST",
            keepalive: true,
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              username,
              password,
              getProfile: true,
            }),
          }
        );
        const user = res.json();
        if (res.ok && user) {
          const token = user.accessToken;
          const decoded = jwt_decode(token);
          console.log(decoded);
          return decoded;
        } else return null;
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
