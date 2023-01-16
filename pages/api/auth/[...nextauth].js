// import NextAuth from "next-auth";
// import CredentialsProvider from "next-auth/providers/credentials";
// import jwt_decode from "jwt-decode";

// export const authOptions = {
//   providers: [
//     CredentialsProvider({
//       name: "Credentials",
//       credentials: {
//         username: { label: "Username", type: "text", placeholder: "jsmith" },
//         password: { label: "Password", type: "password" },
//       },
//       async authorize(credentials, req) {
//         const { username, password } = credentials;

//         console.log(credentials, "CREDENTIALS");

// const res = await fetch(
//   "https://api-authentication.kalbe.co.id/api/Login",
//   {
//     method: "POST",
//     keepalive: true,
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       username,
//       password,
//       getProfile: true,
//     }),
//   }
// );
// const user = await res.json();

// const token = user.accessToken;
// const decoded = jwt_decode(token);

// console.log(decoded);

// // console.log(decoded.NIK, "NIK");

// const userData = {
//   nik: decoded.NIK,
// };

// console.log(userData);

// return userData;
//         // if (res.ok && user) {
//         // const token = user.accessToken;
//         // const decoded = jwt_decode(token);
//         //   // console.log(decoded);

//         //   const userData = {
//         //     nik: decoded.NIK,
//         //   };

//         //   console.log(userData, "USER DATA");
//         //   return "asldkasldk";
//         // } else return null;
//       },
//     }),
//   ],
//   session: {
//     strategy: "jwt",
//   },

//   pages: {
//     signIn: "/login",
//   },
// };

// export default NextAuth(authOptions);

import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import jwt_decode from "jwt-decode";

const options = {
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        const loginData = {
          username: credentials.username,
          password: credentials.password,
          getProfile: true,
        };

        try {
          const res = await fetch(
            "https://api-authentication.kalbe.co.id/api/Login",
            {
              method: "POST",
              keepalive: true,
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(loginData),
            }
          );

          const user = await res.json();

          const token = user.accessToken;
          const decoded = jwt_decode(token);

          const userData = {
            ...decoded,
          };

          return userData;
        } catch (error) {
          throw new Error("There was an error on user authentication");
        }
      },
    }),
  ],
  // secret: "760195f445131d2fdb6af993548b76c6",
  session: {
    jwt: true,
    maxAge: 1 * 24 * 60 * 60, // Expiration: 1 month
  },
  callbacks: {
    async redirect({ url, baseUrl }) {
      return "/home";
    },
    async session({ session, token }) {
      session.user = token.user;
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.user = user;
      }
      return token;
    },
  },
  pages: {
    signIn: "/login",
    signOut: "/",
  },
};

export default (req, res) => NextAuth(req, res, options);
