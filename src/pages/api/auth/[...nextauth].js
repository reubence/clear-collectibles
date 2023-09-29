import NextAuth from 'next-auth'
import axios from 'axios'
import qs from 'qs';

async function refreshAccessToken(token) {
  try {

      const response = await fetch('https://api.matrica.io/oauth2/token', {
        method: 'POST',
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: new URLSearchParams({
          client_id: process.env.MATRICA_ID,
          grant_type: "refresh_token",
          refresh_token: token.refreshToken,
          /* client_secret: process.env.MATRICA_SECRET */
        })
      })

      console.log(response)
  
      const refreshedTokens = await response.json()
  

    if (!response.ok) {
      throw refreshedTokens
    }

    return {
      ...token,
      accessToken: refreshedTokens.access_token,
      expires: Date.now() + refreshedTokens.expires_in * 1000,
      refreshToken: refreshedTokens.refresh_token ?? token.refreshToken// Fall back to old refresh token
    }
  } catch (error) {

    console.log(error)
    return {
      ...token,
      error: "RefreshAccessTokenError",
    }
  }
}




export default NextAuth({

 
  providers: [
    {
      id: 'matrica',
      name: 'Matrica',
      type: "oauth",
      authorization: {
        url: "https://matrica.io/oauth2",
      params: { scope: "profile wallets nfts socials.discord socials.twitter" },
      },
      token: {
        url: "https://api.matrica.io/oauth2/token",
      
        async request(context) {
          const url = 'https://api.matrica.io/oauth2/token';
          const params = new URLSearchParams()
          params.append('grant_type', 'authorization_code')
          params.append('code', context.params.code)
          params.append('client_id', process.env.MATRICA_ID)
          params.append('redirect_uri', `${process.env.NEXTAUTH_URL}/api/auth/callback/matrica`)
          /* params.append('client_secret', process.env.MATRICA_SECRET) */
          params.append('code_verifier', context.checks.code_verifier)
        
          const config = {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            }
          }

          try{

         
          const response = await axios.post(url, params, config)
          const tokens = response.data
          return {tokens} 
        }catch(err){
          console.log(err)
          console.log('Error Matrica')
          return {
            error: "RefreshAccessTokenError",
          }
        }
        } 
      },
      userinfo: 
      {
        url: 'https://api.matrica.io/oauth2/user/profile',
      async request(context) {
 
        const url = 'https://api.matrica.io/oauth2/user/profile';
        const config = {
          headers: {
            Authorization: `Bearer ${context.tokens.access_token}`
          }
        }

        const response = await axios.get(url, config)

        const profile = response.data

        if(!profile.wallets){
          const response = await axios.get("https://api.matrica.io/oauth2/user/wallets", config)
          const wallets = response.data
          profile.wallets = wallets
        }

        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API}/api/v1/login`,
          {
            method: "POST",
      
            body: JSON.stringify({ accessToken: context.tokens.access_token }),
      
            headers: {
              "Access-Control-Allow-Origin": "*",
              "Content-Type": "application/json",
            },
          }
        );

        
        const resultText = await res.text();


          if(resultText.length){
            const result = JSON.parse(resultText);
            profile.interlace = result.token
          
          }else{
            profile.interlace = null
          }

        return profile
      
      },
      
       
    },
      profile(profile) {
        return profile
      },
      checks : ['pkce', 'state',],
      clientId: process.env.MATRICA_ID,
      /* clientSecret: process.env.MATRICA_SECRET */
    },
  ],
  secret: process.env.JWT_SECRET,
  pages: {
    signIn: '/login',
  
  },


  callbacks: {
    async jwt({ token, account, profile }) {
      if (account) {
        token.accessToken = account.access_token
        token.username = profile?.username
        token.id = profile?.profile?.id
        token.image = profile?.profile?.pfp
        token.wallets = profile?.wallets
        token.expires = account.expires_at * 1000
        token.refreshToken = account.refresh_token
        token.interlaceToken = profile?.interlace
      }
      
      
      if (Date.now() < token.expires) {
        return token
      }else{
        return refreshAccessToken(token)
      }

     

     /* return {
      ...token,
      error: "RefreshAccessTokenError",
    } */
    },
    async session({ session, token }) {
      session.accessToken = token.accessToken
      session.user.name = token.username
      session.user.image = token.image
      session.wallets = token.wallets
      session.expires = token.expires
      session.error = token?.error
      session.user.id = token.id
      session.token = token.interlaceToken
      session.refreshToken = token?.refreshToken
      return session
    }
  },
  

  

})

