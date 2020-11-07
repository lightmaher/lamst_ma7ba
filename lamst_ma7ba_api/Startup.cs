using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using lamst_ma7ba_Api.Models;
using lamst_ma7ba_Api.Repository.ContactUsRepository;
using lamst_ma7ba_Api.Repository.PlaceRepository;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Http.Features;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.FileProviders;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.IdentityModel.Tokens;
using Newtonsoft.Json;

namespace lamst_ma7ba_Api
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.Configure<FormOptions>(o => {
                o.ValueLengthLimit = int.MaxValue;
                o.MultipartBodyLengthLimit = int.MaxValue;
                o.MemoryBufferThreshold = int.MaxValue;
            });

            services.AddControllers();
            services.AddDbContext<Context>(options => options.UseSqlServer(Configuration.GetConnectionString("conn")));
            services.AddScoped<IRepEvent, RepEvent>();
            services.AddScoped<IPlaceRepo , PlaceRepo>();
            services.AddScoped<IContectUsRepoistory, ContactUsRepoistory>();
            services.AddCors();

            // for identity ->
            IdentityBuilder builder = services.AddIdentityCore<Admin>();
            builder = new IdentityBuilder(builder.UserType, builder.Services);
            builder.AddUserManager<UserManager<Admin>>();
            builder.AddSignInManager<SignInManager<Admin>>();
            builder.AddEntityFrameworkStores<Context>();

            services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
               .AddJwtBearer(options =>
               {
                   options.TokenValidationParameters = new TokenValidationParameters
                   {
                       ValidateIssuerSigningKey = true,
                       IssuerSigningKey = new SymmetricSecurityKey(Encoding.ASCII
                           .GetBytes(Configuration.GetSection("AppSettings:Token").Value)),
                       ValidateIssuer = false,
                       ValidateAudience = false
                   };
               });
            services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme);
            services.AddControllersWithViews()
               .AddNewtonsoftJson(options =>
           options.SerializerSettings.ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore
             );


        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseHttpsRedirection();

            app.UseRouting();
            app.UseCors(x => x.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader());
            // lazm nar3y el tartib
            app.UseAuthentication();
            app.UseAuthorization();

            app.UseStaticFiles();

            app.UseStaticFiles(new StaticFileOptions()
            {
                FileProvider = new PhysicalFileProvider(Path.Combine(Directory.GetCurrentDirectory(), @"wwwroot")),
                RequestPath = new PathString("/wwwroot")
            });

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
