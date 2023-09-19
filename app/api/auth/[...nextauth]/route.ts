import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        id: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const userId = credentials?.id;
        const userPassword = credentials?.password;
      
        if (!userId || !userPassword) {
          return null;
        }
      
        const res = await fetch(`http://localhost:8000/User?id=${userId}&password=${userPassword}`);
      
        if (res.status !== 200) {
          return null;
        }
      
      const users = await res.json();
        const user = users[0];
    
        console.log("Server response status:", res.status);
        console.log("User data:", user);
    
        if (user && user.id === credentials.id && user.password === credentials.password) {
            return { id: user.id, name: user.name };
        } else {
            return null;
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async jwt({ token, user, trigger, session }) {
      if (trigger === "update") {
        return { ...token, ...session.user };
      }
      return { ...token, ...user };
    },
    async session({ session, token }) {
      session.user = token as any;
      return session;
    },
  },
  secret: process.env.NEXT_AUTH_SECRET,
});

export { handler as GET, handler as POST };
