using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using lamst_ma7ba_Api.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;

namespace lamst_ma7ba_Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountController : ControllerBase
    {
        private readonly Context _context;
        private readonly SignInManager<Admin> _signInManager;
        private readonly UserManager<Admin> _userManager;
        private readonly IConfiguration _config;

        public AccountController( Context context , SignInManager<Admin> signInManager , UserManager<Admin> userManager , IConfiguration config )
        {
            _context = context;
            _signInManager = signInManager;
            _userManager = userManager;
            _config = config;
        }
        [HttpPost]
        public async Task<ActionResult> Login ( Admin admin)
        {
            await createAdmin();
            var user = await _userManager.FindByNameAsync(admin.UserName);
            var result = await _signInManager.CheckPasswordSignInAsync(user, admin.Password,false);
            if (result.Succeeded)
            {
                return Ok(new
                {
                    token = GenerateJwtToken(admin).Result,
                    admin
                });
             
            }
            else
            {
                return BadRequest(result);
            }
        }
       
        public async Task createAdmin()
        {
            var admincheck = await _userManager.FindByNameAsync( "admin1");
            if (admincheck == null)
            {
                Admin admin1 = new Admin
                {
                    UserName = "admin1",
                };
                var resuilt = await _userManager.CreateAsync(admin1, "Admin@12");
                
            }
        }
        private async Task<string> GenerateJwtToken(Admin admin)
        {
            var claims = new List<Claim>
            {
                new Claim(ClaimTypes.NameIdentifier, admin.Id.ToString()),
                new Claim(ClaimTypes.Name, admin.UserName)
            };
            /*
            var roles = await _userManager.GetRolesAsync(user);

            foreach (var role in roles)
            {
                claims.Add(new Claim(ClaimTypes.Role, role));
            }
            */
            var key = new SymmetricSecurityKey(Encoding.UTF8
                .GetBytes(_config.GetSection("AppSettings:Token").Value));

            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha512Signature);

            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(claims),
                Expires = DateTime.Now.AddDays(1),
                SigningCredentials = creds
            };

            var tokenHandler = new JwtSecurityTokenHandler();

            var token =  tokenHandler.CreateToken(tokenDescriptor);

            return tokenHandler.WriteToken(token);
        }

    }
}
