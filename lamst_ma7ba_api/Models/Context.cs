using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace lamst_ma7ba_Api.Models
{
    public class Context : IdentityDbContext<Admin>
    {
        public Context(DbContextOptions<Context> option) :
            base(option)
        {
        }
        public DbSet<Event> Events { get; set; }
        public DbSet<Place> places{ get; set; }
        public DbSet<ContactUs> messages { get; set; }
        public DbSet<Need> Needs { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<Join> Joins { get; set; }
        public DbSet<PlaceGallery> placeGalleries { get; set; }
    }
    }
