using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Microsoft.IdentityModel.Tokens;
using Models;

namespace API.Services
{
    public class TokenService
    {
        public string CreateToken(AppUser user) 
        {
            // 1. creating claims for storing identity
            var claims = new List<Claim>
            {
                new Claim(ClaimTypes.Name, user.UserName),
                new Claim(ClaimTypes.NameIdentifier, user.Id),
                new Claim(ClaimTypes.Email, user.Email)
            };
            // 2. creating key
            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("This must be a secret key"));

            // 3. Signing the key using algorithm
            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256Signature); 

            // 4. Creating token
            var tokenDescriptor = new SecurityTokenDescriptor 
            {
                Subject = new ClaimsIdentity(claims),
                Expires = DateTime.Now.AddDays(10),
                SigningCredentials = creds
            };

            var tokenHandler = new JwtSecurityTokenHandler();

            var token = tokenHandler.CreateToken(tokenDescriptor);

            return tokenHandler.WriteToken(token);
        }
    }
}